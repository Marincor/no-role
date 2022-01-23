import { useState } from "react";
import { AnimationProps } from "src/infrastructure/interfaces/shared/animation";
import AboutContent from "../infrastructure/modules/sobreContent";

const About = () => {

    const [animation, openAnimation] = useState<AnimationProps['animation']>(false);
    return ( <AboutContent animation={animation} openAnimation={openAnimation} /> )
};
export default About;