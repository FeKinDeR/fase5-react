import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Tecnologias from "./pages/Tecnologias.jsx";
import OrgaosEIniciativas from "./pages/OrgaosEIniciativas.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import Contato from "./pages/Contato.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/orgaos-e-iniciativas" element={<OrgaosEIniciativas />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
