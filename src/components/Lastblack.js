import React from 'react'
import {DIV} from '../styles'
import Blockblack from './Blockblack'

const Lastblack = (props) =>{
    let textSize = {
        fontSize: props.textSize
      }
    let mainCont={
        width:"auto",
            textAlign:"center",
            margin:"auto",
            fontFamily :"verdana",
            marginBottom:"50px",
            marginTop:"50px"
    }
    let outerdiv={}
    if(props.changecolor){
        outerdiv={
            width:"90%",
            margin:"auto",
            backgroundColor:"white",
            color:"black",
            paddingTop:"100px",
            paddingBottom:"80px"
        }
    }else{
        outerdiv={
            width:"90%",
            margin:"auto",
            backgroundColor:"black",
            color:"white",
            paddingTop:"100px",
            paddingBottom:"80px"
        }
    }
    return <div style={outerdiv}>
        <div style={mainCont}>
        <div style={textSize}>{props.content[0]}</div><br/><br/>
        <div style={{fontSize:"1.2em"}}>{props.content[1]}</div><br/><br/><br/>
        {(props.showImage)?
            (<><img src={props.src} style={{borderRadius:"20px",marginTop:"20px",marginBottom:"50px"}}/><br/><br/></>) :(<></>)
        }
        {(props.exploreMarkets)?(<DIV>EXPLORE MARKETS</DIV>):(<></>)}
        <div style={{display:"flex",justifyContent:"left",margin:"auto"}}>
            <Blockblack text={["Share your referral link",""]} src="https://cdn-icons-png.flaticon.com/128/9195/9195743.png?ga=GA1.1.1569570689.1700404536&semt=ais" showleftpic={false}/>
            <Blockblack text={["Invite Friends to Trade on Density",""]} src="https://cdn-icons-png.flaticon.com/128/4122/4122726.png?ga=GA1.1.1569570689.1700404536&semt=ais" showleftpic={false}/>
            <Blockblack text={["Trade and Earn",""]} src="https://cdn-icons-png.flaticon.com/128/1104/1104950.png?ga=GA1.1.1569570689.1700404536&semt=ais" showleftpic={false}/>
        </div>
        </div>
    </div>
}

export default Lastblack

