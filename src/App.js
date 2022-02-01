import logo from './logo.svg';
import TopBanner from "./components/TopBanner/topBanner"
import Services from "./components/Services/Services"
import TopNavigation from "./components/TopNavigation/TopNavigation"

function App() {
  return (
    <div>
          <TopNavigation/>
          <TopBanner/>
          <Services/>
    </div>
  );
}

export default App;
