import React, { useState, useEffect } from 'react';
import { Button, message, Steps, theme, ConfigProvider, Image, Flex } from 'antd';
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';

const JetsonIOStepper = ({steps}) => {

  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);
  
  useEffect(() => {
    setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    steps.forEach((s) => {
      const img = new window.Image();
      img.src = s.src;
    });
  }, [steps]);

        
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
          style={{margin: '24px 0'}} 
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