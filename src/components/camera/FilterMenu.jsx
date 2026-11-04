import React, {useEffect, useId, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import ApplicationIllustration from './ApplicationIllustration';
import styles from './CameraSelector.module.css';

// Select-only combobox: focus stays on the trigger while arrows move the
// active option. The list is in the top-level page, not clipped by the toolbar.
export default function FilterMenu({label, value, options, onChange, hint, note}) {
  const id = useId();
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const typed = useRef({text: '', time: 0});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(null);
  const [inputMode, setInputMode] = useState('keyboard');
  const [hovered, setHovered] = useState(null);
  const [environment, setEnvironment] = useState({reduced: true, touch: false, hidden: true});
  const illustrated = options.some((option) => option.illustration);
  const current = options.find((option) => option.id === value) || options[0];
  const show = () => {
    triggerRef.current?.focus({preventScroll: true});
    setActive(Math.max(0, options.findIndex((option) => option.id === value)));
    setOpen(true);
  };
  const choose = (option) => {
    if (!option) return;
    setOpen(false);
    onChange(option.id);
    triggerRef.current?.focus({preventScroll: true});
  };

  useEffect(() => {
    if (!open || !illustrated) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const touch = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => {
      setEnvironment({reduced: reduced.matches, touch: touch.matches, hidden: document.hidden});
      setHovered(null);
    };
    update();
    reduced.addEventListener('change', update);
    touch.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      reduced.removeEventListener('change', update);
      touch.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [open, illustrated]);

  useEffect(() => {
    if (!open) {setPosition(null); setHovered(null); return undefined;}
    const place = () => {
      const rect = triggerRef.current.getBoundingClientRect();
      const width = Math.min(illustrated ? 400 : Math.max(rect.width, 240), window.innerWidth - 32);
      const below = window.innerHeight - rect.bottom - 16;
      const above = rect.top - 16;
      const up = below < 240 && above > below;
      setPosition({
        width, left: Math.max(16, Math.min(rect.left, window.innerWidth - width - 16)),
        ...(up ? {bottom: window.innerHeight - rect.top + 8} : {top: rect.bottom + 8}),
        maxHeight: Math.max(80, (up ? above : below) - 8),
      });
    };
    const outside = (event) => {
      if (!triggerRef.current?.contains(event.target) && !listRef.current?.contains(event.target)) setOpen(false);
    };
    place();
    window.addEventListener('resize', place);
    // Scrolling inside the menu must not reposition it or snap to the active item.
    const scroll = (event) => {if (!listRef.current?.contains(event.target)) place();};
    window.addEventListener('scroll', scroll, true);
    document.addEventListener('pointerdown', outside);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', scroll, true);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open, illustrated]);

  const positioned = Boolean(position);
  useEffect(() => {
    if (!open || !positioned) return;
    const list = listRef.current;
    const option = list?.querySelector(`[data-option-index="${active}"]`);
    if (!option) return;
    if (option.offsetTop < list.scrollTop) list.scrollTop = option.offsetTop;
    else if (option.offsetTop + option.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = option.offsetTop + option.offsetHeight - list.clientHeight;
    }
  }, [active, open, positioned]);

  const keyDown = (event) => {
    setInputMode('keyboard');
    setHovered(null);
    if (event.key === 'Escape') {event.preventDefault(); setOpen(false); return;}
    if (event.key === 'Tab') {setOpen(false); return;}
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (open) choose(options[active]); else show();
      return;
    }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (!open) {show(); return;}
      setActive((index) => event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1
        : Math.max(0, Math.min(options.length - 1, index + (event.key === 'ArrowDown' ? 1 : -1))));
      return;
    }
    if (event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
      const now = Date.now();
      typed.current = {text: (now - typed.current.time < 700 ? typed.current.text : '') + event.key.toLowerCase(), time: now};
      const index = options.findIndex((option) => option.label.toLowerCase().startsWith(typed.current.text));
      if (index >= 0) {setOpen(true); setActive(index);}
    }
  };

  return <>
    <button ref={triggerRef} type="button" role="combobox" className={styles.filterTrigger}
      aria-label={label} aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? id : undefined}
      aria-activedescendant={open ? `${id}-${active}` : undefined} aria-describedby={`${id}-value${note ? ` ${id}-note` : ''}`} title={hint}
      onPointerDown={() => setInputMode('pointer')}
      onClick={() => open ? setOpen(false) : show()} onKeyDown={keyDown} onBlur={() => setOpen(false)}>
      <span><small>{label}{note && <span id={`${id}-note`}> · {note}</span>}</small><span id={`${id}-value`}>{current.label}</span></span><span aria-hidden="true">⌄</span>
    </button>
    {open && createPortal(<div ref={listRef} id={id} role="listbox" aria-label={label}
      className={`${styles.filterMenu} ${illustrated ? styles.illustratedMenu : ''}`} style={{...position, visibility: position ? 'visible' : 'hidden'}}>
      {hint && <p className={styles.filterHint}>{hint}</p>}
      {options.map((option, index) => <div key={option.id} id={`${id}-${index}`} role="option"
        aria-selected={option.id === value} data-option-index={index} data-active={index === active}
        aria-labelledby={`${id}-${index}-label`} aria-describedby={option.description ? `${id}-${index}-description` : undefined}
        className={`${styles.filterOption} ${illustrated ? styles.illustratedOption : ''}`}
        onPointerMove={(event) => {
          if (event.pointerType !== 'mouse') return;
          setInputMode('pointer'); setActive(index); setHovered(option.id);
        }}
        onPointerLeave={() => setHovered((previous) => previous === option.id ? null : previous)}
        onMouseDown={(event) => event.preventDefault()} onClick={() => choose(option)}>
        {option.illustration && <ApplicationIllustration scene={option.illustration} hovered={hovered === option.id}
          environment={environment} inputMode={inputMode} scrollRoot={listRef} ready={positioned} />}
        <span className={illustrated ? styles.optionText : undefined}><span id={`${id}-${index}-label`}>{option.label}</span>
          {option.description && <small id={`${id}-${index}-description`}>{option.description}</small>}
        </span><span className={styles.optionCheck} aria-hidden="true">{option.id === value ? '✓' : ''}</span>
      </div>)}
    </div>, document.body)}
  </>;
}
