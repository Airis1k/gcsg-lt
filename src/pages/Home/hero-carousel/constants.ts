type image = {
   id: number;
   src: string;
   alt: string;
   header: string;
   paragraph: string;
};

export const IMAGES: image[] = [
   {
      id: 1,
      src: "https://static.vecteezy.com/system/resources/previews/009/273/206/large_2x/a-large-meadow-in-the-background-is-the-sky-nature-background-image-concept-free-photo.jpg",
      alt: "field of grass with beautiful blue sky",
      header: "Field of grass",
      paragraph: "field of grass with beautiful blue sky",
   },
   {
      id: 2,
      src: "https://static.vecteezy.com/system/resources/previews/027/793/484/non_2x/young-plant-growing-in-the-morning-light-and-green-nature-free-photo.jpg",
      alt: "plants",
      header: "Plants",
      paragraph: "zoomed green plants in the forest",
   },
   {
      id: 3,
      src: "https://static.vecteezy.com/system/resources/previews/023/131/372/non_2x/spa-natural-background-illustration-ai-generative-free-photo.jpg",
      alt: "ai picture",
      header: "AI Picture",
      paragraph: "ai generated picture, water",
   },
];
