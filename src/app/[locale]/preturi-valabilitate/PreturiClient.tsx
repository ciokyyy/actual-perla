"use client";

import { Room } from "@/libs/db";
import { useGetAvailability } from "@/libs/hooks/useGetAvail";
import { useRooms } from "@/libs/hooks/useGetRooms";
import { useEffect, useState } from "react";
import { Calendar } from "./Calendar";
import { DateRange } from "react-day-picker";
import C from "@/components/ComponentNames";
import { Button } from "@/components/ui/Button";
import { format } from "date-fns";
import { RoomCarousel } from "./RoomCarousel";
import { useTranslations } from "next-intl";
import { IoPerson } from "react-icons/io5";

export function PreturiClient() {
  const { data: rooms } = useRooms();
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
  });
  const [error, setError] = useState<string | null>(null);
  const [shouldFetchAvailability, setShouldFetchAvailability] = useState(false);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);

  // Translations
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
      .filter(([_, rooms]) => rooms.length > 0)
      .map(([type, rooms]) => ({
        type,
        rooms,
      }));
  }

  const groupedRooms = getGroupedRoomsByType(rooms);

  useEffect(() => {
    if (
      !dateRange?.from ||
      !dateRange?.to ||
      dateRange.to.getTime() <= dateRange.from.getTime()
    ) {
      setError(t("selectValidRange"));
    } else {
      setError(null);
    }
    setShouldFetchAvailability(false);
    setHasAttemptedFetch(false);
  }, [dateRange, t]);

  const handleVerifica = () => {
    if (
      dateRange?.from &&
      dateRange?.to &&
      dateRange.to.getTime() > dateRange.from.getTime()
    ) {
      setShouldFetchAvailability(true);
      setHasAttemptedFetch(true);
      refetch();
      setError(null);
    } else {
      setError(t("selectValidRangeBeforeCheck"));
      setHasAttemptedFetch(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 p-5 max-w-1200 w-full">
      {/* Calendar for date range selection */}
      <Calendar
        mode="range"
        required
        onSelect={setDateRange}
        selected={dateRange}
      />
      {/* Button to trigger availability check */}
      <Button
        className="w-full"
        onClick={handleVerifica}
        disabled={
          isFetching ||
          !dateRange?.from ||
          !dateRange?.to ||
          dateRange.to.getTime() <= dateRange.from.getTime()
        }
      >
        {isFetching ? t("checking") : t("checkAvailability")}
      </Button>

      {/* Display general date range or fetch-related error messages */}
      {(error || (isError && hasAttemptedFetch)) && (
        <C.Eroare className="text-desc bg-foreground p-20 rounded-normal mx-20 max-w-500 text-text flex flex-col gap-20">
          <span>{error ?? fetchError?.message ?? t("unknownError")}</span>
          {hasAttemptedFetch && (isError || error === t("noAvailability")) && (
            <>
              <span>{t("holidayPhoneOnly")}</span>
              <span>{t("easterMinNights")}</span>
            </>
          )}
        </C.Eroare>
      )}

      {/* Display rooms and their availability only if a fetch has been attempted and there are no critical errors */}
      {hasAttemptedFetch && !error && !isError && (
        <div className="w-full mt-10">
          {groupedRooms.map((roomTypeGroup) => (
            <div key={roomTypeGroup.type} className="mb-10">
              {/* Room Type Title */}
              <h2 className="title" id={roomTypeGroup.type}>
                {t(`${roomTypeGroup.type}.title`)}
              </h2>
              {/* Room Type Description */}
              <p className="text-desc mb-70 max-w-700 rounded-normal mx-auto bg-foreground p-50 text-text shadow-xl">
                {t(`${roomTypeGroup.type}.description`)}
              </p>
              <div className="flex flex-col gap-8 p-10 md:p-20">
                {roomTypeGroup.rooms.map((room) => {
                  const roomAvailability = availabilityResults
                    ? availabilityResults[room.id]
                    : undefined;

                  return (
                    <div
                      key={room.id}
                      className="flex flex-col lg:flex-row gap-8 items-center-safe"
                    >
                      {/* Left Bubble: Room Carousel */}
                      <div className="w-full lg:w-1/2">
                        <C.Container className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 pointer-events-none" />
                          <div className="w-full h-full">
                            <RoomCarousel room={room} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          </div>
                          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                        </C.Container>
                      </div>

                      {/* Right Bubble: Room Details */}
                      <C.Container className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 w-full p-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 pointer-events-none" />
                        <div className="relative p-8">
                          {/* Room title and number */}
                          <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                              {t(`${room.typeId}.title`)} {room.number}
                            </h3>
                          </div>
                          {/* Available rooms count */}
                          <div className="mb-8">
                            <div className="flex items-center gap-3 text-gray-700">
                              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                                <svg
                                  className="w-5 h-5 text-green-600"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                              </div>
                              <span className="text-lg font-semibold">
                                {roomAvailability?.numar_camere ?? 0}{" "}
                                {t("room", {
                                  count: roomAvailability?.numar_camere ?? 0,
                                })}
                              </span>
                            </div>
                          </div>
                          {/* Capacity */}
                          <div className="mb-8">
                            <div className="flex items-center gap-3 text-gray-700">
                              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                <IoPerson className="text-gray-600 text-lg" />
                              </div>
                              <span className="text-lg font-semibold">
                                {room.max} {t("person", { count: room.max })}
                              </span>
                            </div>
                          </div>
                          {/* Location note for Agropensiune */}
                          {room.number.includes("Agropensiune") && (
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full mt-1 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                  {t("secondaryBuildingNote")}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* Price highlight */}
                        <div className="">
                          <div className="inline-flex items-center bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                            <span className="text-sm font-medium opacity-90 mr-3">
                              {t("price")}
                            </span>
                            <span className="text-xl font-bold">
                              {roomAvailability?.pret_camera} RON
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                      </C.Container>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Initial message displayed before any fetch attempt */}
      {!hasAttemptedFetch && rooms && groupedRooms.length > 0 && (
        <p className="mt-50 text-text text-lg text-center">
          {t("selectDatesAndCheck")}
        </p>
      )}

      {/* Message displayed if a fetch was attempted, completed, no error, but no rooms were available */}
      {hasAttemptedFetch &&
        !isFetching &&
        !error &&
        !isError &&
        (!availabilityResults ||
          Object.keys(availabilityResults).length === 0) && (
          <C.Eroare className="text-desc bg-foreground p-20 rounded-normal mx-20 max-w-500 text-text flex flex-col gap-20">
            <span>{t("noAvailability")}</span>
            <span>{t("holidayPhoneOnly")}</span>
            <span>{t("easterMinNights")}</span>
          </C.Eroare>
        )}
    </div>
  );
}
