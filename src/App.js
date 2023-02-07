import './App.css';
import GrowMarketing from './components/GrowMarketing/GrowMarketing';
import MarketingAgency from './components/MarketingAgency/MarketingAgency';
import MemorableJourney from './components/MemorableJourney/MemorableJourney';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <GrowMarketing></GrowMarketing>
      <MarketingAgency></MarketingAgency>
      <WhoWeAre></WhoWeAre>
      <MemorableJourney></MemorableJourney>
    </div>
  );
}

export default App;
