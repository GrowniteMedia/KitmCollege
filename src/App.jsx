// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css'
// import Footer from './CommonComponents/Footer'
// import Navbar from './CommonComponents/Navbar'
// import AffiliationSection from './Pages/AffiliationSection'
// import CourseSelection from './Pages/CourseSelection'
// import HappeningsComponent from './Pages/HappeningsComponent'
// import HeroSection from './Pages/HeroSection'
// import IndustryCollaborations from './Pages/IndustryCollaborations '
// import KitmCollegeBanner from './Pages/KitmCollegeBanner'
// import NoticeBar from './Pages/NoticeBar'
// import ProfileCard from './Pages/ProfileCard'
// import ProgramsComponent from './Pages/ProgramsComponent'
// import StatsBar from './Pages/StatsBar'
// import Testimonials from './Pages/Testimonials'
// import GalleryTab from './Pages/GalleryTab';
// function App() {

//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <StatsBar />
//       <CourseSelection />
//       <NoticeBar/>
//       <KitmCollegeBanner/>
//       <ProfileCard/>
//       <ProgramsComponent/>
//       <IndustryCollaborations/>
//       <Testimonials/>
//       <AffiliationSection/>
//       <HappeningsComponent/>
//       <Footer/>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/gallery" element={<GalleryTab />} />
//       </Routes>
//       </BrowserRouter>
//     </>
    
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';
import AffiliationSection from './Pages/AffiliationSection';
import CourseSelection from './Pages/CourseSelection';
import HappeningsComponent from './Pages/HappeningsComponent';
import HeroSection from './Pages/HeroSection';
import IndustryCollaborations from './Pages/IndustryCollaborations '
import KitmCollegeBanner from './Pages/KitmCollegeBanner';
import NoticeBar from './Pages/NoticeBar';
import ProfileCard from './Pages/ProfileCard';
import ProgramsComponent from './Pages/ProgramsComponent';
import StatsBar from './Pages/StatsBar';
import Testimonials from './Pages/Testimonials';
import GalleryTab from './Pages/GalleryTab';
import LifeKitm from './Pages/LIfeKitm';
import AboutKitm from './Pages/AboutKitm';
import Academics from './Pages/Academics';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <Router> {/* Ensure Router wraps everything */}
      <Navbar />
      <Routes>
        <Route path="/home" element={
          <>
            <HeroSection />
            <StatsBar />
            <CourseSelection />
            <NoticeBar />
            <KitmCollegeBanner />
            <ProfileCard />
            <ProgramsComponent />
            <IndustryCollaborations />
            <Testimonials />
            <AffiliationSection />
            <HappeningsComponent />
          </>
        } />
        <Route path="/gallery" element={<GalleryTab />} />
        <Route path="/life-@kitm" element={<LifeKitm />} />
        <Route path="/about-kitm" element={<AboutKitm />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<GalleryTab />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

