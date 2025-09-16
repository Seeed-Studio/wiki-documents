import React, { useState } from 'react';
import './value.css';

const featureContents = {
  en: {
    rpifeature1: 'The Raspberry Pi is a low-cost computer that is affordable for everyone. The price of a Raspberry Pi ranges from $5 to $55, depending on the model',
    rpifeature2: 'The Raspberry Pi can be used for a wide range of projects, from home automation to gaming to robotics. It can also run a variety of operating systems, including Linux and Android',
    rpifeature3: 'The Raspberry Pi is easy to set up and use, even for beginners. It comes with a stable Raspbian operating system and a huge number of enthusiasts are constantly developing new applications for it',
    rpifeature4: 'The Raspberry Pi is small and lightweight, making it easy to carry around and use in different locations',
  },
  zh: {
    rpifeature1: '树莓派是一款低成本的计算机，每个人都能负担得起。根据型号不同，树莓派的价格从5美元到55美元不等。',
    rpifeature2: '树莓派可用于广泛的项目，从家庭自动化到游戏再到机器人技术。它还可以运行多种操作系统，包括Linux和Android。',
    rpifeature3: '树莓派易于设置和使用，即使对初学者也是如此。它配备了稳定的Raspbian操作系统，大量爱好者不断为其开发新应用程序。',
    rpifeature4: '树莓派小巧轻便，便于携带和在不同地点使用。',
  },
  ja: {
    rpifeature1: 'Raspberry Piは低価格なコンピュータで、誰でも手に入れやすいです。モデルによって5ドルから55ドルの価格帯です。',
    rpifeature2: 'Raspberry Piはホームオートメーション、ゲーム、ロボティクスなど幅広いプロジェクトに使えます。LinuxやAndroidなど多様なOSも動作します。',
    rpifeature3: 'Raspberry Piは初心者でも簡単にセットアップして使えます。安定したRaspbian OSが搭載され、多くの愛好家が新しいアプリを開発しています。',
    rpifeature4: 'Raspberry Piは小型で軽量なので、持ち運びやすく色々な場所で使えます。',
  },
  es: {
    rpifeature1: 'Raspberry Pi es un ordenador de bajo costo, al alcance de todos. Según el modelo, su precio ronda entre 5 y 55 USD.',
    rpifeature2: 'Raspberry Pi puede usarse en proyectos muy variados, desde domótica y juegos hasta robótica. También puede ejecutar distintos sistemas operativos, incluidos Linux y Android.',
    rpifeature3: 'Raspberry Pi es fácil de configurar y usar incluso para principiantes. Viene con un sistema estable (Raspberry Pi OS/Raspbian) y una gran comunidad que crea nuevas aplicaciones constantemente.',
    rpifeature4: 'Raspberry Pi es pequeña y ligera, fácil de transportar y de usar en distintos lugares.',
  }
};

const Value = ({ lang = 'en' }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  const texts = featureContents[lang] || featureContents.en;

  return (
    <div>
      <div className='feature-container'>
        <div
          id='rpifeature1'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature1')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          💰 {lang === 'zh' ? '实惠价格' : lang === 'ja' ? '手頃な価格' : lang === 'es' ? 'Precio asequible' : 'Affordability'}
        </div>
        <div
          id='rpifeature2'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature2')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🧩 {lang === 'zh' ? '多功能性' : lang === 'ja' ? '多用途' : lang === 'es' ? 'Versatilidad' : 'Versatility'}
        </div>
        <div
          id='rpifeature3'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature3')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🚀 {lang === 'zh' ? '易于使用' : lang === 'ja' ? '使いやすさ' : lang === 'es' ? 'Facilidad de uso' : 'Ease of use'}
        </div>
        <div
          id='rpifeature4'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature4')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🐜 {lang === 'zh' ? '小巧尺寸' : lang === 'ja' ? 'サイズ' : lang === 'es' ? 'Tamaño compacto' : 'Size'}
        </div>
      </div>

      <div className='feature-explanation'>
        <p>
          {activeFeature
            ? texts[activeFeature]
            : (lang === 'zh'
                ? '将鼠标悬停在功能上查看说明'
                : lang === 'ja'
                ? '特徴にカーソルを合わせて説明を表示します'
                : lang === 'es'
                ? 'Pasa el cursor sobre una característica para ver la explicación'
                : 'Hover over a feature to see explanation')}
        </p>
      </div>
    </div>
  );
};

export default Value;
