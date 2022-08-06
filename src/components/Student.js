const Students=(props) => {
   //  var data=["React","Mongodb","express","vartika"];
     var data=[{name:"react"},{name:"express"},{name:"mongodb"}] // --> dynamically 
    return(
        <div>

        Here the list of datas
        {
            data.map((value)=>{
               // return <li>{value}</li>
                return <li>{value.name}</li>

            })
        }
        </div>
       
    )
}
export default Students;