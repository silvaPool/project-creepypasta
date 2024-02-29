import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";
import PrimarySearchAppBar from "./components/Header";
import Title from "./components/Title";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LayoutLogin from "./components/LayoutLogin";
import { useState } from "react";
import { storage } from "./firebase";
import { ref } from "firebase/storage";
import CardHistoria from "./pages/CardHistoria";
import Rota from "./routes/Routas";
import AuthProvider from "./providers/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LayoutRoutes from "./components/LayoutRoutes";
import ProtectedRoute from "./components/ProtectedRoute";
import { Cookie } from "@mui/icons-material";

import AppCookies from "./components/Cookies";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import UploadIV from "./components/UploadIV";
import Upload from "./services/Upload";
import PlaySound from "./services/PlaySound";

function App() {
  // const [image, setImage] = useState('');
  // const upload = () => {

  //   if (image === null)
  //     return;
  //     const ref = ref(storage, `/images/${image.name}`).put(image)
  //     .on("state_changed", alert("sucess"), alert);
  // }

  return (
    <>
      {/* <div>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LayoutLogin />} />
              <Route path="dashboard" element={<LayoutRoutes />} />
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </div> */}

    {/* <Upload /> */}

    <PlaySound />

      {/* <div className="App">
      <center>
      <input type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button>
      </center>

      </div> */}
    </>
  );
}

export default App;
