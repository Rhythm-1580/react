import Greet from "./components/Greet";
import Count from "./components/Count";
import Students from "./components/Student";

const App=()=>{
  return(
     <><div> 
    <Greet name="Rhythm(import greet.js in app.js)"/>
    <Count name="32(import count.js in app.js)"/>
    <Students></Students>
     </div>
     </>
     );

};
export default App;