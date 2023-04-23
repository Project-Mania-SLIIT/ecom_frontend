import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContent from './pages/admin/dashboardLayout';
import DashboardLayout from './pages/user/dashboardLayout/index.jsx';
import H from "./pages/user/singleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user routes */}
          <Route exact path="/">
          <Route exact path="home" element={<DashboardLayout />} />
           <Route exact path="/" element={<DashboardContent />} />
          </Route>
          <Route exact path="single" element={<H />} />

        {/* 404 page */}
        {/* <Route path="*" element={<Error404/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
