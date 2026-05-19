import type { NextApiRequest, NextApiResponse } from "next";
import catsData from "@/data/cats.json";

type CatBreed = {
  id: number;
  raza: string;
  descripcion: string;
  origen: string;
  tiempo_de_vida: string;
  peso: string;
  imagen: string;
};

type Data = CatBreed[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "GET") {
    return res.status(405).json([]);
  }

  res.status(200).json(catsData);
}
