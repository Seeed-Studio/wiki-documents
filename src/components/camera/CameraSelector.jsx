import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './CameraSelector.module.css';
import PlatformPicker from './PlatformPicker';
import FilterMenu from './FilterMenu';
import DistanceFilter from './DistanceFilter';
import {CompatibilityJetson, ApplicationUses} from './CameraContext';
import {applicationSceneOptions, matchesApplication} from './applicationScenes';
import {cameras, interfaceOptions, platformOptions} from './cameraData';
import {wikiResourceGroups, specificationResources} from './cameraResources';
import {
  defaultFilters, effectiveOutput, depthCameraFilters, filterHints, activeFilterEntries, distanceMatch, distanceExplanation, formatDistance,
  resolutionOptions, outputOptions, outputLabel, COMPARISON_LIMIT, coverageOptions, capabilityOptions, linkOptions,
  connectionLabel, connectionOptionsFor, changeFilter, isCameraAvailable, selectCameras, facetCount, compareDisabledReason, comparisonCandidates,
  formatImage, formatFov, formatIdealRange, formatWorkingRange, formatFrameRate, keyFact, comparisonInsights,
} from './cameraModel';

const optionSets = {platform: platformOptions, application: applicationSceneOptions, connection: interfaceOptions, output: outputOptions, resolution: resolutionOptions, coverage: coverageOptions, link: linkOptions};
const filterNames = {platform: 'Series', application: 'Application', connection: 'Connection', output: 'Output', resolution: 'Min. RGB resolution', coverage: 'View', link: 'GMSL2 link', search: 'Search'};
const labelFor = (key, value) => optionSets[key]?.find(({id}) => id === value)?.label || String(value);

function FilterSelect({label, filterKey, filters, onChange, options, hint, note}) {
  return <FilterMenu label={label} value={filters[filterKey]} options={options}
    onChange={(value) => onChange(filterKey, value)} hint={hint} note={note} />;
}

function ProductImage({camera, thumbnail = false}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [camera.imageUrl]);
  return failed ? <span className={styles.imageError} role="img" aria-label={`Image unavailable for ${camera.name}`}>Image unavailable</span>
    : <img src={camera.imageUrl} alt={`${camera.name} camera`} loading="lazy" style={thumbnail ? {objectFit: camera.cardImageFit} : undefined} onClick={(event) => event.stopPropagation()} onError={() => setFailed(true)} />;
}

function CompareChoice({camera, selected, onToggle}) {
  const checked = selected.some(({id}) => id === camera.id);
  const reason = compareDisabledReason(camera, selected);
  return <label className={`${styles.compareChoice} ${reason ? styles.choiceDisabled : ''}`} title={reason || `Compare ${camera.name}`}>
    <input type="checkbox" checked={checked} disabled={Boolean(reason)} onChange={() => onToggle(camera)} aria-label={`Compare ${camera.name}`} aria-describedby="camera-comparison-help" />
    <span>{checked ? 'Selected' : 'Compare'}</span>
  </label>;
}

function ProductCard({camera, selected, onToggle, onOpen, distance}) {
  const depth = camera.output === 'depth';
  const reason = depth && distanceExplanation(camera, distance, true);
  const fov = depth ? camera.specs.depthFov : camera.specs.imageFov;
  return <article className={styles.card} data-camera-id={camera.id}>
    <div className={styles.media}><ProductImage camera={camera} thumbnail /></div>
    <div className={styles.cardBody}>
      <div className={styles.cardMeta}><span>{connectionLabel[camera.connection]}</span><span>{outputLabel[camera.output]}</span></div>
      <h3 title={camera.name}>{camera.name}</h3>
      <dl className={styles.cardSpecs}>
        <div><dt>{depth ? 'Ideal range' : camera.specs.image.perEye ? 'RGB / eye' : 'RGB resolution'}</dt><dd>{depth ? formatIdealRange(camera.specs.range) : formatImage({...camera.specs.image, perEye: false})}</dd></div>
        <div><dt>{depth ? 'Depth FOV' : 'Image FOV'}</dt><dd>{formatFov(fov)}</dd></div>
      </dl>
      {depth ? <p className={styles.streamSummary}><strong>Depth {formatImage(camera.specs.depth)}</strong><span>RGB {formatImage(camera.specs.image)}</span></p> : <p className={styles.keyFact}>{keyFact(camera)}</p>}
      {reason && <p className={styles.distanceReason}>{reason}</p>}
      <div className={styles.cardActions}>
        <button type="button" className={styles.detailButton} onClick={onOpen} aria-label={`Details for ${camera.name}`}>Details</button>
        <CompareChoice camera={camera} selected={selected} onToggle={onToggle} />
      </div>
    </div>
  </article>;
}

function specificationRows(depth, distance) {
  return [
    ...(depth ? [
      {key: 'idealRange', label: 'Ideal working range', value: ({specs}) => formatIdealRange(specs.range)},
      ...(distance ? [{key: 'distanceMatch', label: `Your requirement: ${formatDistance(distance)}`, value: (camera) => distanceExplanation(camera, distance)}] : []),
      {key: 'depthFov', label: 'Depth FOV', value: ({specs}) => formatFov(specs.depthFov)},
      {key: 'depth', label: 'Depth-map resolution', value: ({specs}) => formatImage(specs.depth)},
      {key: 'depthFps', label: 'Depth frame rate', value: ({specs}) => formatFrameRate(specs.depth)},
      {key: 'rangeBasis', label: 'Range configuration', value: ({specs}) => specs.range?.idealBasis || 'Not specified'},
      {key: 'workingRange', label: 'Depth sensing limits', value: ({specs}) => formatWorkingRange(specs.range)},
    ] : []),
    {key: 'image', label: 'RGB resolution', value: ({specs}) => formatImage(specs.image)},
    {key: 'imageFov', label: 'Image FOV', value: ({specs}) => formatFov(specs.imageFov)},
    {key: 'imageFps', label: 'Image frame rate', value: ({specs}) => formatFrameRate(specs.image)},
    {key: 'lens', label: 'Lens / mount', value: ({specs}) => specs.lens},
    {key: 'sensor', label: 'Sensor', value: (camera) => camera.sensor},
    {key: 'variant', label: 'Variant / mode notes', value: (camera) => [camera.specs.variantNote, camera.fps].filter(Boolean).join(' ')},
    {key: 'connection', label: 'Connection', value: (camera) => connectionLabel[camera.connection]},
    {key: 'connector', label: 'Cable / expansion', value: (camera) => camera.connector},
    {key: 'bandwidth', label: 'Link / bandwidth', value: (camera) => camera.specs.linkGbps ? `${camera.specs.linkGbps} Gbps GMSL2 link (not image throughput)` : camera.bandwidth},
  ];
}

function ResourceLinks({camera}) {
  const links = specificationResources(camera);
  if (!links.length) return null;
  return <div className={styles.resourceLinks}>
    {links.map(({url, title}) => <a key={url} href={url} target="_blank" rel="noopener noreferrer">{title} <span aria-hidden="true">↗</span></a>)}
  </div>;
}

function WikiGuides({camera, compact = false, headingRef}) {
  const groups = wikiResourceGroups(camera);
  if (!groups.length) return null;
  return <section className={`${styles.wikiGuides} ${compact ? styles.wikiGuidesCompact : ''}`} aria-label={`Wiki guides for ${camera.name}`}>
    {!compact && <><h3 id="camera-wiki-title" ref={headingRef} tabIndex={-1}>Wiki guides & examples</h3><p className={styles.specNote}>Follow the hardware and software versions used in each guide. Links open in a new tab.</p></>}
    {groups.map(({id, label, links}) => <div key={id}>
      <h4>{label}</h4>
      <ul>{links.map(({url, title, note}) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} <span aria-hidden="true">↗</span></a>{!compact && note && <small>{note}</small>}</li>)}</ul>
    </div>)}
  </section>;
}

function ComparisonPicker({camera, platform, application, selected, onToggle, distance}) {
  const [search, setSearch] = useState('');
  const candidates = comparisonCandidates(cameras, platform, camera.output, search, application);
  return <>
    <div className={styles.pickerToolbar}>
      <p id="camera-picker-help">Choose two {outputLabel[camera.output]} cameras. Your series and Application still apply; other page filters are ignored here.</p>
      <label className={styles.field}><span>Find a camera to compare</span><input type="search" aria-label="Search comparison cameras" placeholder="Model, sensor or SKU" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
    </div>
    <div className={styles.pickerSelection} aria-live="polite">
      <span>{selected.length}/{COMPARISON_LIMIT} selected</span>
      {selected.map((item) => <button type="button" key={item.id} onClick={() => onToggle(item)} aria-label={`Remove ${item.name} from comparison`}>{item.name}<span aria-hidden="true">×</span></button>)}
    </div>
    {selected.length === COMPARISON_LIMIT && <p className={styles.compareHelp}>Two selected. Remove one to choose a different camera.</p>}
    <div className={styles.pickerGrid}>
      {candidates.map((item) => {
        const checked = selected.some(({id}) => id === item.id);
        const reason = compareDisabledReason(item, selected);
        return <label key={item.id} className={`${styles.pickerCamera} ${reason ? styles.choiceDisabled : ''}`} title={reason || undefined}>
          <span className={styles.pickerImage}><ProductImage camera={item} /></span>
          <span className={styles.pickerCameraText}><strong>{item.name}</strong><small>{connectionLabel[item.connection]} · {formatImage(item.specs.image)}</small><small>{keyFact(item)}</small>{distance && item.output === 'depth' && <small>{distanceExplanation(item, distance)}</small>}</span>
          <input type="checkbox" checked={checked} disabled={Boolean(reason)} aria-label={`Compare ${item.name}`} aria-describedby="camera-picker-help" onChange={() => onToggle(item)} />
        </label>;
      })}
    </div>
    {!candidates.length && <p className={styles.compareHelp}>No matching models. {search ? <button type="button" className={styles.textButton} onClick={() => setSearch('')}>Clear search</button> : 'Change Application or series on the camera page to see other candidates.'}</p>}
  </>;
}

function CameraDialog({dialogRef, bodyRef, headingRef, view, platform, application, selected, onToggle, onPick, onClear, onCompare, onDetails, onClose, distance}) {
  const wikiHeadingRef = useRef(null);
  const camera = cameras.find(({id}) => id === view?.id);
  const isComparison = view?.type === 'compare';
  const isPicker = view?.type === 'pick';
  const insights = comparisonInsights(selected);
  const rows = specificationRows(isComparison ? selected[0]?.output === 'depth' : camera?.output === 'depth', distance);
  const setupKeys = ['connection', 'connector', 'bandwidth', 'variant'];
  const compareReason = camera && compareDisabledReason(camera, selected);
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
        <div><span className={styles.eyebrow}>{isComparison || isPicker ? 'SIDE BY SIDE' : `${connectionLabel[camera.connection]} · ${outputLabel[camera.output]}`}</span><h2 id="camera-dialog-title" ref={headingRef} tabIndex={-1}>{isComparison ? `Compare ${selected.length} cameras` : isPicker ? 'Choose cameras to compare' : camera.name}</h2></div>
        <button type="button" className={styles.closeButton} onClick={() => dialogRef.current?.close()} aria-label="Close camera dialog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </header>
      <div className={styles.dialogBody} ref={bodyRef}>
        {isPicker ? <ComparisonPicker key={camera.id} camera={camera} platform={platform} application={application} selected={selected} onToggle={onToggle} distance={distance} /> : isComparison ? <>
          <p className={styles.compareHelp}>Highlights show a numerical advantage, not an overall recommendation. More pixels or a wider view are not always better. Equal values and open-ended (+) maxima stay neutral.</p>
          {selected[0]?.output === 'depth' && <p className={styles.compareHelp}>Ideal range coverage is a first check, not a guarantee of accuracy on your materials or in your lighting. Maximum sensing distance is not the ideal range.</p>}
          <div className={styles.compareScroll} role="region" aria-label="Selected camera comparison" tabIndex={0}>
            <table><thead><tr><th scope="col">Specification</th>{selected.map((item) => <th scope="col" key={item.id}><span>{item.name}</span><small>{connectionLabel[item.connection]}</small><button type="button" className={styles.textButton} onClick={() => onDetails(item)}>Details</button></th>)}</tr></thead>
              <tbody>{rows.map(({key, label, value}) => <tr key={key}><th scope="row">{label}{insights.notes[key] && <small>{insights.notes[key]}</small>}</th>{selected.map((item) => {
                const badges = insights.badges[item.id]?.[key] || [];
                return <td key={item.id} className={badges.length ? styles.compareWinner : undefined}><span className={badges.length ? styles.compareValue : undefined}>{value(item)}</span>{badges.map((badge) => <span className={styles.compareBadge} key={badge}>{badge}</span>)}</td>;
              })}</tr>)}
                <tr><th scope="row">Software</th>{selected.map((item) => <td key={item.id}>{item.software}</td>)}</tr>
                <tr><th scope="row">Resources</th>{selected.map((item) => <td key={item.id}><ResourceLinks camera={item} /><WikiGuides camera={item} compact /></td>)}</tr>
              </tbody>
            </table>
          </div>
        </> : camera && <div className={styles.detailLayout}>
          <aside className={styles.detailOverview}>
            <div className={styles.detailMedia}><ProductImage camera={camera} /></div>
            <div className={styles.detailActions}>
              {camera.bazaarUrl && <a className={styles.buyButton} href={camera.bazaarUrl} target="_blank" rel="noopener noreferrer">Get One Now <span aria-hidden="true">↗</span></a>}
              <button type="button" className={styles.detailButton} disabled={Boolean(compareReason)} onClick={() => onPick(camera)}>Compare with…</button>
              {compareReason && <small>{compareReason} <button type="button" className={styles.textButton} onClick={onClear}>Clear comparison selection</button></small>}
              {selected.length > 0 && <button type="button" className={styles.textButton} onClick={() => onPick(selected[0])}>Manage comparison ({selected.length}/{COMPARISON_LIMIT})</button>}
            </div>
            <p>{camera.bestFor}</p>
            <ResourceLinks camera={camera} />
            {wikiResourceGroups(camera).length > 0 && <button type="button" className={styles.wikiJump} aria-controls="camera-wiki-title" onClick={() => {wikiHeadingRef.current?.focus({preventScroll: true}); wikiHeadingRef.current?.scrollIntoView({block: 'start', behavior: 'instant'});}}>Wiki guides & examples <span aria-hidden="true">↓</span></button>}
            {camera.imageNote && <small>{camera.imageNote}.</small>}
          </aside>
          <div className={styles.detailSpecs}>
            <section aria-labelledby="camera-spec-title"><h3 id="camera-spec-title">Specifications</h3><p className={styles.specNote}>RGB resolution is per eye for stereo cameras.{camera.output === 'depth' && ' Ideal working range is the recommended distance range, not the maximum sensing distance.'}</p><dl className={styles.specList}>{rows.filter(({key}) => !setupKeys.includes(key)).map(({key, label, value}) => <div key={key}><dt>{label}</dt><dd>{value(camera)}</dd></div>)}</dl></section>
            <section className={styles.detailSetup} aria-labelledby="camera-software-title"><h3 id="camera-software-title">Connection & software</h3>
              {camera.connection === 'gmsl' && <p className={styles.specNote}>Power off before connecting or disconnecting a GMSL camera.</p>}
              <dl className={styles.setupList}>
              {rows.filter(({key}) => setupKeys.includes(key) && key !== 'connection').map(({key, label, value}) => <div key={key}><dt>{label}</dt><dd>{value(camera)}</dd></div>)}
              <div><dt>Software</dt><dd>{camera.software}</dd></div>
            </dl></section>
          </div>
          <CompatibilityJetson camera={camera} platform={platform} />
          <ApplicationUses camera={camera} />
          <WikiGuides camera={camera} headingRef={wikiHeadingRef} />
        </div>}
      </div>
      {isPicker && <footer className={styles.pickerFooter}><button type="button" className={styles.detailButton} onClick={() => onDetails(camera)}>Back to details</button><button type="button" className={styles.primaryButton} disabled={selected.length < 2} onClick={onCompare}>{!selected.length ? 'Choose two cameras' : selected.length === 1 ? 'Choose one more camera' : `Compare (${selected.length})`}</button></footer>}
      {isComparison && <footer className={styles.pickerFooter}><button type="button" className={styles.detailButton} onClick={() => onPick(selected[0])}>Change cameras</button></footer>}
    </div>}
  </dialog>;
}

export default function CameraSelector() {
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
      if (compareDisabledReason(camera, currentCameras)) return current;
      return current.includes(camera.id) ? current.filter((id) => id !== camera.id) : [...current, camera.id];
    });
    setNotice('');
  };
  const openPicker = (camera) => {
    if (compareDisabledReason(camera, selected)) return;
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
    const messages = [resetConnection ? `${connectionLabel[filters.connection]} is unavailable for this series and Application. Connection changed to Any; other requirements kept.` : ''];
    if (key === 'platform') {
      const remaining = selected.filter((camera) => isCameraAvailable(camera, value));
      const removed = selected.length - remaining.length;
      setSelectedIds(remaining.map(({id}) => id));
      if (removed) messages.push(`${removed} ${removed === 1 ? 'camera removed' : 'cameras removed'} from comparison: outside this series' camera options.`);
    }
    setNotice(messages.filter(Boolean).join(' '));
  };
  const clearFilters = () => {
    closeDialog();
    setFilters({...defaultFilters});
    setDistanceInvalid(false);
    setDistanceReset((current) => current + 1);
    setNotice(selected.length ? 'Filters cleared. Your comparison selection is kept.' : 'All filters cleared.');
    // The reset button becomes disabled; keep keyboard focus on the results.
    resultsRef.current?.focus({preventScroll: true});
  };
  const showDepthCameras = () => {
    setFilters((current) => depthCameraFilters(current));
    setNotice('Night-vision lighting cleared. Showing cameras with depth output; other requirements kept.');
    resultsRef.current?.focus({preventScroll: true});
  };
  const activeFilters = activeFilterEntries(filters).map(([key, value]) => ({
    key,
    label: key === 'distance' ? `Working distance: ${formatDistance(value)}` : capabilityOptions.find(({id}) => id === key)?.label || `${filterNames[key]}: ${labelFor(key, value)}`,
    count: facetCount(cameras, filters, key, defaultFilters[key]),
  }));
  const recoveries = activeFilters.filter(({count}) => count > 0);
  const compareHelp = selected.length ? `${outputLabel[selected[0].output]} comparison · ${selected.length}/${COMPARISON_LIMIT} selected. ${selected.length === COMPARISON_LIMIT ? 'Remove one to compare a different pair.' : 'Choose one more camera with the same output type.'}` : 'Select Compare on two camera cards to view their specifications side by side. Choose either two RGB cameras or two RGB + Depth cameras.';

  const revealFocusedControl = (event) => {
    const tray = trayRef.current;
    if (!tray || tray.contains(event.target) || event.target.closest('dialog')) return;
    const bottom = event.target.getBoundingClientRect().bottom;
    const limit = tray.getBoundingClientRect().top - 12;
    if (bottom > limit) window.scrollBy({top: bottom - limit, behavior: 'instant'});
  };

  return <div className={`${styles.selector} ${selected.length ? styles.withComparison : ''}`} onFocusCapture={revealFocusedControl}>
    <section className={styles.filterPanel} aria-label="Find a camera">
      <div className={styles.coreFilters}>
        <PlatformPicker filters={filters} onChange={updateFilter} />
        <FilterSelect label="Application" filterKey="application" options={applicationSceneOptions} filters={filters} onChange={updateFilter} hint={filterHints.application} />
        <FilterSelect label="Connection" filterKey="connection" options={connectionOptionsFor(filters.platform, filters.application)} filters={filters} onChange={updateFilter} hint={filterHints.connection} />
        <FilterSelect label="Camera output" filterKey="output" options={outputOptions} filters={filters} onChange={updateFilter} hint={filterHints.output} />
        <FilterSelect label="Minimum RGB resolution" filterKey="resolution" options={resolutionOptions} filters={filters} onChange={updateFilter} hint={filterHints.resolution} />
        <FilterSelect label="Field of view" filterKey="coverage" options={coverageOptions} filters={filters} onChange={updateFilter} hint={filterHints.coverage} />
        <label className={`${styles.field} ${styles.searchField}`}><span>Find a model</span><input type="search" aria-label="Search cameras" placeholder="Model, sensor or SKU" value={filters.search} onChange={(event) => updateFilter('search', event.target.value)} /></label>
        <div className={styles.filterUtilities}>
        <button type="button" className={styles.moreButton} aria-expanded={advanced} aria-controls="camera-more-filters" onClick={() => setAdvanced((current) => !current)}><span aria-hidden="true">{advanced ? '−' : '+'}</span> More filters</button>
        <details className={styles.specHelp}><summary>Reading specs</summary><div><p>RGB resolution is per eye, not the sum of two sensors or the depth-map resolution. More pixels do not guarantee better image quality.</p><p>Field of view (FOV) is horizontal (H), vertical (V) or diagonal. A wider view covers more of the scene, with fewer pixels on a small target.</p><p>Some angles depend on the fitted or ordered lens. “FOV not fully specified” means the angle or its axis is missing.</p></div></details>
        </div>
      </div>
      {effectiveOutput(filters) === 'depth' && <DistanceFilter distance={filters.distance} resetVersion={distanceReset} onChange={updateFilter} onInvalidChange={setDistanceInvalid} />}
      {filters.night && <p className={styles.applicationNote}>Built-in lighting for night-vision images, not depth projectors such as Gemini 2’s. <button type="button" className={styles.textButton} onClick={showDepthCameras}>Need depth instead?</button></p>}
      {advanced && <div className={styles.advanced} id="camera-more-filters">
        <fieldset><legend>Features</legend>{capabilityOptions.map(({id, label, description}) => <label className={styles.checkFilter} key={id}><input type="checkbox" checked={filters[id]} onChange={() => updateFilter(id, !filters[id])} aria-label={label} aria-describedby={`camera-feature-${id}`} /><span>{label}<small id={`camera-feature-${id}`}>{description}</small></span></label>)}</fieldset>
        {filters.connection === 'gmsl' && <div><FilterSelect label="GMSL2 link rate" filterKey="link" options={linkOptions} filters={filters} onChange={updateFilter} /><p>Only documented 3/6 Gbps modes match these options. Link speed is not a picture-quality rating.</p></div>}
      </div>}
    </section>

    <section className={styles.results} aria-labelledby="camera-results-title">
      <div className={styles.resultsHead}><h2 id="camera-results-title" ref={resultsRef} tabIndex={-1} aria-live="polite" aria-atomic="true">{visible.length} {visible.length === 1 ? 'camera' : 'cameras'}</h2><button type="button" className={styles.clearFiltersButton} disabled={!activeFilters.length && !distanceInvalid} onClick={clearFilters} title="Reset all filters, including Application. Keep cameras selected for comparison."><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M3 10a9 9 0 1 1 2.6 8.4M3 4v6h6" /></svg>Clear filters</button></div>
      {activeFilters.length > 0 && <div className={styles.activeFilters} aria-label="Selected filters">{activeFilters.map(({key, label}) => <button type="button" key={key} onClick={() => updateFilter(key, defaultFilters[key])} aria-label={`Remove ${label}`}>{label}<span aria-hidden="true">×</span></button>)}</div>}
      <p className={styles.compareHelp} id="camera-comparison-help">{compareHelp}</p>
      <p className={styles.notice} role="status">{notice}</p>
      {visible.length ? <div className={styles.grid}>{visible.map((camera) => <ProductCard key={camera.id} camera={camera} distance={filters.distance} selected={selected} onToggle={toggleCompare} onOpen={(event) => openDetails(camera, event)} />)}</div> : <div className={styles.emptyState}>
        <h3>No cameras match this combination</h3><p>Each camera must match every filter. {recoveries.length ? 'Remove one below to see candidates.' : 'Reset requirements while keeping your series and connection.'}</p>
        <div className={styles.recoveryActions}>{recoveries.map(({key, label}) => <button type="button" key={key} onClick={() => updateFilter(key, defaultFilters[key])}>{key === 'distance' ? 'Clear distance requirements' : `Remove ${label}`}</button>)}{!recoveries.length && <button type="button" onClick={() => {setFilters({...defaultFilters, platform: filters.platform, connection: filters.connection}); setDistanceInvalid(false);}}>Keep series & connection only</button>}</div>
      </div>}
    </section>

    {selected.length > 0 && <aside ref={trayRef} className={styles.compareTray} aria-label="Camera comparison selection">
      <div className={styles.traySelection}><strong>{selected.length}/{COMPARISON_LIMIT} selected</strong><div className={styles.trayItems}>{selected.map((camera) => <button type="button" key={camera.id} onClick={() => toggleCompare(camera)} aria-label={`Remove ${camera.name} from comparison`}><span>{camera.name}{!matchesApplication(camera, filters.application) && <small>Outside Application filter</small>}{filters.distance && camera.output === 'depth' && distanceMatch(camera, filters.distance) !== 'match' && <small>Outside distance requirement</small>}</span><span aria-hidden="true">×</span></button>)}</div></div>
      <div className={styles.trayActions}><button type="button" className={styles.textButton} onClick={() => setSelectedIds([])}>Clear selection</button><button type="button" className={styles.primaryButton} disabled={selected.length < 2} onClick={openCompare}>{selected.length < 2 ? 'Choose one more' : `Compare (${selected.length})`}</button></div>
    </aside>}
    <CameraDialog dialogRef={dialogRef} bodyRef={bodyRef} headingRef={headingRef} view={view} platform={filters.platform} application={filters.application} distance={filters.distance} selected={selected} onToggle={toggleCompare} onPick={openPicker} onClear={() => setSelectedIds([])} onCompare={openCompare} onDetails={openDetails} onClose={handleClose} />
  </div>;
}
