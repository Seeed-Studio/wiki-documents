import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import styles from './CameraSelector.module.css';
import PlatformPicker from './PlatformPicker';
import FilterMenu from './FilterMenu';
import DistanceFilter from './DistanceFilter';
import {CompatibilityJetson, ApplicationUses} from './CameraContext';
import {applicationSceneOptions, matchesApplication} from './applicationScenes';
import {cameras, interfaceOptions, platformOptions} from './cameraData';
import {wikiResourceGroups, specificationResources} from './cameraResources';
import {getLangFromPathname} from '../jetson/selection/locale';
import {
  bestForText, cameraT, fieldText, localizeChoices, localizeWikiHref, presentInsights, showCompareReason,
  showDistance, showDistanceExplanation, showFov, showFrameRate, showIdealRange, showImage, showKeyFact, showWorkingRange, wikiField,
} from './i18n';
import {
  defaultFilters, effectiveOutput, depthCameraFilters, activeFilterEntries, distanceMatch,
  resolutionOptions, outputOptions, COMPARISON_LIMIT, coverageOptions, capabilityOptions, linkOptions,
  connectionOptionsFor, changeFilter, isCameraAvailable, selectCameras, facetCount, comparisonCandidates,
} from './cameraModel';

const optionSets = {application: applicationSceneOptions, connection: interfaceOptions, output: outputOptions, resolution: resolutionOptions, coverage: coverageOptions, link: linkOptions};
const filterNameKeys = {platform: 'filterSeries', application: 'filterApplication', connection: 'connection', output: 'filterOutput', resolution: 'filterResolution', coverage: 'filterCoverage', link: 'filterLink', search: 'filterSearch'};
const choicePrefix = {application: 'scene', connection: 'connection', output: 'output', resolution: 'resolution', coverage: 'coverage', link: 'link'};

function FilterSelect({label, filterKey, filters, onChange, options, hint, note}) {
  return <FilterMenu label={label} value={filters[filterKey]} options={options}
    onChange={(value) => onChange(filterKey, value)} hint={hint} note={note} />;
}

function ProductImage({camera, thumbnail = false, t}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [camera.imageUrl]);
  return failed ? <span className={styles.imageError} role="img" aria-label={t('imageUnavailableFor', {name: camera.name})}>{t('imageUnavailable')}</span>
    : <img src={camera.imageUrl} alt={t('cameraAlt', {name: camera.name})} loading="lazy" style={thumbnail ? {objectFit: camera.cardImageFit} : undefined} onClick={(event) => event.stopPropagation()} onError={() => setFailed(true)} />;
}

function CompareChoice({camera, selected, onToggle, lang, t}) {
  const checked = selected.some(({id}) => id === camera.id);
  const reason = showCompareReason(camera, selected, lang);
  return <label className={`${styles.compareChoice} ${reason ? styles.choiceDisabled : ''}`} title={reason || t('compareNamed', {name: camera.name})}>
    <input type="checkbox" checked={checked} disabled={Boolean(reason)} onChange={() => onToggle(camera)} aria-label={t('compareNamed', {name: camera.name})} aria-describedby="camera-comparison-help" />
    <span>{checked ? t('selected') : t('compare')}</span>
  </label>;
}

function ProductCard({camera, selected, onToggle, onOpen, distance, lang, t}) {
  const depth = camera.output === 'depth';
  const reason = depth && showDistanceExplanation(camera, distance, true, lang);
  const fov = depth ? camera.specs.depthFov : camera.specs.imageFov;
  return <article className={styles.card} data-camera-id={camera.id}>
    <div className={styles.media}><ProductImage camera={camera} thumbnail t={t} /></div>
    <div className={styles.cardBody}>
      <div className={styles.cardMeta}><span>{t(`connection.${camera.connection}`)}</span><span>{t(`output.${camera.output}`)}</span></div>
      <h3 title={camera.name}>{camera.name}</h3>
      <dl className={styles.cardSpecs}>
        <div><dt>{depth ? t('idealRange') : camera.specs.image.perEye ? t('rgbPerEye') : t('rgbResolution')}</dt><dd>{depth ? showIdealRange(camera.specs.range, lang) : showImage({...camera.specs.image, perEye: false}, lang)}</dd></div>
        <div><dt>{depth ? t('depthFov') : t('imageFov')}</dt><dd>{showFov(fov, lang)}</dd></div>
      </dl>
      {depth ? <p className={styles.streamSummary}><strong>{t('depthStream', {image: showImage(camera.specs.depth, lang)})}</strong><span>{t('rgbStream', {image: showImage(camera.specs.image, lang)})}</span></p> : <p className={styles.keyFact}>{showKeyFact(camera, lang)}</p>}
      {reason && <p className={styles.distanceReason}>{reason}</p>}
      <div className={styles.cardActions}>
        <button type="button" className={styles.detailButton} onClick={onOpen} aria-label={t('detailsFor', {name: camera.name})}>{t('details')}</button>
        <CompareChoice camera={camera} selected={selected} onToggle={onToggle} lang={lang} t={t} />
      </div>
    </div>
  </article>;
}

function specificationRows(depth, distance, lang, t) {
  return [
    ...(depth ? [
      {key: 'idealRange', label: t('specIdeal'), value: ({specs}) => showIdealRange(specs.range, lang)},
      ...(distance ? [{key: 'distanceMatch', label: t('specRequirement', {distance: showDistance(distance, lang)}), value: (camera) => showDistanceExplanation(camera, distance, false, lang)}] : []),
      {key: 'depthFov', label: t('depthFov'), value: ({specs}) => showFov(specs.depthFov, lang)},
      {key: 'depth', label: t('specDepthMap'), value: ({specs}) => showImage(specs.depth, lang)},
      {key: 'depthFps', label: t('specDepthFps'), value: ({specs}) => showFrameRate(specs.depth, lang)},
      {key: 'rangeBasis', label: t('specRangeBasis'), value: ({specs}) => fieldText(lang, specs.range?.idealBasis) || t('notSpecified')},
      {key: 'workingRange', label: t('specDepthLimits'), value: ({specs}) => showWorkingRange(specs.range, lang)},
    ] : []),
    {key: 'image', label: t('rgbResolution'), value: ({specs}) => showImage(specs.image, lang)},
    {key: 'imageFov', label: t('imageFov'), value: ({specs}) => showFov(specs.imageFov, lang)},
    {key: 'imageFps', label: t('specImageFps'), value: ({specs}) => showFrameRate(specs.image, lang)},
    {key: 'lens', label: t('specLens'), value: ({specs}) => fieldText(lang, specs.lens)},
    {key: 'sensor', label: t('specSensor'), value: (camera) => fieldText(lang, camera.sensor)},
    {key: 'variant', label: t('specVariant'), value: (camera) => [fieldText(lang, camera.specs.variantNote), fieldText(lang, camera.fps)].filter(Boolean).join(' ')},
    {key: 'connection', label: t('specConnection'), value: (camera) => t(`connection.${camera.connection}`)},
    {key: 'connector', label: t('specConnector'), value: (camera) => fieldText(lang, camera.connector)},
    {key: 'bandwidth', label: t('specBandwidth'), value: (camera) => camera.specs.linkGbps ? t('gmslLink', {n: camera.specs.linkGbps}) : fieldText(lang, camera.bandwidth)},
  ];
}

function ResourceLinks({camera, lang, t}) {
  const links = specificationResources(camera);
  if (!links.length) return null;
  return <div className={styles.resourceLinks}>
    {links.map((link) => <a key={link.url} href={localizeWikiHref(link.url, lang)} target="_blank" rel="noopener noreferrer">{link.title === 'Specifications' ? t('specLink') : link.title === 'Ideal range source' ? t('idealSource') : link.title} <span aria-hidden="true">↗</span></a>)}
  </div>;
}

function WikiGuides({camera, compact = false, headingRef, lang, t}) {
  const groups = wikiResourceGroups(camera);
  if (!groups.length) return null;
  return <section className={`${styles.wikiGuides} ${compact ? styles.wikiGuidesCompact : ''}`} aria-label={t('wikiFor', {name: camera.name})}>
    {!compact && <><h3 id="camera-wiki-title" ref={headingRef} tabIndex={-1}>{t('wikiJump')}</h3><p className={styles.specNote}>{t('wikiIntro')}</p></>}
    {groups.map(({id, links}) => <div key={id}>
      <h4>{t(`wiki.${id}`)}</h4>
      <ul>{links.map((link) => <li key={link.url}><a href={localizeWikiHref(link.url, lang)} target="_blank" rel="noopener noreferrer">{wikiField(link, 'title', lang)} <span aria-hidden="true">↗</span></a>{!compact && link.note && <small>{wikiField(link, 'note', lang)}</small>}</li>)}</ul>
    </div>)}
  </section>;
}

function ComparisonPicker({camera, platform, application, selected, onToggle, distance, lang, t}) {
  const [search, setSearch] = useState('');
  const candidates = comparisonCandidates(cameras, platform, camera.output, search, application);
  return <>
    <div className={styles.pickerToolbar}>
      <p id="camera-picker-help">{t('pickerHelp', {output: t(`output.${camera.output}`)})}</p>
      <label className={styles.field}><span>{t('findToCompare')}</span><input type="search" aria-label={t('searchComparison')} placeholder={t('searchPlaceholder')} value={search} onChange={(event) => setSearch(event.target.value)} /></label>
    </div>
    <div className={styles.pickerSelection} aria-live="polite">
      <span>{t('selectedCount', {n: selected.length, limit: COMPARISON_LIMIT})}</span>
      {selected.map((item) => <button type="button" key={item.id} onClick={() => onToggle(item)} aria-label={t('removeNamed', {name: item.name})}>{item.name}<span aria-hidden="true">×</span></button>)}
    </div>
    {selected.length === COMPARISON_LIMIT && <p className={styles.compareHelp}>{t('twoSelected')}</p>}
    <div className={styles.pickerGrid}>
      {candidates.map((item) => {
        const checked = selected.some(({id}) => id === item.id);
        const reason = showCompareReason(item, selected, lang);
        return <label key={item.id} className={`${styles.pickerCamera} ${reason ? styles.choiceDisabled : ''}`} title={reason || undefined}>
          <span className={styles.pickerImage}><ProductImage camera={item} t={t} /></span>
          <span className={styles.pickerCameraText}><strong>{item.name}</strong><small>{t(`connection.${item.connection}`)} · {showImage(item.specs.image, lang)}</small><small>{showKeyFact(item, lang)}</small>{distance && item.output === 'depth' && <small>{showDistanceExplanation(item, distance, false, lang)}</small>}</span>
          <input type="checkbox" checked={checked} disabled={Boolean(reason)} aria-label={t('compareNamed', {name: item.name})} aria-describedby="camera-picker-help" onChange={() => onToggle(item)} />
        </label>;
      })}
    </div>
    {!candidates.length && <p className={styles.compareHelp}>{search ? <>{t('noPickerPrefix')}<button type="button" className={styles.textButton} onClick={() => setSearch('')}>{t('clearSearch')}</button></> : t('noPickerMatch')}</p>}
  </>;
}

function CameraDialog({dialogRef, bodyRef, headingRef, view, platform, application, selected, onToggle, onPick, onClear, onCompare, onDetails, onClose, distance, lang, t}) {
  const wikiHeadingRef = useRef(null);
  const camera = cameras.find(({id}) => id === view?.id);
  const isComparison = view?.type === 'compare';
  const isPicker = view?.type === 'pick';
  const insights = presentInsights(selected, lang);
  const rows = specificationRows(isComparison ? selected[0]?.output === 'depth' : camera?.output === 'depth', distance, lang, t);
  const setupKeys = ['connection', 'connector', 'bandwidth', 'variant'];
  const compareReason = camera && showCompareReason(camera, selected, lang);
  const keepFocusInside = (event) => {
    if (event.key !== 'Tab') return;
    const controls = [...event.currentTarget.querySelectorAll('button:not(:disabled), input:not(:disabled), a[href], [tabindex="0"]')]
      .filter((element) => element.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) return;
    const focusOutside = !event.currentTarget.contains(document.activeElement);
    if (event.shiftKey && (document.activeElement === first || focusOutside)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || focusOutside)) {
      event.preventDefault(); first.focus();
    }
  };
  return <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="camera-dialog-title" onClose={onClose} onKeyDown={keepFocusInside} onClick={(event) => {if (event.target === event.currentTarget) event.currentTarget.close();}}>
    {view && <div className={styles.dialogShell}>
      <header className={styles.dialogHeader}>
        <div><span className={styles.eyebrow}>{isComparison || isPicker ? t('sideBySide') : `${t(`connection.${camera.connection}`)} · ${t(`output.${camera.output}`)}`}</span><h2 id="camera-dialog-title" ref={headingRef} tabIndex={-1}>{isComparison ? t('compareCameras', {n: selected.length}) : isPicker ? t('chooseCameras') : camera.name}</h2></div>
        <button type="button" className={styles.closeButton} onClick={() => dialogRef.current?.close()} aria-label={t('closeDialog')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </header>
      <div className={styles.dialogBody} ref={bodyRef}>
        {isPicker ? <ComparisonPicker key={camera.id} camera={camera} platform={platform} application={application} selected={selected} onToggle={onToggle} distance={distance} lang={lang} t={t} /> : isComparison ? <>
          <p className={styles.compareHelp}>{t('compareLegend')}</p>
          {selected[0]?.output === 'depth' && <p className={styles.compareHelp}>{t('compareDepthNote')}</p>}
          <div className={styles.compareScroll} role="region" aria-label={t('comparisonRegion')} tabIndex={0}>
            <table><thead><tr><th scope="col">{t('specification')}</th>{selected.map((item) => <th scope="col" key={item.id}><span>{item.name}</span><small>{t(`connection.${item.connection}`)}</small><button type="button" className={styles.textButton} onClick={() => onDetails(item)}>{t('details')}</button></th>)}</tr></thead>
              <tbody>{rows.map(({key, label, value}) => <tr key={key}><th scope="row">{label}{insights.notes[key] && <small>{insights.notes[key]}</small>}</th>{selected.map((item) => {
                const badges = insights.badges[item.id]?.[key] || [];
                return <td key={item.id} className={badges.length ? styles.compareWinner : undefined}><span className={badges.length ? styles.compareValue : undefined}>{value(item)}</span>{badges.map((badge) => <span className={styles.compareBadge} key={badge}>{badge}</span>)}</td>;
              })}</tr>)}
                <tr><th scope="row">{t('software')}</th>{selected.map((item) => <td key={item.id}>{fieldText(lang, item.software)}</td>)}</tr>
                <tr><th scope="row">{t('resources')}</th>{selected.map((item) => <td key={item.id}><ResourceLinks camera={item} lang={lang} t={t} /><WikiGuides camera={item} compact lang={lang} t={t} /></td>)}</tr>
              </tbody>
            </table>
          </div>
        </> : camera && <div className={styles.detailLayout}>
          <aside className={styles.detailOverview}>
            <div className={styles.detailMedia}><ProductImage camera={camera} t={t} /></div>
            <div className={styles.detailActions}>
              {camera.bazaarUrl && <a className={styles.buyButton} href={camera.bazaarUrl} target="_blank" rel="noopener noreferrer">{t('getOneNow')} <span aria-hidden="true">↗</span></a>}
              <button type="button" className={styles.detailButton} disabled={Boolean(compareReason)} onClick={() => onPick(camera)}>{t('compareWith')}</button>
              {compareReason && <small>{compareReason} <button type="button" className={styles.textButton} onClick={onClear}>{t('clearComparisonSelection')}</button></small>}
              {selected.length > 0 && <button type="button" className={styles.textButton} onClick={() => onPick(selected[0])}>{t('manageComparison', {n: selected.length, limit: COMPARISON_LIMIT})}</button>}
            </div>
            <p>{bestForText(camera, lang)}</p>
            <ResourceLinks camera={camera} lang={lang} t={t} />
            {wikiResourceGroups(camera).length > 0 && <button type="button" className={styles.wikiJump} aria-controls="camera-wiki-title" onClick={() => {wikiHeadingRef.current?.focus({preventScroll: true}); wikiHeadingRef.current?.scrollIntoView({block: 'start', behavior: 'instant'});}}>{t('wikiJump')} <span aria-hidden="true">↓</span></button>}
            {camera.imageNote && <small>{fieldText(lang, camera.imageNote)}{lang === "zh" || lang === "ja" ? "。" : "."}</small>}
          </aside>
          <div className={styles.detailSpecs}>
            <section aria-labelledby="camera-spec-title"><h3 id="camera-spec-title">{t('specTitle')}</h3><p className={styles.specNote}>{t('specIntro')}{camera.output === 'depth' && t('specIntroDepth')}</p><dl className={styles.specList}>{rows.filter(({key}) => !setupKeys.includes(key)).map(({key, label, value}) => <div key={key}><dt>{label}</dt><dd>{value(camera)}</dd></div>)}</dl></section>
            <section className={styles.detailSetup} aria-labelledby="camera-software-title"><h3 id="camera-software-title">{t('softwareTitle')}</h3>
              {camera.connection === 'gmsl' && <p className={styles.specNote}>{t('gmslPower')}</p>}
              <dl className={styles.setupList}>
              {rows.filter(({key}) => setupKeys.includes(key) && key !== 'connection').map(({key, label, value}) => <div key={key}><dt>{label}</dt><dd>{value(camera)}</dd></div>)}
              <div><dt>{t('software')}</dt><dd>{fieldText(lang, camera.software)}</dd></div>
            </dl></section>
          </div>
          <CompatibilityJetson camera={camera} platform={platform} lang={lang} />
          <ApplicationUses camera={camera} lang={lang} />
          <WikiGuides camera={camera} headingRef={wikiHeadingRef} lang={lang} t={t} />
        </div>}
      </div>
      {isPicker && <footer className={styles.pickerFooter}><button type="button" className={styles.detailButton} onClick={() => onDetails(camera)}>{t('backToDetails')}</button><button type="button" className={styles.primaryButton} disabled={selected.length < 2} onClick={onCompare}>{!selected.length ? t('chooseTwo') : selected.length === 1 ? t('chooseOneMoreCamera') : t('compareCount', {n: selected.length})}</button></footer>}
      {isComparison && <footer className={styles.pickerFooter}><button type="button" className={styles.detailButton} onClick={() => onPick(selected[0])}>{t('changeCameras')}</button></footer>}
    </div>}
  </dialog>;
}

export default function CameraSelector() {
  const {pathname} = useLocation();
  const lang = getLangFromPathname(pathname);
  const t = useMemo(() => cameraT(lang), [lang]);
  const [filters, setFilters] = useState({...defaultFilters});
  const [distanceInvalid, setDistanceInvalid] = useState(false);
  const [distanceReset, setDistanceReset] = useState(0);
  const [advanced, setAdvanced] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [view, setView] = useState(null);
  const [notice, setNotice] = useState('');
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const headingRef = useRef(null);
  const triggerRef = useRef(null);
  const resultsRef = useRef(null);
  const trayRef = useRef(null);
  const selected = selectedIds.map((id) => cameras.find((camera) => camera.id === id));
  const visible = useMemo(() => selectCameras(cameras, filters), [filters]);

  useEffect(() => {
    if (!view) return undefined;
    if (!dialogRef.current.open) dialogRef.current.showModal();
    const prior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    headingRef.current?.focus({preventScroll: true});
    return () => {document.body.style.overflow = prior;};
  }, [view]);

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };
  const handleClose = () => {
    setView(null);
    requestAnimationFrame(() => {
      const target = triggerRef.current;
      if (target?.isConnected && !target.disabled) target.focus({preventScroll: true});
      else resultsRef.current?.focus({preventScroll: true});
    });
  };
  const openDetails = (camera, event) => {
    if (event) triggerRef.current = event.currentTarget;
    setView({type: 'detail', id: camera.id});
  };
  const openCompare = (event) => {
    if (!view && event) triggerRef.current = event.currentTarget;
    if (selected.length >= 2) setView({type: 'compare'});
  };
  const toggleCompare = (camera) => {
    setSelectedIds((current) => {
      const currentCameras = current.map((id) => cameras.find((item) => item.id === id));
      if (showCompareReason(camera, currentCameras, lang)) return current;
      return current.includes(camera.id) ? current.filter((id) => id !== camera.id) : [...current, camera.id];
    });
    setNotice('');
  };
  const openPicker = (camera) => {
    if (showCompareReason(camera, selected, lang)) return;
    if (!selectedIds.includes(camera.id)) toggleCompare(camera);
    setView({type: 'pick', id: camera.id});
  };
  const updateFilter = (key, value) => {
    closeDialog();
    const next = changeFilter(filters, key, value);
    const resetConnection = next.connection !== filters.connection && key !== 'connection';
    setFilters((current) => changeFilter(current, key, value));
    if ((key === 'distance' && value === null) || effectiveOutput(next) !== 'depth') {
      setDistanceReset((current) => current + 1);
      setDistanceInvalid(false);
    }
    const messages = [resetConnection ? t('connectionReset', {connection: t(`connection.${filters.connection}`)}) : ''];
    if (key === 'platform') {
      const remaining = selected.filter((camera) => isCameraAvailable(camera, value));
      const removed = selected.length - remaining.length;
      setSelectedIds(remaining.map(({id}) => id));
      if (removed) messages.push(t(removed === 1 ? 'cameraRemovedOne' : 'cameraRemovedOther', {n: removed}));
    }
    setNotice(messages.filter(Boolean).join(' '));
  };
  const clearFilters = () => {
    closeDialog();
    setFilters({...defaultFilters});
    setDistanceInvalid(false);
    setDistanceReset((current) => current + 1);
    setNotice(selected.length ? t('filtersClearedKept') : t('filtersCleared'));
    // The reset button becomes disabled; keep keyboard focus on the results.
    resultsRef.current?.focus({preventScroll: true});
  };
  const showDepthCameras = () => {
    setFilters((current) => depthCameraFilters(current));
    setNotice(t('nightCleared'));
    resultsRef.current?.focus({preventScroll: true});
  };
  const activeFilters = activeFilterEntries(filters).map(([key, value]) => ({
    key,
    label: chipLabel(key, value, lang, t),
    count: facetCount(cameras, filters, key, defaultFilters[key]),
  }));
  const recoveries = activeFilters.filter(({count}) => count > 0);
  const compareHelp = selected.length
    ? t(selected.length === COMPARISON_LIMIT ? 'compareHelpFull' : 'compareHelpMore', {output: t(`output.${selected[0].output}`), n: selected.length, limit: COMPARISON_LIMIT})
    : t('compareHelpEmpty');

  const revealFocusedControl = (event) => {
    const tray = trayRef.current;
    if (!tray || tray.contains(event.target) || event.target.closest('dialog')) return;
    const bottom = event.target.getBoundingClientRect().bottom;
    const limit = tray.getBoundingClientRect().top - 12;
    if (bottom > limit) window.scrollBy({top: bottom - limit, behavior: 'instant'});
  };

  return <div className={`${styles.selector} ${selected.length ? styles.withComparison : ''}`} onFocusCapture={revealFocusedControl}>
    <section className={styles.filterPanel} aria-label={t('findCamera')}>
      <div className={styles.coreFilters}>
        <PlatformPicker filters={filters} onChange={updateFilter} lang={lang} />
        <FilterSelect label={t('application')} filterKey="application" options={localizeChoices(applicationSceneOptions, 'scene', lang)} filters={filters} onChange={updateFilter} hint={t('hint.application')} />
        <FilterSelect label={t('connection')} filterKey="connection" options={localizeChoices(connectionOptionsFor(filters.platform, filters.application), 'connection', lang)} filters={filters} onChange={updateFilter} hint={t('hint.connection')} />
        <FilterSelect label={t('cameraOutput')} filterKey="output" options={localizeChoices(outputOptions, 'output', lang)} filters={filters} onChange={updateFilter} hint={t('hint.output')} />
        <FilterSelect label={t('minResolution')} filterKey="resolution" options={localizeChoices(resolutionOptions, 'resolution', lang)} filters={filters} onChange={updateFilter} hint={t('hint.resolution')} />
        <FilterSelect label={t('fieldOfView')} filterKey="coverage" options={localizeChoices(coverageOptions, 'coverage', lang)} filters={filters} onChange={updateFilter} hint={t('hint.coverage')} />
        <label className={`${styles.field} ${styles.searchField}`}><span>{t('findModel')}</span><input type="search" aria-label={t('searchCameras')} placeholder={t('searchPlaceholder')} value={filters.search} onChange={(event) => updateFilter('search', event.target.value)} /></label>
        <div className={styles.filterUtilities}>
        <button type="button" className={styles.moreButton} aria-expanded={advanced} aria-controls="camera-more-filters" onClick={() => setAdvanced((current) => !current)}><span aria-hidden="true">{advanced ? '−' : '+'}</span> {t('moreFilters')}</button>
        <details className={styles.specHelp}><summary>{t('readingSpecs')}</summary><div><p>{t('readingResolution')}</p><p>{t('readingFov')}</p><p>{t('readingLens')}</p></div></details>
        </div>
      </div>
      {effectiveOutput(filters) === 'depth' && <DistanceFilter distance={filters.distance} resetVersion={distanceReset} onChange={updateFilter} onInvalidChange={setDistanceInvalid} lang={lang} />}
      {filters.night && <p className={styles.applicationNote}>{t('nightNote')} <button type="button" className={styles.textButton} onClick={showDepthCameras}>{t('needDepth')}</button></p>}
      {advanced && <div className={styles.advanced} id="camera-more-filters">
        <fieldset><legend>{t('features')}</legend>{localizeChoices(capabilityOptions, 'capability', lang).map(({id, label, description}) => <label className={styles.checkFilter} key={id}><input type="checkbox" checked={filters[id]} onChange={() => updateFilter(id, !filters[id])} aria-label={label} aria-describedby={`camera-feature-${id}`} /><span>{label}<small id={`camera-feature-${id}`}>{description}</small></span></label>)}</fieldset>
        {filters.connection === 'gmsl' && <div><FilterSelect label={t('gmslRate')} filterKey="link" options={localizeChoices(linkOptions, 'link', lang)} filters={filters} onChange={updateFilter} /><p>{t('gmslRateNote')}</p></div>}
      </div>}
    </section>

    <section className={styles.results} aria-labelledby="camera-results-title">
      <div className={styles.resultsHead}><h2 id="camera-results-title" ref={resultsRef} tabIndex={-1} aria-live="polite" aria-atomic="true">{t(visible.length === 1 ? 'cameraOne' : 'cameraOther', {n: visible.length})}</h2><button type="button" className={styles.clearFiltersButton} disabled={!activeFilters.length && !distanceInvalid} onClick={clearFilters} title={t('clearFiltersTitle')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M3 10a9 9 0 1 1 2.6 8.4M3 4v6h6" /></svg>{t('clearFilters')}</button></div>
      {activeFilters.length > 0 && <div className={styles.activeFilters} aria-label={t('selectedFilters')}>{activeFilters.map(({key, label}) => <button type="button" key={key} onClick={() => updateFilter(key, defaultFilters[key])} aria-label={t('removeLabel', {label})}>{label}<span aria-hidden="true">×</span></button>)}</div>}
      <p className={styles.compareHelp} id="camera-comparison-help">{compareHelp}</p>
      <p className={styles.notice} role="status">{notice}</p>
      {visible.length ? <div className={styles.grid}>{visible.map((camera) => <ProductCard key={camera.id} camera={camera} distance={filters.distance} selected={selected} onToggle={toggleCompare} onOpen={(event) => openDetails(camera, event)} lang={lang} t={t} />)}</div> : <div className={styles.emptyState}>
        <h3>{t('emptyTitle')}</h3><p>{t(recoveries.length ? 'emptyRecover' : 'emptyReset')}</p>
        <div className={styles.recoveryActions}>{recoveries.map(({key, label}) => <button type="button" key={key} onClick={() => updateFilter(key, defaultFilters[key])}>{key === 'distance' ? t('clearDistance') : t('removeLabel', {label})}</button>)}{!recoveries.length && <button type="button" onClick={() => {setFilters({...defaultFilters, platform: filters.platform, connection: filters.connection}); setDistanceInvalid(false);}}>{t('keepSeries')}</button>}</div>
      </div>}
    </section>

    {selected.length > 0 && <aside ref={trayRef} className={styles.compareTray} aria-label={t('trayLabel')}>
      <div className={styles.traySelection}><strong>{t('selectedCount', {n: selected.length, limit: COMPARISON_LIMIT})}</strong><div className={styles.trayItems}>{selected.map((camera) => <button type="button" key={camera.id} onClick={() => toggleCompare(camera)} aria-label={t('removeNamed', {name: camera.name})}><span>{camera.name}{!matchesApplication(camera, filters.application) && <small>{t('outsideApplication')}</small>}{filters.distance && camera.output === 'depth' && distanceMatch(camera, filters.distance) !== 'match' && <small>{t('outsideDistance')}</small>}</span><span aria-hidden="true">×</span></button>)}</div></div>
      <div className={styles.trayActions}><button type="button" className={styles.textButton} onClick={() => setSelectedIds([])}>{t('clearSelection')}</button><button type="button" className={styles.primaryButton} disabled={selected.length < 2} onClick={openCompare}>{selected.length < 2 ? t('chooseOneMore') : t('compareCount', {n: selected.length})}</button></div>
    </aside>}
    <CameraDialog dialogRef={dialogRef} bodyRef={bodyRef} headingRef={headingRef} view={view} platform={filters.platform} application={filters.application} distance={filters.distance} selected={selected} onToggle={toggleCompare} onPick={openPicker} onClear={() => setSelectedIds([])} onCompare={openCompare} onDetails={openDetails} onClose={handleClose} lang={lang} t={t} />
  </div>;
}

function chipLabel(key, value, lang, t) {
  if (key === 'distance') return t('workingDistanceChip', {distance: showDistance(value, lang)});
  if (capabilityOptions.some(({id}) => id === key)) return t(`capability.${key}`);
  if (key === 'platform') {
    const option = platformOptions.find(({id}) => id === value);
    return t('chipValue', {name: t('filterSeries'), value: value === 'all' ? t('notSelected') : option?.label || value});
  }
  const prefix = choicePrefix[key];
  const option = optionSets[key]?.find(({id}) => id === value);
  const valueLabel = prefix && option ? t(`${prefix}.${option.id}`) : String(value);
  return t('chipValue', {name: t(filterNameKeys[key]), value: valueLabel});
}
