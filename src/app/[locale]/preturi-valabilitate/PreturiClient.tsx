"use client";

import { Room } from "@/libs/db";
import { useGetAvailability } from "@/libs/hooks/useGetAvail";
import { useRooms } from "@/libs/hooks/useGetRooms";
import { useState } from "react";
import { Calendar } from "./Calendar";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { FaSearch, FaBed, FaUsers, FaCheckCircle, FaExclamationTriangle, FaArrowLeft, FaArrowRight, FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Link } from "@/components/ui/Link";

interface RoomTypeResultProps {
  type: string;
  rooms: Room[];
  availabilityResults: Record<string, any>;
  t: any;
  reversed?: boolean;
}

function RoomTypeResult({ type, rooms, availabilityResults, t, reversed }: RoomTypeResultProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedRoom = rooms[selectedIdx];
  const roomAvail = selectedRoom ? availabilityResults[selectedRoom.id] : undefined;
  const availableCount = roomAvail?.numar_camere ?? 0;
  const roomImages = selectedRoom?.images || [];
  const [photoIdx, setPhotoIdx] = useState(0);
  const currentPhoto = roomImages[photoIdx]?.src || "/images/ui/header.jpg";
  const hasImages = roomImages.length > 0;
  const totalAvailable = rooms.reduce((sum, r) => sum + Number(availabilityResults[r.id]?.numar_camere ?? 0), 0);
  const totalPrice = roomAvail?.pret_camera ?? "—";

  const goNextRoom = () => setSelectedIdx((prev) => (prev + 1) % rooms.length);
  const goPrevRoom = () => setSelectedIdx((prev) => (prev - 1 + rooms.length) % rooms.length);
  const goNextPhoto = () => setPhotoIdx((prev) => (prev + 1) % roomImages.length);
  const goPrevPhoto = () => setPhotoIdx((prev) => (prev - 1 + roomImages.length) % roomImages.length);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/50"
    >
      <div className="grid lg:grid-cols-2">
        <div className={`relative aspect-video lg:aspect-auto ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          {hasImages ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedRoom.id}-${photoIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <Image src={currentPhoto} alt={`Camera ${selectedRoom.number}`} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <span className="text-primary/40 text-sm">No photos</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          
          <div className={`absolute top-15 ${reversed ? 'right-15' : 'left-15'} bg-primary/90 text-white px-14 py-6 rounded-full text-sm font-semibold z-10`}>
            {selectedRoom.number}
          </div>
          
          {rooms.length > 1 && (
            <>
              <button onClick={goPrevRoom} className="absolute left-12 top-1/2 -translate-y-1/2 w-30 h-30 rounded-full bg-white/95 flex items-center justify-center shadow-xl cursor-pointer hover:bg-white transition-all z-10">
                <FaArrowLeft className="w-12 h-12 text-primary" />
              </button>
              <button onClick={goNextRoom} className="absolute right-12 top-1/2 -translate-y-1/2 w-30 h-30 rounded-full bg-white/95 flex items-center justify-center shadow-xl cursor-pointer hover:bg-white transition-all z-10">
                <FaArrowRight className="w-12 h-12 text-primary" />
              </button>
            </>
          )}
          
          {roomImages.length > 1 && (
            <div className="absolute bottom-15 left-1/2 -translate-x-1/2 flex gap-6 z-10">
              <button onClick={goPrevPhoto} className="w-22 h-22 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <FaArrowLeft className="w-10 h-10 text-primary" />
              </button>
              <div className="flex gap-3 bg-white/90 px-10 py-6 rounded-full shadow-md">
                {roomImages.map((_, idx) => (
                  <button key={idx} onClick={() => setPhotoIdx(idx)} className={`w-6 h-6 rounded-full ${idx === photoIdx ? "bg-primary" : "bg-primary/30"}`} />
                ))}
              </div>
              <button onClick={goNextPhoto} className="w-22 h-22 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <FaArrowRight className="w-10 h-10 text-primary" />
              </button>
            </div>
          )}
        </div>

        <div className={`p-25 flex flex-col justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold mb-15 text-primary">
            {t(`${type}.title`)}
          </h3>
          
          <div className="flex flex-wrap gap-15 mb-20">
            <div className="flex items-center gap-8 text-sm">
              <div className={`w-22 h-22 rounded-xl flex items-center justify-center ${totalAvailable > 0 ? "bg-primary/10 ring-1 ring-primary/20" : "bg-red-100 ring-1 ring-red-200"}`}>
                {totalAvailable > 0 ? <FaCheckCircle className="w-10 h-10 text-primary" /> : <FaBed className="w-10 h-10 text-red-500" />}
              </div>
              <span className="text-text font-medium">
                {totalAvailable} {t("room", { count: totalAvailable })}
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm">
              <div className="w-22 h-22 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                <FaUsers className="w-10 h-10 text-primary" />
              </div>
              <span className="text-text font-medium">Up to {selectedRoom.max} {t("person", { count: selectedRoom.max })}</span>
            </div>
          </div>

          <div className="bg-primary/10 rounded-2xl p-15 text-center border border-primary/20">
            <span className="text-xs font-medium text-primary/60 block mb-3">{t("price")}</span>
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
              {totalPrice} RON
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PreturiClient() {
  const { data: rooms } = useRooms();
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [shouldFetchAvailability, setShouldFetchAvailability] = useState(false);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);

  const t = useTranslations("Rooms");

  const formatCustomDate = (date?: Date) => {
    if (!date) return "";
    return format(date, "dd MMM yyyy").replace(/\b[a-z]/, (c) => c.toUpperCase());
  };

  const { data: availabilityResults, isFetching, refetch, isError, error: fetchError } = useGetAvailability(
    formatCustomDate(dateRange?.from),
    formatCustomDate(dateRange?.to),
    shouldFetchAvailability && !!dateRange?.from && !!dateRange?.to
  );

  function getGroupedRoomsByType(rooms: Room[] | undefined) {
    if (!rooms || !availabilityResults) return [];
    const grouped = rooms.reduce<Record<string, Room[]>>((acc, room) => {
      // Include room in its type even if it has 0 availability (numar_camere can be 0)
      if (!acc[room.typeId]) acc[room.typeId] = [];
      acc[room.typeId].push(room);
      return acc;
    }, {});
    return Object.entries(grouped)
      .filter(([, rooms]) => rooms.length > 0)
      .map(([type, rooms]) => ({ type, rooms }))
      .sort((a, b) => a.rooms[0].id.localeCompare(b.rooms[0].id));
  }

  const groupedRooms = getGroupedRoomsByType(rooms);

  const dateError = !dateRange?.from || !dateRange?.to || dateRange.to.getTime() <= dateRange.from.getTime()
    ? t("selectValidRange")
    : null;

  const handleDateSelect = (range: DateRange | undefined) => {
    setDateRange(range);
    setShouldFetchAvailability(false);
    setHasAttemptedFetch(false);
  };

  const handleVerifica = () => {
    if (dateRange?.from && dateRange?.to && dateRange.to.getTime() > dateRange.from.getTime()) {
      setShouldFetchAvailability(true);
      setHasAttemptedFetch(true);
      refetch();
      setSubmitError(null);
    } else {
      setSubmitError(t("selectValidRangeBeforeCheck"));
      setHasAttemptedFetch(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-25 px-20 max-w-1200 w-full">
      <Calendar mode="range" required onSelect={handleDateSelect} selected={dateRange} />

      <button
        className="w-full max-w-800 bg-primary text-white rounded-full px-25 py-12 shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium flex items-center justify-center gap-8 disabled:opacity-50"
        onClick={handleVerifica}
        disabled={isFetching || !dateRange?.from || !dateRange?.to || dateRange.to.getTime() <= dateRange.from.getTime()}
      >
        <FaSearch className="w-14 h-14" />
        {isFetching ? t("checking") : t("checkAvailability")}
      </button>

      {(dateError || submitError || (isError && hasAttemptedFetch)) && (
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-20 shadow-xl border border-white/50 max-w-500 w-full text-center">
          <div className="w-40 h-40 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-15">
            <FaExclamationTriangle className="w-20 h-20 text-primary" />
          </div>
          <span className="text-sm text-text">{dateError || submitError || fetchError?.message || t("unknownError")}</span>
        </div>
      )}

      {hasAttemptedFetch && !(dateError || submitError) && !isError && (
        <div className="w-full grid gap-25">
          {groupedRooms.map((roomTypeGroup, idx) => (
            <RoomTypeResult
              key={roomTypeGroup.type}
              type={roomTypeGroup.type}
              rooms={roomTypeGroup.rooms}
              availabilityResults={availabilityResults || {}}
              t={t}
              reversed={idx % 2 === 1}
            />
          ))}
        </div>
      )}

      {!hasAttemptedFetch && rooms && groupedRooms.length > 0 && (
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-25 shadow-xl border border-white/50 max-w-500 w-full text-center">
          <div className="w-40 h-40 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-15">
            <FaSearch className="w-20 h-20 text-primary" />
          </div>
          <p className="text-sm text-text/70">{t("selectDatesAndCheck")}</p>
        </div>
      )}

      {hasAttemptedFetch && !isFetching && !(dateError || submitError) && !isError && (!availabilityResults || Object.keys(availabilityResults).length === 0) && (
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-20 shadow-xl border border-white/50 max-w-500 w-full text-center">
          <div className="w-40 h-40 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-15">
            <FaExclamationTriangle className="w-20 h-20 text-primary" />
          </div>
          <span className="text-sm text-text">{t("noAvailability")}</span>
        </div>
      )}
    </div>
  );
}
