import React from 'react';
import './hero.css';

const RpiPage = ({ lang = 'en' }) => {
  // 多语言文案：统一使用 en / zh / ja / es
  const content = {
    en: {
      paragraph1:
        'Raspberry Pi (aka "RPi") was originally designed and created by a non-profit organization with the intention to promote teaching computer science at an affordable cost. Several generations and models of Raspberry Pis have now been released that have expanded their footprints, power and applications.',
      paragraph2:
        'At Seeed Studio, we offer the entire Raspberry Pi family of boards as well as complementary accessories and starter kits that can help you create projects centered around the product. Additionally, we have created many tutorials in Seeed’s Raspberry Pi community where you can easily find references to build your own circuits or write your own applications.',
    },
    zh: {
      paragraph1:
        '树莓派（又名 “RPi”）最初由一家非营利组织设计与创建，旨在以低成本推动计算机科学教育。如今已发布多代多款机型，在体积、性能与应用方面不断扩展。',
      paragraph2:
        '在 Seeed Studio，我们提供完整的树莓派系列主板，以及配套配件与入门套件，帮助你围绕产品快速开展项目。此外，我们在 Seeed 的树莓派社区中整理了大量教程，便于你查阅电路搭建与应用开发的参考资料。',
    },
    ja: {
      paragraph1:
        'Raspberry Pi（別名「RPi」）は、手頃な価格でコンピュータサイエンス教育を促進することを目的として、非営利団体によって設計・開発されました。これまでに複数の世代やモデルがリリースされ、性能や用途の幅が広がっています。',
      paragraph2:
        'Seeed Studio では、Raspberry Pi の全ラインアップに加え、周辺アクセサリやスターターキットも提供しています。さらに、Seeed の Raspberry Pi コミュニティには多数のチュートリアルがあり、回路作成やアプリ開発の参考として簡単に活用できます。',
    },
    es: {
      paragraph1:
        'Raspberry Pi (también “RPi”) fue diseñada y creada originalmente por una organización sin ánimo de lucro con la finalidad de promover la enseñanza de la informática a un costo asequible. Hoy existen varias generaciones y modelos que han ampliado su alcance, potencia y casos de uso.',
      paragraph2:
        'En Seeed Studio ofrecemos toda la familia de placas Raspberry Pi, además de accesorios y kits de inicio que te ayudarán a crear proyectos en torno al producto. También hemos preparado numerosos tutoriales en la comunidad de Raspberry Pi de Seeed, donde puedes encontrar fácilmente referencias para construir tus circuitos o escribir tus propias aplicaciones.',
    },
  };

  // 若未匹配到语言，回退到英文
  const texts = content[lang] || content.en;

  return (
    <div className="hero_container">
      <div className="hero_topic">
        <p>{texts.paragraph1}</p>
        <p>{texts.paragraph2}</p>
      </div>
      <div className="hero_img">
        <img
          src="https://files.seeedstudio.com/wiki/Raspberry-Pi-5/PI_5_HERO.png"
          alt="Raspberry Pi Hero"
        />
      </div>
    </div>
  );
};

export default RpiPage;
