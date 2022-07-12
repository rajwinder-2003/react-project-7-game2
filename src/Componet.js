import React from 'react'

function Componet(props) {
     const classes = props.className?`${props.className} span`:'span';
  return (
    <span className={classes} onClick={props.onClick}>
        {props.State}
    </span>
  )
}

export default Componet;