import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./services/login";
import Layout from "./components/global/Layout";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" index element={<h1>404 Error Not Found</h1>} />
          <Route path="/login" index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
