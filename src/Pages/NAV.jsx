
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'

import React from 'react'
import styled from 'styled-components'




const Container=styled.div`
height:60px;

text-color:white;
`
const Wrapper=styled.div`
padding: 10px 20px;
display:flex;
justify-content: space-between;
align-items:center;

`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;



`
const Center=styled.div`
flex:1;
text-align:center;


`
const Right=styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-item:center;



`
const MenuItem=styled.div`
font-size:14;
cursor:pointer;
margin-left:20px;

`
const Language=styled.span`
font-size:15px;
pointer: cursor:
`
const Input=styled.input`
border:none;


`
const Logo=styled.h1`
font-weight:bold;
`
const SearchContainer=styled.div`
  border:0.5px solid lightgrey;
  display:flex;
  align-item:center;
  margin-Left:25px;
  padding:5px;
`
const Search=styled.div`



`
export const NAV = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
    <Language>
        En
    </Language>
    <SearchContainer>
        <Input/>
        <Search style={{color:"gray",fontSize:16}}/>
    </SearchContainer>
    </Left>
    <Center><Logo>Buy Clothes</Logo></Center>
    <Right ><MenuItem>Register</MenuItem>
    <MenuItem>Sign In</MenuItem>
    <MenuItem>
    <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined />
    </Badge>
    </MenuItem>
      

    </Right>
    
    
        
    
    </Wrapper>
    </Container> 
    
  )
}
 