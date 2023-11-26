import React from 'react'
import Mobile from './Mobile'
import { PHONE } from '../styles'
import {DIV} from '../styles'
import {LI} from '../styles'

const End = (props) =>{
    let textSize = {
        fontSize: props.textSize
      }
    let mainCont={
        width:"95%",
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
            textAlign:"center"
        }
    }
    return <div style={outerdiv}>
        <div style={mainCont}>
            <div style={{fontSize:"6.5em"}}>Get Started now.</div><br/><br/>
            <PHONE style={{marginTop:"0px"}}>
            <img src="https://media.licdn.com/dms/image/D560BAQFjbOzcFzFO1A/company-logo_100_100/0/1667044142445?e=1709164800&v=beta&t=Nzd0Vyw2BIfKmQKPgzjz-XnSnb3cHz__DE98WyJzogM"
             style={{height:"50px",marginLeft:"0px",verticalAlign:"middle"}}/>density
            <img src="/explode.png" style={{height:"170px", marginTop:"150px"}}/><br/><br/>
            </PHONE>
            <div style={{height:"80px"}}></div>
            <DIV><span style={{fontSize:"2em"}}> &emsp;START TRADING &emsp; </span></DIV><br/>
            <div style={{height:"80px"}}></div>
            <div style={{backgroundColor:"#4FC361"}}>
                <div style={{height:"20px"}}></div>
                <img src=""
                    style={{height:"50px",marginLeft:"0px",verticalAlign:"middle"}}/>density<br/><br/>
                <ul type="none" style={{display:"inline-block",marginRight:"80px"}}>
                    <LI>Blog &emsp;</LI>
                    <LI>Fees &emsp;</LI>
                    <LI>Leaderboard &emsp;</LI>
                    <LI>Careers &emsp;</LI>
                    <LI>Contact Us &emsp;</LI>
                    <LI>Privacy Policy &emsp;</LI>
                </ul>
                <br/>
                <div style={{fontSize:"0.8em",paddingLeft:"80px",paddingRight:"80px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div style={{height:"50px"}}></div>
                <ul type="none" style={{display:"inline-block",marginRight:"80px"}}>
                    <LI><img src="https://cdn-icons-png.flaticon.com/128/747/747543.png" style={{height:"30px",width:"30px"}}/></LI>
                    <LI><img src="https://cdn-icons-png.flaticon.com/128/4926/4926492.png" style={{height:"30px",width:"30px"}}/></LI>
                    <LI><img src="https://cdn-icons-png.flaticon.com/128/1384/1384030.png" style={{height:"30px",width:"30px"}}/></LI>
                    <LI><img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" style={{height:"30px",width:"30px"}}/></LI>
                </ul>
            </div>
        </div>
    </div>
}

export default End