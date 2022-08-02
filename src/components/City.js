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
      <li id={id} onClick={handleToggle}>
        {city.name}
        {toggle && <ul>
            {city.towns.map((town,id)=> {
                return <Town town={town} id={'city'+(id+1)} key={id}/>
            })}
        </ul>}
      </li>
    </div>
  )
}

export default City
