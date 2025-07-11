// @/components/RoomCarousel.tsx
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Room } from "@/libs/db";
import { useTranslations } from "next-intl";
import C from "@/components/ComponentNames";
import { Button } from "@/components/ui/Button";

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
    <C.Container className="relative" key={room.id}>
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
          className="bg-white/50 hover:bg-white/70 rounded-full p-2"
          onClick={scrollPrev}
        >
          <FaChevronCircleLeft />
        </Button>
        <Button
          className="bg-white/50 hover:bg-white/70 rounded-full p-2"
          onClick={scrollNext}
        >
          <FaChevronCircleRight />
        </Button>
      </C.ButtonsContainer>
      <C.ImageOverlay className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[rgba(147,147,150,0)] via-[rgba(147,147,150,0)] via-50% to-[rgba(147,147,150,0.71)]" />
    </C.Container>
  );
}
