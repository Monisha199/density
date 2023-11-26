import React from 'react'

const Badge = (props) =>{
    return <div style={{marginTop:"80px",marginBottom:"80px"}}>
    <div style={{width:"76%",height:"100px",border:"2px solid",borderColor:"#63C514",margin:"auto",padding:"20px"}}>
        <p style={{display:"inline-block", marginLeft:"10px",marginRight:"80px",borderRight:"2px solid rgba(129,186,83,0.5)",paddingRight:"50px",borderColor:"rgba(129,186,83,0.5)"}}>
            <span style={{color:"yellow",fontSize:"2.5em"}}>{props.content[0]}</span><br/>{props.content[1]}
        </p>
        <p style={{display:"inline-block",marginRight:"80px",borderRight:"2px solid rgba(129,186,83,0.5)",paddingRight:"50px",borderColor:"rgba(129,186,83,0.5)"}}>
            <span style={{color:"yellow",fontSize:"2.5em"}}>{props.content[2]}</span><br/>{props.content[3]}</p>
        <p style={{display:"inline-block",marginRight:"80px",borderRight:"2px solid rgba(129,186,83,0.5)",paddingRight:"50px",borderColor:"rgba(129,186,83,0.5)"}}>
            <span style={{color:"yellow",fontSize:"2.5em"}}>{props.content[4]}</span><br/>{props.content[5]}</p>
        <p style={{display:"inline-block"}}>
            <span style={{color:"yellow",fontSize:"2.5em"}}>{props.content[6]}</span><br/>{props.content[7]}</p>
    </div>
    </div>
}

export default Badge