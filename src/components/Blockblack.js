import React from 'react';

const Blockblack = (props)=>{
    let imgStyle={
        width:"150px",
        height:"150px",
        
    }
    let divStyle={
        width:"440px",
            height:"400px",
            backgroundColor:"rgba(59,61,59,0.3)",
            color:"white",
            paddingTop:"30px",
            textAlign:"left",
            paddingLeft:"50px",
            paddingRight:"90px",
            marginRight:"30px",
            marginLeft:"30px"
    }
    // if(props.showleftpic){
    //     divStyle={
    //         width:"440px",
    //         height:"450px",
    //         backgroundColor:"#EAEDE8",
    //         paddingTop:"30px",
    //         textAlign:"left",
    //         paddingLeft:"50px",
    //         paddingRight:"90px",
    //         marginRight:"30px",
    //         marginLeft:"30px"
    //     }
    // }else{
    //     divStyle={
    //         display:"block"
    //     }
    // }
    
    return <div style={divStyle}> 
        <img src={props.src} style={imgStyle} /><br/><br/>
        <p style={{fontWeight:"bold",fontSize:"1.8em"}}>{props.text[0]}</p>
        <p>{props.text[1]}</p>
    
    </div>
    
}


export default Blockblack

// leftPic="https://th.bing.com/th/id/OIP.EUub8dRhBDE-kYTSoh93-gAAAA?pid=ImgDet&w=188&h=333&c=7&dpr=1.3"
// leftPic="https://th.bing.com/th/id/OIP.FAbLOdb6fip2Ag7M5VOlDQHaQC?pid=ImgDet&w=162&h=350&c=7&dpr=1.3"
// leftPic="https://th.bing.com/th/id/OIP.v1uhxBOTjSJnsQzoZx3stQHaQB?pid=ImgDet&w=162&h=350&c=7&dpr=1.3"