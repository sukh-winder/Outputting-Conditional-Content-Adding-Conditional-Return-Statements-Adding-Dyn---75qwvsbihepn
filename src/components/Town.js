import React from 'react'

function Town({town,id}) {
  return (
    <div>
      <li id={id} key={id}>
        <h3>{town.name}</h3>
      </li>
    </div>
  )
}

export default Town

