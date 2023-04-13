import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../Pages/data"
import { useState } from "react"




const Container=styled.div`
display:flex;
height:100vh;
background-color:white;
width:100%;
position: relative;
overflow:hidden;
 
`

const Arrow=styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
display:flex;
align-item:center;
justify-content:center;
position: absolute;
top:0;
bottom:0;
margin:auto;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"}; 
cursor:pointer;
opacity:0.5;
z-index:2;


margin:auto:
`;
const Wrapper=styled.div`
height:100%;
display: flex;
transform:translateX(${(props)=>props.slideIndex*-100}vw); 
transition:all 1.5s ease;

`;
const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color: #${(props)=>props.bg}
`;
const Imgcontainer=styled.div`
flex=1;
height:100%; 


`;
const Infocontainer=styled.div`
flex=1;
padding:200px;
 `;
 const Image=styled.img`
 height:80%;


 `;

 
 const Title=styled.h1`
 font-size:70px;

 `;

 const Desc=styled.p`
 margin:50px 0px;
 font-size:20px;
 font-weight:500;
 letter-spacing:3px;

 `;

 const Button=styled.button`
 background-color:transparent;
 padding:10px;
 font-size:20px;
 cursor:pointer;


 `;

export const Change = () => {
  const [slideIndex,setSlideIndex]=useState(0);
  const handleClick=(direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex>0?slideIndex-1:2);
    }else{
      setSlideIndex(slideIndex<2?slideIndex+1:0);
    }

  };
  return (
    
    <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>   
        <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
    {sliderItems.map((item)=>(  

    <Slide bg={item.bg}>
      <Imgcontainer>
        <Image src={item.img} />
      </Imgcontainer> 
      <Infocontainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOP NOW</Button>
      </Infocontainer>
      </Slide>
      ))}


      

    </Wrapper>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
    </Arrow>
</Container>
  )
}
