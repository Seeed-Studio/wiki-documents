import React, { useEffect } from 'react';
function ThirdPartyComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <dotlottie-player src="https://lottie.host/1d94a44a-9bcc-47b5-b738-5792c00d4563/zLPxvIpMVk.json" background="transparent" speed="1" 
        style={{ width: "100%",maxWidth:'1288px', height: "auto" ,margin:'0 auto'}} loop autoplay></dotlottie-player>
    </div>
  );
}

export default ThirdPartyComponent;