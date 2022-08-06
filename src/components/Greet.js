import Count from "./Count";
const Greet=(props)=> {
  return (
    <div>
      <Count name="1(import count.js in greet.js)" />
      <h1> good morning!{props.name}</h1>
    </div>
  )
}
export default Greet;
