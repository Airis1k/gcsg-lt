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
      src: "https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg",
      alt: "field of grass with beautiful blue sky",
      header: "Field of grass",
      paragraph: "field of grass with beautiful blue sky",
   },
   {
      id: 2,
      src: "https://i.pinimg.com/originals/43/13/66/43136636f16bf94193ea96b6a9a8d25b.png",
      alt: "plants",
      header: "Plants",
      paragraph: "zoomed green plants in the forest",
   },
   {
      id: 3,
      src: "https://wpamelia.com/wp-content/uploads/2019/02/6284.jpg",
      alt: "ai picture",
      header: "AI Picture",
      paragraph: "ai generated picture, water",
   },
];
