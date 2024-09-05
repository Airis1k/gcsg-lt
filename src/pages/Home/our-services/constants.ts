import Service1 from "../../../assets/service-1.svg";
import Service2 from "../../../assets/service-2.svg";
import Service3 from "../../../assets/service-3.svg";

type service = {
   id: number;
   title: string;
   description: string;
   imageSrc: string;
   imageAlt: string;
};

export const SERVICES: service[] = [
   {
      id: 1,
      title: "Web Development",
      description:
         "I offer comprehensive web development services utilizing HTML, CSS, and JavaScript—core technologies necessary for creating modern, responsive websites. My expertise extends to building everything from simple static pages to complex WordPress and Shopify e-commerce sites. Whether redesigning an existing website or crafting a new one from scratch, I ensure every project is optimized for performance, accessibility, and user experience.",
      imageSrc: Service1,
      imageAlt: "Web development icon",
   },
   {
      id: 2,
      title: "WordPress and CMS Customization",
      description:
         "Specializing in WordPress and other popular content management systems, I provide custom solutions that include theme customization, plugin development, and performance optimizations. My services ensure that your website not only looks great but also runs smoothly, with tailored functionality that meets your specific business needs.",
      imageSrc: Service2,
      imageAlt: "rocket icon",
   },
   {
      id: 3,
      title: "SEO and Digital Marketing",
      description:
         "Leveraging my deep understanding of SEO best practices and digital marketing strategies, I help clients enhance their online presence and achieve higher search engine rankings. From keyword optimization and content creation to technical SEO and user experience improvements, I offer a range of services designed to drive traffic and increase engagement on your digital platforms.",
      imageSrc: Service3,
      imageAlt: "Letter icon",
   },
];
