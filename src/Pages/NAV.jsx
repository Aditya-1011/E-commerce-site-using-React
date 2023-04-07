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
`
const Left=styled.div`
flex:1;


`
const Center=styled.div`
flex:1;

`
const Right=styled.div`
flex:1;
${'' /* ADITYA */}

`
const Language=styled.span`
font-size:30px;
pointer: cursor:
`
export const NAV = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
    <Language>
        ENGLish
    </Language>
    <SearchContainer>
        input
        icon
    </SearchContainer>
    </Left>
    <Center>SDFSDFA</Center>
    <Right>SDFSDF</Right>
    
    
        
    
    </Wrapper>
    </Container> 
    
  )
}
 