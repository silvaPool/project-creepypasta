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
    ],
  },
];



export default Rota;
