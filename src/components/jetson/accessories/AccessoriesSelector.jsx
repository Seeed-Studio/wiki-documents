/**
 * AccessoriesSelector — React component for Jetson Accessories Selection Guide.
 * Adapted from CameraSelector.jsx architecture.
 *
 * Features:
 *  - Bilingual (zh-CN / en) via URL path detection
 *  - Filter panel with 4 dropdowns (device series, accessory type, interface, source)
 *  - Product card grid with images, specs, compare checkboxes
 *  - Compare tray with selection count and compare button
 *  - Modal dialog for detail / compare views
 *  - Full dark/light theme support via CSS custom properties
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import s from './AccessoriesSelector.module.css';
import accessories, {
  categoryOptions,
  interfaceOptions,
  sourceOptions,
  deviceOptions,
} from './accessoriesData';

// ── Constants ──
const COMPARISON_LIMIT = 2;

// ── i18n: detect language from URL path ──
function useLang() {
  const location = useLocation();
  return useMemo(() => {
    return /\/cn\//.test(location.pathname) ? 'zh' : 'en';
  }, [location.pathname]);
}

// ── Bilingual translation factory ──
function makeT(lang) {
  const isZh = lang === 'zh';
  return {
    isZh,
    results: (n) => isZh ? `${n} 款配件` : `${n} accessories`,
    compareHelp: isZh
      ? '在两张配件卡片上选择"比较"，即可并排查看规格。请选择两款同类配件进行比较。'
      : 'Select "Compare" on two accessory cards to view specs side by side. Please select two accessories of the same type.',
    howToRead: isZh ? '如何阅读规格' : 'How to read specs',
    specCapacity: isZh
      ? '容量指 SSD 的标称存储容量。实际可用容量因文件系统和系统预留而异。'
      : 'Capacity refers to the nominal storage of the SSD. Actual usable capacity varies due to file system and system reserves.',
    specInterface: isZh
      ? '接口类型（如 M.2 Key M、Key E、Key B、Mini PCIe）必须与设备主板上的对应插槽匹配，不同 Key 不可混用。'
      : 'Interface type (e.g., M.2 Key M, Key E, Key B, Mini PCIe) must match the corresponding slot on the device motherboard. Different Keys are not interchangeable.',
    specFormFactor: isZh
      ? '规格尺寸（如 2280、2242）表示 M.2 模组的长度，2280 = 22mm × 80mm，2242 = 22mm × 42mm。请根据设备空间选择合适规格。'
      : 'Form factor (e.g., 2280, 2242) indicates the M.2 module length: 2280 = 22mm × 80mm, 2242 = 22mm × 42mm. Choose the appropriate size based on your device space.',
    specAntenna: isZh
      ? '所有 4G 模组和部分 WiFi 模组需要搭配天线使用，无天线可能导致信号极弱或无法连接。'
      : 'All 4G modules and some WiFi modules require an antenna. Without one, signal may be extremely weak or connection impossible.',
    detail: isZh ? '详情' : 'Details',
    buy: isZh ? '购买' : 'Buy',
    doc: isZh ? '文档' : 'Docs',
    noLink: isZh ? '无链接' : 'No link',
    compare: isZh ? '比较' : 'Compare',
    compareBtn: isZh ? '比较选中' : 'Compare Selected',
    clearAll: isZh ? '清除' : 'Clear',
    close: '×',
    device: isZh ? 'reComputer 系列' : 'reComputer Series',
    category: isZh ? '配件类型' : 'Accessory Type',
    interface: isZh ? '接口' : 'Interface',
    source: isZh ? '来源' : 'Source',
    all: isZh ? '全部' : 'All',
    any: isZh ? '任意' : 'Any',
    selected: isZh ? '已选' : 'Selected',
    compareTitle: isZh ? '配件对比' : 'Accessory Comparison',
    testStatus: isZh ? '测试状态' : 'Test Status',
    capacity: isZh ? '容量' : 'Capacity',
    formFactor: isZh ? '规格' : 'Form Factor',
    function: isZh ? '功能' : 'Function',
    network: isZh ? '网络' : 'Network',
    interfaceLabel: isZh ? '接口' : 'Interface',
    sourceLabel: isZh ? '来源' : 'Source',
    noticeSameCategory: (a, b) => isZh ? `已选择 ${a} 和 ${b} 进行比较` : `Comparing ${a} and ${b}`,
    noticeDiffCategory: isZh
      ? '请选择两款同类配件进行比较（当前选择了不同类型的配件）'
      : 'Please select two accessories of the same type to compare (currently selected different types)',
    noticeLimit: isZh
      ? `最多选择 ${COMPARISON_LIMIT} 款配件进行比较`
      : `Select up to ${COMPARISON_LIMIT} accessories to compare`,
  };
}

// ── Helper: get localized field from data record ──
function L(item, field, lang) {
  const enField = field + 'En';
  return lang === 'zh' ? (item[field] ?? item[enField]) : (item[enField] ?? item[field]);
}

// ── FilterSelect: reusable dropdown ──
function FilterSelect({ label, value, options, onChange, defaultLabel, lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const displayValue = selected ? L(selected, 'label', lang) : defaultLabel;

  return (
    <div className={s.trigger} ref={ref}>
      <button
        type="button"
        className={`${s.triggerBtn} ${open ? s.triggerBtnActive : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={s.triggerContent}>
          <span className={s.triggerLabel}>{label}</span>
          <span className={s.triggerValue}>{displayValue}</span>
        </span>
        <span className={s.arrow}>⌄</span>
      </button>
      {open && (
        <div className={s.filterMenu}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`${s.filterOption} ${opt.value === value ? s.filterOptionSelected : ''}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {L(opt, 'label', lang)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── ProductImage: image with error fallback ──
function ProductImage({ src, alt, badge }) {
  const [error, setError] = useState(false);

  return (
    <div className={s.media}>
      {error || !src ? (
        <div className={s.placeholder}>
          <span className={s.placeholderIcon}>📦</span>
          {badge && <span className={s.placeholderBadge}>{badge}</span>}
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setError(true)}
          />
          {badge && <span className={s.placeholderBadge}>{badge}</span>}
        </>
      )}
    </div>
  );
}

// ── CompareChoice: checkbox for compare ──
function CompareChoice({ checked, onChange, disabled, disabledReason, label }) {
  return (
    <label
      className={s.compareChoice}
      title={disabled ? disabledReason : undefined}
      style={disabled ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
}

// ── ProductCard ──
function ProductCard({ item, t, lang, selected, onToggleCompare, compareDisabled, compareDisabledReason }) {
  const specs = [];
  if (item.capacity) specs.push({ label: t.capacity, value: item.capacity });
  if (item.formFactor) specs.push({ label: t.formFactor, value: item.formFactor });
  if (item.function) specs.push({ label: t.function, value: L(item, 'function', lang) });
  if (item.network) specs.push({ label: t.network, value: item.network });
  specs.push({ label: t.interfaceLabel, value: item.interfaceLabel });
  specs.push({ label: t.sourceLabel, value: L(item, 'sourceLabel', lang) });

  const displayName = L(item, 'name', lang);
  const keyFact = L(item, 'keyFact', lang);
  const buyLabel = item.buyUrl ? (keyFact?.includes('文档') || keyFact?.includes('Docs') ? t.doc : t.buy) : t.noLink;
  const buyClass = item.buyUrl ? s.buyBtn : `${s.buyBtn} ${s.buyBtnDisabled}`;

  return (
    <article className={`${s.card} ${selected ? s.cardSelected : ''}`}>
      <ProductImage
        src={item.image}
        alt={displayName}
        badge={item.categoryLabel}
      />
      <div className={s.cardBody}>
        <div className={s.cardMeta}>
          <span className={s.badgeType}>{item.categoryLabel}</span>
          <span className={s.badgeIface}>{item.interfaceLabel}</span>
        </div>
        <h3 className={s.cardName}>{displayName}</h3>
        <dl className={s.cardSpecs}>
          {specs.slice(0, 4).map((spec, i) => (
            <div key={i} className={s.specItem}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
        {keyFact && <p className={s.cardKeyFact}>{keyFact}</p>}
        <div className={s.cardActions}>
          {item.buyUrl ? (
            <a
              href={item.buyUrl}
              className={s.buyBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buyLabel}
            </a>
          ) : (
            <span className={buyClass}>{t.noLink}</span>
          )}
          <CompareChoice
            checked={selected}
            onChange={onToggleCompare}
            disabled={compareDisabled}
            disabledReason={compareDisabledReason}
            label={t.compare}
          />
        </div>
      </div>
    </article>
  );
}

// ── Detail / Compare Dialog ──
function AccessoriesDialog({ dialogRef, view, detailItem, compareItems, onClose, t, lang }) {
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (view) {
      if (!dlg.open) dlg.showModal();
    } else {
      if (dlg.open) dlg.close();
    }
  }, [view, dialogRef]);

  // Lock body scroll when dialog is open
  useEffect(() => {
    if (view) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [view]);

  if (!view) return null;

  const allSpecs = (item) => {
    const specs = [];
    if (item.capacity) specs.push([t.capacity, item.capacity]);
    if (item.formFactor) specs.push([t.formFactor, item.formFactor]);
    if (item.function) specs.push([t.function, L(item, 'function', lang)]);
    if (item.network) specs.push([t.network, item.network]);
    specs.push([t.interfaceLabel, item.interfaceLabel]);
    specs.push([t.sourceLabel, L(item, 'sourceLabel', lang)]);
    if (item.sku) specs.push(['SKU', item.sku]);
    if (item.evidence) specs.push([t.testStatus, L(item, 'evidence', lang)]);
    return specs;
  };

  return (
    <dialog ref={dialogRef} className={`${s.dialog} ${s.dialogOpen}`}>
      <div className={s.dialogHeader}>
        <h2 className={s.dialogTitle}>
          {view === 'compare' ? t.compareTitle : (detailItem ? L(detailItem, 'name', lang) : '')}
        </h2>
        <button type="button" className={s.closeBtn} onClick={onClose}>
          {t.close}
        </button>
      </div>
      <div className={s.dialogBody}>
        {/* ── Detail view ── */}
        {view === 'detail' && detailItem && (
          <div className={s.detailLayout}>
            <div className={s.detailMedia}>
              <img src={detailItem.image} alt={L(detailItem, 'name', lang)} />
            </div>
            <div>
              <div className={s.detailSpecs}>
                {allSpecs(detailItem).map(([label, val]) => (
                  <div key={label} className={s.detailSpecRow}>
                    <span className={s.detailSpecLabel}>{label}</span>
                    <span className={s.detailSpecValue}>{val}</span>
                  </div>
                ))}
              </div>
              {L(detailItem, 'keyFact', lang) && (
                <p style={{ color: 'var(--acc-muted)', fontSize: '0.85rem', margin: '12px 0' }}>
                  {L(detailItem, 'keyFact', lang)}
                </p>
              )}
              <div className={s.detailActions}>
                {detailItem.buyUrl && (
                  <a
                    href={detailItem.buyUrl}
                    className={s.primaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {L(detailItem, 'keyFact', lang)?.includes('文档') || L(detailItem, 'keyFact', lang)?.includes('Docs') ? t.doc : t.buy}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Compare view ── */}
        {view === 'compare' && compareItems.length > 0 && (
          <div className={s.compareGrid}>
            {compareItems.map((item) => (
              <div key={item.id} className={s.compareCol}>
                <div className={s.compareMedia}>
                  <img src={item.image} alt={L(item, 'name', lang)} />
                </div>
                <div className={s.compareName}>{L(item, 'name', lang)}</div>
                <div className={s.compareSpecs}>
                  {allSpecs(item).map(([label, val]) => (
                    <div key={label} className={s.compareSpecRow}>
                      <span className={s.compareSpecLabel}>{label}</span>
                      <span className={s.compareSpecValue}>{val}</span>
                    </div>
                  ))}
                </div>
                {item.buyUrl && (
                  <a
                    href={item.buyUrl}
                    className={s.primaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 8, justifySelf: 'start' }}
                  >
                    {L(item, 'keyFact', lang)?.includes('文档') || L(item, 'keyFact', lang)?.includes('Docs') ? t.doc : t.buy}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </dialog>
  );
}

// ── Main component ──
export default function AccessoriesSelector() {
  const lang = useLang();
  const t = useMemo(() => makeT(lang), [lang]);

  // Filter state
  const [filters, setFilters] = useState({
    device: 'all',
    category: 'all',
    interface: 'all',
    source: 'all',
  });

  // Compare state
  const [selectedIds, setSelectedIds] = useState([]);
  const [view, setView] = useState(null); // null | 'detail' | 'compare'
  const [detailItem, setDetailItem] = useState(null);
  const [notice, setNotice] = useState('');

  const dialogRef = useRef(null);

  // Filtered accessories
  const visible = useMemo(() => {
    return accessories.filter((item) => {
      if (filters.category !== 'all' && item.category !== filters.category) return false;
      if (filters.interface !== 'all' && item.interface !== filters.interface) return false;
      if (filters.source !== 'all' && item.source !== filters.source) return false;
      if (filters.device !== 'all' && !(item.devices || []).includes(filters.device)) return false;
      return true;
    });
  }, [filters]);

  // Selected items (preserve order)
  const selectedItems = useMemo(() => {
    return selectedIds
      .map((id) => accessories.find((a) => a.id === id))
      .filter(Boolean);
  }, [selectedIds]);

  // Notice when selection changes
  useEffect(() => {
    if (selectedItems.length === 0) {
      setNotice('');
    } else if (selectedItems.length === 1) {
      setNotice('');
    } else if (selectedItems.length === 2) {
      if (selectedItems[0].category === selectedItems[1].category) {
        setNotice(t.noticeSameCategory(L(selectedItems[0], 'name', lang), L(selectedItems[1], 'name', lang)));
      } else {
        setNotice(t.noticeDiffCategory);
      }
    }
  }, [selectedItems, t, lang]);

  // Handlers
  const handleFilterChange = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleToggleCompare = useCallback((id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= COMPARISON_LIMIT) {
        setNotice(t.noticeLimit);
        return prev;
      }
      return [...prev, id];
    });
  }, [t]);

  const handleOpenDetail = useCallback((item) => {
    setDetailItem(item);
    setView('detail');
  }, []);

  const handleCompare = useCallback(() => {
    if (selectedItems.length >= 2) {
      setView('compare');
    }
  }, [selectedItems]);

  const handleCloseDialog = useCallback(() => {
    setView(null);
  }, []);

  const handleClearCompare = useCallback(() => {
    setSelectedIds([]);
    setNotice('');
  }, []);

  return (
    <div className={s.selector}>
      {/* ── Filter Panel ── */}
      <section className={s.filterPanel} aria-label={t.isZh ? '查找配件' : 'Find accessories'}>
        <div className={s.coreFilters}>
          <FilterSelect
            label={t.device}
            value={filters.device}
            options={deviceOptions}
            onChange={(v) => handleFilterChange('device', v)}
            defaultLabel={t.isZh ? '未选择' : 'None'}
            lang={lang}
          />
          <FilterSelect
            label={t.category}
            value={filters.category}
            options={categoryOptions}
            onChange={(v) => handleFilterChange('category', v)}
            defaultLabel={t.all}
            lang={lang}
          />
          <FilterSelect
            label={t.interface}
            value={filters.interface}
            options={interfaceOptions}
            onChange={(v) => handleFilterChange('interface', v)}
            defaultLabel={t.any}
            lang={lang}
          />
          <FilterSelect
            label={t.source}
            value={filters.source}
            options={sourceOptions}
            onChange={(v) => handleFilterChange('source', v)}
            defaultLabel={t.all}
            lang={lang}
          />
        </div>

        {/* Spec help */}
        <details className={s.specHelp}>
          <summary>{t.howToRead}</summary>
          <div className={s.specHelpBody}>
            <p>{t.specCapacity}</p>
            <p>{t.specInterface}</p>
            <p>{t.specFormFactor}</p>
            <p>{t.specAntenna}</p>
          </div>
        </details>
      </section>

      {/* ── Results ── */}
      <section aria-labelledby="results-title">
        <h2 className={s.resultsTitle} id="results-title">
          {t.results(visible.length)}
        </h2>
        <p className={s.compareHelp}>{t.compareHelp}</p>
        <p className={s.notice} role="status">{notice}</p>

        <div className={s.grid}>
          {visible.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            const compareDisabled =
              !isSelected && selectedIds.length >= COMPARISON_LIMIT;
            const compareDisabledReason = compareDisabled ? t.noticeLimit : undefined;

            return (
              <ProductCard
                key={item.id}
                item={item}
                t={t}
                lang={lang}
                selected={isSelected}
                onToggleCompare={() => handleToggleCompare(item.id)}
                compareDisabled={compareDisabled}
                compareDisabledReason={compareDisabledReason}
              />
            );
          })}
        </div>

        {/* Compare tray */}
        {selectedItems.length > 0 && (
          <div style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            marginTop: 16,
            padding: '12px 16px',
            background: 'var(--acc-soft, #1c1e21)',
            border: '1px solid var(--acc-line, #606770)',
            borderRadius: 8,
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--acc-muted, #dadde1)' }}>
              {t.selected} {selectedItems.length} / {COMPARISON_LIMIT}：
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--acc-ink, #e3e3e3)' }}>
              {selectedItems.map((i) => L(i, 'name', lang)).join(' · ')}
            </span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <button
                type="button"
                className={s.primaryBtn}
                onClick={handleCompare}
                disabled={selectedItems.length < 2}
                style={selectedItems.length < 2 ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}
              >
                {t.compareBtn}
              </button>
              <button
                type="button"
                className={s.detailBtn}
                onClick={handleClearCompare}
              >
                {t.clearAll}
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ── Dialog ── */}
      <AccessoriesDialog
        dialogRef={dialogRef}
        view={view}
        detailItem={detailItem}
        compareItems={selectedItems}
        onClose={handleCloseDialog}
        t={t}
        lang={lang}
      />
    </div>
  );
}
