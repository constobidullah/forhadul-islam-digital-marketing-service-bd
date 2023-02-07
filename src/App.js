import './App.css';
import GrowMarketing from './components/GrowMarketing/GrowMarketing';
import MarketingAgency from './components/MarketingAgency/MarketingAgency';
import MemorableJourney from './components/MemorableJourney/MemorableJourney';
import ServiceProvide from './components/ServiceProvide/ServiceProvide';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <GrowMarketing></GrowMarketing>
      <MarketingAgency></MarketingAgency>
      <WhoWeAre></WhoWeAre>
      <MemorableJourney></MemorableJourney>
      <ServiceProvide></ServiceProvide>
    </div>
  );
}

export default App;
