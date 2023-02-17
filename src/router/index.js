import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { Landing } from "../pages/Landing.jsx";
import { ChangePassword } from "../pages/ChangePassword.jsx";
import { Login } from "../pages/Login.jsx";
import { Profile } from "../pages/Profile.jsx";
import { Register } from "../pages/Register.jsx";
import { ResetPassword } from "../pages/ResetPassword.jsx";
import { Transfer } from "../pages/Transfer.jsx";
import { TransferDetail } from "../pages/TransferDetail.jsx";
import { TransferNominal } from "../pages/TransferNominal.jsx";
import { TransferStatus } from "../pages/TransferStatus.jsx";
import { TopUp } from "../pages/TopUp.jsx";
import { ForgotPassword } from "../pages/ForgotPassword";
import { History } from "../pages/History.jsx";

const router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/transfer/:id" element={<TransferNominal />} />
      <Route path="/transfer/:id/detail" element={<TransferDetail />} />
      <Route path="/transfer/:id/status" element={<TransferStatus />} />
      <Route path="/top-up" element={<TopUp />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default router;
