import { Route, Routes } from "react-router-dom";
import Adda from "./companents/Adda";
import Addb from "./companents/Addb";
import Create from "./companents/Create";
import Dashboard from "./companents/Dashboard";
import Editp from "./companents/Editp";
import Edits from "./companents/Edits";
import Enddashboard from "./companents/Enddashboard";
import Explore from "./companents/Explore";
import Exxxe from "./companents/Exxxe";
import Home from "./companents/Home";
import Myjobs from "./companents/Myjobs";
import Login from "./companents/reglog/Login";
import Register from "./companents/reglog/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myjobs" element={<Myjobs />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/create" element={<Create />} />
      <Route path="/exxxe" element={<Exxxe/>} />
      <Route path="/enddashboard" element={<Enddashboard/>} />
      <Route path="/adda" element={<Adda/>} />
      <Route path="/addb" element={<Addb/>} />
      <Route path="/editp" element={<Editp/>} />
      <Route path="/edits" element={<Edits/>} />
    </Routes>
  );
}

export default App;
