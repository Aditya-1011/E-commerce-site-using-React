 import NAV from '../Pages/NAV';
import { Announcement } from '../Componentt/Announcement'
import End from '../Componentt/End'
import styled from "styled-components"

const Container=styled.div``;

const Wrapper=styled.div`
padding: 20px;
`;

const Title=styled.h1`

font-weight:300;
text-align: center;


`;
const TopButton=styled.button`
cursor: pointer;
padding: 10px;
font-weight: 600;
cursor:pointer;
border:${props=>props.type==="filled" && "none"};
background-color:${props=>props.type==="filled" ? "black":"transparent"};
color:${(props)=>props.type==="filled" && "none"};



`;


const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
 
const Bottom=styled.div``;




const Toptext=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;
const TopTexts=styled.div``;



const Cart = () => {
  return (
    <Container>
    <NAV />
    <Announcement />
    <Wrapper>
        <Title>Your Bag</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <Toptext>Shopping Bag</Toptext>
                <Toptext>Your Wishlist(0)</Toptext>
            </TopTexts>
            <TopButton type="filled" >Checkout Now</TopButton>
        </Top>
        <Bottom></Bottom>
    </Wrapper>
    <End /> 
      
    </Container>
  )
}

export default Cart
