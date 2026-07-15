import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'All Files Stored',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
      All the Seeed Studio Production Files <br/> Sensor modules, Development boards, Devices, Cloud, Solutions: <br/>Everything you need for <strong>the True Wild</strong>.  
      </>
    ),
  },
  {
    title: 'Contributors Inspired',
    Svg: require('@site/static/img/people.svg').default,
    description: (
      <>
      Anything Editable for Anyone Anytime <br/> Seeed Studio Controbutors Program Supported
      </>
    ),
  },
  {
    title: 'Brand New Framework',
    Svg: require('@site/static/img/structure.svg').default,
    description: (
      <>
      New structure, New categorization <br/>More function, Better exhibition <br/><code>Algolia</code>  Search Engine Powered<br/> Built around <code>Docusaurus</code> Framework
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
