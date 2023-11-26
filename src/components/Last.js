import React from 'react'
import {DIV} from '../styles'
import Block from '../components/Block'

const Last = (props) =>{
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
            <Block text={["Prakash Jamatia.","As someone who's always looking for the next big thing, I was really excited to try out Density's cryto futures trading Platform"]} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1569570689.1700404536&semt=sph" showleftpic={false}/>
            <Block text={["Shambhavi Nayak.","I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful"]} src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.1569570689.1700404536&semt=sph" showleftpic={false}/>
            <Block text={["Arjun Naik.","I've been using this platforms for a few months now and it's been a great experience.I was delighted to see all the major cryto coins listed on Density Exchange"]} src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1569570689.1700404536&semt=sph" showleftpic={false}/>
        </div>
        </div>
    </div>
}

export default Last

