import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Homepage from './pages/Homepage.tsx';
import About from './pages/About.tsx';
import Cohorts from './pages/Cohorts.tsx';
import Application from './pages/application.tsx';
import Contact from './pages/Contact.tsx';
import PaymentSuccess from './pages/PaymentSuccess.tsx';
import PaymentCancel from './pages/PaymentCancel.tsx';

// 1. Import the ScrollToTop component
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 2. Add the ScrollToTop component here */}
      <ScrollToTop />
      
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cohorts" element={<Cohorts />} />
          <Route path="/application" element={<Application />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;