import { StyledCard } from "./styles/Card.styled";
// import { Button } from './styles/Button.styled';



export default function Card({ item: { id, title, body, image, image2, image3, image4, site, site2} }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      {/* <div>
        <img src={`./images/${image}`} alt='' />
        <br />
        <img src={`./images/${image2}`} alt='' />
        <br />
        <img src={`./images/${image3}`} alt='' />
        <img src={`./images/${image4}`} alt='' />
        <br />
      </div> */}
      {title = 'Projects' ?
        <div>
          <a target='_blank' href={site}>
          <img src={`./images/${image}`} alt='' />
          </a>
          <br />
          <br />
          <a target='_blank' href={site2}>
          <img src={`./images/${image3}`} alt='' />
          </a>
          <br />
        </div>
        :
     <div>
     <img src={`./images/${image}`} alt='' />
     <img src={`./images/${image2}`} alt='' />
     <a target='_blank' href={site}>
     <img src={`./images/${image3}`} alt='' />
     </a>
     <img src={`./images/${image4}`} alt='' />
 </div>
        }
    </StyledCard>
  )
}
