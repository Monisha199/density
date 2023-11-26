import React from 'react'
import { PHONE } from '../styles'

const Mobile= (props) =>{
    return <div style={{marginTop:"150px",marginBottom:"100px"}}>
        <PHONE>
        <img src={props.src} style={{marginTop:"70px"}}/><br/><br/>
            <p style={{fontSize:"2em"}}>{props.text}</p>
        </PHONE>
    </div>
}

export default Mobile