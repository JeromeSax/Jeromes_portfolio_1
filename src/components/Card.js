import { StyledCard } from "./styles/Card.styled";
import { Button } from './styles/Button.styled';


export default function Card({item: { id, title, body, image, image2, image3, image4 }}) {
  return (
   <StyledCard layout={id % 2 === 0 && 'row-reverse'}> 
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>

        <div>
            <img src={`./images/${image}`} alt='' />
            <img src={`./images/${image2}`} alt='' />
            <img src={`./images/${image3}`} alt='' />
            <img src={`./images/${image4}`} alt='' />
            <Button>Stuff</Button>
        </div>
  </StyledCard> 
  )
}
