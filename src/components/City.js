import React,{useState} from 'react';
import Town from './Town';

const City = ({city,id}) => {
    const[toggle,setToggle] = useState(false);

    function handleToggle (event) {
      event.stopPropagation();
      
      setToggle(!toggle);

    }
  return (
    <div>
      <li id={id} key={id} onClick={handleToggle}>
        <h2>{city.name}</h2>
        {toggle && <ul>
            {city.towns.map((town,id)=> {
                return <Town town={town} id={'city'+(id+1)} />
            })}
        </ul>}
      </li>
    </div>
  )
}

export default City
