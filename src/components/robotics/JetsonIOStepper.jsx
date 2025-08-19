import React, { useState, useEffect } from 'react';
import { Button, message, Steps, theme, ConfigProvider, Image, Flex } from 'antd';
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';
const steps = [
  {
    title: 'Configure Jetson 24pin CSI Connector',
    src: "https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_335lg/JetsonIO_Configure_24pin_CSI.webp",
  },
  {
    title: 'Configure for compatible hardware',
    src: "https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_335lg/JetsonIO_Select_Compatiable_Hardware.webp",
  },
  {
    title: 'Select the Overlay',
    src: "https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_335lg/Select_Orbbec_Overlay.webp",
  },
  {
    title: 'Save pin changes',
    src: "https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_335lg/JetsonIO_Save_Pin_Changes.webp",
  },
  {
    title: 'Save and reboot to reconfigure pins',
    src: "https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_335lg/JetsonIO_Save_and_Reboot.webp",
  },
  {
    title: 'Press any key to reboot',
    src: 'https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_335lg/JetsonIO_Reboot_Prompt.webp'
  }
];
const JetsonIOStepper = () => {

  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);
      
  useEffect(() => {
    setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);
        
  const currentTheme = useThemeStore((state) => state.theme);

  const [current, setCurrent] = useState(0);
  const next = () => { setCurrent(current + 1); };
  const prev = () => { setCurrent(current - 1); };
  const items = steps.map(item => ({ key: item.title, title: item.title }));

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Flex align='center'>
        <Steps 
          style={{margin: '24px, 0'}} 
          current={current} 
          items={items} 
          size="small"
          direction="vertical"
        />
        <Image width={800} src={steps[current].src} />
      </Flex>
      <Flex gap="large" style={{ margin: '24px 0' }} justify='center'>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('You\'ve done it!')}>
            Done
          </Button>
        )}
      </Flex>
    </ConfigProvider>
  );
};
export default JetsonIOStepper;