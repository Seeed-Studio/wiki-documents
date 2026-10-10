import React from 'react';
import {applicationUses} from './cameraApplications';
import {cameraCompatibility} from './cameraCompatibility';
import {platformFamilies} from './platformData';
import styles from './CameraSelector.module.css';

export function CompatibilityJetson({camera, platform}) {
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
    <h3 id="camera-compatibility-title">Compatibility Jetson</h3>
    <p className={styles.specNote}>Series with a candidate connection in this guide. Support depends on the carrier, JetPack and camera driver; not every configuration has been tested.</p>
    {selected && !families.some(({selected: current}) => current) && <p className={styles.compatibilityNotice}>{selected.label} is outside this camera’s connection options.</p>}
    <ul className={styles.compatibilityList}>
      {families.map((family) => <li key={family.id} data-current={family.selected}>
        {family.label}{family.selected && <small>Selected series</small>}
      </li>)}
    </ul>
    {guides.size > 0 ? <details className={styles.contextGuides}>
      <summary>Series-specific guides & examples</summary>
      <ul>{[...guides.values()].map((guide) => <li key={guide.url}>
        <a href={guide.url} target="_blank" rel="noopener noreferrer">{guide.title} <span aria-hidden="true">↗</span></a>
        <small>{guide.families.join(' · ')}</small><p>{guide.note}</p>
      </li>)}</ul>
    </details> : <p className={styles.specNote}>No series-specific setup guide is linked for this camera.</p>}
  </section>;
}

export function ApplicationUses({camera}) {
  const uses = applicationUses(camera);
  if (!uses.length) return null;
  return <section className={styles.detailContext} aria-labelledby="camera-applications-title">
    <h3 id="camera-applications-title">Related application examples</h3>
    <p className={styles.specNote}>These references show how this model has been used. Other cameras may support the same task with suitable software and calibration.</p>
    <ul className={styles.applicationUses}>{uses.map(({id, label, evidence}) => <li key={id}>
      <strong>{label}</strong>{evidence.map(({url, kind, reason}) => <div key={url}>
        <p>{reason}</p><a href={url} target="_blank" rel="noopener noreferrer">{kind} <span aria-hidden="true">↗</span></a>
      </div>)}
    </li>)}</ul>
  </section>;
}
