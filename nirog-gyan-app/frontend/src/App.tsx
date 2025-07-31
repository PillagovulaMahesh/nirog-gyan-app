// frontend/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorList from './pages/DoctorList';
import DoctorProfile from './pages/DoctorProfile';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
