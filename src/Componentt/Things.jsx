
import styled from 'styled-components'
import Thing from './Thing'
import { popularProducts } from '../Pages/data'
const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;


`

const Things = ({item}) => {
  return (
    <Container>
    {popularProducts.map((item)=>(
        <Thing item={item} key={item.id} />  
    ))}

      
    </Container>
  )
}

export default Things
