import React from 'react'
import {DIV} from '../styles'
import Block from '../components/Block'

const Coverpage = (props) =>{
    let textSize = {
        fontSize: props.textSize
      }
    let mainCont={
        width:"900px",
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
        {(props.changecolor)?(<div style={{display:"flex",justifyContent:"left"}}>
            <Block text={["Deposit Bonus.","Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book."]} src="https://media.istockphoto.com/id/1301586057/vector/green-price-tag-label-with-25-text-and-stitches-on-it-and-with-shadow-on-white-background.jpg?s=612x612&w=0&k=20&c=jpaHpwGrAo8StgRe6srRTT6vC7HgHW5IbAdUNV7UcP0=" showleftpic={false}/>
            <Block text={["Dedicated Relationship Manager","Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book."]} src="https://cdn-icons-png.flaticon.com/128/4122/4122823.png?ga=GA1.1.1569570689.1700404536&semt=ais" showleftpic={false}/>
            </div>):(<></>)}
        </div>
    </div>
}

export default Coverpage