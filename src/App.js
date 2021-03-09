import logo from './logo.svg';
import './App.css';
import Ford from './Ford'
import Honda from './Honda'
import Toyota from './Toyota'
import Jeep from './Jeep'
function App(){

  return(
    <div>
      
<Ford startingCount={15000}/>
<Honda startingCount={20000}/>
<Toyota startingCount={25000}/>
<Jeep startingCount={10000}/>

    </div>
  )
  }export default App;