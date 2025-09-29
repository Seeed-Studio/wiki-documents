import React, { useState, useEffect } from 'react';
import { Button, message, Steps, theme, ConfigProvider, Image, Flex } from 'antd';
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';

const content = {
  en: { prev: 'Previous', next: 'Next', done: 'Done', doneMsg: "You've done it!" },
  zh: { prev: '上一步', next: '下一步', done: '完成', doneMsg: '已完成！' },
  ja: { prev: '前へ', next: '次へ', done: '完了', doneMsg: '完了しました！' },
  es: { prev: 'Anterior', next: 'Siguiente', done: 'Hecho', doneMsg: '¡Listo!' },
};

const JetsonIOStepper = ({ steps = [], lang = 'en' }) => {
  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode, setTheme]);

  // 预加载图片
  useEffect(() => {
    if (typeof window === 'undefined') return;
    steps.forEach((s) => {
      if (s?.src) {
        const img = new window.Image();
        img.src = s.src;
      }
    });
  }, [steps]);

  const currentTheme = useThemeStore((state) => state.theme);
  const [current, setCurrent] = useState(0);
  const texts = content[lang] || content.en;

  const next = () => setCurrent((c) => Math.min(c + 1, Math.max(steps.length - 1, 0)));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  // 兜底：没有步骤时不渲染主体（保持最小修改）
  if (!Array.isArray(steps) || steps.length === 0) {
    return null;
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Flex align="center">
        <Steps
          style={{ margin: '24px 0' }}
          current={current}
          items={items}
          size="small"
          direction="vertical"
        />
        <Image width={800} src={steps[current]?.src} />
      </Flex>
      <Flex gap="large" style={{ margin: '24px 0' }} justify="center">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={prev}>
            {texts.prev}
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            {texts.next}
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success(texts.doneMsg)}>
            {texts.done}
          </Button>
        )}
      </Flex>
    </ConfigProvider>
  );
};

export default JetsonIOStepper;
