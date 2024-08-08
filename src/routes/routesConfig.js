import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage/PersonPage";
import NotFoundPage from "@containers/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/people",
    component: PeoplePage,
  },
  {
    path: "/people/:id",
    component: PersonPage,
  },
  {
    path: "/not-found",
    component: NotFoundPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routesConfig;
