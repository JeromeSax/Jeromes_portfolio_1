import { FaLinkedin, FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa';
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
           <li> 
            <a href="https://soundcloud.com/knottyprofessor/reverie-feat-jd"  target="_blank">
                <FaSoundcloud />
            </a>
        </li>
           <li> 
            <a href="https://open.spotify.com/artist/5sAaVgSEwibNMOwdOPVL3O"  target="_blank">
                <FaSpotify />
            </a>
        </li>
    </StyledSocialIcons>
  )
}
