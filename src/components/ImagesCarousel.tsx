"use client";
import { useRooms } from "@/libs/hooks/useGetRooms";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import C from "./ComponentNames";
import { Room } from "@/libs/db";
import { useTranslations } from "next-intl";
import { Button } from "./ui/Button";

export function RoomCarousel({
  room,
}: Readonly<{
  room: Room;
}>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const t_types = useTranslations("Rooms");
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <C.Container className="relative *:rounded-normal" key={room.id}>
      <div className="overflow-hidden" ref={emblaRef}>
        <C.Embla_Slide_Container className="flex max-w-800 aspect-16/12 pointer-events-auto">
          {room.images.map((img, index) => (
            <C.Container
              key={room.id + "_" + index}
              className="relative flex-[0_0_100%] "
            >
              <C.Embla_Slide
                as={Image}
                src={img.src}
                alt={t_types(room.id + ".image" + (index + 1) + "Alt")}
                fill
                className="object-cover object-center"
              />
            </C.Container>
          ))}
        </C.Embla_Slide_Container>
      </div>
      <C.ButtonsContainer className="absolute inset-0 z-20 flex items-center justify-between px-20 py-2 pointer-events-auto">
        <Button
          className="bg-surface/50 hover:bg-surface/70 rounded-full p-2"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <FaChevronCircleLeft />
        </Button>
        <Button
          className="bg-surface/50 hover:bg-surface/70 rounded-full p-2"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <FaChevronCircleRight />
        </Button>
      </C.ButtonsContainer>
      <C.ImageOverlay className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[rgba(147,147,150,0)] via-[rgba(147,147,150,0)] via-50% to-[rgba(147,147,150,0.71)]" />
      <C.Title className="drop-shadow-2xl absolute top-0 left-0 z-30 w-full p-20 text-center text-white ">
        {t_types(room.typeId + ".title")} - {room.number}
      </C.Title>
    </C.Container>
  );
}

function ImagesCarousel() {
  const { data: rooms } = useRooms();
  function getGroupedRoomsByType(rooms: Room[] | undefined) {
    if (!rooms) return {};
    const grouped = rooms.reduce<Record<string, Room[]>>((acc, room) => {
      if (!acc[room.typeId]) {
        acc[room.typeId] = [];
      }
      acc[room.typeId].push(room);
      return acc;
    }, {});
    // Sort each group by room.id
    Object.values(grouped).forEach((roomArr) => {
      roomArr.sort((a, b) => a.id.localeCompare(b.id));
    });
    return grouped;
  }

  const groupedRooms = getGroupedRoomsByType(rooms);
  const t_descs = useTranslations("Rooms");
  return (
    <div>
      {Object.entries(groupedRooms).map(([typeId, rooms]) => {
        return (
          <div key={typeId} className="mb-10">
            <h2 className="title" id={typeId}>
              {t_descs(typeId + ".title")}
            </h2>
            <p className="text-desc mb-70 max-w-700 rounded-normal mx-auto bg-foreground p-50 text-text shadow-xl">
              {t_descs(typeId + ".description")}
            </p>
            <div className="flex flex-col gap-20 p-10 bg-foreground md:p-20 rounded-normal shadow-xl">
              {rooms.map((room) => (
                <C.Container
                  className="relative text-desc rounded-normal "
                  key={room.id}
                >
                  <RoomCarousel room={room} />
                  {room.number.includes("Agropensiune") && (
                    <p className="max-w-600 mx-auto p-20 text-label">
                      Această categorie de camere este localizată în clădirea
                      secundară, la doar 50 de metri de corpul principal, în
                      incinta aceleiași curți.
                    </p>
                  )}
                </C.Container>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { ImagesCarousel };
