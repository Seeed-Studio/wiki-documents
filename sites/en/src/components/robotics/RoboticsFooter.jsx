import { useEffect } from "react";
import { Card, Flex, ConfigProvider, theme, Avatar } from "antd";
import { MailOutlined, GithubOutlined, DiscordOutlined } from "@ant-design/icons";
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';

const i18n = {
  en: {
    forum:  { title: "Seeed Forum",        desc: "Join in-depth product discussions, share your experiences, and get help from both the community and technical experts." },
    email:  { title: "Email",              desc: "Get direct, professional assistance from our experts or extensive sales information by emailing us." },
    discord:{ title: "Discord",            desc: "Chat in real time with the Seeed Studio team and community, stay up to date with the latest news, and connect instantly." },
    github: { title: "GitHub Discussion",  desc: "Work with our wiki team to suggest improvements, report issues, and share feedback to make our documentation better." },
  },
  zh: {
    forum:  { title: "Seeed 论坛",           desc: "参与深入的产品讨论，分享经验，并从社区与技术专家获得帮助。" },
    email:  { title: "电子邮件",             desc: "通过邮件联系我们，获取直接的技术支持或详细的销售信息。" },
    discord:{ title: "Discord",            desc: "与 Seeed 团队和社区实时交流，获取最新消息并即时联络。" },
    github: { title: "GitHub 讨论",          desc: "与文档团队协作，提出改进建议、报告问题并分享反馈，助力完善文档。" },
  },
  ja: {
    forum:  { title: "Seeed フォーラム",      desc: "製品に関する深い議論に参加し、経験を共有し、コミュニティや技術専門家からサポートを受けましょう。" },
    email:  { title: "メール",               desc: "メールでお問い合わせいただくと、専門家からの直接的な支援や詳細な営業情報を受けられます。" },
    discord:{ title: "Discord",            desc: "Seeed チームやコミュニティとリアルタイムに交流し、最新情報を入手しましょう。" },
    github: { title: "GitHub ディスカッション", desc: "ドキュメントチームと連携し、改善提案や問題報告、フィードバックでドキュメントをより良くしましょう。" },
  },
  es: {
    forum:  { title: "Foro de Seeed",       desc: "Únete a debates profundos sobre productos, comparte tus experiencias y recibe ayuda de la comunidad y expertos técnicos." },
    email:  { title: "Correo electrónico",  desc: "Envíanos un correo para recibir asistencia directa de expertos o información comercial detallada." },
    discord:{ title: "Discord",            desc: "Chatea en tiempo real con el equipo de Seeed y la comunidad, mantente al día y conecta al instante." },
    github: { title: "Debate en GitHub",    desc: "Colabora con nuestro equipo de documentación para proponer mejoras, reportar problemas y compartir comentarios." },
  },
};

export const RoboticsFooter = ({ lang = 'en' }) => {
  // 文案选择
  const texts = i18n[lang] || i18n.en;

  // 固定资源（图标 & 链接），不随语言变化
  const baseMeta = [
    {
      key: "forum",
      avatarSrc: "https://forum.seeedstudio.com/uploads/default/optimized/2X/e/e1552bec6b55cb9989c1791acd45ca64aa24cd92_2_32x32.png",
      linkUrl: "https://forum.seeedstudio.com/",
    },
    {
      key: "email",
      avatarSrc: <MailOutlined />,
      linkUrl: "https://www.seeedstudio.com/contacts",
    },
    {
      key: "discord",
      avatarSrc: <DiscordOutlined />,
      linkUrl: "https://discord.com/invite/eWkprNDMU7",
    },
    {
      key: "github",
      avatarSrc: <GithubOutlined />,
      linkUrl: "https://github.com/Seeed-Studio/wiki-documents/discussions/69",
    },
  ];

  const cardMeta = baseMeta.map(item => ({
    ...item,
    title: texts[item.key].title,
    desc: texts[item.key].desc,
  }));

  // 主题同步（保持原逻辑）
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
                    style={{ backgroundColor: "transparent", color: "inherit" }}
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
};

export default RoboticsFooter;
