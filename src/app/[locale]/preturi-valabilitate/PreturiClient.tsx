"use client";

import { Room } from "@/libs/db";
import { useGetAvailability } from "@/libs/hooks/useGetAvail";
import { useRooms } from "@/libs/hooks/useGetRooms";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { RoomCarousel } from "./RoomCarousel";
import { useTranslations } from "next-intl";
import { FaSearch, FaBed, FaUsers, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

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
    return format(date, "dd MMM yyyy").replace(/\b[a-z]/, (c) =>
      c.toUpperCase()
    );
  };

  const {
    data: availabilityResults,
    isFetching,
    refetch,
    isError,
    error: fetchError,
  } = useGetAvailability(
    formatCustomDate(dateRange?.from),
    formatCustomDate(dateRange?.to),
    shouldFetchAvailability && !!dateRange?.from && !!dateRange?.to
  );

  function getGroupedRoomsByType(rooms: Room[] | undefined) {
    if (!rooms || !availabilityResults) return [];
    const grouped = rooms.reduce<Record<string, Room[]>>((acc, room) => {
      if (!availabilityResults[room.id]) return acc;
      if (!acc[room.typeId]) {
        acc[room.typeId] = [];
      }
      acc[room.typeId].push(room);
      return acc;
    }, {});
    Object.values(grouped).forEach((roomArr) => {
      roomArr.sort((a, b) => a.id.localeCompare(b.id));
    });
    return Object.entries(grouped)
      .filter(([, rooms]) => rooms.length > 0)
      .map(([type, rooms]) => ({
        type,
        rooms,
      }));
  }

  const groupedRooms = getGroupedRoomsByType(rooms);

  const dateError =
    !dateRange?.from ||
    !dateRange?.to ||
    dateRange.to.getTime() <= dateRange.from.getTime()
      ? t("selectValidRange")
      : null;

  const handleDateSelect = (range: DateRange | undefined) => {
    setDateRange(range);
    setShouldFetchAvailability(false);
    setHasAttemptedFetch(false);
  };

  const handleVerifica = () => {
    if (
      dateRange?.from &&
      dateRange?.to &&
      dateRange.to.getTime() > dateRange.from.getTime()
    ) {
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
      {/* Calendar */}
      <Calendar
        mode="range"
        required
        onSelect={handleDateSelect}
        selected={dateRange}
      />

      {/* Check button */}
      <button
        className="w-full max-w-800 bg-primary text-white rounded-full px-25 py-12 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium flex items-center justify-center gap-8 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleVerifica}
        disabled={
          isFetching ||
          !dateRange?.from ||
          !dateRange?.to ||
          dateRange.to.getTime() <= dateRange.from.getTime()
        }
      >
        <FaSearch className="w-14 h-14" />
        {isFetching ? t("checking") : t("checkAvailability")}
      </button>

      {/* Error messages */}
      {(dateError || submitError || (isError && hasAttemptedFetch)) && (
        <div className="bg-surface rounded-2xl p-20 shadow-md border border-foreground/30 max-w-500 w-full text-center flex flex-col gap-10">
          <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <FaExclamationTriangle className="w-20 h-20 text-primary" />
          </div>
          <span className="text-sm text-text">{dateError || submitError || fetchError?.message || t("unknownError")}</span>
          {hasAttemptedFetch && (isError || (dateError || submitError) === t("noAvailability")) && (
            <>
              <span className="text-xs text-text/60">{t("holidayPhoneOnly")}</span>
              <span className="text-xs text-text/60">{t("easterMinNights")}</span>
            </>
          )}
        </div>
      )}

      {/* Room results */}
      {hasAttemptedFetch && !(dateError || submitError) && !isError && (
        <div className="w-full">
          {groupedRooms.map((roomTypeGroup) => (
            <div key={roomTypeGroup.type} className="mb-30">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text text-center mb-12">
                {t(`${roomTypeGroup.type}.title`)}
              </h2>
              <p className="text-sm text-text/70 text-center mb-25 max-w-600 mx-auto">
                {t(`${roomTypeGroup.type}.description`)}
              </p>
              <div className="flex flex-col gap-15">
                {roomTypeGroup.rooms.map((room) => {
                  const roomAvailability = availabilityResults
                    ? availabilityResults[room.id]
                    : undefined;
                  const availableCount = roomAvailability?.numar_camere ?? 0;

                  return (
                    <div
                      key={room.id}
                      className="bg-surface rounded-2xl shadow-md border border-foreground/30 overflow-hidden flex flex-col lg:flex-row"
                    >
                      {/* Room carousel */}
                      <div className="w-full lg:w-1/2 min-h-200">
                        <RoomCarousel room={room} />
                      </div>

                      {/* Room details */}
                      <div className="w-full lg:w-1/2 p-20 flex flex-col justify-between gap-15">
                        <div>
                          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-10">
                            {t(`${room.typeId}.title`)} {room.number}
                          </h3>

                          {/* Availability */}
                          <div className="flex items-center gap-10 mb-10">
                            <div className={`w-28 h-28 rounded-full flex items-center justify-center ${availableCount > 0 ? 'bg-primary/15' : 'bg-red-100'}`}>
                              {availableCount > 0 ? (
                                <FaCheckCircle className="w-14 h-14 text-primary" />
                              ) : (
                                <FaBed className="w-14 h-14 text-red-500" />
                              )}
                            </div>
                            <span className="text-sm font-medium text-text">
                              {availableCount}{" "}
                              {t("room", { count: availableCount })}
                            </span>
                          </div>

                          {/* Capacity */}
                          <div className="flex items-center gap-10 mb-10">
                            <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center">
                              <FaUsers className="w-14 h-14 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-text">
                              {room.max} {t("person", { count: room.max })}
                            </span>
                          </div>

                          {/* Agropensiune note */}
                          {room.number.includes("Agropensiune") && (
                            <div className="mt-10 p-12 bg-primary/5 border border-primary/15 rounded-xl">
                              <p className="text-xs text-primary/80 leading-relaxed">
                                {t("secondaryBuildingNote")}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Price */}
                        <div className="bg-primary/8 rounded-xl p-15 text-center border border-primary/15">
                          <span className="text-xs font-medium text-primary/60 block mb-3">{t("price")}</span>
                          <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary">
                            {roomAvailability?.pret_camera} RON
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Initial message */}
      {!hasAttemptedFetch && rooms && groupedRooms.length > 0 && (
        <div className="bg-surface rounded-2xl p-25 shadow-md border border-foreground/30 max-w-500 w-full text-center">
          <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-15">
            <FaSearch className="w-20 h-20 text-primary" />
          </div>
          <p className="text-sm text-text/70">{t("selectDatesAndCheck")}</p>
        </div>
      )}

      {/* No availability */}
      {hasAttemptedFetch &&
        !isFetching &&
        !(dateError || submitError) &&
        !isError &&
        (!availabilityResults ||
          Object.keys(availabilityResults).length === 0) && (
          <div className="bg-surface rounded-2xl p-20 shadow-md border border-foreground/30 max-w-500 w-full text-center flex flex-col gap-10">
            <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <FaExclamationTriangle className="w-20 h-20 text-primary" />
            </div>
            <span className="text-sm text-text">{t("noAvailability")}</span>
            <span className="text-xs text-text/60">{t("holidayPhoneOnly")}</span>
            <span className="text-xs text-text/60">{t("easterMinNights")}</span>
          </div>
        )}
    </div>
  );
}
