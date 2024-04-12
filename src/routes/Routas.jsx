import LayoutHistorias from "../components/LayoutHistorias";
import LayoutLogin from "../components/LayoutLogin";
import LayoutRoutes from "../components/LayoutRoutes";

const Rota = [
  {
    path: "/",
    element:(<LayoutLogin />),
    children: [
      {
        path: "dashboard",
        element: <LayoutRoutes />,
      },
      {
        path: "historias",
        element: <LayoutHistorias />
      }
    ],
  },
];



export default Rota;
