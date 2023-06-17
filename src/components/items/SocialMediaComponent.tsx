import { SocialMediaComponentProps } from "@/types";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMediaComponent = ({
  containerStyle,
  iconStyle,
}: SocialMediaComponentProps) => {
  return (
    <div className={containerStyle}>
      <div className={iconStyle}>
        <a
          href="https://www.linkedin.com/in/joao-pedro-theodoro-gaino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className={iconStyle}>
        <a
          href="https://github.com/joaoptGaino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className={iconStyle}>
        <a
          href="https://www.youtube.com/@joaoptgaino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
      <div className={iconStyle}>
        <a href="mailto:joaoptgainoprofissional@gmail.com">
          <AiOutlineMail />
        </a>
      </div>
      <div className={iconStyle}>
        <BsFillPersonLinesFill />
      </div>
    </div>
  );
};
export default SocialMediaComponent;
