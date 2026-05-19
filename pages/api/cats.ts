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
    {"id":1,"raza":"Abisinio","descripcion":"Gato de pelaje corto con ticking, activo y curioso","origen":"Etiopía","tiempo_de_vida":"9-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/9zT1nFX4/Abisinio.webp"},
    {"id":2,"raza":"Aegean","descripcion":"Gato natural de las islas griegas, de pelaje semilargo y temperamento equilibrado","origen":"Grecia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/WtrSHbpF/Aegean.webp"},
    {"id":3,"raza":"American Bobtail","descripcion":"Gato de cola corta natural, aspecto salvaje pero temperamento dulce","origen":"Estados Unidos","tiempo_de_vida":"11-15 años","peso":"3-7 kg","imagen":"https://i.postimg.cc/WtrSHbpd/American-Bobtail.webp"},
    {"id":4,"raza":"American Curl","descripcion":"Distintivo por sus orejas que se curvan hacia atrás","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/vD9XNH8n/American-Curl.webp"},
    {"id":5,"raza":"American Shorthair","descripcion":"Gato de tamaño medio, musculoso y de pelaje corto denso","origen":"Estados Unidos","tiempo_de_vida":"15-20 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/Sj8VvNQM/American-Shorthair.webp"},
    {"id":6,"raza":"American Wirehair","descripcion":"Pelaje único con textura de alambre, derivado del American Shorthair","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/F1cGBsF3/American-Wirehair.webp"},
    {"id":7,"raza":"Arabian Mau","descripcion":"Gato de origen desértico, adaptado al clima caluroso, orejas grandes","origen":"Arabia","tiempo_de_vida":"12-14 años","peso":"3-7 kg","imagen":"https://i.postimg.cc/fkX5rTWX/Arabian-mau.webp"},
    {"id":8,"raza":"Asian","descripcion":"Grupo de razas de pelaje corto, relacionado con el Burmés","origen":"Reino Unido","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/hhxM5P4V/Asian.webp"},
    {"id":9,"raza":"Asian Semi-longhair","descripcion":"Variedad de pelo largo del gato Asian","origen":"Reino Unido","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/7b7XWYP1/Asian-Semi-longhair.webp"},
    {"id":10,"raza":"Australian Mist","descripcion":"Raza australiana de pelaje moteado o marmóreo","origen":"Australia","tiempo_de_vida":"12-16 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/WtrSHbp6/Australian-Mist.webp"},
    {"id":11,"raza":"Balinese","descripcion":"Variedad de pelo largo del Siamés, elegante y vocal","origen":"Estados Unidos","tiempo_de_vida":"12-20 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/V5M4VLsW/Balinese.webp"},
    {"id":12,"raza":"Bambino","descripcion":"Gato sin pelo con patas cortas, cruce de Sphynx y Munchkin","origen":"Estados Unidos","tiempo_de_vida":"8-12 años","peso":"2-4 kg","imagen":"https://i.postimg.cc/G9Yz5h3K/Bambino.webp"},
    {"id":13,"raza":"Bengalí","descripcion":"Híbrido con gato leopardo bengalí, patrón de manchas tipo leopardo","origen":"Estados Unidos","tiempo_de_vida":"10-16 años","peso":"4-7 kg","imagen":"https://i.postimg.cc/w7pF883N/Bengali.webp"},
    {"id":14,"raza":"Birmano","descripcion":"Gato sagrado de Birmania, pelo semilargo y ojos azules","origen":"Birmania","tiempo_de_vida":"12-16 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/ppHkbbyz/Birmano.webp"},
    {"id":15,"raza":"Bombay","descripcion":"Gato negro con ojos dorados, similar a un jaguar en miniatura","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/ykHn44W9/Bombay.webp"},
    {"id":16,"raza":"Brazilian Shorthair","descripcion":"Gato de pelaje corto originario de Brasil, ágil y cariñoso","origen":"Brasil","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/Tp6QMMhn/Brazilian-Shorthair.webp"},
    {"id":17,"raza":"British Longhair","descripcion":"Variedad de pelo largo del British Shorthair","origen":"Reino Unido","tiempo_de_vida":"12-17 años","peso":"4-8 kg","imagen":"https://i.postimg.cc/nCJTbbMG/British-Longhair.webp"},
    {"id":18,"raza":"British Shorthair","descripcion":"Gato robusto de cuerpo compacto y pelaje denso","origen":"Reino Unido","tiempo_de_vida":"12-17 años","peso":"4-8 kg","imagen":"https://i.postimg.cc/MvSt22XY/British-Shorthair.webp"},
    {"id":19,"raza":"Burmés","descripcion":"Gato de pelaje corto sedoso y temperamento afectuoso","origen":"Birmania","tiempo_de_vida":"10-17 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/CzgJTTdC/Burmes.webp"},
    {"id":20,"raza":"Burmilla","descripcion":"Cruce entre Burmés y Persa Chinchilla, pelaje plateado","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/3dT955Wn/Burmilla.webp"},
    {"id":21,"raza":"California Spangled","descripcion":"Raza creada para parecerse a gatos salvajes moteados","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-7 kg","imagen":"https://i.postimg.cc/LnpvKKhy/California-Spangled.webp"},
    {"id":22,"raza":"Chantilly-Tiffany","descripcion":"Gato de pelo semilargo, color chocolate y ojos dorados","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/2VDTRR39/Chantilly-Tiffany.webp"},
    {"id":23,"raza":"Chartreux","descripcion":"Gato francés de pelaje azul grisáceo y ojos ámbar","origen":"Francia","tiempo_de_vida":"12-15 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/F74G551B/Chartreux.webp"},
    {"id":24,"raza":"Chausie","descripcion":"Híbrido de gato doméstico y gato de la jungla, aspecto salvaje","origen":"Egipto","tiempo_de_vida":"10-14 años","peso":"5-11 kg","imagen":"https://i.postimg.cc/0bsZRRr4/Chausie.webp"},
    {"id":25,"raza":"Cheetoh","descripcion":"Cruce entre Bengalí y Ocicat, manchas contrastantes","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"5-9 kg","imagen":"https://i.postimg.cc/HVg3DDjF/Cheetoh.webp"},
    {"id":26,"raza":"Colorpoint Shorthair","descripcion":"Similar al Siamés pero con más colores de puntos","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/F74G5512/Colorpoint-Shorthair.webp"},
    {"id":27,"raza":"Cornish Rex","descripcion":"Pelaje rizado, cuerpo delgado y orejas grandes","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-4 kg","imagen":"https://i.postimg.cc/RNBG55qk/Cornish-Rex.webp"},
    {"id":28,"raza":"Cymric","descripcion":"Variedad de pelo largo del Manx, sin cola o cola corta","origen":"Isla de Man","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/4mgwkkmC/Cymric.webp"},
    {"id":29,"raza":"Cyprus","descripcion":"Gato natural de Chipre, de pelaje corto y temperamento amigable","origen":"Chipre","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/WhvSLLhc/Cyprus.webp"},
    {"id":30,"raza":"Devon Rex","descripcion":"Pelaje rizado, orejas grandes y cuerpo delgado","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-4 kg","imagen":"https://i.postimg.cc/D8T5kk8k/Devon-Rex.webp"},
    {"id":31,"raza":"Donskoy","descripcion":"Gato sin pelo de origen ruso, piel arrugada","origen":"Rusia","tiempo_de_vida":"10-14 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/VdWgzGbV/Donskoy.webp"},
    {"id":32,"raza":"Dragon Li","descripcion":"Gato chino de pelaje corto y patrón moteado natural","origen":"China","tiempo_de_vida":"10-14 años","peso":"4-7 kg","imagen":"https://i.postimg.cc/rKNjqntH/Dragon-Li.webp"},
    {"id":33,"raza":"Egyptian Mau","descripcion":"Una de las razas más antiguas, manchas naturales y rápido","origen":"Egipto","tiempo_de_vida":"12-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/Whw8sWJK/Egyptian-Mau.webp"},
    {"id":34,"raza":"European Burmese","descripcion":"Variedad europea del Burmés, más colores aceptados","origen":"Reino Unido","tiempo_de_vida":"10-17 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/ZCxHJ7y2/European-Burmese.webp"},
    {"id":35,"raza":"Exotic Shorthair","descripcion":"Similar al Persa pero con pelaje corto, cara achatada","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/w7Q29fmK/Exotic-Shorthair.webp"},
    {"id":36,"raza":"Foldex","descripcion":"Cruce entre Scottish Fold y Exotic Shorthair, orejas dobladas","origen":"Canadá","tiempo_de_vida":"10-14 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/KRDfmqMS/Foldex.webp"},
    {"id":37,"raza":"German Rex","descripcion":"Gato de pelaje rizado, similar al Cornish Rex","origen":"Alemania","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/xc359xz2/German-Rex.webp"},
    {"id":38,"raza":"Havana Brown","descripcion":"Gato de color marrón chocolate uniforme y ojos verdes","origen":"Reino Unido","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/Ln3DmC1M/Havana-Brown.webp"},
    {"id":39,"raza":"Himalayo","descripcion":"Cruce de Persa y Siamés, pelaje largo con puntos coloridos","origen":"Estados Unidos","tiempo_de_vida":"9-15 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/6yfcBjvW/Himalayo.webp"},
    {"id":40,"raza":"Japanese Bobtail","descripcion":"Gato de cola corta y curvada, similar a un conejo","origen":"Japón","tiempo_de_vida":"12-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/VdWgzGCs/Japanese-Bobtail.webp"},
    {"id":41,"raza":"Javanese","descripcion":"Gato de pelo largo, elegante y vocal, más colores que el Balinés","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/nCG2nRDL/Javanese.webp"},
    {"id":42,"raza":"Khao Manee","descripcion":"Gato blanco de Tailandia con ojos de diferentes colores","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/tYNk9SxJ/Khao-Manee.webp"},
    {"id":43,"raza":"Korat","descripcion":"Gato tailandés de pelaje azul plata, símbolo de buena fortuna","origen":"Tailandia","tiempo_de_vida":"10-15 años","peso":"3-4 kg","imagen":"https://i.postimg.cc/0b0n9Ww6/Korat.webp"},
    {"id":44,"raza":"Korn Ja","descripcion":"Raza tailandesa de pelaje corto y ojos dorados","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/6yfcBjv4/Korn-Ja.webp"},
    {"id":45,"raza":"Kurilian Bobtail","descripcion":"Gato de cola corta originario de las islas Kuriles","origen":"Rusia","tiempo_de_vida":"10-15 años","peso":"3-7 kg","imagen":"https://i.postimg.cc/18RHXGGm/Kurilian-Bobtail.webp"},
    {"id":46,"raza":"LaPerm","descripcion":"Gato de pelaje rizado que puede ser corto o largo","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/WdpnzGGb/La-Perm.webp"},
    {"id":47,"raza":"Maine Coon","descripcion":"Una de las razas más grandes, pelaje largo y cepillo en orejas","origen":"Estados Unidos","tiempo_de_vida":"10-13 años","peso":"5-11 kg","imagen":"https://i.postimg.cc/5X93yBB2/Maine-Coon.webp"},
    {"id":48,"raza":"Manx","descripcion":"Gato conocido por la ausencia de cola, originario de Isla de Man","origen":"Isla de Man","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/fVWKyccb/Manx.webp"},
    {"id":49,"raza":"Munchkin","descripcion":"Gato de patas cortas debido a una mutación genética natural","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-4 kg","imagen":"https://i.postimg.cc/ZWYcn88R/Munchkin.webp"},
    {"id":50,"raza":"Nebelung","descripcion":"Variedad de pelo largo del Ruso Azul, pelaje azul plateado","origen":"Estados Unidos","tiempo_de_vida":"11-18 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/MnZDH77H/Nebelung.webp"},
    {"id":51,"raza":"Norwegian Forest Cat","descripcion":"Gato grande de Noruega, pelaje largo y melena","origen":"Noruega","tiempo_de_vida":"12-16 años","peso":"4-9 kg","imagen":"https://i.postimg.cc/MnZDH77X/Norwegian-Forest-Cat.webp"},
    {"id":52,"raza":"Ocicat","descripcion":"Raza manchada criada para parecerse a un ocelote","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/75PVh33f/Ocicat.webp"},
    {"id":53,"raza":"Ojos Azules","descripcion":"Gato con ojos azules intensos independientemente del pelaje","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"2-4 kg","imagen":"https://i.postimg.cc/k2McGQQV/Ojos-Azules.webp"},
    {"id":54,"raza":"Oriental Longhair","descripcion":"Variedad de pelo largo del Oriental Shorthair","origen":"Tailandia","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/21jwyQQL/Oriental-Longhair.webp"},
    {"id":55,"raza":"Oriental Shorthair","descripcion":"Gato elegante, delgado, orejas grandes y muy vocal","origen":"Tailandia","tiempo_de_vida":"10-15 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/WdpnzGGk/Oriental-Shorthair.webp"},
    {"id":56,"raza":"Persa","descripcion":"Gato de pelaje largo y sedoso, cara redonda y nariz corta","origen":"Irán","tiempo_de_vida":"10-17 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/sMfcxYYW/Persa.webp"},
    {"id":57,"raza":"Peterbald","descripcion":"Gato de pelo corto o sin pelo, de orejas grandes","origen":"Rusia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/gxcDjVVR/Peterbald.webp"},
    {"id":58,"raza":"Pixie-bob","descripcion":"Gato con aspecto de bobcat, puede tener cola corta","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"4-8 kg","imagen":"https://i.postimg.cc/DSfg0rr1/Pixie-bob.webp"},
    {"id":59,"raza":"Ragamuffin","descripcion":"Gato grande de pelaje largo, muy dócil y afectuoso","origen":"Estados Unidos","tiempo_de_vida":"12-16 años","peso":"4-9 kg","imagen":"https://i.postimg.cc/RWCRh771/Ragamuffin.webp"},
    {"id":60,"raza":"Ragdoll","descripcion":"Gato grande y musculoso, muy dócil y relajado","origen":"Estados Unidos","tiempo_de_vida":"12-17 años","peso":"4-9 kg","imagen":"https://i.postimg.cc/87kHcRRB/Ragdoll.webp"},
    {"id":61,"raza":"Russian Blue","descripcion":"Gato de pelaje azul grisáceo y ojos verdes","origen":"Rusia","tiempo_de_vida":"10-20 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/XrN8qff8/Russian-Blue.webp"},
    {"id":62,"raza":"Sam Sawet","descripcion":"Gato tailandés de pelaje corto y musculoso","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/jDqX2HHc/Sam-Sawet.webp"},
    {"id":63,"raza":"Scottish Fold","descripcion":"Distintivo por sus orejas que se doblan hacia adelante","origen":"Escocia","tiempo_de_vida":"11-15 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/WdpnzGGS/Scottish-Fold.webp"},
    {"id":64,"raza":"Selkirk Rex","descripcion":"Gato de pelaje rizado, puede ser de pelo corto o largo","origen":"Estados Unidos","tiempo_de_vida":"10-15 años","peso":"3-6 kg","imagen":"https://i.postimg.cc/dhQB3224/Selkirk-Rex.webp"},
    {"id":65,"raza":"Serengeti","descripcion":"Cruce entre Bengalí y Oriental, aspecto salvaje sin genes salvajes","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"4-7 kg","imagen":"https://i.postimg.cc/WdpnzGG5/Serengeti.webp"},
    {"id":66,"raza":"Siamese","descripcion":"Raza antigua y reconocible, puntos de color y ojos azules","origen":"Tailandia","tiempo_de_vida":"10-12 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/jDqX2HHg/Siamese.webp"},
    {"id":67,"raza":"Siberian","descripcion":"Gato grande ruso con triple capa de pelaje, hipoalergénico","origen":"Rusia","tiempo_de_vida":"11-18 años","peso":"4-9 kg","imagen":"https://i.postimg.cc/k2jyb2sx/Siberian.webp"},
    {"id":68,"raza":"Singapura","descripcion":"Una de las razas más pequeñas, pelaje sepia y ojos grandes","origen":"Singapur","tiempo_de_vida":"11-15 años","peso":"2-3 kg","imagen":"https://i.postimg.cc/21HxZ1Gd/Singapura.webp"},
    {"id":69,"raza":"Snowshoe","descripcion":"Gato de pies blancos, cruce de Siamés y American Shorthair","origen":"Estados Unidos","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/TKkcDK0q/Snowshoe.webp"},
    {"id":70,"raza":"Somali","descripcion":"Variedad de pelo largo del Abisinio, cola esponjosa","origen":"Somalia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/PC6MwCyQ/Somali.webp"},
    {"id":71,"raza":"Sphynx","descripcion":"Gato sin pelo, piel arrugada y gran calidez corporal","origen":"Canadá","tiempo_de_vida":"8-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/JsTQksxq/Sphynx.webp"},
    {"id":72,"raza":"Thai","descripcion":"Versión tradicional del Siamés, cuerpo más robusto","origen":"Tailandia","tiempo_de_vida":"10-14 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/dhW9yh6n/Thai.webp"},
    {"id":73,"raza":"Tonkinese","descripcion":"Cruce entre Siamés y Burmés, pelaje corto y ojos azules","origen":"Estados Unidos","tiempo_de_vida":"10-16 años","peso":"3-5 kg","imagen":"https://i.postimg.cc/zydkgy70/Tonkinese.webp"}
  ];

  res.status(200).json(catsData);
}
