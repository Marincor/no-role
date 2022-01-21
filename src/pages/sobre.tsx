import { useState } from "react";
import AboutContent from "../infrastructure/modules/sobreContent";

const About = () => {

    const [animation, openAnimation] = useState(false);
    return ( <AboutContent animation={animation} openAnimation={openAnimation} /> )
};
export default About;