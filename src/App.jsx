import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import AuthModal from "./customer/Auth/AuthModal";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const openAuthModal =
    location.pathname === "/login" || location.pathname === "/register";

  const handleCloseAuthModal = () => {
    navigate("/");
  };
  return (
    <div className="relative min-h-screen">
      <div className="pt-20">
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
        </Routes>

        {/* <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} /> */}
      </div>
    </div>
  );
}

export default App;
