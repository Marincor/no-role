import { Container } from '@mui/material';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/assets/animations/walkingAnimation.json'

const AnimationWalk = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <Container >
     
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      
      </Container>
    );
};

export default AnimationWalk;