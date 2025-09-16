import { React, useEffect } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, theme, Image } from 'antd';
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';

// 多语言字典
const content = {
  en: {
    orderNow: "Order Now",
  },
  zh: {
    orderNow: "立即购买",
  },
  ja: {
    orderNow: "今すぐ購入",
  },
  es: {
    orderNow: "Ordenar ahora",
  },
};

const ProductBanner = ({ imageUrl, linkUrl, lang = 'en' }) => {
  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);

  const currentTheme = useThemeStore((state) => state.theme);

  const openNew = (url) => {
    window.open(url, '_blank');
  };

  const texts = content[lang] || content.en;

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Flex
        gap="large"
        vertical
        align="center"
        style={{
          margin: '16px',
        }}
      >
        <Image style={{ maxWidth: 600 }} src={imageUrl} />
        <Button
          type="primary"
          style={{
            background: 'linear-gradient(135deg, #6253e1, #04befe)',
            border: 'none',
          }}
          size="large"
          icon={<ShoppingCartOutlined />}
          onClick={() => openNew(linkUrl)}
        >
          {texts.orderNow}
        </Button>
      </Flex>
    </ConfigProvider>
  );
};

export default ProductBanner;
