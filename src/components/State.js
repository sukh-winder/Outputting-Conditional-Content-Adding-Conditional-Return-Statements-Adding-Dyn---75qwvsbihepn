import React,{useState} from 'react';
import City from './City';

const State = ({state,id}) => {
    const[toggle,setToggle] = useState(false);

    function handleToggle () {
        if(!toggle) {
            setToggle(true);
        }
        else {
            setToggle(false);
        }
    }
  return (
    <>
      <li id={id} onClick={handleToggle}>
        {state.name}
      </li>

        {toggle && <ul>
            {state.cities.map((city,id)=> {
                return <City city={city} id={'city'+(id+1)} key={id}/>
            })}
        </ul>}
    </>
  )
}

export default State

