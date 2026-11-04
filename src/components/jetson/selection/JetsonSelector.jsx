import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { products } from "./catalog";
import { getLangFromPathname, jetsonDocTarget } from "./locale";
import {
  jetsonT,
  localizeOptions,
  presentFilterTags,
  presentNotice,
  presentPortSummary,
  tx,
} from "./i18n";
import {
  types,
  isInView,
  computeOptions,
  modules,
  interfaces,
  applications,
  moduleOptionsForType,
  usbAOptions,
  storageOptions,
  createTypeState,
  emptyFilters,
  filteredProducts,
  groupProducts,
  sortConfigurations,
  cardConfiguration,
  toggleComparison,
  matchesProduct,
  valueText,
  specificationGroups,
  comparisonGroups,
  compatibleExpansions,
} from "./model";
import { detailValue, detailReferences } from "./detailPresentation";
import {
  Menu,
  InterfaceMenu,
  Modal,
  ProductImage,
  CloseIcon,
} from "./Controls";
import styles from "./Selector.module.css";

const any = (label, options) => [{ value: "", label }, ...options];
const configOptions = (list) =>
  sortConfigurations(list).map((p) => ({
    value: p.id,
    label: `${p.name}${p.memoryGb != null ? ` · ${p.memoryGb}GB` : ""}`,
  }));
function DocLink({ href, lang, children }) {
  const target = jetsonDocTarget(href, lang);
  if (target.kind === "anchor") return <a href={target.href}>{children}</a>;
  return <Link to={target.href}>{children}</Link>;
}
function Resources({ product, includeReferences = false, lang, t }) {
  const references = includeReferences ? detailReferences(product) : [];
  return (
    <div className={styles.resources}>
      {product.guides.map((link) => (
        <DocLink key={link.url} href={link.url} lang={lang}>
          {tx(lang, link.label)} ↗
        </DocLink>
      ))}
      {product.moduleSpec && (
        <a href={product.sources[1]} target="_blank" rel="noreferrer">
          {t("moduleSpecifications")} ↗
        </a>
      )}
      {references.length > 0 && (
        <div className={styles.referenceGroup}>
          <h4>{t("referencesTitle")}</h4>
          {references.map((link) => (
            <DocLink key={link.url} href={link.url} lang={lang}>
              {tx(lang, link.label)} ↗
            </DocLink>
          ))}
        </div>
      )}
    </div>
  );
}
function Details({
  product: initial,
  candidates,
  onClose,
  onCompare,
  selected,
  filters,
  comparisonType,
  lang,
  t,
}) {
  const [id, setId] = useState(initial.id);
  const [feedback, setFeedback] = useState("");
  const p = candidates.find((p) => p.id === id) || initial;
  return (
    <Modal title={p.name} onClose={onClose} t={t}>
      <div className={styles.detailLayout}>
        <aside className={styles.detailSummary}>
          <ProductImage product={p} t={t} />
          {candidates.length > 1 && (
            <Menu
              label={t("configuration")}
              value={p.id}
              options={configOptions(candidates)}
              t={t}
              onChange={(id) => {
                setId(id);
                setFeedback("");
              }}
            />
          )}
          {!matchesProduct(p, filters) && (
            <p className={styles.outside}>{t("outsideFilters")}</p>
          )}
          {p.purchaseUrl && (
            <a
              className={styles.primary}
              href={p.purchaseUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("getOneNow")} ↗
            </a>
          )}
          <button
            className={styles.secondary}
            onClick={() => {
              if (onCompare(p)) onClose();
              else
                setFeedback(
                  comparisonType && comparisonType !== p.type
                    ? t("feedbackSameType")
                    : t("feedbackFull"),
                );
            }}
          >
            {selected.includes(p.id)
              ? t("removeComparison")
              : t("addComparison")}
          </button>
          {feedback && (
            <p role="status" className={styles.outside}>
              {feedback}
            </p>
          )}
          {p.notes && <p className={styles.muted}>{tx(lang, p.notes)}</p>}
          <Resources product={p} includeReferences lang={lang} t={t} />
        </aside>
        <div className={styles.specifications}>
          {specificationGroups(p).map((group) => (
            <section key={group.title}>
              <h3>{tx(lang, group.title)}</h3>
              <table className={styles.specTable}>
                <caption className={styles.srOnly}>
                  {t("specCaption", { group: tx(lang, group.title), name: p.name })}
                </caption>
                <colgroup>
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "75%" }} />
                </colgroup>
                <tbody>
                  {group.rows
                    .filter(
                      ([label, v]) =>
                        v != null ||
                        [
                          "AI compute",
                          "Operating temperature",
                          "Protection rating",
                          "Default JetPack",
                          "Storage supplied",
                          "DC input",
                          "Supported JetPack versions",
                          "USB-A host ports",
                          "Installed wireless",
                        ].includes(label),
                    )
                    .map((row) => {
                      const display = detailValue(p, row);
                      return (
                        <tr key={row[2]} data-spec-field={row[2]}>
                          <th scope="row">{tx(lang, display.label)}</th>
                          <td>
                            {tx(lang, display.primary)}
                            {display.note && (
                              <small className={styles.specNote}>
                                {tx(lang, display.note)}
                              </small>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {group.title === "JetPack" && p.jetpackNotes && (
                <p className={styles.firmwareSources}>{tx(lang, p.jetpackNotes)}</p>
              )}
              {group.title === "JetPack" && p.firmwareEvidence?.length > 1 && (
                <div className={styles.firmwareSources}>
                  {p.firmwareEvidence.map((e) => (
                    <p key={e.source}>
                      {t("firmwareLine", {
                        version: e.version,
                        status: tx(lang, e.status),
                      })}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
          {compatibleExpansions(p).length > 0 && (
            <section>
              <h3>{t("compatibleBoards")}</h3>
              {compatibleExpansions(p).map(({ product: board, included }) => (
                <div key={board.id} className={styles.expansion}>
                  <strong>{board.name}</strong>
                  <p>
                    {included ? t("includedConfig") : t("optionalBoard")}
                  </p>
                  <p>
                    {t("addedInterfacesLine", {
                      ports: presentPortSummary(board, lang),
                    })}
                  </p>
                  <Resources product={board} lang={lang} t={t} />
                  {board.purchaseUrl && (
                    <a
                      href={board.purchaseUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("productPage")} ↗
                    </a>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </Modal>
  );
}
function Comparison({ items, filters, onClose, onDetails, lang, t }) {
  const [differences, setDifferences] = useState(false);
  const groups = comparisonGroups(items);
  return (
    <Modal
      title={t("compareTitle")}
      wide
      onClose={onClose}
      t={t}
      footer={
        <button className={styles.secondary} onClick={onClose}>
          {t("editSelection")}
        </button>
      }
    >
      <p className={styles.comparisonLegend}>{t("legend")}</p>
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={differences}
          onChange={(e) => setDifferences(e.target.checked)}
        />
        {t("differencesOnly")}
      </label>
      <div className={styles.compareNames}>
        {items.map((p) => (
          <div key={p.id}>
            <strong>{p.name}</strong>
            {!matchesProduct(p, filters) && (
              <span className={styles.outside}>{t("outsideFilters")}</span>
            )}
            <button className={styles.textButton} onClick={() => onDetails(p)}>
              {t("details")}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.comparison}>
        {groups.map((group) => {
          const visible = differences
            ? group.rows.filter((row) => row.different)
            : group.rows;
          return (
            visible.length > 0 && (
              <section key={group.title}>
                <h3>{tx(lang, group.title)}</h3>
                {visible.map((row) => {
                  const displays = row.values.map((value, index) =>
                    detailValue(items[index], [row.label, value, row.id]),
                  );
                  return (
                    <div
                      className={styles.compareRow}
                      data-comparison-field={row.id}
                      key={row.id}
                    >
                      <strong>
                        {tx(lang, displays[0].label)}
                        {row.different && row.advantageIndex == null && (
                          <span className={styles.differenceBadge}>
                            {t("different")}
                          </span>
                        )}
                        {row.notes.map((note) => (
                          <small className={styles.comparisonNote} key={note}>
                            {tx(lang, note)}
                          </small>
                        ))}
                      </strong>
                      {displays.map((display, index) => (
                        <span
                          key={items[index].id}
                          className={
                            row.advantageIndex === index
                              ? styles.advantageCell
                              : undefined
                          }
                          data-advantage={
                            row.advantageIndex === index ? "true" : undefined
                          }
                        >
                          {tx(lang, display.primary)}
                          {display.note && (
                            <small className={styles.specNote}>
                              {tx(lang, display.note)}
                            </small>
                          )}
                          {row.advantageIndex === index && (
                            <span className={styles.advantageBadge}>
                              {tx(lang, row.reason)}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </section>
            )
          );
        })}
      </div>
      <div className={styles.compareLinks}>
        {items.map((p) => (
          <Resources key={p.id} product={p} lang={lang} t={t} />
        ))}
      </div>
    </Modal>
  );
}

export default function JetsonSelector() {
  const { pathname } = useLocation();
  const lang = getLangFromPathname(pathname);
  const t = useMemo(() => jetsonT(lang), [lang]);
  const [type, setType] = useState("all"),
    [states, setStates] = useState(createTypeState);
  const [message, setMessage] = useState(""),
    [detail, setDetail] = useState(null),
    [compare, setCompare] = useState(false);
  const current = states[type],
    { filters, selected, configurations } = current;
  const list = useMemo(() => filteredProducts(filters, type), [filters, type]);
  const groups = useMemo(() => groupProducts(list), [list]);
  const allType = products.filter((p) => isInView(p, type)),
    tags = presentFilterTags(filters, lang);
  const selectedProducts = selected
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  const moduleOptions = moduleOptionsForType(type).map((option) => ({
    ...option,
    description: option.description ? tx(lang, option.description) : option.description,
  }));
  const jetpackOptions = [...new Set(allType.flatMap((p) => p.jetpackVersions))]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((value) => ({ value, label: t("jetpackOption", { version: value }) }));
  function update(change) {
    setStates((s) => ({ ...s, [type]: { ...s[type], ...change } }));
  }
  function filter(key, value) {
    setStates((s) => ({
      ...s,
      [type]: { ...s[type], filters: { ...s[type].filters, [key]: value } },
    }));
    setMessage("");
  }
  function clear() {
    update({ filters: emptyFilters() });
    setMessage(selected.length ? t("filtersClearedKept") : t("filtersCleared"));
  }
  function removeTag(tag) {
    if (tag.key === "interfaces" && tag.value === "usb_a") {
      update({
        filters: {
          ...filters,
          interfaces: filters.interfaces.filter((v) => v !== "usb_a"),
          usbAMin: "",
        },
      });
      setMessage("");
      return;
    }
    filter(
      tag.key,
      tag.key === "interfaces"
        ? filters.interfaces.filter((v) => v !== tag.value)
        : "",
    );
  }
  function toggle(p) {
    const result = toggleComparison(selected, p, type);
    update({ selected: result.selected });
    setMessage(presentNotice(result.message, lang));
    return result.selected !== selected;
  }
  function configure(groupId, id) {
    update({ configurations: { ...configurations, [groupId]: id } });
  }
  return (
    <div
      className={`${styles.selector} ${selected.length ? styles.withTray : ""}`}
      data-jetson-selector
    >
      <div className={styles.toolbar} aria-label={t("productFilters")}>
        <Menu
          label={t("productType")}
          value={type}
          options={localizeOptions(types, lang)}
          t={t}
          onChange={(v) => {
            setType(v);
            setMessage("");
          }}
        />
        <Menu
          label={t("application")}
          value={filters.application}
          options={[
            { value: "", label: t("allApplications"), illustration: "all" },
            ...localizeOptions(applications, lang),
          ]}
          t={t}
          onChange={(v) => filter("application", v)}
          help={t("applicationHelp")}
        />
        {type !== "expansion" && (
          <Menu
            label={type === "carrier" ? t("moduleCarrier") : t("moduleSystem")}
            value={filters.module}
            options={any(t("anyModule"), moduleOptions)}
            t={t}
            onChange={(v) => filter("module", v)}
          />
        )}
        {type !== "carrier" && (
          <Menu
            label={t("minMemory")}
            value={filters.memory}
            options={any(
              t("anyMemory"),
              [4, 8, 16, 32, 64].map((v) => ({
                value: String(v),
                label: t("gbOrMore", { n: v }),
              })),
            )}
            t={t}
            onChange={(v) => filter("memory", v)}
          />
        )}
        {type !== "carrier" && (
          <Menu
            label={t("minCompute")}
            value={filters.computeMin}
            options={any(
              t("anyCompute"),
              computeOptions().map((option) => ({
                ...option,
                label: t("topsOrMore", { n: option.value }),
              })),
            )}
            t={t}
            onChange={(v) => filter("computeMin", v)}
            help={t("computeHelp")}
          />
        )}
        <InterfaceMenu
          value={filters.interfaces}
          options={localizeOptions(interfaces, lang)}
          minimum={filters.usbAMin}
          quantities={usbAOptions(type)}
          t={t}
          onChange={(interfaces, usbAMin) => {
            update({ filters: { ...filters, interfaces, usbAMin } });
            setMessage("");
          }}
        />
        {type !== "expansion" && (
          <Menu
            label={t("jetpack")}
            value={filters.jetpack}
            options={any(t("anyVersion"), jetpackOptions)}
            t={t}
            onChange={(v) => filter("jetpack", v)}
            help={t("jetpackHelp")}
          />
        )}
        <label className={`${styles.control} ${styles.search}`}>
          <span className={styles.label}>{t("findModel")}</span>
          <input
            aria-label={t("findModel")}
            value={filters.search}
            onChange={(e) => filter("search", e.target.value)}
            placeholder={t("findPlaceholder")}
            type="search"
          />
        </label>
        <Menu
          label={t("storage")}
          value={filters.storage}
          options={any(t("anyExpansion"), localizeOptions(storageOptions, lang))}
          t={t}
          onChange={(v) => filter("storage", v)}
          help={t("storageHelp")}
        />
        <Menu
          label={t("protection")}
          value={filters.ip}
          options={any(t("anyRating"), [
            { value: "IP40", label: "IP40" },
            { value: "IP66", label: "IP66" },
          ])}
          t={t}
          onChange={(v) => filter("ip", v)}
          help={t("protectionHelp")}
        />
        <label className={styles.control}>
          <span className={styles.label}>{t("voltageLabel")}</span>
          <input
            type="number"
            step="any"
            min="0"
            aria-label={t("voltageAria")}
            placeholder={t("anyVoltage")}
            value={filters.voltage}
            onChange={(e) => filter("voltage", e.target.value)}
          />
        </label>
        <label className={styles.control}>
          <span className={styles.label}>{t("temperatureLabel")}</span>
          <input
            type="number"
            step="any"
            aria-label={t("temperatureAria")}
            placeholder={t("anyTemperature")}
            value={filters.temperature}
            onChange={(e) => filter("temperature", e.target.value)}
          />
        </label>
        <p className={styles.advancedNote}>{t("advancedNote")}</p>
      </div>
      <div className={styles.resultsHeader}>
        <h2 aria-live="polite">
          {t(groups.length === 1 ? "seriesOne" : "seriesOther", { n: groups.length })}
          <span>
            {" "}
            / {t(list.length === 1 ? "configOne" : "configOther", { n: list.length })}
          </span>
        </h2>
        <button
          className={styles.secondary}
          disabled={!tags.length}
          onClick={clear}
        >
          <span aria-hidden="true">↶</span> {t("clearFilters")}
        </button>
      </div>
      {tags.length > 0 && (
        <div className={styles.tags} aria-label={t("selectedFilters")}>
          {tags.map((tag) => (
            <button
              className={styles.tag}
              key={`${tag.key}-${tag.value || ""}`}
              aria-label={t("removeFilter", { label: tag.label })}
              onClick={() => removeTag(tag)}
            >
              {tag.label}
              <CloseIcon />
            </button>
          ))}
        </div>
      )}
      <p className={styles.hint}>{t("compareHint")}</p>
      <div className={styles.status} role="status">
        {message}
      </div>
      {groups.length ? (
        <div className={styles.grid}>
          {groups.map((group) => {
            const p = cardConfiguration(group, configurations),
              checked = selected.includes(p.id);
            return (
              <article
                className={`${styles.card} ${checked ? styles.selectedCard : ""}`}
                key={group.id}
                data-family={group.id}
              >
                <ProductImage product={p} t={t} />
                <div className={styles.cardContent}>
                  {type === "all" && (
                    <span className={styles.typeBadge}>
                      {p.type === "system" ? t("badgeSystem") : t("badgeCarrier")}
                    </span>
                  )}
                  <h3>{group.name}</h3>
                  <Menu
                    compact
                    label={t("configurationFor", { name: group.name })}
                    value={p.id}
                    options={configOptions(group.products)}
                    t={t}
                    onChange={(id) => configure(group.id, id)}
                  />
                  <dl className={styles.cardSpecs}>
                    {p.type === "system" ? (
                      <>
                        <div>
                          <dt>{t("specModule")}</dt>
                          <dd>{p.module?.replace("Jetson ", "")}</dd>
                        </div>
                        <div>
                          <dt>{t("dcInput")}</dt>
                          <dd>{tx(lang, valueText(p.power))}</dd>
                        </div>
                      </>
                    ) : (
                      <div className={styles.fullSpec}>
                        <dt>
                          {p.type === "carrier"
                            ? t("supportedModules")
                            : t("compatibleHost")}
                        </dt>
                        <dd>
                          {p.type === "carrier"
                            ? p.supportedModules
                                .map((k) =>
                                  modules
                                    .find((m) => m.value === k)
                                    ?.label.replace("Jetson ", ""),
                                )
                                .join(" · ")
                            : tx(lang, p.host)}
                        </dd>
                      </div>
                    )}
                    <div className={styles.fullSpec}>
                      <dt>
                        {type === "expansion"
                          ? t("addedInterfaces")
                          : t("keyInterfaces")}
                      </dt>
                      <dd>
                        {presentPortSummary(p, lang).split(" · ").slice(0, 4).join(" · ")}
                      </dd>
                    </div>
                  </dl>
                  <div className={styles.cardActions}>
                    <button
                      className={styles.secondary}
                      onClick={() => setDetail(p)}
                    >
                      {t("details")}
                    </button>
                    <label className={styles.check}>
                      <input
                        type="checkbox"
                        aria-label={t("compareNamed", { name: p.name })}
                        checked={checked}
                        onChange={() => toggle(p)}
                      />
                      {t("compare")}
                    </label>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <h3>{t("emptyTitle")}</h3>
          <p>{t("emptyBody")}</p>
          <button className={styles.secondary} onClick={clear}>
            {t("clearFilters")}
          </button>
        </div>
      )}
      {selectedProducts.length > 0 && (
        <aside className={styles.tray} aria-label={t("trayLabel")}>
          <div>
            <strong>{t("selectedCount", { n: selected.length })}</strong>
            <div className={styles.trayItems}>
              {selectedProducts.map((p) => (
                <div className={styles.trayItem} key={p.id}>
                  <span>
                    {p.name}
                    {!matchesProduct(p, filters, type) && (
                      <small>{t("outsideFilters")}</small>
                    )}
                  </span>
                  <button
                    className={styles.iconButton}
                    aria-label={t("removeNamed", { name: p.name })}
                    onClick={() => toggle(p)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.trayActions}>
            <button
              className={styles.textButton}
              onClick={() => update({ selected: [] })}
            >
              {t("clearSelection")}
            </button>
            <button
              className={styles.primary}
              disabled={selected.length !== 2}
              onClick={() => setCompare(true)}
            >
              {t("compareCount", { n: selected.length })}
            </button>
          </div>
        </aside>
      )}
      {detail && (
        <Details
          key={detail.id}
          product={detail}
          candidates={list
            .filter((p) => p.familyId === detail.familyId)
            .concat(matchesProduct(detail, filters, type) ? [] : [detail])}
          filters={filters}
          selected={selected}
          comparisonType={selectedProducts[0]?.type}
          lang={lang}
          t={t}
          onClose={() => setDetail(null)}
          onCompare={toggle}
        />
      )}
      {compare && selectedProducts.length === 2 && (
        <Comparison
          items={selectedProducts}
          filters={filters}
          lang={lang}
          t={t}
          onClose={() => setCompare(false)}
          onDetails={(p) => {
            setCompare(false);
            setDetail(p);
          }}
        />
      )}
    </div>
  );
}
