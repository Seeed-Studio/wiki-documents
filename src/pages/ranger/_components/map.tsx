import React, { useEffect } from 'react';

const ThirdPartyComponent: React.FC = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('[src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <dotlottie-player src="https://lottie.host/107d7909-963b-4494-9761-a2d7437d594c/49g2fCLnXH.json" background="transparent" speed="1" 
        style={{  width: "100%",maxWidth:'1288px', height: "auto" ,margin:'0 auto' }} loop autoplay></dotlottie-player>
    </div>
  );
};

export default ThirdPartyComponent;