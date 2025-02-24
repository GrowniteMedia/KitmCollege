import './App.css'
import Footer from './CommonComponents/Footer'
import Navbar from './CommonComponents/Navbar'
import AffiliationSection from './Pages/AffiliationSection'
import CourseSelection from './Pages/CourseSelection'
import HappeningsComponent from './Pages/HappeningsComponent'
import HeroSection from './Pages/HeroSection'
import IndustryCollaborations from './Pages/IndustryCollaborations '
import KitmCollegeBanner from './Pages/KitmCollegeBanner'
import NoticeBar from './Pages/NoticeBar'
import ProfileCard from './Pages/ProfileCard'
import ProgramsComponent from './Pages/ProgramsComponent'
import StatsBar from './Pages/StatsBar'
import Testimonials from './Pages/Testimonials'
function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CourseSelection />
      <NoticeBar/>
      <KitmCollegeBanner/>
      <ProfileCard/>
      <ProgramsComponent/>
      <IndustryCollaborations/>
      <Testimonials/>
      <AffiliationSection/>
      <HappeningsComponent/>
      <Footer/>
    </>
    
  )
}

export default App
