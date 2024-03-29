import React,{useState} from 'react';
import Town from './Town';

const City = ({city,id}) => {
    const[toggle,setToggle] = useState(false);

    function handleToggle (event) {
      event.stopPropagation();
      
      setToggle(!toggle);

    }
  return (
    <>
      <li id={id} onClick={handleToggle}>
        {city.name}       
      </li>
        {toggle && <ul>
            {city.towns.map((town,id)=> {
                return <Town town={town} id={'town'+(id+1)} key={id}/>
            })}
        </ul>}
    </>
  )
}

export default City
