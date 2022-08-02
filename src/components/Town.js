import React from 'react'

function Town({town,id}) {
  return (
    <div>
      <li id={id}>
        {town.name}
      </li>
    </div>
  )
}

export default Town

