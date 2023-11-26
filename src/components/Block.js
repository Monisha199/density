import React from 'react';

const Block = (props)=>{
    let imgStyle={
        width:"180px",
        height:"180px",
        
    }
    let divStyle={}
    if(props.showleftpic){
        divStyle={
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignContent:"space-around"
        }
    }else{
        divStyle={
            display:"block"
        }
    }
    
    return <div style={{ width:"440px",height:"450px",backgroundColor:"#EAEDE8",paddingTop:"30px",textAlign:"left",paddingLeft:"50px",paddingRight:"90px",marginRight:"30px",marginLeft:"30px"}}> 
        <img src={props.src} style={imgStyle} />
        <p style={{fontWeight:"bold",fontSize:"1.8em"}}>{props.text[0]}</p>
        <p>{props.text[1]}</p>
    
    </div>
    
}


export default Block

// leftPic="https://th.bing.com/th/id/OIP.EUub8dRhBDE-kYTSoh93-gAAAA?pid=ImgDet&w=188&h=333&c=7&dpr=1.3"
// leftPic="https://th.bing.com/th/id/OIP.FAbLOdb6fip2Ag7M5VOlDQHaQC?pid=ImgDet&w=162&h=350&c=7&dpr=1.3"
// leftPic="https://th.bing.com/th/id/OIP.v1uhxBOTjSJnsQzoZx3stQHaQB?pid=ImgDet&w=162&h=350&c=7&dpr=1.3"