import './App.css';
import Advertising from './components/Advertising/Advertising';
import BusinessPartner from './components/BusinessPartner/BusinessPartner';
import ContactFrom from './components/ContactFrom/ContactFrom';
import Diffrent from './components/Diffrent/Diffrent';
import Footer from './components/Footer/Footer';
import GrowMarketing from './components/GrowMarketing/GrowMarketing';
import HeaderSection from './components/HeaderSection/HeaderSection';
import MarketingAgency from './components/MarketingAgency/MarketingAgency';
import MemorableJourney from './components/MemorableJourney/MemorableJourney';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Payment from './components/Payment/Payment';
import RelyDms from './components/RelyDms/RelyDms';
import ServiceProvide from './components/ServiceProvide/ServiceProvide';
import SingleRating from './components/SingleRating/SingleRating';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <HeaderSection></HeaderSection>
      <GrowMarketing></GrowMarketing>
      <MarketingAgency></MarketingAgency>
      <WhoWeAre></WhoWeAre>
      <MemorableJourney></MemorableJourney>
      <ServiceProvide></ServiceProvide>
      <Diffrent></Diffrent>
      <BusinessPartner></BusinessPartner>
      <Advertising></Advertising>
      <RelyDms></RelyDms>
      <SingleRating></SingleRating>
      <Payment></Payment>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}

export default App;
