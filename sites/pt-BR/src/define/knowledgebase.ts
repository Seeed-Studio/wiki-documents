export type Locale = 'en' | 'cn' | 'ja' | 'es' | 'pt-br';

export type TagType =
  | 'Frequent'
  | 'Sensing'
  | 'MCU'
  | 'SBC'
  | 'Edge'
  | 'Network'
  | 'Project'
  | 'X86'
  | 'Tech_Support'
  | 'Cloud';

export type KnowledgebaseLink = {
  label: string;
  url: string;
};

export type KnowledgebaseCard = {
  heading?: string;
  description?: string;
  preview: string;
  source?: string;
  tags: TagType[];
  links: KnowledgebaseLink[];
};

export type KnowledgebaseSection = {
  title?: string;
  description?: string;
  cards: KnowledgebaseCard[];
};

export type TagMeta = {
  label: string;
  color: string;
};

export type FilterCopy = {
  title: string;
  countLabel: (count: number) => string;
  ariaLabel: string;
  or: string;
  and: string;
};

export type PageCopy = {
  headerTitle: string;
  headerDescription: string;
  searchPlaceholder: string;
  noResultTitle: string;
  seeMoreLabel: string;
  filters: FilterCopy;
};

export type KnowledgebaseContent = {
  copy: PageCopy;
  sections: KnowledgebaseSection[];
  tags: Record<TagType, TagMeta>;
};

const TAG_COLORS: Record<TagType, string> = {
  Frequent: '#e9669e',
  Sensing: '#a44fb7',
  MCU: '#dfd545',
  SBC: '#127f82',
  X86: '#4267b2',
  Edge: '#39ca30',
  Network: '#fe6829',
  Cloud: '#ffcfc3',
  Project: '#8c2f00',
  Tech_Support: '#14cfc3',
};

const TAG_LABELS: Record<Locale, Record<TagType, string>> = {
  en: {
    Frequent: 'Frequent',
    Sensing: 'Sensing',
    MCU: 'MCU',
    SBC: 'SBC',
    X86: 'X86',
    Edge: 'Edge',
    Network: 'Network',
    Cloud: 'Cloud',
    Project: 'Project',
    Tech_Support: 'Tech Support',
  },
  cn: {
    Frequent: '精选',
    Sensing: '感知',
    MCU: 'MCU',
    SBC: 'SBC',
    X86: 'X86',
    Edge: '边缘计算',
    Network: '网络',
    Cloud: '云端',
    Project: '方案',
    Tech_Support: '技术支持',
  },
  ja: {
    Frequent: 'おすすめ',
    Sensing: 'センシング',
    MCU: 'MCU',
    SBC: 'SBC',
    X86: 'X86',
    Edge: 'エッジ',
    Network: 'ネットワーク',
    Cloud: 'クラウド',
    Project: 'プロジェクト',
    Tech_Support: 'テクニカルサポート',
  },
  es: {
    Frequent: 'Destacado',
    Sensing: 'Sensado',
    MCU: 'MCU',
    SBC: 'SBC',
    X86: 'X86',
    Edge: 'Edge',
    Network: 'Red',
    Cloud: 'Nube',
    Project: 'Proyecto',
    Tech_Support: 'Soporte técnico',
  },
  'pt-br': {
    Frequent: 'Destaque',
    Sensing: 'Sensoriamento',
    MCU: 'MCU',
    SBC: 'SBC',
    X86: 'X86',
    Edge: 'Edge',
    Network: 'Rede',
    Cloud: 'Nuvem',
    Project: 'Projeto',
    Tech_Support: 'Suporte técnico',
  },
};

const FILTER_COPY: Record<Locale, FilterCopy> = {
  en: {
    title: 'Filters',
    countLabel: (count) => (count === 1 ? '1 result' : `${count} results`),
    ariaLabel: 'Toggle between OR and AND for the selected tags',
    or: 'OR',
    and: 'AND',
  },
  cn: {
    title: '筛选',
    countLabel: (count) => `${count} 个结果`,
    ariaLabel: '在所选标签中切换“或 / 与”运算',
    or: '或',
    and: '与',
  },
  ja: {
    title: 'フィルター',
    countLabel: (count) => `${count} 件`,
    ariaLabel: '選択したタグに対して OR / AND を切り替える',
    or: 'OR',
    and: 'AND',
  },
  es: {
    title: 'Filtros',
    countLabel: (count) =>
      count === 1 ? '1 resultado' : `${count} resultados`,
    ariaLabel: 'Cambiar entre OR y AND para las etiquetas seleccionadas',
    or: 'OR',
    and: 'AND',
  },
  'pt-br': {
    title: 'Filtros',
    countLabel: (count) =>
      count === 1 ? '1 resultado' : `${count} resultados`,
    ariaLabel: 'Alternar entre OR e AND para as tags selecionadas',
    or: 'OR',
    and: 'AND',
  },
};

const PAGE_COPY: Record<Locale, PageCopy> = {
  en: {
    headerTitle: 'Products Help',
    headerDescription:
      'Welcome! Browse frequently asked questions and troubleshooting guides for Seeed Studio products, and jump into our support channels.',
    searchPlaceholder: 'Search products, keywords, or issues…',
    noResultTitle: 'No results yet',
    seeMoreLabel: 'See more',
    filters: FILTER_COPY.en,
  },
  cn: {
    headerTitle: '产品帮助中心',
    headerDescription:
      '欢迎来到 Seeed Studio 产品帮助中心。在这里可以查找常见问题、故障排查文章，以及前往官方技术支持渠道。',
    searchPlaceholder: '搜索产品、关键词或问题…',
    noResultTitle: '暂无结果',
    seeMoreLabel: '查看更多',
    filters: FILTER_COPY.cn,
  },
  ja: {
    headerTitle: '製品サポート',
    headerDescription:
      'Seeed Studio 製品に関する FAQ やトラブルシューティングガイド、各種サポートチャネルへのリンクをまとめています。',
    searchPlaceholder: '製品名・キーワード・症状で検索…',
    noResultTitle: '該当する結果はありません',
    seeMoreLabel: '詳細を見る',
    filters: FILTER_COPY.ja,
  },
  es: {
    headerTitle: 'Centro de ayuda',
    headerDescription:
      'Bienvenido. Aquí encontrarás preguntas frecuentes, guías de resolución de problemas y accesos directos a los canales de soporte de Seeed Studio.',
    searchPlaceholder: 'Busca productos, palabras clave o incidencias…',
    noResultTitle: 'Sin resultados por ahora',
    seeMoreLabel: 'Ver más',
    filters: FILTER_COPY.es,
  },
  'pt-br': {
    headerTitle: 'Central de ajuda',
    headerDescription:
      'Bem-vindo. Aqui você encontra perguntas frequentes, guias de solução de problemas e atalhos para os canais de suporte da Seeed Studio.',
    searchPlaceholder: 'Pesquise produtos, palavras-chave ou problemas…',
    noResultTitle: 'Ainda não há resultados',
    seeMoreLabel: 'Ver mais',
    filters: FILTER_COPY['pt-br'],
  },
};

const SECTIONS: Record<Locale, KnowledgebaseSection[]> = {
  en: [
    {
      cards: [
        {
          preview: 'knowledge_base1.png',
          source: 'https://wiki.seeedstudio.com/reTerminal-new_FAQ',
          tags: ['Edge', 'SBC'],
          links: [
            {
              label:
                'How to troubleshoot the black screen issue on reTerminal',
              url: 'https://wiki.seeedstudio.com/reterminal_black_screen',
            },
            {
              label:
                'How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or other OS to eMMC',
              url: 'https://wiki.seeedstudio.com/flash_different_os_to_emmc',
            },
            {
              label:
                'Log in to Raspberry Pi OS/Ubuntu OS or other OS using SSH over Wi-Fi/Ethernet',
              url: 'https://wiki.seeedstudio.com/log_rpios_use_ssh_over_wifi_ethernet',
            },
          ],
        },
        {
          preview: 'knowledge_base2.png',
          source: 'https://wiki.seeedstudio.com/XIAO_FAQ',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label: 'How to check the battery voltage',
              url: 'https://wiki.seeedstudio.com/check_battery_voltage',
            },
            {
              label: 'Note on XIAO ESP32C3 IO allocation',
              url: 'https://wiki.seeedstudio.com/exp32c3_d9_d6_d8',
            },
            {
              label:
                'What to do when upload fails / the program runs abnormally / the device port is not found',
              url: 'https://wiki.seeedstudio.com/noport_upload_fails',
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          preview: 'knowledge_base3.png',
          source: 'https://wiki.seeedstudio.com/ODYSSEY_FAQ',
          tags: ['Edge', 'SBC', 'X86'],
          links: [
            {
              label: 'Re-installing the original Windows',
              url: 'https://wiki.seeedstudio.com/reinstall_the_Original_Windows',
            },
            {
              label:
                'Troubleshooting BIOS-related issues (WiFi/Bluetooth/Fan/Auto Power-On/Boot Guard/GPIO)',
              url: 'https://wiki.seeedstudio.com/Troubleshooting_BIOS-Related_Issues',
            },
            {
              label:
                'Arduino IDE does not recognize the onboard microcontroller on ODYSSEY X86J4105/X86J4125',
              url: 'https://wiki.seeedstudio.com/not_recognize-onboard-microcontroller',
            },
          ],
        },
        {
          preview: 'knowledge_base4.png',
          source: 'https://wiki.seeedstudio.com/Jetson_FAQ',
          tags: ['Edge'],
          links: [
            {
              label:
                'The remaining space in the eMMC is only about 2GB, how can I solve the problem of insufficient space?',
              url: 'https://wiki.seeedstudio.com/solution_of_insufficient_space',
            },
            {
              label:
                'Troubleshooting installation for NVIDIA Jetson boards',
              url: 'https://wiki.seeedstudio.com/Troubleshooting_Installation',
            },
          ],
        },
        {
          preview: 'knowledge_base5.png',
          source: 'https://wiki.seeedstudio.com/FAQs_For_openWrt',
          tags: ['Network'],
          links: [
            {
              label:
                'How do I fix my device when I face the "Read Only Root filesystem"?',
              url: 'https://wiki.seeedstudio.com/change_default_gateway_IP',
            },
            {
              label:
                'What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without eMMC?',
              url: 'https://wiki.seeedstudio.com/use_a_CM4_witout_eMMC',
            },
          ],
        },
        {
          preview: 'knowledge_base6.png',
          source: 'https://wiki.seeedstudio.com/wio_terminal_faq',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label:
                'How to avoid the program loss after restarting Wio Terminal multiple times?',
              url: 'https://wiki.seeedstudio.com/Program_loss_by_repeated_power',
            },
          ],
        },
      ],
    },
    {
      title: 'Tech Support',
      description: 'Seeed Studio tech support platforms',
      cards: [
        {
          heading: 'Ideas Exchange',
          description:
            'Join extensive product discussions, share experiences, and get help from our community and technical experts.',
          preview: 'tech_support1.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Visit community forum',
              url: 'https://forum.seeedstudio.com/',
            },
          ],
        },
        {
          heading: 'Expert Support',
          description:
            'Get professional email support and direct help from our experts by sending us your product issues.',
          preview: 'tech_support2.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Contact technical support',
              url: 'https://www.seeedstudio.com/contacts',
            },
          ],
        },
        {
          heading: 'Collective Chatting',
          description:
            'Join our active Discord community channel for real-time conversations with the Seeed Studio team.',
          preview: 'tech_support3.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Join Discord server',
              url: 'https://discord.gg/eWkprNDMU7',
            },
          ],
        },
        {
          heading: 'Wiki Suggestions',
          description:
            'Collaborate with our wiki development team by sharing feedback and improvement ideas for the site.',
          preview: 'tech_support4.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Open GitHub discussion',
              url: 'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
            },
          ],
        },
      ],
    },
  ],
  cn: [
    {
      cards: [
        {
          preview: 'knowledge_base1.png',
          source: 'https://wiki.seeedstudio.com/cn/reTerminal-new_FAQ',
          tags: ['Edge', 'SBC'],
          links: [
            {
              label: '如何排查 reTerminal 黑屏问题',
              url: 'https://wiki.seeedstudio.com/cn/reterminal_black_screen',
            },
            {
              label: '如何将 Raspberry Pi OS/64 位 Ubuntu 等系统刷写到 eMMC',
              url: 'https://wiki.seeedstudio.com/cn/flash_different_os_to_emmc',
            },
            {
              label: '如何通过 Wi-Fi/以太网使用 SSH 登录 Raspberry Pi OS/Ubuntu 等系统',
              url: 'https://wiki.seeedstudio.com/cn/log_rpios_use_ssh_over_wifi_ethernet',
            },
          ],
        },
        {
          preview: 'knowledge_base2.png',
          source: 'https://wiki.seeedstudio.com/cn/XIAO_FAQ',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label: '如何检测电池电压',
              url: 'https://wiki.seeedstudio.com/cn/check_battery_voltage',
            },
            {
              label: 'XIAO ESP32C3 IO 资源注意事项',
              url: 'https://wiki.seeedstudio.com/cn/exp32c3_d9_d6_d8',
            },
            {
              label: '上传失败 / 程序异常 / 找不到端口时怎么办？',
              url: 'https://wiki.seeedstudio.com/cn/noport_upload_fails',
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          preview: 'knowledge_base3.png',
          source: 'https://wiki.seeedstudio.com/cn/ODYSSEY_FAQ',
          tags: ['Edge', 'SBC', 'X86'],
          links: [
            {
              label: '重新安装原厂 Windows',
              url: 'https://wiki.seeedstudio.com/cn/reinstall_the_Original_Windows',
            },
            {
              label:
                '排查 BIOS 相关问题（WiFi/蓝牙/风扇/自动上电/Boot Guard/GPIO）',
              url: 'https://wiki.seeedstudio.com/cn/Troubleshooting_BIOS-Related_Issues',
            },
            {
              label:
                'Arduino IDE 无法识别 ODYSSEY X86J4105/X86J4125 板载 MCU',
              url: 'https://wiki.seeedstudio.com/cn/not_recognize-onboard-microcontroller',
            },
          ],
        },
        {
          preview: 'knowledge_base4.png',
          source: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ',
          tags: ['Edge'],
          links: [
            {
              label: 'reComputer eMMC 仅剩约 2GB 空间，如何解决？',
              url: 'https://wiki.seeedstudio.com/cn/solution_of_insufficient_space',
            },
            {
              label: 'NVIDIA Jetson 安装问题排查',
              url: 'https://wiki.seeedstudio.com/cn/Troubleshooting_Installation',
            },
          ],
        },
        {
          preview: 'knowledge_base5.png',
          source: 'https://wiki.seeedstudio.com/cn/FAQs_For_openWrt',
          tags: ['Network'],
          links: [
            {
              label: '遇到 “Read Only Root filesystem” 时如何修复设备？',
              url: 'https://wiki.seeedstudio.com/cn/change_default_gateway_IP',
            },
            {
              label: '无 eMMC 的 CM4 配合非 CM4 版本载板时怎么办？',
              url: 'https://wiki.seeedstudio.com/cn/use_a_CM4_witout_eMMC',
            },
          ],
        },
        {
          preview: 'knowledge_base6.png',
          source: 'https://wiki.seeedstudio.com/cn/wio_terminal_faq',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label: '如何避免多次重启 Wio Terminal 后程序丢失？',
              url: 'https://wiki.seeedstudio.com/cn/Program_loss_by_repeated_power',
            },
          ],
        },
      ],
    },
    {
      title: '技术支持',
      description: 'Seeed Studio 官方技术支持渠道',
      cards: [
        {
          heading: '创意交流',
          description:
            '加入丰富的产品讨论，分享使用经验，从社区和技术专家处获得帮助。',
          preview: 'tech_support1.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: '前往官方论坛',
              url: 'https://forum.seeedstudio.com/',
            },
          ],
        },
        {
          heading: '专家支持',
          description:
            '发送邮件给我们，获得专业技术团队的直接协助与答疑。',
          preview: 'tech_support2.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: '联系技术支持',
              url: 'https://www.seeedstudio.com/contacts',
            },
          ],
        },
        {
          heading: '即时社群沟通',
          description:
            '加入活跃的 Discord 社区频道，实时与 Seeed 团队交流，获取最新资讯。',
          preview: 'tech_support3.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: '加入 Discord 社群',
              url: 'https://discord.gg/eWkprNDMU7',
            },
          ],
        },
        {
          heading: 'Wiki 建议',
          description:
            '与 Wiki 开发团队协作，提交网站的改进想法与反馈。',
          preview: 'tech_support4.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: '提交 GitHub 讨论',
              url: 'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
            },
          ],
        },
      ],
    },
  ],
  ja: [
    {
      cards: [
        {
          preview: 'knowledge_base1.png',
          source: 'https://wiki.seeedstudio.com/ja/reTerminal-new_FAQ',
          tags: ['Edge', 'SBC'],
          links: [
            {
              label: 'reTerminal のブラックスクリーン問題を解決する方法',
              url: 'https://wiki.seeedstudio.com/ja/reterminal_black_screen',
            },
            {
              label:
                'Raspberry Pi OS や 64bit Ubuntu を eMMC に書き込む手順',
              url: 'https://wiki.seeedstudio.com/ja/flash_different_os_to_emmc',
            },
            {
              label:
                'Wi-Fi / イーサネット経由で SSH ログインするには',
              url: 'https://wiki.seeedstudio.com/ja/log_rpios_use_ssh_over_wifi_ethernet',
            },
          ],
        },
        {
          preview: 'knowledge_base2.png',
          source: 'https://wiki.seeedstudio.com/ja/XIAO_FAQ',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label: 'バッテリー電圧を確認する方法',
              url: 'https://wiki.seeedstudio.com/ja/check_battery_voltage',
            },
            {
              label: 'XIAO ESP32C3 の IO 割り当てに関する注意点',
              url: 'https://wiki.seeedstudio.com/ja/exp32c3_d9_d6_d8',
            },
            {
              label:
                '書き込み失敗・動作異常・ポートが見つからない場合の対処',
              url: 'https://wiki.seeedstudio.com/ja/noport_upload_fails',
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          preview: 'knowledge_base3.png',
          source: 'https://wiki.seeedstudio.com/ja/ODYSSEY_FAQ',
          tags: ['Edge', 'SBC', 'X86'],
          links: [
            {
              label: '元の Windows を再インストールする',
              url: 'https://wiki.seeedstudio.com/ja/reinstall_the_Original_Windows',
            },
            {
              label:
                'BIOS に関するトラブルシューティング（WiFi/Bluetooth/ファン/自動起動/Boot Guard/GPIO）',
              url: 'https://wiki.seeedstudio.com/ja/Troubleshooting_BIOS-Related_Issues',
            },
            {
              label:
                'ODYSSEY X86J4105/X86J4125 で Arduino IDE が MCU を認識しないとき',
              url: 'https://wiki.seeedstudio.com/ja/not_recognize-onboard-microcontroller',
            },
          ],
        },
        {
          preview: 'knowledge_base4.png',
          source: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ',
          tags: ['Edge'],
          links: [
            {
              label:
                'reComputer の eMMC 残容量が約 2GB しかない場合の対処',
              url: 'https://wiki.seeedstudio.com/ja/solution_of_insufficient_space',
            },
            {
              label: 'NVIDIA Jetson ボードのインストールトラブル対策',
              url: 'https://wiki.seeedstudio.com/ja/Troubleshooting_Installation',
            },
          ],
        },
        {
          preview: 'knowledge_base5.png',
          source: 'https://wiki.seeedstudio.com/ja/FAQs_For_openWrt',
          tags: ['Network'],
          links: [
            {
              label:
                '"Read Only Root filesystem" が発生したときの修復方法',
              url: 'https://wiki.seeedstudio.com/ja/change_default_gateway_IP',
            },
            {
              label:
                'デュアルギガビットキャリアボード（非 CM4 版）に eMMC なしの CM4 を接続する場合',
              url: 'https://wiki.seeedstudio.com/ja/use_a_CM4_witout_eMMC',
            },
          ],
        },
        {
          preview: 'knowledge_base6.png',
          source: 'https://wiki.seeedstudio.com/ja/wio_terminal_faq',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label:
                'Wio Terminal を複数回再起動するとプログラムが消える問題を防ぐ',
              url: 'https://wiki.seeedstudio.com/ja/Program_loss_by_repeated_power',
            },
          ],
        },
      ],
    },
    {
      title: 'サポートチャネル',
      description: 'Seeed Studio の公式サポート窓口',
      cards: [
        {
          heading: 'アイデア交流',
          description:
            '製品の使い方に関するディスカッションに参加し、コミュニティや技術スタッフから支援を受けましょう。',
          preview: 'tech_support1.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'フォーラムへ',
              url: 'https://forum.seeedstudio.com/',
            },
          ],
        },
        {
          heading: '専門家サポート',
          description:
            'メールでお問い合わせいただくと、専門スタッフが直接サポートします。',
          preview: 'tech_support2.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: '技術サポートに連絡',
              url: 'https://www.seeedstudio.com/contacts',
            },
          ],
        },
        {
          heading: 'コミュニティチャット',
          description:
            '活発な Discord コミュニティで、Seeed チームとリアルタイムに交流しましょう。',
          preview: 'tech_support3.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Discord に参加',
              url: 'https://discord.gg/eWkprNDMU7',
            },
          ],
        },
        {
          heading: 'Wiki 改善提案',
          description:
            'Wiki 改善のアイデアやフィードバックを共有し、より良いサイトづくりにご協力ください。',
          preview: 'tech_support4.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'GitHub ディスカッションを開く',
              url: 'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
            },
          ],
        },
      ],
    },
  ],
  es: [
    {
      cards: [
        {
          preview: 'knowledge_base1.png',
          source: 'https://wiki.seeedstudio.com/es/reTerminal-new_FAQ',
          tags: ['Edge', 'SBC'],
          links: [
            {
              label: 'Cómo solucionar la pantalla negra en reTerminal',
              url: 'https://wiki.seeedstudio.com/es/reterminal_black_screen',
            },
            {
              label:
                'Cómo grabar Raspberry Pi OS, Ubuntu de 64 bits u otro sistema en la eMMC',
              url: 'https://wiki.seeedstudio.com/es/flash_different_os_to_emmc',
            },
            {
              label:
                'Cómo iniciar sesión por SSH con Wi-Fi o Ethernet en Raspberry Pi OS/Ubuntu',
              url: 'https://wiki.seeedstudio.com/es/log_rpios_use_ssh_over_wifi_ethernet',
            },
          ],
        },
        {
          preview: 'knowledge_base2.png',
          source: 'https://wiki.seeedstudio.com/es/XIAO_FAQ',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label: 'Cómo comprobar el voltaje de la batería',
              url: 'https://wiki.seeedstudio.com/es/check_battery_voltage',
            },
            {
              label: 'Nota sobre la asignación de E/S en XIAO ESP32C3',
              url: 'https://wiki.seeedstudio.com/es/exp32c3_d9_d6_d8',
            },
            {
              label:
                'Qué hacer cuando la carga falla / el programa se comporta de forma anómala / no se encuentra el puerto',
              url: 'https://wiki.seeedstudio.com/es/noport_upload_fails',
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          preview: 'knowledge_base3.png',
          source: 'https://wiki.seeedstudio.com/es/ODYSSEY_FAQ',
          tags: ['Edge', 'SBC', 'X86'],
          links: [
            {
              label: 'Reinstalar el Windows original',
              url: 'https://wiki.seeedstudio.com/es/reinstall_the_Original_Windows',
            },
            {
              label:
                'Solución de problemas de BIOS (WiFi/Bluetooth/Ventilador/Encendido automático/Boot Guard/GPIO)',
              url: 'https://wiki.seeedstudio.com/es/Troubleshooting_BIOS-Related_Issues',
            },
            {
              label:
                'Arduino IDE no reconoce el microcontrolador integrado en ODYSSEY X86J4105/X86J4125',
              url: 'https://wiki.seeedstudio.com/es/not_recognize-onboard-microcontroller',
            },
          ],
        },
        {
          preview: 'knowledge_base4.png',
          source: 'https://wiki.seeedstudio.com/es/Jetson_FAQ',
          tags: ['Edge'],
          links: [
            {
              label:
                'El espacio libre en la eMMC del reComputer es de solo 2 GB, ¿cómo solucionarlo?',
              url: 'https://wiki.seeedstudio.com/es/solution_of_insufficient_space',
            },
            {
              label:
                'Solución de problemas de instalación para placas NVIDIA Jetson',
              url: 'https://wiki.seeedstudio.com/es/Troubleshooting_Installation',
            },
          ],
        },
        {
          preview: 'knowledge_base5.png',
          source: 'https://wiki.seeedstudio.com/es/FAQs_For_openWrt',
          tags: ['Network'],
          links: [
            {
              label:
                'Cómo reparar el dispositivo cuando aparece "Read Only Root filesystem"',
              url: 'https://wiki.seeedstudio.com/es/change_default_gateway_IP',
            },
            {
              label:
                'Qué hacer si uso la placa portadora Dual Gigabit (sin CM4) con un CM4 sin eMMC',
              url: 'https://wiki.seeedstudio.com/es/use_a_CM4_witout_eMMC',
            },
          ],
        },
        {
          preview: 'knowledge_base6.png',
          source: 'https://wiki.seeedstudio.com/es/wio_terminal_faq',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label:
                'Cómo evitar que se pierda el programa tras reiniciar varias veces el Wio Terminal',
              url: 'https://wiki.seeedstudio.com/es/Program_loss_by_repeated_power',
            },
          ],
        },
      ],
    },
    {
      title: 'Soporte técnico',
      description: 'Canales oficiales de Seeed Studio',
      cards: [
        {
          heading: 'Intercambio de ideas',
          description:
            'Participa en debates sobre el uso del producto, comparte experiencias y recibe ayuda de la comunidad y los expertos.',
          preview: 'tech_support1.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Ir al foro',
              url: 'https://forum.seeedstudio.com/',
            },
          ],
        },
        {
          heading: 'Soporte de expertos',
          description:
            'Obtén soporte profesional por correo enviándonos tus incidencias para recibir ayuda directa.',
          preview: 'tech_support2.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Contactar soporte técnico',
              url: 'https://www.seeedstudio.com/contacts',
            },
          ],
        },
        {
          heading: 'Chat comunitario',
          description:
            'Únete a nuestro canal de Discord para chatear en tiempo real con el equipo de Seeed y recibir novedades.',
          preview: 'tech_support3.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Unirse a Discord',
              url: 'https://discord.gg/eWkprNDMU7',
            },
          ],
        },
        {
          heading: 'Sugerencias para Wiki',
          description:
            'Colabora con el equipo del wiki compartiendo comentarios y mejoras para el sitio.',
          preview: 'tech_support4.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Abrir discusión en GitHub',
              url: 'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
            },
          ],
        },
      ],
    },
  ],
  'pt-br': [
    {
      cards: [
        {
          preview: 'knowledge_base1.png',
          source: 'https://wiki.seeedstudio.com/pt-br/reTerminal-new_FAQ',
          tags: ['Edge', 'SBC'],
          links: [
            {
              label: 'Como solucionar o problema de tela preta no reTerminal',
              url: 'https://wiki.seeedstudio.com/pt-br/reterminal_black_screen',
            },
            {
              label:
                'Como gravar Raspberry Pi OS, Ubuntu 64 bits ou outro sistema no eMMC',
              url: 'https://wiki.seeedstudio.com/pt-br/flash_different_os_to_emmc',
            },
            {
              label:
                'Como fazer login via SSH no Raspberry Pi OS/Ubuntu ou outro sistema por Wi-Fi/Ethernet',
              url: 'https://wiki.seeedstudio.com/pt-br/log_rpios_use_ssh_over_wifi_ethernet',
            },
          ],
        },
        {
          preview: 'knowledge_base2.png',
          source: 'https://wiki.seeedstudio.com/pt-br/XIAO_FAQ',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label: 'Como verificar a voltagem da bateria',
              url: 'https://wiki.seeedstudio.com/pt-br/check_battery_voltage',
            },
            {
              label: 'Observação sobre a alocação de IO do XIAO ESP32C3',
              url: 'https://wiki.seeedstudio.com/pt-br/exp32c3_d9_d6_d8',
            },
            {
              label:
                'O que fazer quando o upload falha / o programa apresenta comportamento anormal / a porta do dispositivo não é encontrada',
              url: 'https://wiki.seeedstudio.com/pt-br/noport_upload_fails',
            },
          ],
        },
      ],
    },
    {
      cards: [
        {
          preview: 'knowledge_base3.png',
          source: 'https://wiki.seeedstudio.com/pt-br/ODYSSEY_FAQ',
          tags: ['Edge', 'SBC', 'X86'],
          links: [
            {
              label: 'Reinstalar o Windows original',
              url: 'https://wiki.seeedstudio.com/pt-br/reinstall_the_Original_Windows',
            },
            {
              label:
                'Solução de problemas relacionados ao BIOS (WiFi/Bluetooth/Ventoinha/Ligação automática/Boot Guard/GPIO)',
              url: 'https://wiki.seeedstudio.com/pt-br/Troubleshooting_BIOS-Related_Issues',
            },
            {
              label:
                'O Arduino IDE não reconhece o microcontrolador integrado no ODYSSEY X86J4105/X86J4125',
              url: 'https://wiki.seeedstudio.com/pt-br/not_recognize-onboard-microcontroller',
            },
          ],
        },
        {
          preview: 'knowledge_base4.png',
          source: 'https://wiki.seeedstudio.com/pt-br/Jetson_FAQ',
          tags: ['Edge'],
          links: [
            {
              label:
                'O espaço restante no eMMC do reComputer é de apenas cerca de 2 GB. Como resolver o problema de espaço insuficiente?',
              url: 'https://wiki.seeedstudio.com/pt-br/solution_of_insufficient_space',
            },
            {
              label:
                'Solução de problemas de instalação para placas NVIDIA Jetson',
              url: 'https://wiki.seeedstudio.com/pt-br/Troubleshooting_Installation',
            },
          ],
        },
        {
          preview: 'knowledge_base5.png',
          source: 'https://wiki.seeedstudio.com/pt-br/FAQs_For_openWrt',
          tags: ['Network'],
          links: [
            {
              label:
                'Como reparar meu dispositivo quando aparece "Read Only Root filesystem"?',
              url: 'https://wiki.seeedstudio.com/pt-br/change_default_gateway_IP',
            },
            {
              label:
                'O que fazer se eu tiver a placa Dual Gigabit Ethernet Carrier Board versão não-CM4 e conectar um CM4 sem eMMC?',
              url: 'https://wiki.seeedstudio.com/pt-br/use_a_CM4_witout_eMMC',
            },
          ],
        },
        {
          preview: 'knowledge_base6.png',
          source: 'https://wiki.seeedstudio.com/pt-br/wio_terminal_faq',
          tags: ['Sensing', 'MCU'],
          links: [
            {
              label:
                'Como evitar a perda do programa após reiniciar o Wio Terminal várias vezes?',
              url: 'https://wiki.seeedstudio.com/pt-br/Program_loss_by_repeated_power',
            },
          ],
        },
      ],
    },
    {
      title: 'Suporte técnico',
      description: 'Canais oficiais de suporte da Seeed Studio',
      cards: [
        {
          heading: 'Troca de ideias',
          description:
            'Participe de discussões sobre produtos, compartilhe experiências e obtenha ajuda da comunidade e dos especialistas técnicos.',
          preview: 'tech_support1.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Visitar o fórum da comunidade',
              url: 'https://forum.seeedstudio.com/',
            },
          ],
        },
        {
          heading: 'Suporte especializado',
          description:
            'Obtenha suporte profissional por e-mail e ajuda direta de nossos especialistas enviando seus problemas de produto.',
          preview: 'tech_support2.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Contatar o suporte técnico',
              url: 'https://www.seeedstudio.com/contacts',
            },
          ],
        },
        {
          heading: 'Conversa em grupo',
          description:
            'Participe do nosso canal ativo no Discord para conversar em tempo real com a equipe da Seeed Studio.',
          preview: 'tech_support3.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Entrar no servidor do Discord',
              url: 'https://discord.gg/eWkprNDMU7',
            },
          ],
        },
        {
          heading: 'Sugestões para o Wiki',
          description:
            'Colabore com nossa equipe de desenvolvimento do wiki compartilhando feedback e ideias de melhoria para o site.',
          preview: 'tech_support4.png',
          tags: ['Tech_Support'],
          links: [
            {
              label: 'Abrir discussão no GitHub',
              url: 'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
            },
          ],
        },
      ],
    },
  ],
};

function buildTagMeta(locale: Locale): Record<TagType, TagMeta> {
  const labels = TAG_LABELS[locale] ?? TAG_LABELS.en;
  return Object.entries(TAG_COLORS).reduce((acc, [tag, color]) => {
    acc[tag as TagType] = {
      label: labels[tag as TagType],
      color,
    };
    return acc;
  }, {} as Record<TagType, TagMeta>);
}

export function getKnowledgebaseContent(locale: Locale): KnowledgebaseContent {
  const normalized = (locale ?? 'en') as Locale;
  return {
    copy: PAGE_COPY[normalized] ?? PAGE_COPY.en,
    sections: SECTIONS[normalized] ?? SECTIONS.en,
    tags: buildTagMeta(normalized),
  };
}

export const TagList = Object.keys(TAG_COLORS) as TagType[];