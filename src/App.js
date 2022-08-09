// import Greet from "./components/Greet";
// import Count from "./components/Count";
// import Students from "./components/Student";

// const App=()=>{
//   return(
//      <><div> 
//     <Greet name="Rhythm(import greet.js in app.js)"/>
//     <Count name="32(import count.js in app.js)"/>
//     <Students></Students>
//      </div>
//      </>
//      );

// };
// export default App;


          //here we are importing rooms here and doing some practice on that ;;
// import Rooms from "./components/Rooms";
// import Students from "./components/Student";
// const Home=()=>
// {
//     var data=[4,3,2,1,1,3];
//     var Studentdata=[{name:"Rhythm"},{name:"Raghav"},{name:"Buddy"}] // --> dynamically 
// return(
// <div>
//   <p>
//     <h1>Welcome to Home!</h1>

//     <Rooms keyy={4}/>
    
//     {
//       data.map((value)=>{
// return <li>{value*value}</li>

//       })
//     }

//     <Students data={Studentdata}></Students>
//   </p>

// </div>
// );
// }
// export default Home;

//nested working on components
import Aa from "./components/a";
// import Students from "./components/c";
const Apps=()=>{
    return(
<div>
    <p>We are in app js</p>
   <Aa/>
</div>
    )

}
export default Apps;