import React from 'react'
import Block from '../components/Block'
import {DIV} from '../styles'

const Hybrid = (props) =>{
    let divStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"space-around",
        marginBottom:"150px"
    }
    let imgStyle={
        width:"100px",
        height:"100px",
    }
    return <div style={divStyle}>
        <img src={props.leftpic} style={{borderRadius:"20px",marginRight:"30px",marginLeft:"250px"}}/>
        <div style={{ width:"440px",height:"440px",paddingTop:"30px",textAlign:"left",paddingLeft:"50px",paddingRight:"100px",marginRight:"30px",marginLeft:"30px"}}> 
        <img src={props.src} style={imgStyle} />
        <p style={{fontWeight:"bold",fontSize:"2.5em"}}>{props.text[0]}</p>
        <p style={{fontSize:"1.5em"}}>{props.text[1]}</p><br/>
        <DIV>TRADE NOW</DIV>
    
    </div>
    </div>
}

export default Hybrid