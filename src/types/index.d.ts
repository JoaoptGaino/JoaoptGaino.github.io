import { StaticImageData } from "next/image";

interface SkillProps {
  name: string;
  img: string;
}

interface ProjectProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
}

interface SocialMediaComponentProps {
  containerStyle: string;
  iconStyle: string;
}

interface ExperienceProps {
  companyName: string;
  from: string;
  to: string;
  position: string;
  description: string;
  skills: string;
}
