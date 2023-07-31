import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,horror,originals,comedy,romance,documentry} from "./urls"



function App() {
  
   
  
  return (
   
<div>
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix Originals'/>
  <RowPost url={action} title="ACTIONS" isSmall/>
  <RowPost url={comedy} title="CoMEDY" isSmall/>
  <RowPost url={horror} title="HORROR" isSmall/>
  <RowPost url={romance} title="ROMANCE" isSmall/>
  <RowPost url={documentry} title="DOCUMENTRY" isSmall/>
 
 
 
</div>
    
  );
        }

export default App;
        

