import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContent from "./pages/admin/dashboardLayout";
import DashboardLayout from "./pages/user/dashboardLayout";
import SingleProduct from "./pages/user/singleProduct";
import ContactUs from "./pages/user/contactUs";
import Login from "./pages/common/login";
import AboutUs from "./pages/user/aboutUs";
import AllProducts from "./pages/user/allProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user routes */}
          <Route exact path="/seller">
            <Route exact path="/seller/*" element={<DashboardContent />} />
          </Route>
          <Route exact path="/">
            <Route exact path="home" element={<DashboardLayout />} />
            <Route exact path="admin" element={<DashboardContent />} />
          </Route>
          <Route exact path="single" element={<SingleProduct />} />
          <Route exact path="login" element={<Login />} />

          <Route exact path="contactUs" element={<ContactUs />} />
          <Route exact path="aboutUs" element={<AboutUs />} />
          <Route exact path="allProducts" element={<AllProducts />} />

          {/* 404 page */}
          {/* <Route path="*" element={<Error404/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
