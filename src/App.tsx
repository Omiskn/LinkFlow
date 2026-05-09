import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/LoginPage";
// import Register from "./pages/RegisterPage";
// import ForgotPassword from "./pages/ForgotPasswordPage";
import "./index.css";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/DashboardPage";
import Settings from "./pages/Settings";
import Links from "./pages/LinkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/links" element={<Links />} />
        </Route>
        {/* <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
