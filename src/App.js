import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AxiosQuanLySinhVien from "./Axios-QuanLySinhVien/AxiosQuanLySinhVien";
import LoadingComponent from "./Axios-QuanLySinhVien/Components/LoadingComponent/LoadingComponent";
import NavRoute from "./Axios-QuanLySinhVien/Components/NavRouter/NavRoute";
import DetailPage from "./Axios-QuanLySinhVien/Pages/DetailPage/DetailPage";
import HomePage from "./Axios-QuanLySinhVien/Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavRoute />
      <LoadingComponent />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/dssv"} component={AxiosQuanLySinhVien} />
        <Route path={"/detail/:id"} component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
