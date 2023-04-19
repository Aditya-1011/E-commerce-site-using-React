import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components"



const Container=styled.div`
display:flex;

`;
const Left=styled.div`
flex:1; 
display: flex;
flex-direction: column;
padding:30px;
`;
const Logo=styled.h1`
`
const Desc=styled.div`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;
`
const SocialMedia=styled.div`
width:40px;
height:40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display: flex;
align-content: center;
justify-content: center;
margin-right: 20px;
`


const Center=styled.div`
flex:1;
padding: 25px;

`;
const Title=styled.h3`
margin-bottom:20px;
`
const List=styled.ul`
margin: 0px;
padding:0px;
list-style:none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 8px;

`;
const Right=styled.div`
flex:1;
padding: 20px;
`
const Titl=styled.h3``
const Payme=styled.img`
width:50%`;
const ContactItem=styled.div`
margin-bottom:4px;`;


const End = () => {
  return (
    <Container>
    <Left>
    <Logo>SNITCH</Logo>
    <Desc>
Snitch was born Out giving good streetwear Fashion.Our Goal Is To Give Everyone Something They'll Love,
Our Designs  Are Way Different And Amazing Based On The Character Theme.
</Desc>
    
    
    <SocialContainer>

    <SocialMedia color="3B5999">
    <Facebook />
    </SocialMedia >

   <SocialMedia color="E60023">
    <Pinterest />
    </SocialMedia>

    <SocialMedia color="E60023">
    <YouTube />
    </SocialMedia >

    <SocialMedia color="55ACEE">
    <Twitter />
    </SocialMedia>
    <SocialMedia color="E4405F">
    <Instagram />
    </SocialMedia>

    </SocialContainer>

    
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Caps</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>
        <Titl>Contact</Titl>
            <ContactItem><Room style={{marginRight:"10px"}}/>Kashirampur  , Near Trends Mall 20452</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 8077440993</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>rawataditya769@gmail.com</ContactItem>
            <Payme src="https://i.ibb.co/Qfvn4z6/payment.png" />
        
    </Right>
      
    </Container>
  )
}

export default End
