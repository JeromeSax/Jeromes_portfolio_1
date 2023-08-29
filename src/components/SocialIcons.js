import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      
           <li> 
            <a href="https://linked.com">
                <FaLinkedin />
            </a>
        </li>
           <li> 
            <a href="https://linked.com">
                <FaInstagram />
            </a>
        </li>
    </StyledSocialIcons>
  )
}
