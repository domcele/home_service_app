import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/AboutUs/AboutUs";

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  ABOUTUS: "/aboutus",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.SERVICES,
    Component: Services,
  },
  {
    path: ROUTES.ABOUTUS,
    Component: AboutUs,
  },
];

export const navigationBarLinks = [
  {
    title: "Home",
    path: ROUTES.HOME,
  },
  {
    title: "Services",
    path: ROUTES.SERVICES,
  },
  {
    title: "About Us",
    path: ROUTES.ABOUTUS,
  },
];
