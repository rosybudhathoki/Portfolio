import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h3>Developed by Rosy Budhathoki</h3>
      <div className='footerLinks'>
        <a href="https://github.com/rosybudhathoki" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/rosy-budhathoki-b9b146279/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:budhatho@ualberta.ca' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer