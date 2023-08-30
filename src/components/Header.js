import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

export default function Header() {
  const linkedInUrl = 'https://www.linkedin.com/in/jerome-sloss';
  const gitHubUrl = 'https://www.github.com/JeromeSax';

  return (
    <StyledHeader>
      <Container>
        <Nav>
          {/* <Logo src='./images/logo.svg' alt='' /> */}
          <h1>PORTFOLIO</h1>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <Button bg='#6b5b95' color='white'>LinkedIn</Button>
          </a>
        </Nav>

        <Flex>
          <div>
            <h1>Hi I'm Jerome Sloss 
              <br/>
              Software Engineer,
              <br/> 
              Video Game Developer,
              <br/>
              and Multi-Instrumentalist.</h1>
              <br/>
              <h2>Based in New Jersey</h2>


            <p>
              I am a dedicated software engineer with a passion for creativity that extends beyond coding.
              Proficient in crafting dynamic webpages and innovative applications,
              I also channel my talents into creating captivating video games during my leisure time.
              Beyond the realm of technology, I am a skilled multi-instrumentalist,
              adept at recording, composing, and scoring original musical pieces.
              Welcome to my portfolio, where professionalism meets unabashed fun.
            </p>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            <Button bg='#6b5b95' color='#fff'>
              Github
            </Button>
            </a>
            <a href={require('../assets/romey-resume.pdf')} target="_blank" rel="noopener noreferrer">
            <Button bg='#6b5b95' color='#fff'>
              Resume
            </Button>
            </a>
          </div>
          <Image src='./images/head-pic.png' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
