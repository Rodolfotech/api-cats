import type { NextApiRequest, NextApiResponse } from "next";

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

  const catsData: Data = [
    {"id":1,"raza":"Abisinio","descripcion":"Gato de pelaje corto con ticking, activo y curioso","origen":"Etiopía","tiempo_de_vida":"9-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/g1j3wRjgx.jpg"},
    {"id":2,"raza":"Aegean","descripcion":"Gato natural de las islas griegas, de pelaje semilargo y temperamento equilibrado","origen":"Grecia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/Hb2N6tYTJ.jpg"},
    {"id":3,"raza":"American Bobtail","descripcion":"Gato de cola corta natural, aspecto salvaje pero temperamento dulce","origen":"Estados Unidos","tiempo_de_vida":"11-15 años","peso":"3-7 kg","imagen":"https://cdn2.thecatapi.com/images/gVrhv_yAY.jpg"},
    {"id":4,"raza":"American Curl","descripcion":"Distintivo por sus orejas que se curvan hacia atrás","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"},
    {"id":5,"raza":"American Shorthair","descripcion":"Gato de tamaño medio, musculoso y de pelaje corto denso","origen":"Estados Unidos","tiempo_de_vida":"15-20 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/MuEGe1-Sz.jpg"},
    {"id":6,"raza":"American Wirehair","descripcion":"Pelaje único con textura de alambre, derivado del American Shorthair","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg"},
    {"id":7,"raza":"Arabian Mau","descripcion":"Gato de origen desértico, adaptado al clima caluroso, orejas grandes","origen":"Arabia","tiempo_de_vida":"12-14 años","peso":"3-7 kg","imagen":"https://cdn2.thecatapi.com/images/zlpgGWqN7.jpg"},
    {"id":8,"raza":"Asian","descripcion":"Grupo de razas de pelaje corto, relacionado con el Burmés","origen":"Reino Unido","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/d9e.jpg"},
    {"id":9,"raza":"Asian Semi-longhair","descripcion":"Variedad de pelo largo del gato Asian","origen":"Reino Unido","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/a3d.jpg"},
    {"id":10,"raza":"Australian Mist","descripcion":"Raza australiana de pelaje moteado o marmóreo","origen":"Australia","tiempo_de_vida":"12-16 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/zTiuUpmqf.jpg"},
    {"id":11,"raza":"Balinese","descripcion":"Variedad de pelo largo del Siamés, elegante y vocal","origen":"Estados Unidos","tiempo_de_vida":"12-20 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/OaTQfIktG.jpg"},
    {"id":12,"raza":"Bambino","descripcion":"Gato sin pelo con patas cortas, cruce de Sphynx y Munchkin","origen":"Estados Unidos","tiempo_de_vida":"8-12 años","peso":"2-4 kg","imagen":"https://cdn2.thecatapi.com/images/MizM7dBMU.jpg"},
    {"id":13,"raza":"Bengalí","descripcion":"Híbrido con gato leopardo bengalí, patrón de manchas tipo leopardo","origen":"Estados Unidos","tiempo_de_vida":"10-16 años","peso":"4-7 kg","imagen":"https://cdn2.thecatapi.com/images/H_UWbOfra.jpg"},
    {"id":14,"raza":"Birmano","descripcion":"Gato sagrado de Birmania, pelo semilargo y ojos azules","origen":"Birmania","tiempo_de_vida":"12-16 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg"},
    {"id":15,"raza":"Bombay","descripcion":"Gato negro con ojos dorados, similar a un jaguar en miniatura","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg"},
    {"id":16,"raza":"Brazilian Shorthair","descripcion":"Gato de pelaje corto originario de Brasil, ágil y cariñoso","origen":"Brasil","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/1f6.jpg"},
    {"id":17,"raza":"British Longhair","descripcion":"Variedad de pelo largo del British Shorthair","origen":"Reino Unido","tiempo_de_vida":"12-17 años","peso":"4-8 kg","imagen":"https://cdn2.thecatapi.com/images/7isAO4Cav.jpg"},
    {"id":18,"raza":"British Shorthair","descripcion":"Gato robusto de cuerpo compacto y pelaje denso","origen":"Reino Unido","tiempo_de_vida":"12-17 años","peso":"4-8 kg","imagen":"https://cdn2.thecatapi.com/images/M1Rh3CPp_.jpg"},
    {"id":19,"raza":"Burmés","descripcion":"Gato de pelaje corto sedoso y temperamento afectuoso","origen":"Birmania","tiempo_de_vida":"10-17 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/92D9NZLs0.jpg"},
    {"id":20,"raza":"Burmilla","descripcion":"Cruce entre Burmés y Persa Chinchilla, pelaje plateado","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/r530zDuJU.jpg"},
    {"id":21,"raza":"California Spangled","descripcion":"Raza creada para parecerse a gatos salvajes moteados","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-7 kg","imagen":"https://cdn2.thecatapi.com/images/B1ERTmgph.jpg"},
    {"id":22,"raza":"Chantilly-Tiffany","descripcion":"Gato de pelo semilargo, color chocolate y ojos dorados","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/TR-5nAd_S.jpg"},
    {"id":23,"raza":"Chartreux","descripcion":"Gato francés de pelaje azul grisáceo y ojos ámbar","origen":"Francia","tiempo_de_vida":"12-15 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/ZSV_8HqoS.jpg"},
    {"id":24,"raza":"Chausie","descripcion":"Híbrido de gato doméstico y gato de la jungla, aspecto salvaje","origen":"Egipto","tiempo_de_vida":"10-14 años","peso":"5-11 kg","imagen":"https://cdn2.thecatapi.com/images/snxE5_PPX.jpg"},
    {"id":25,"raza":"Cheetoh","descripcion":"Cruce entre Bengalí y Ocicat, manchas contrastantes","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"5-9 kg","imagen":"https://cdn2.thecatapi.com/images/yPmEpKmnR.jpg"},
    {"id":26,"raza":"Colorpoint Shorthair","descripcion":"Similar al Siamés pero con más colores de puntos","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/oSpqGyUDS.jpg"},
    {"id":27,"raza":"Cornish Rex","descripcion":"Pelaje rizado, cuerpo delgado y orejas grandes","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-4 kg","imagen":"https://cdn2.thecatapi.com/images/kOAHCDEzA.jpg"},
    {"id":28,"raza":"Cymric","descripcion":"Variedad de pelo largo del Manx, sin cola o cola corta","origen":"Isla de Man","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/WXcD6qZEn.jpg"},
    {"id":29,"raza":"Cyprus","descripcion":"Gato natural de Chipre, de pelaje corto y temperamento amigable","origen":"Chipre","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/cruhNBsv1.jpg"},
    {"id":30,"raza":"Devon Rex","descripcion":"Pelaje rizado, orejas grandes y cuerpo delgado","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-4 kg","imagen":"https://cdn2.thecatapi.com/images/_BhPUA-L-.jpg"},
    {"id":31,"raza":"Donskoy","descripcion":"Gato sin pelo de origen ruso, piel arrugada","origen":"Rusia","tiempo_de_vida":"10-14 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/3KG57GfMW.jpg"},
    {"id":32,"raza":"Dragon Li","descripcion":"Gato chino de pelaje corto y patrón moteado natural","origen":"China","tiempo_de_vida":"10-14 años","peso":"4-7 kg","imagen":"https://cdn2.thecatapi.com/images/mjeF1hs8v.jpg"},
    {"id":33,"raza":"Egyptian Mau","descripcion":"Una de las razas más antiguas, manchas naturales y rápido","origen":"Egipto","tiempo_de_vida":"12-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/ARDeFqhkl.jpg"},
    {"id":34,"raza":"European Burmese","descripcion":"Variedad europea del Burmés, más colores aceptados","origen":"Reino Unido","tiempo_de_vida":"10-17 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/YOjBThApG.jpg"},
    {"id":35,"raza":"Exotic Shorthair","descripcion":"Similar al Persa pero con pelaje corto, cara achatada","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/zJkeHza2K.jpg"},
    {"id":36,"raza":"Foldex","descripcion":"Cruce entre Scottish Fold y Exotic Shorthair, orejas dobladas","origen":"Canadá","tiempo_de_vida":"10-14 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/7mc.gif"},
    {"id":37,"raza":"German Rex","descripcion":"Gato de pelaje rizado, similar al Cornish Rex","origen":"Alemania","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/49p.gif"},
    {"id":38,"raza":"Havana Brown","descripcion":"Gato de color marrón chocolate uniforme y ojos verdes","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/njK25knLH.jpg"},
    {"id":39,"raza":"Himalayo","descripcion":"Cruce de Persa y Siamés, pelaje largo con puntos coloridos","origen":"Estados Unidos","tiempo_de_vida":"9-15 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/zcErB6rHb.jpg"},
    {"id":40,"raza":"Japanese Bobtail","descripcion":"Gato de cola corta y curvada, similar a un conejo","origen":"Japón","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/d8AjzQxLp.jpg"},
    {"id":41,"raza":"Javanese","descripcion":"Gato de pelo largo, elegante y vocal, más colores que el Balinés","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/V00qLe4Gw.jpg"},
    {"id":42,"raza":"Khao Manee","descripcion":"Gato blanco de Tailandia con ojos de diferentes colores","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/iyFN2mF8l.jpg"},
    {"id":43,"raza":"Korat","descripcion":"Gato tailandés de pelaje azul plata, símbolo de buena fortuna","origen":"Tailandia","tiempo_de_vida":"10-15 años","peso":"3-4 kg","imagen":"https://cdn2.thecatapi.com/images/1TcC-kiI1.jpg"},
    {"id":44,"raza":"Korn Ja","descripcion":"Raza tailandesa de pelaje corto y ojos dorados","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/XJIqaAj_n.jpg"},
    {"id":45,"raza":"Kurilian Bobtail","descripcion":"Gato de cola corta originario de las islas Kuriles","origen":"Rusia","tiempo_de_vida":"10-15 años","peso":"3-7 kg","imagen":"https://cdn2.thecatapi.com/images/a4i.jpg"},
    {"id":46,"raza":"LaPerm","descripcion":"Gato de pelaje rizado que puede ser corto o largo","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/g4vhUKcZX.jpg"},
    {"id":47,"raza":"Maine Coon","descripcion":"Una de las razas más grandes, pelaje largo y cepillo en orejas","origen":"Estados Unidos","tiempo_de_vida":"10-13 años","peso":"5-11 kg","imagen":"https://cdn2.thecatapi.com/images/MmiojCuKC.jpg"},
    {"id":48,"raza":"Manx","descripcion":"Gato conocido por la ausencia de cola, originario de Isla de Man","origen":"Isla de Man","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/Rscv6E1c5.jpg"},
    {"id":49,"raza":"Munchkin","descripcion":"Gato de patas cortas debido a una mutación genética natural","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-4 kg","imagen":"https://cdn2.thecatapi.com/images/106hayhS4.jpg"},
    {"id":50,"raza":"Nebelung","descripcion":"Variedad de pelo largo del Ruso Azul, pelaje azul plateado","origen":"Estados Unidos","tiempo_de_vida":"11-18 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/C2JowzG1O.jpg"},
    {"id":51,"raza":"Norwegian Forest Cat","descripcion":"Gato grande de Noruega, pelaje largo y melena","origen":"Noruega","tiempo_de_vida":"12-16 años","peso":"4-9 kg","imagen":"https://cdn2.thecatapi.com/images/ZUumV9qmY.jpg"},
    {"id":52,"raza":"Ocicat","descripcion":"Raza manchada criada para parecerse a un ocelote","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/N9XTfbgI6.jpg"},
    {"id":53,"raza":"Ojos Azules","descripcion":"Gato con ojos azules intensos independientemente del pelaje","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"2-4 kg","imagen":"https://cdn2.thecatapi.com/images/rt.jpg"},
    {"id":54,"raza":"Oriental Longhair","descripcion":"Variedad de pelo largo del Oriental Shorthair","origen":"Tailandia","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/MTg2NjU5NA.jpg"},
    {"id":55,"raza":"Oriental Shorthair","descripcion":"Gato elegante, delgado, orejas grandes y muy vocal","origen":"Tailandia","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/MTYxNTEwNA.jpg"},
    {"id":56,"raza":"Persa","descripcion":"Gato de pelaje largo y sedoso, cara redonda y nariz corta","origen":"Irán","tiempo_de_vida":"10-17 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/iRMmnkFTl.png"},
    {"id":57,"raza":"Peterbald","descripcion":"Gato de pelo corto o sin pelo, de orejas grandes","origen":"Rusia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/e2d.jpg"},
    {"id":58,"raza":"Pixie-bob","descripcion":"Gato con aspecto de bobcat, puede tener cola corta","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"4-8 kg","imagen":"https://cdn2.thecatapi.com/images/4MEAQffKS.jpg"},
    {"id":59,"raza":"Ragamuffin","descripcion":"Gato grande de pelaje largo, muy dócil y afectuoso","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"4-9 kg","imagen":"https://cdn2.thecatapi.com/images/THXQ9Nqie.jpg"},
    {"id":60,"raza":"Ragdoll","descripcion":"Gato grande y musculoso, muy dócil y relajado","origen":"Estados Unidos","tiempo_de_vida":"12-17 años","peso":"4-9 kg","imagen":"https://cdn2.thecatapi.com/images/QZYN75HxN.jpg"},
    {"id":61,"raza":"Russian Blue","descripcion":"Gato de pelaje azul grisáceo y ojos verdes","origen":"Rusia","tiempo_de_vida":"10-20 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/S-1YzA7-_.jpg"},
    {"id":62,"raza":"Sam Sawet","descripcion":"Gato tailandés de pelaje corto y musculoso","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/a2n.jpg"},
    {"id":63,"raza":"Scottish Fold","descripcion":"Distintivo por sus orejas que se doblan hacia adelante","origen":"Escocia","tiempo_de_vida":"11-15 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/f8FUsjdUw.jpg"},
    {"id":64,"raza":"Selkirk Rex","descripcion":"Gato de pelaje rizado, puede ser de pelo corto o largo","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-6 kg","imagen":"https://cdn2.thecatapi.com/images/Z0X1tZQIt.jpg"},
    {"id":65,"raza":"Serengeti","descripcion":"Cruce entre Bengalí y Oriental, aspecto salvaje sin genes salvajes","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"4-7 kg","imagen":"https://cdn2.thecatapi.com/images/79o.jpg"},
    {"id":66,"raza":"Siamese","descripcion":"Raza antigua y reconocible, puntos de color y ojos azules","origen":"Tailandia","tiempo_de_vida":"10-12 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/2_jMGSBwb.jpg"},
    {"id":67,"raza":"Siberian","descripcion":"Gato grande ruso con triple capa de pelaje, hipoalergénico","origen":"Rusia","tiempo_de_vida":"11-18 años","peso":"4-9 kg","imagen":"https://cdn2.thecatapi.com/images/gmD8CM7eZ.jpg"},
    {"id":68,"raza":"Singapura","descripcion":"Una de las razas más pequeñas, pelaje sepia y ojos grandes","origen":"Singapur","tiempo_de_vida":"11-15 años","peso":"2-3 kg","imagen":"https://cdn2.thecatapi.com/images/4Q5bRarQO.jpg"},
    {"id":69,"raza":"Snowshoe","descripcion":"Gato de pies blancos, cruce de Siamés y American Shorthair","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/uTFc4z0wP.jpg"},
    {"id":70,"raza":"Somali","descripcion":"Variedad de pelo largo del Abisinio, cola esponjosa","origen":"Somalia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/qwYvuuMxz.jpg"},
    {"id":71,"raza":"Sphynx","descripcion":"Gato sin pelo, piel arrugada y gran calidez corporal","origen":"Canadá","tiempo_de_vida":"8-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/BDb8ZXb1v.jpg"},
    {"id":72,"raza":"Thai","descripcion":"Versión tradicional del Siamés, cuerpo más robusto","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/dK0max215.jpg"},
    {"id":73,"raza":"Tonkinese","descripcion":"Cruce entre Siamés y Burmés, pelaje corto y ojos azules","origen":"Estados Unidos","tiempo_de_vida":"10-16 años","peso":"3-5 kg","imagen":"https://cdn2.thecatapi.com/images/e9GFNGkwq.jpg"}
  ];

  res.status(200).json(catsData);
}
