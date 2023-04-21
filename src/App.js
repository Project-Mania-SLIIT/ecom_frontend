import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContent from './pages/admin/dashboardLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user routes */}
          <Route exact path="/">
           <Route exact path="/" element={<DashboardContent />} />
          </Route>

        {/* 404 page */}
        {/* <Route path="*" element={<Error404/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
