export type Camera = {
  nume_camera: string;
  ocupare_standard: string;
  ocuupare_min: string;
  ocuupare_max: string;
  ocuupare_max_total: string;
  id_camera: string;
  nume_rateplan: string;
  id_rateplan: string;
  pret_camera: string;
  numar_camere: number;
};

export type CamereResponse = {
  camere: Camera[];
};
interface AvailabilitySuccessResponse extends CamereResponse {
  ok: "true";
}

interface AvailabilityErrorResponse {
  ok: "false";
  mesaj: string;
}

type AvailabilityResponse =
  | AvailabilitySuccessResponse
  | AvailabilityErrorResponse;

interface AvailabilityResult {
  [key: string]: {
    pret_camera: string;
    numar_camere: number;
    ocuupare_max_total: string;
  };
}

export async function getAvailability(
  checkIn: string,
  checkOut: string
): Promise<AvailabilityResult> {
  const response = await fetch("/api/availability", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ checkIn, checkOut }),
  });

  const data: AvailabilityResponse = await response.json();

  // Type-safe error handling
  if (data.ok === "false") {
    throw new Error(data.mesaj || "An unknown error occurred.");
  }

  // Return a properly structured response
  return data.camere.reduce<AvailabilityResult>((acc, camera) => {
    acc[camera.id_camera] = {
      pret_camera: camera.pret_camera,
      ocuupare_max_total: camera.ocuupare_max_total,
      numar_camere: camera.numar_camere,
    };
    return acc;
  }, {});
}
