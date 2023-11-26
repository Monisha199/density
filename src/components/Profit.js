import React from 'react'

const Profit = (props) =>{
    let bdStyle={}
    
    if(props.changeColor){
        bdStyle={
            backgroundImage:"linear-gradient(to top, yellow, #63C514)",
            width:"350px",
            height:"380px",
            backgroundColor:"rgba(65,67,63,0.5)",
            margin:"auto",
            paddingTop:"10px",
            display:"inline-block",
            marginRight:"50px",
            color:"black"
        }
    }else{
        bdStyle={
            width:"350px",
            height:"380px",
            backgroundColor:"rgba(65,67,63,0.5)",
            margin:"auto",
            paddingTop:"10px",
            display:"inline-block",
            marginRight:"50px"
        }
    }
    return <main style={bdStyle}>
        <p style={{margin:"50px"}}><span style={{fontSize:"2em"}}>{props.content[0]}</span></p>
        <p style={{margin:"50px"}}><span style={{fontSize:"2em"}}>{props.content[1]}</span><br/><br/> MakerFees</p>
        <p style={{margin:"50px"}}><span style={{fontSize:"2em"}}>{props.content[2]}</span><br/><br/> TakerFees</p>
    </main>
}

export default Profit