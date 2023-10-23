import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routers";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductListFromApi } from "./action/product";
const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchProductListFromApi());
  return (
    <>
      <Routes />
      <Outlet />
    </>
  );
};

export default App;
