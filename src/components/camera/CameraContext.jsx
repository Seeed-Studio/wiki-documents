import React from 'react';
import {applicationUses} from './cameraApplications';
import {cameraCompatibility} from './cameraCompatibility';
import {platformFamilies} from './platformData';
import {cameraT, evidenceText, fieldText, localizeWikiHref, wikiField} from './i18n';
import styles from './CameraSelector.module.css';

export function CompatibilityJetson({camera, platform, lang = 'en'}) {
  const t = cameraT(lang);
  const families = cameraCompatibility(camera, platform);
  const selected = platformFamilies.find(({id}) => id === platform);
  const guides = new Map();
  for (const family of families) {
    for (const guide of family.guides) {
      const item = guides.get(guide.url) || {...guide, families: []};
      item.families.push(family.label);
      guides.set(guide.url, item);
    }
  }
  return <section className={styles.detailContext} aria-labelledby="camera-compatibility-title">
    <h3 id="camera-compatibility-title">{t('compatibilityTitle')}</h3>
    <p className={styles.specNote}>{t('compatibilityNote')}</p>
    {selected && !families.some(({selected: current}) => current) && <p className={styles.compatibilityNotice}>{t('outsideSeries', {name: selected.label})}</p>}
    <ul className={styles.compatibilityList}>
      {families.map((family) => <li key={family.id} data-current={family.selected}>
        {family.label}{family.selected && <small>{t('selectedSeries')}</small>}
      </li>)}
    </ul>
    {guides.size > 0 ? <details className={styles.contextGuides}>
      <summary>{t('seriesGuides')}</summary>
      <ul>{[...guides.values()].map((guide) => <li key={guide.url}>
        <a href={localizeWikiHref(guide.url, lang)} target="_blank" rel="noopener noreferrer">{wikiField(guide, 'title', lang)} <span aria-hidden="true">↗</span></a>
        <small>{guide.families.join(' · ')}</small><p>{wikiField(guide, 'note', lang)}</p>
      </li>)}</ul>
    </details> : <p className={styles.specNote}>{t('noSeriesGuide')}</p>}
  </section>;
}

export function ApplicationUses({camera, lang = 'en'}) {
  const t = cameraT(lang);
  const uses = applicationUses(camera);
  if (!uses.length) return null;
  return <section className={styles.detailContext} aria-labelledby="camera-applications-title">
    <h3 id="camera-applications-title">{t('usesTitle')}</h3>
    <p className={styles.specNote}>{t('usesNote')}</p>
    <ul className={styles.applicationUses}>{uses.map(({id, label, evidence}) => <li key={id}>
      <strong>{lang === 'en' ? label : t(`scene.${id}`)}</strong>{evidence.map((item) => <div key={item.url}>
        <p>{evidenceText(item, lang)}</p><a href={localizeWikiHref(item.url, lang)} target="_blank" rel="noopener noreferrer">{fieldText(lang, item.kind)} <span aria-hidden="true">↗</span></a>
      </div>)}
    </li>)}</ul>
  </section>;
}
