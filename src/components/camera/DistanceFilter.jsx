import React, {useEffect, useRef, useState} from 'react';
import {cameraT, presentDistanceResult, showDistance} from './i18n';
import styles from './CameraSelector.module.css';

const draftFor = (distance) => ({minM: distance?.minM?.toString() || '', maxM: distance?.maxM?.toString() || ''});

export default function DistanceFilter({distance, resetVersion, onChange, onInvalidChange, lang = 'en'}) {
  const t = cameraT(lang);
  const [draft, setDraft] = useState(() => draftFor(distance));
  const [validation, setValidation] = useState({error: '', invalidFields: []});
  const emitted = useRef(distance);
  const reset = useRef(resetVersion);

  useEffect(() => {
    // Do not rewrite valid keystrokes such as "0." into "0" while editing.
    // External chip/reset actions, however, must also discard invalid drafts.
    if (distance === emitted.current && reset.current === resetVersion) return;
    emitted.current = distance;
    reset.current = resetVersion;
    setDraft(draftFor(distance));
    setValidation({error: '', invalidFields: []});
    onInvalidChange(false);
  }, [distance, resetVersion, onInvalidChange]);

  const edit = (key, value) => {
    const next = {...draft, [key]: value};
    setDraft(next);
    const result = presentDistanceResult(next, lang);
    setValidation(result);
    onInvalidChange(Boolean(result.error));
    if (!result.error) {
      emitted.current = result.distance;
      onChange('distance', result.distance);
    }
  };

  const nearest = t('nearestTarget');
  const farthest = t('farthestTarget');
  return <section className={styles.distancePanel} aria-labelledby="camera-distance-title">
    <div className={styles.distanceIntro}><h3 id="camera-distance-title">{t('distanceTitle')}</h3><p id="camera-distance-help">{t('distanceHelp')}</p></div>
    <div className={styles.distanceInputs}>
      {[['minM', nearest], ['maxM', farthest]].map(([key, label]) => <label key={key} className={styles.field}>
        <span>{label}</span><input type="text" inputMode="decimal" autoComplete="off" aria-label={label} value={draft[key]} placeholder={t('optional')}
          aria-invalid={validation.invalidFields.includes(key)} aria-describedby={`camera-distance-help${validation.error ? ' camera-distance-error' : ''}`}
          onChange={(event) => edit(key, event.target.value)} />
      </label>)}
    </div>
    <p id="camera-distance-error" className={styles.distanceError} role="status" aria-atomic="true">{validation.error && `${validation.error} ${distance ? t('distanceStill', {distance: showDistance(distance, lang)}) : t('distanceNoLimit')}`}</p>
    <div className={styles.distanceFoot}><p>{t('distanceFoot')}</p>
      {(draft.minM || draft.maxM) && <button type="button" className={styles.textButton} onClick={() => onChange('distance', null)}>{t('clearDistance')}</button>}
    </div>
  </section>;
}
