import { useEffect } from "react";
import { Card, Flex, ConfigProvider, theme, Avatar } from "antd";
import { MailOutlined, GithubOutlined, DiscordOutlined } from "@ant-design/icons";
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';
export const RoboticsFooter = () => {

  const cardMeta = [
    {
        title: "Seeed Forum",
        avatarSrc: "https://forum.seeedstudio.com/uploads/default/optimized/2X/e/e1552bec6b55cb9989c1791acd45ca64aa24cd92_2_32x32.png",
        desc: "Join in-depth product discussions, share your experiences, and get help from both the community and technical experts.",
        linkUrl: "https://forum.seeedstudio.com/"
    },
    {
        title: "Email",
        avatarSrc: <MailOutlined />,
        desc: "Get direct, professional assistance from our experts or extensive sales information by emailing us.",
        linkUrl: "https://www.seeedstudio.com/contacts"
    },
    {
        title: "Discord",
        avatarSrc: <DiscordOutlined />,
        desc: "Chat in real time with the Seeed Studio team and community, stay up to date with the latest news, and connect instantly.",
        linkUrl: "https://discord.com/invite/eWkprNDMU7"
    },
    {
        title: "GitHub Discussion",
        avatarSrc: <GithubOutlined />,
        desc: "Work with our wiki team to suggest improvements, report issues, and share feedback to make our documentation better.",
        linkUrl: "https://github.com/Seeed-Studio/wiki-documents/discussions/69"
    },
  ]

  // Docusaurus color mode (dark/light)
  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
          setTheme(colorMode === 'dark' ? 'dark' : 'light');
      }, [colorMode]);
  
  const currentTheme = useThemeStore((state) => state.theme);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
    <Flex gap="middle" align="start" wrap>
        {cardMeta.map((item, index) => (
          <Card
            key={index}
            style={{ minWidth: 300, maxWidth: 400 }}
            hoverable
            onClick={() => window.open(item.linkUrl, "_blank")}
          >
            <Card.Meta
              avatar={
                typeof item.avatarSrc === "string" ? (
                  <Avatar src={item.avatarSrc} />
                ) : (
                  <Avatar
                    icon={item.avatarSrc}
                    style={{
                      backgroundColor: "transparent",
                      color: "inherit",
                    }}
                  />
                )
              }
              title={item.title}
              description={<p style={{ margin: 0 }}>{item.desc}</p>}
            />
          </Card>
        ))}
      </Flex>
    </ConfigProvider>
  );
}

export default RoboticsFooter