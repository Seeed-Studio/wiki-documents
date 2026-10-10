import React, {useEffect, useRef, useState} from 'react';
import {platformFamilies, platformOptions, platformProfiles} from './platformData';
import {connectionLabel} from './cameraModel';
import styles from './CameraSelector.module.css';

function PlatformImage({platform}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [platform.imageUrl]);
  return failed ? <span className={styles.platformImageError}>Image unavailable</span>
    : <img src={platform.imageUrl} alt={platform.label} onError={() => setFailed(true)} />;
}

export default function PlatformPicker({filters, onChange}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const gridRef = useRef(null);
  const focusIdRef = useRef('all');
  const selected = platformOptions.find(({id}) => id === filters.platform) || platformOptions[0];

  useEffect(() => {
    if (!open) return undefined;
    const dialog = dialogRef.current;
    const prior = document.body.style.overflow;
    let disposed = false;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    const place = () => {
      if (disposed || !dialog.open || !triggerRef.current || window.innerWidth <= 640) return;
      const anchor = triggerRef.current.getBoundingClientRect();
      const left = Math.max(16, Math.min(anchor.left, window.innerWidth - dialog.offsetWidth - 16));
      const top = Math.max(16, Math.min(anchor.bottom + 8, window.innerHeight - dialog.offsetHeight - 16));
      dialog.style.setProperty('--picker-left', `${left}px`);
      dialog.style.setProperty('--picker-top', `${top}px`);
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(dialog);
    window.addEventListener('resize', place);
    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener('resize', place);
      document.body.style.overflow = prior;
      if (dialog.open) dialog.close();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const choices = [...dialogRef.current.querySelectorAll('[data-choice-id]')];
    const target = choices.find((button) => button.dataset.choiceId === focusIdRef.current) || choices[0];
    bodyRef.current.scrollTop = 0;
    target?.focus({preventScroll: true});
    target?.scrollIntoView({block: 'nearest'});
  }, [open]);

  const show = () => {
    focusIdRef.current = selected.id;
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus({preventScroll: true});
  };
  const choose = (id) => {
    onChange('platform', id);
    dialogRef.current.close();
  };
  const onKeyDown = (event) => {
    const buttons = [...event.currentTarget.querySelectorAll('button')];
    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === buttons[0]) {event.preventDefault(); buttons.at(-1).focus();}
      else if (!event.shiftKey && document.activeElement === buttons.at(-1)) {event.preventDefault(); buttons[0].focus();}
      return;
    }
    const choices = buttons.filter((button) => button.hasAttribute('data-choice-id'));
    const index = choices.indexOf(document.activeElement);
    if (index < 0) return;
    // Follow the rendered grid so arrow navigation stays aligned on resize.
    const columns = getComputedStyle(gridRef.current).gridTemplateColumns.split(' ').length;
    const step = {ArrowRight: 1, ArrowLeft: -1, ArrowDown: columns, ArrowUp: -columns}[event.key];
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? choices.length - 1
      : event.key === 'ArrowDown' && index === 0 ? 1
      : event.key === 'ArrowUp' && index <= columns ? 0
      : step !== undefined ? index + step : null;
    if (next !== null) {
      event.preventDefault();
      choices[Math.max(0, Math.min(choices.length - 1, next))].focus();
    }
  };

  // Keep the site's image zoom from opening behind this native dialog.
  return <div className={styles.platformField} onClick={(event) => event.stopPropagation()}>
    <button ref={triggerRef} type="button" className={styles.platformTrigger} aria-label={`reComputer series: ${selected.label}`} aria-haspopup="dialog" aria-expanded={open} aria-controls="camera-platform-dialog" onClick={show}>
      {selected.imageUrl && <span className={styles.platformThumb}><PlatformImage key={selected.id} platform={selected} /></span>}
      <span className={styles.platformTriggerText}><small>reComputer series</small><span>{selected.label}</span></span><span aria-hidden="true">⌄</span>
    </button>
    <dialog id="camera-platform-dialog" ref={dialogRef} className={`${styles.dialog} ${styles.platformDialog}`} aria-labelledby="camera-platform-title" onClose={close} onKeyDown={onKeyDown} onClick={(event) => {if (event.target === event.currentTarget) event.currentTarget.close();}}>
      <header className={styles.platformHeader}><h2 id="camera-platform-title">Choose your series</h2><button type="button" className={styles.closeButton} aria-label="Close device picker" onClick={() => dialogRef.current.close()}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header>
      <div ref={bodyRef} className={styles.platformBody}>
        <button type="button" className={styles.platformAny} data-choice-id="all" aria-pressed={selected.id === 'all'} onClick={() => choose('all')}>Not selected <span>Browse all series</span></button>
        <div ref={gridRef} className={styles.platformGrid}>
          {platformFamilies.map((item) => <button type="button" key={item.id} className={styles.platformOption} data-choice-id={item.id} aria-pressed={selected.id === item.id} aria-label={`Select ${item.label}`} onClick={() => choose(item.id)}>
            <span className={styles.platformImage}><PlatformImage platform={item} /></span>
            <strong className={styles.platformName}><span>{item.name}</span>{' '}<span className={styles.platformSeries}>{item.series}</span></strong>
            <span>{platformProfiles[item.profile].connections.map((id) => connectionLabel[id]).join(' · ')} {selected.id === item.id && <span aria-hidden="true">✓</span>}</span>
          </button>)}
        </div>
      </div>
    </dialog>
  </div>;
}
