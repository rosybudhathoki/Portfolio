import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Rosy Budhathoki</h4>
      <div className='footerLinks'>
        <a href="https://github.com/rbudhathoki" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/rosy-budhathoki-b9b146279" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:budhatho@ualberta.ca' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer