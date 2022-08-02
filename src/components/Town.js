import React from 'react'

function Town({town,id}) {
  return (
    <>
      <li id={id}>
        {town.name}
      </li>
    </>
  )
}

export default Town

