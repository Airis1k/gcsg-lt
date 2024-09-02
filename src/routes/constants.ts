type Route = {
   id: number;
   name: string;
   link: string;
};

export const ROUTES: Route[] = [
   {
      id: 1,
      name: "Naujienos",
      link: "/naujienos",
   },
   {
      id: 2,
      name: "Apie mus",
      link: "/apie-mus",
   },
   {
      id: 3,
      name: "Paslaugos",
      link: "/paslaugos",
   },
   {
      id: 4,
      name: "Teisinė",
      link: "/teisine-informacija",
   },
];
