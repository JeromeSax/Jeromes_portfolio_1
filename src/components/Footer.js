import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                {/* <img src="images/logo_white.svg" alt="" /> */}

                <Flex>
                    <ul>
                        <li>
                        Thank you for visiting my portfolio, where technology and creativity converge.
                        From coding projects to musical compositions, this space reflects my journey of self-expression and evolution. 
                        Welcome to a world where coding and creativity intertwine, inviting you to explore, engage, and experience the extraordinary.
                        </li>
                        <li>jeromesloss13@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About Me</li>
                        <li>What I Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Contact Me</li>
                    </ul>

                    <SocialIcons />
                </Flex>

                {/* <p>&copy; 2021 Huddle. All rights reserved</p> */}
            </Container>
        </StyledFooter>
    )
}
