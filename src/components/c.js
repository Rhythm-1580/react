const Students=(props)=>{
    // console.log=(props.data); 
    var vall=props.data.map((val)=>{
        return <li>{val.name}</li>
    })  

    return(
        <div>
            <div>We Are in Component C</div>
            {vall}

        </div>
    );
}
export default Students;
