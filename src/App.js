import './App.css';
import Advertising from './components/Advertising/Advertising';
import BusinessPartner from './components/BusinessPartner/BusinessPartner';
import ContactFrom from './components/ContactFrom/ContactFrom';
import Diffrent from './components/Diffrent/Diffrent';
import GrowMarketing from './components/GrowMarketing/GrowMarketing';
import MarketingAgency from './components/MarketingAgency/MarketingAgency';
import MemorableJourney from './components/MemorableJourney/MemorableJourney';
import Payment from './components/Payment/Payment';
import RelyDms from './components/RelyDms/RelyDms';
import ServiceProvide from './components/ServiceProvide/ServiceProvide';
import SingleRating from './components/SingleRating/SingleRating';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
