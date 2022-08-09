import Students from "./c";
const Bro=(props)=>{
    return(
        <div>
            <p>WE are in Component B</p>
            <Students data={props.data1}/>
        </div>
    )
}
export default Bro;