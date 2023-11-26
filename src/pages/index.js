import * as React from "react"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import Coverpage from "../components/Coverpage"
import Badge from "../components/Badge"
import Mobile from "../components/Mobile"
import Profit from "../components/Profit"
import Hybrid from "../components/Hybrid"
import Logo from "../components/logo"
import Last from '../components/Last'
import Lastblack from "../components/Lastblack"
import {DIV} from '../styles'
import End from '../components/End'

const MAIN = styled.main`
  background-color:black;
  color:white;
  text-align:center;
  font-family :verdana;
`
const IndexPage = () =>{
  return <MAIN>
    <Navbar/>
    <Coverpage content={["It's time to trade, the future","Trade BTC,ETH Futures With 125x Leverage And Earn Rewards"]} src="https://img.freepik.com/premium-photo/mobile-app-layout-design-stock-portfolio-manager-professional-sophisticated-layou-concepts_655090-797641.jpg?size=626&ext=jpg&ga=GA1.1.1569570689.1700404536&semt=ais" showImage={true} textSize="6em" changecolor={false}/>
    <Badge content={["00%","Conversion Fee","500 Mn+","Lifetime Volume Traded","250+","Total Tradable Pairs","15,000+","Traders"]}/>
    <Mobile text="One App. Endless Possibilities" src="https://cdn-icons-png.flaticon.com/128/10061/10061308.png?ga=GA1.1.1569570689.1700404536&semt=ais"/>
    <Mobile text="Future of Derivative Trading." src="https://cdn-icons-png.flaticon.com/128/1104/1104950.png?ga=GA1.1.1569570689.1700404536&semt=ais"/>
    <Mobile text="Is now here, for you." src="https://cdn-icons-png.flaticon.com/128/4773/4773926.png?ga=GA1.1.1569570689.1700404536&semt=ais"/>
    <Coverpage content={["Trade More.Pay Less.","Our Low Fees Supercharge Your Profits"]} showImage={false} textSize="5em"/>
    <Profit content={["CoinDCX","0.025","0.07"]} changeColor={false}/>
    <Profit content={["density","0.02","0.04"]} changeColor={true} bgColor="green"/>
    <Profit content={["Delta.Exchange","0.02","0.05"]} changeColor={false}/>
    <Coverpage content={["Explore the Markets like it is your Playground.","Search for your favourite coins and stay ahead of the market"]} src="https://img.freepik.com/premium-photo/business-charts-with-digital-interface_670147-7630.jpg?size=626&ext=jpg&ga=GA1.1.1569570689.1700404536&semt=ais" showImage={true} textSize="4em" exploreMarkets={true} changecolor={false}/>
    <Coverpage content={["Unlock New Frontiers","Are you a stock trader looking for new opportunities to make money ?We got you covered!"]}  showImage={false} textSize="5em" changecolor={false}/>
    <Badge content={["Same","Strategies","Same","Indicators","Better","Leverage","24x7","Trading"]}/>
    <img src="https://img.freepik.com/free-vector/abstract-financial-big-data-graph-visualization_1217-2826.jpg?w=1380&t=st=1700934286~exp=1700934886~hmac=5675baec71047a7d36d032294ad2500cd3d9a9aff82686144032faab11603f5f"/>
    <Coverpage content={["Start Small.Earn Big","Deposit a minimum of 1000 and get a Deposit bonus + dedicated relationship manager"]}  showImage={false} textSize="5em" changecolor={true}/>
    <Coverpage content={["Derivates made simple in 3 Easy Steps",""]}  showImage={false} textSize="4em" changecolor={false}/>
    <Hybrid leftpic="https://th.bing.com/th/id/OIP.EUub8dRhBDE-kYTSoh93-gAAAA?pid=ImgDet&w=188&h=333&c=7&dpr=1.3" src="https://cdn-icons-png.flaticon.com/128/4122/4122726.png?ga=GA1.1.1569570689.1700404536&semt=ais" text={["Create an Account","Register & Complete your Verification in less than 2 minutes","TRADE NOW"]}/>
    <Hybrid leftpic="https://th.bing.com/th/id/OIP.FAbLOdb6fip2Ag7M5VOlDQHaQC?pid=ImgDet&w=162&h=350&c=7&dpr=1.3" src="https://cdn-icons-png.flaticon.com/128/12621/12621043.png?ga=GA1.1.1569570689.1700404536&semt=ais" text={["Deposit Funds","Add funds quickly using a variety of payment methods","TRADE NOW"]}/>
    <Hybrid leftpic="https://th.bing.com/th/id/OIP.v1uhxBOTjSJnsQzoZx3stQHaQB?pid=ImgDet&w=162&h=350&c=7&dpr=1.3" src="https://cdn-icons-png.flaticon.com/128/9597/9597455.png?ga=GA1.1.1569570689.1700404536&semt=ais" text={["Become a Trader","Choose Your Trading Pair & Trade Seamlessly"]}/>
    <Logo/>
    <Last content={["Don't take our word for it.","Hear it from our expert community of traders who have made insane amounts in a short amount of time"]}  showImage={false} textSize="4em" changecolor={true}/><br/>
    <img src="https://cdn-icons-png.flaticon.com/128/9346/9346801.png?ga=GA1.1.1569570689.1700404536&semt=ais" alt="announcement"/>
    <Lastblack content={["Earn Money.The Easy Way.","No complexity of trading fee, generate volume and win"]}  showImage={false} textSize="4em" changecolor={false}/>
    <DIV>START EARNING NOW</DIV><br/><div style={{height:"80px"}}></div>
    <div style={{backgroundImage:`url("https://img.freepik.com/free-photo/golden-lighting-effect-background_1340-8920.jpg?size=626&ext=jpg&ga=GA1.1.1569570689.1700404536&semt=ais")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}><br/>
    <Coverpage content={["Trade Together.Thrive Together.","Join the fun filled community on our platform"]}  showImage={false} textSize="3em" changecolor={false}/>
    <Badge content={["10,000+","Traders","100 Mn","Daily Volume Traded","Daily","Trade Analysis","Live","signals"]}/>
    <DIV>JOIN COMMUNITY</DIV><br/>
    <div style={{height:"80px"}}></div></div>
    <div style={{fontSize:"5em",paddingTop:"100px",marginBottom:"100px"}}>Meet the Visionaries behind Density.</div>
    <img src="/founders.png" style={{marginBottom:"100px"}}/>
    <End/>
  </MAIN>
}

export const Head =() => <title>Homepage</title>

export default IndexPage