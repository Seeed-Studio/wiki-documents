import React, {useEffect, useRef, useState} from 'react';
import {formatDistance, parseDistanceDraft} from './cameraModel';
import styles from './CameraSelector.module.css';

const draftFor = (distance) => ({minM: distance?.minM?.toString() || '', maxM: distance?.maxM?.toString() || ''});

export default function DistanceFilter({distance, resetVersion, onChange, onInvalidChange}) {
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
    const result = parseDistanceDraft(next);
    setValidation(result);
    onInvalidChange(Boolean(result.error));
    if (!result.error) {
      emitted.current = result.distance;
      onChange('distance', result.distance);
    }
  };

  return <section className={styles.distancePanel} aria-labelledby="camera-distance-title">
    <div className={styles.distanceIntro}><h3 id="camera-distance-title">Working distance</h3><p id="camera-distance-help">Optional. The published ideal range must cover your target distances.</p></div>
    <div className={styles.distanceInputs}>
      {[['minM', 'Nearest target (m)'], ['maxM', 'Farthest target (m)']].map(([key, label]) => <label key={key} className={styles.field}>
        <span>{label}</span><input type="text" inputMode="decimal" autoComplete="off" aria-label={label} value={draft[key]} placeholder="Optional"
          aria-invalid={validation.invalidFields.includes(key)} aria-describedby={`camera-distance-help${validation.error ? ' camera-distance-error' : ''}`}
          onChange={(event) => edit(key, event.target.value)} />
      </label>)}
    </div>
    <p id="camera-distance-error" className={styles.distanceError} role="status" aria-atomic="true">{validation.error && `${validation.error} ${distance ? `Results still use ${formatDistance(distance)}.` : 'Results still have no distance limit.'}`}</p>
    <div className={styles.distanceFoot}><p>Range coverage is a first check, not a guarantee of accuracy on your materials or in your lighting.</p>
      {(draft.minM || draft.maxM) && <button type="button" className={styles.textButton} onClick={() => onChange('distance', null)}>Clear distance requirements</button>}
    </div>
  </section>;
}
