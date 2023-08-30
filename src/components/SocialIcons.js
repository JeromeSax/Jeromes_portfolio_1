import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      
           <li> 
            <a href="https://www.linkedin.com/in/jerome-sloss"  target="_blank">
                <FaLinkedin />
            </a>
        </li>
           <li> 
            <a href="https://www.instagram.com/jeromesloss/"  target="_blank">
                <FaInstagram />
            </a>
        </li>
    </StyledSocialIcons>
  )
}
