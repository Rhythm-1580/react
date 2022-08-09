import Bro from "./b";
const Aa=()=>{
    var Studentdata=[{name:"Rhythm"},{name:"Raghav"},{name:"Buddy"}] // --> dynamically 
    return(
        <div>
            <p>WE are in Component A</p>
        <Bro data1={Studentdata}></Bro>
        </div>
    )
}
export default Aa;

