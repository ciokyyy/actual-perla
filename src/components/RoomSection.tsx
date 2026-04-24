"use client";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { FaUser, FaArrowLeft, FaArrowRight, FaCheck, FaEye, FaExpand } from "react-icons/fa";
import Image from "next/image";
import rooms from "@/libs/db.json";
import { useState } from "react";
import { Link } from "@/components/ui/Link";

interface RoomTypeSectionProps {
  typeId: string;
  title: string;
  description: string;
  typeKey: string;
  reversed?: boolean;
  t: any;
}

function RoomTypeCard({ typeId, title, description, typeKey, reversed, t }: RoomTypeSectionProps) {
  const typeRooms = rooms.rooms.filter(r => r.typeId === typeKey);
  
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedRoom = typeRooms[selectedIdx];
  const roomImages = selectedRoom?.images || [];
  const [photoIdx, setPhotoIdx] = useState(0);
  const hasImages = roomImages.length > 0;
  const currentPhoto = roomImages[photoIdx]?.src || "/images/ui/header.jpg";

  const goNextRoom = () => {
    setSelectedIdx((prev) => (prev + 1) % typeRooms.length);
    setPhotoIdx(0);
  };

  const goPrevRoom = () => {
    setSelectedIdx((prev) => (prev - 1 + typeRooms.length) % typeRooms.length);
    setPhotoIdx(0);
  };

  const goNextPhoto = () => {
    setPhotoIdx((prev) => (prev + 1) % roomImages.length);
  };

  const goPrevPhoto = () => {
    setPhotoIdx((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/50"
    >
      <div className="grid lg:grid-cols-2">
        <div className={`relative aspect-video lg:aspect-auto ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          {hasImages ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedRoom?.id}-${photoIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image src={currentPhoto} alt={`Camera ${selectedRoom?.number}`} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <span className="text-primary/40 text-sm">No photos available</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          
          <div className="absolute top-15 left-15 bg-primary/90 text-white px-14 py-6 rounded-full text-sm font-semibold z-10">
            Camera {selectedRoom?.number}
          </div>
          
          {/* Room navigation */}
          {typeRooms.length > 1 && (
            <>
              <button onClick={goPrevRoom} aria-label="Previous room" className="absolute left-12 top-1/2 -translate-y-1/2 w-30 h-30 rounded-full bg-white/95 flex items-center justify-center shadow-xl cursor-pointer hover:bg-white transition-all z-10 border border-primary/20">
                <FaArrowLeft className="w-12 h-12 text-primary" />
              </button>
              <button onClick={goNextRoom} aria-label="Next room" className="absolute right-12 top-1/2 -translate-y-1/2 w-30 h-30 rounded-full bg-white/95 flex items-center justify-center shadow-xl cursor-pointer hover:bg-white transition-all z-10 border border-primary/20">
                <FaArrowRight className="w-12 h-12 text-primary" />
              </button>
            </>
          )}
          
          {/* Photo dots - only show when room has multiple photos */}
          {roomImages.length > 1 && (
            <div className="absolute bottom-15 left-1/2 -translate-x-1/2 flex gap-6 z-10">
              <button onClick={goPrevPhoto} aria-label="Previous photo" className="w-22 h-22 rounded-full bg-white/90 flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition-all">
                <FaArrowLeft className="w-10 h-10 text-primary" />
              </button>
              <div className="flex gap-5 items-center bg-white/90 px-12 py-6 rounded-full shadow-md">
                {roomImages.map((_, idx) => (
                  <button key={idx} onClick={() => setPhotoIdx(idx)} aria-label={`Photo ${idx + 1}`} className={`w-8 h-8 rounded-full transition-all cursor-pointer ${idx === photoIdx ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"}`} />
                ))}
              </div>
              <button onClick={goNextPhoto} aria-label="Next photo" className="w-22 h-22 rounded-full bg-white/90 flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition-all">
                <FaArrowRight className="w-10 h-10 text-primary" />
              </button>
            </div>
          )}
        </div>

        <div className={`p-30 flex flex-col justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-semibold mb-15 text-primary">
            {title}
          </h3>
          
          <p className="text-base text-text/80 mb-20 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-15 mb-20">
            <div className="flex items-center gap-8 text-sm">
              <div className="w-22 h-22 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                <FaUser className="w-10 h-10 text-primary" />
              </div>
              <span className="text-text font-medium">Up to {selectedRoom?.max || 2} guests</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-text/50 text-center">
            <span>{t("select_room")}: </span>
            {typeRooms.map((room, idx) => (
              <button key={room.id} onClick={() => { setSelectedIdx(idx); setPhotoIdx(0); }} aria-label={`Select room ${room.number}`} className={`px-14 py-8 rounded-full transition-all cursor-pointer font-semibold text-sm ${idx === selectedIdx ? "bg-primary text-white" : "bg-primary/10 hover:bg-primary/20"}`}>
                {room.number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RoomSection() {
  const t = useTranslations("Rooms");
  
  const roomTypes = [
    { typeId: "APB", typeKey: "APB", title: t("APB.title"), description: t("APB.description"), reversed: false },
    { typeId: "DBB", typeKey: "DBB", title: t("DBB.title"), description: t("DBB.description"), reversed: true },
    { typeId: "DB", typeKey: "DB", title: t("DB.title"), description: t("DB.description"), reversed: false },
    { typeId: "SB", typeKey: "SB", title: t("SB.title"), description: t("SB.description"), reversed: true },
    { typeId: "TPB", typeKey: "TPB", title: t("TPB.title"), description: t("TPB.description"), reversed: false },
    { typeId: "TP", typeKey: "TP", title: t("TP.title"), description: t("TP.description"), reversed: true },
  ];

  return (
    <section className="w-full px-5 py-15 md:py-25">
      <div className="max-w-6xl mx-auto grid gap-25">
        {roomTypes.map((type) => (
          <RoomTypeCard
            key={type.typeId}
            typeId={type.typeId}
            typeKey={type.typeKey}
            title={type.title}
            description={type.description}
            reversed={type.reversed}
            t={t}
          />
        ))}
        
        <div className="flex justify-center">
          <Link href="/preturi-valabilitate" className="group bg-primary text-white px-25 py-15 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-10">
            <FaEye className="w-18 h-18" />
            {t("verify_availability")}
          </Link>
        </div>
      </div>
    </section>
  );
}
