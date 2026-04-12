import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default function Footer(){
    return(
        <footer className="footer">
            Built with 
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />  
            by 
            <a href="https://technerd.in/" target="_blank" rel="noreferrer">TechNerd</a>
        </footer>
    );
}