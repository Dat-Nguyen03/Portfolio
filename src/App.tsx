import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import UserLayout from "./pages/userLayout";
import AdminLayout from "./pages/adminLayout";
import ListProjects from "./pages/admin/Project/ListProjects";
import AddProject from "./pages/admin/Project/AddProject";
import ListService from "./pages/admin/Service/ListService";
import AddService from "./pages/admin/Service/AddService";
import EditService from "./pages/admin/Service/EditService";
import EditProject from "./pages/admin/Project/EditProject";
import SignIn from "./pages/admin/SignIn";
import ListAbout from "./pages/admin/About/ListAbout";
import EditAbout from "./pages/admin/About/EditAbout";
import ListSetting from "./pages/admin/Setting/ListSetting";
import EditSetting from "./pages/admin/Setting/EditSetting";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route path="projects" element={<ListProjects />} />
          <Route path="projects/add" element={<AddProject />} />
          <Route path="projects/edit/:id" element={<EditProject />} />
          <Route path="services" element={<ListService />} />
          <Route path="services/add" element={<AddService />} />
          <Route path="services/edit/:id" element={<EditService />} />
          <Route path="setting" element={<ListSetting />} />
          <Route path="setting/edit/:id" element={<EditSetting />} />
          <Route path="about" element={<ListAbout />} />
          <Route path="about/edit/:id" element={<EditAbout />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
