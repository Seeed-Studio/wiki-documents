import React, { useState } from 'react';
import { useLocation } from '@docusaurus/router';
import './value.css';

type Lang = 'en' | 'zh' | 'cn' | 'ja' | 'es' | 'pt';
type FeatureKey = 'rpifeature1' | 'rpifeature2' | 'rpifeature3' | 'rpifeature4';

type Props = {
  lang?: Lang;
};

const getLangFromPath = (pathname?: string): Lang => {
  const path = (pathname || '').toLowerCase();

  if (path === '/cn' || path.startsWith('/cn/')) return 'zh';
  if (path === '/ja' || path.startsWith('/ja/')) return 'ja';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/pt-br' || path.startsWith('/pt-br/')) return 'pt';

  return 'en';
};

const featureContents: Record<'en' | 'zh' | 'ja' | 'es' | 'pt', Record<FeatureKey, string>> = {
  en: {
    rpifeature1:
      'The Raspberry Pi is a low-cost computer that is affordable for everyone. The price of a Raspberry Pi ranges from $5 to $55, depending on the model',
    rpifeature2:
      'The Raspberry Pi can be used for a wide range of projects, from home automation to gaming to robotics. It can also run a variety of operating systems, including Linux and Android',
    rpifeature3:
      'The Raspberry Pi is easy to set up and use, even for beginners. It comes with a stable Raspbian operating system and a huge number of enthusiasts are constantly developing new applications for it',
    rpifeature4:
      'The Raspberry Pi is small and lightweight, making it easy to carry around and use in different locations',
  },
  zh: {
    rpifeature1:
      '树莓派是一款低成本的计算机，每个人都能负担得起。根据型号不同，树莓派的价格从5美元到55美元不等。',
    rpifeature2:
      '树莓派可用于广泛的项目，从家庭自动化到游戏再到机器人技术。它还可以运行多种操作系统，包括Linux和Android。',
    rpifeature3:
      '树莓派易于设置和使用，即使对初学者也是如此。它配备了稳定的Raspbian操作系统，大量爱好者不断为其开发新应用程序。',
    rpifeature4:
      '树莓派小巧轻便，便于携带和在不同地点使用。',
  },
  ja: {
    rpifeature1:
      'Raspberry Piは低価格なコンピュータで、誰でも手に入れやすいです。モデルによって5ドルから55ドルの価格帯です。',
    rpifeature2:
      'Raspberry Piはホームオートメーション、ゲーム、ロボティクスなど幅広いプロジェクトに使えます。LinuxやAndroidなど多様なOSも動作します。',
    rpifeature3:
      'Raspberry Piは初心者でも簡単にセットアップして使えます。安定したRaspbian OSが搭載され、多くの愛好家が新しいアプリを開発しています。',
    rpifeature4:
      'Raspberry Piは小型で軽量なので、持ち運びやすく色々な場所で使えます。',
  },
  es: {
    rpifeature1:
      'Raspberry Pi es un ordenador de bajo costo, al alcance de todos. Según el modelo, su precio ronda entre 5 y 55 USD.',
    rpifeature2:
      'Raspberry Pi puede usarse en proyectos muy variados, desde domótica y juegos hasta robótica. También puede ejecutar distintos sistemas operativos, incluidos Linux y Android.',
    rpifeature3:
      'Raspberry Pi es fácil de configurar y usar incluso para principiantes. Viene con un sistema estable (Raspberry Pi OS/Raspbian) y una gran comunidad que crea nuevas aplicaciones constantemente.',
    rpifeature4:
      'Raspberry Pi es pequeña y ligera, fácil de transportar y de usar en distintos lugares.',
  },
  pt: {
    rpifeature1:
      'O Raspberry Pi é um computador de baixo custo, acessível para todos. Dependendo do modelo, o preço varia de 5 a 55 dólares.',
    rpifeature2:
      'O Raspberry Pi pode ser usado em uma grande variedade de projetos, desde automação residencial até jogos e robótica. Ele também pode executar vários sistemas operacionais, incluindo Linux e Android.',
    rpifeature3:
      'O Raspberry Pi é fácil de configurar e usar, mesmo para iniciantes. Ele vem com um sistema operacional estável (Raspberry Pi OS/Raspbian) e uma grande comunidade que desenvolve constantemente novas aplicações.',
    rpifeature4:
      'O Raspberry Pi é pequeno e leve, o que facilita transportá-lo e usá-lo em diferentes lugares.',
  }
};

const Value = ({ lang }: Props) => {
  const location = useLocation();
  const resolvedLang: Lang = lang ?? getLangFromPath(location.pathname);
  const normalizedLang = resolvedLang === 'cn' ? 'zh' : resolvedLang;

  const [activeFeature, setActiveFeature] = useState<FeatureKey | null>(null);

  const texts = featureContents[normalizedLang as 'en' | 'zh' | 'ja' | 'es' | 'pt'] || featureContents.en;

  const affordabilityLabel =
    normalizedLang === 'zh'
      ? '实惠价格'
      : normalizedLang === 'ja'
        ? '手頃な価格'
        : normalizedLang === 'es'
          ? 'Precio asequible'
          : normalizedLang === 'pt'
            ? 'Preço acessível'
            : 'Affordability';

  const versatilityLabel =
    normalizedLang === 'zh'
      ? '多功能性'
      : normalizedLang === 'ja'
        ? '多用途'
        : normalizedLang === 'es'
          ? 'Versatilidad'
          : normalizedLang === 'pt'
            ? 'Versatilidade'
            : 'Versatility';

  const easeOfUseLabel =
    normalizedLang === 'zh'
      ? '易于使用'
      : normalizedLang === 'ja'
        ? '使いやすさ'
        : normalizedLang === 'es'
          ? 'Facilidad de uso'
          : normalizedLang === 'pt'
            ? 'Facilidade de uso'
            : 'Ease of use';

  const sizeLabel =
    normalizedLang === 'zh'
      ? '小巧尺寸'
      : normalizedLang === 'ja'
        ? 'サイズ'
        : normalizedLang === 'es'
          ? 'Tamaño compacto'
          : normalizedLang === 'pt'
            ? 'Tamanho compacto'
            : 'Size';

  const defaultHint =
    normalizedLang === 'zh'
      ? '将鼠标悬停在功能上查看说明'
      : normalizedLang === 'ja'
        ? '特徴にカーソルを合わせて説明を表示します'
        : normalizedLang === 'es'
          ? 'Pasa el cursor sobre una característica para ver la explicación'
          : normalizedLang === 'pt'
            ? 'Passe o cursor sobre uma característica para ver a explicação'
            : 'Hover over a feature to see explanation';

  return (
    <div>
      <div className='feature-container'>
        <div
          id='rpifeature1'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature1')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          💰 {affordabilityLabel}
        </div>

        <div
          id='rpifeature2'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature2')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🧩 {versatilityLabel}
        </div>

        <div
          id='rpifeature3'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature3')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🚀 {easeOfUseLabel}
        </div>

        <div
          id='rpifeature4'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature4')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🐜 {sizeLabel}
        </div>
      </div>

      <div className='feature-explanation'>
        <p>
          {activeFeature ? texts[activeFeature] : defaultHint}
        </p>
      </div>
    </div>
  );
};

export default Value;