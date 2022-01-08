import { NextRouter, useRouter } from 'next/router';
import { useState } from 'react';
import { IndexContentProps } from '../infrastructure/interfaces/modules';
import IndexContent from '../infrastructure/modules/indexContent';

export default function Home() {
  const [animation, openAnimation] = useState<IndexContentProps['animation']>(false);
  const router: NextRouter = useRouter();

  const handleAnimation = () => {
      openAnimation(true);
      setTimeout(()=>{
        router.push('/buscar')
        openAnimation(false);
      }, 2000)
  }
  return ( <IndexContent animation={animation} handleAnimation={handleAnimation} /> )
}
