import NAV from '../Pages/NAV'
import { Announcement } from '../Componentt/Announcement'
import Newsletter from '../Componentt/Newsletter'
 import End from '../Componentt/End'
import styled from "styled-components"

const Container=styled.div`
`

const Productss = () => {
  return (
    <Container>
    <NAV />
    <Announcement />
    <Wrapper>
        <ImgContainer>
            <Image src=""></Image>
        </ImgContainer>
    </Wrapper>
    <Newsletter />
    <End />

      
    </Container>
  )
}

export default Productss
