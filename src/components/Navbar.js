import React from 'react'
import {LI,DIV} from '../styles';


const Navbar = () =>{
    return <div style={{backgroundColor:"rgba(59,70,50,0.3)" , width:"90%",margin:"auto" ,marginBottom:"50px"}}>
        <img src="https://media.licdn.com/dms/image/D560BAQFjbOzcFzFO1A/company-logo_100_100/0/1667044142445?e=1709164800&v=beta&t=Nzd0Vyw2BIfKmQKPgzjz-XnSnb3cHz__DE98WyJzogM"
             style={{height:"50px",marginLeft:"50px",verticalAlign:"middle"}}/>
        <p style={{color:"#E5E993",display:"inline-block",verticalAlign: "center",marginRight:"300px",fontSize:"2em",fontFamily:"sans-serif"}}>density</p>
        <ul type="none" style={{display:"inline-block",marginRight:"80px"}}>
            <LI>Career &emsp;</LI>
            <LI>Blogs &emsp;</LI>
            <LI>Leaderboard &emsp;</LI>
            <LI>Fees &emsp;</LI>
        </ul>
        <DIV>TRADE NOW</DIV>
    </div>
}

export default Navbar