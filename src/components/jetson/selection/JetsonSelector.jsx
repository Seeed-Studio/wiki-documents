import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { products } from "./catalog";
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
  filterTags,
  matchesProduct,
  valueText,
  specificationGroups,
  comparisonGroups,
  compatibleExpansions,
  portSummary,
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
function Resources({ product, includeReferences = false }) {
  const references = includeReferences ? detailReferences(product) : [];
  return (
    <div className={styles.resources}>
      {product.guides.map((link) => (
        <Link key={link.url} to={link.url}>
          {link.label} ↗
        </Link>
      ))}
      {product.moduleSpec && (
        <a href={product.sources[1]} target="_blank" rel="noreferrer">
          Module specifications ↗
        </a>
      )}
      {references.length > 0 && (
        <div className={styles.referenceGroup}>
          <h4>Specifications &amp; references</h4>
          {references.map((link) => (
            <Link key={link.url} to={link.url}>
              {link.label} ↗
            </Link>
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
}) {
  const [id, setId] = useState(initial.id);
  const [feedback, setFeedback] = useState("");
  const p = candidates.find((p) => p.id === id) || initial;
  return (
    <Modal title={p.name} onClose={onClose}>
      <div className={styles.detailLayout}>
        <aside className={styles.detailSummary}>
          <ProductImage product={p} />
          {candidates.length > 1 && (
            <Menu
              label="Configuration"
              value={p.id}
              options={configOptions(candidates)}
              onChange={(id) => {
                setId(id);
                setFeedback("");
              }}
            />
          )}
          {!matchesProduct(p, filters) && (
            <p className={styles.outside}>Outside current filters</p>
          )}
          {p.purchaseUrl && (
            <a
              className={styles.primary}
              href={p.purchaseUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get One Now ↗
            </a>
          )}
          <button
            className={styles.secondary}
            onClick={() => {
              if (onCompare(p)) onClose();
              else
                setFeedback(
                  comparisonType && comparisonType !== p.type
                    ? "Compare products of the same type. Close Details and remove the current selection first."
                    : "Two configurations are already selected. Close Details and remove one from the comparison bar.",
                );
            }}
          >
            {selected.includes(p.id)
              ? "Remove from comparison"
              : "Add to comparison"}
          </button>
          {feedback && (
            <p role="status" className={styles.outside}>
              {feedback}
            </p>
          )}
          {p.notes && <p className={styles.muted}>{p.notes}</p>}
          <Resources product={p} includeReferences />
        </aside>
        <div className={styles.specifications}>
          {specificationGroups(p).map((group) => (
            <section key={group.title}>
              <h3>{group.title}</h3>
              <table className={styles.specTable}>
                <caption className={styles.srOnly}>
                  {group.title} for {p.name}
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
                          <th scope="row">{display.label}</th>
                          <td>
                            {display.primary}
                            {display.note && (
                              <small className={styles.specNote}>
                                {display.note}
                              </small>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {group.title === "JetPack" && p.jetpackNotes && (
                <p className={styles.firmwareSources}>{p.jetpackNotes}</p>
              )}
              {group.title === "JetPack" && p.firmwareEvidence?.length > 1 && (
                <div className={styles.firmwareSources}>
                  {p.firmwareEvidence.map((e) => (
                    <p key={e.source}>
                      JetPack {e.version} — {e.status}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
          {compatibleExpansions(p).length > 0 && (
            <section>
              <h3>Compatible expansion boards</h3>
              {compatibleExpansions(p).map(({ product: board, included }) => (
                <div key={board.id} className={styles.expansion}>
                  <strong>{board.name}</strong>
                  <p>
                    {included
                      ? "Included in this configuration"
                      : "Optional — purchased separately"}
                  </p>
                  <p>Added interfaces: {portSummary(board)}</p>
                  <Resources product={board} />
                  {board.purchaseUrl && (
                    <a
                      href={board.purchaseUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Product page ↗
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
function Comparison({ items, filters, onClose, onDetails }) {
  const [differences, setDifferences] = useState(false);
  const groups = comparisonGroups(items);
  return (
    <Modal
      title="Compare two configurations"
      wide
      onClose={onClose}
      footer={
        <button className={styles.secondary} onClick={onClose}>
          Edit selection
        </button>
      }
    >
      <p className={styles.comparisonLegend}>
        Green marks a documented advantage for that parameter, not a better
        overall product or measured performance. Different power modes are
        noted.
      </p>
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={differences}
          onChange={(e) => setDifferences(e.target.checked)}
        />
        Show differences only
      </label>
      <div className={styles.compareNames}>
        {items.map((p) => (
          <div key={p.id}>
            <strong>{p.name}</strong>
            {!matchesProduct(p, filters) && (
              <span className={styles.outside}>Outside current filters</span>
            )}
            <button className={styles.textButton} onClick={() => onDetails(p)}>
              Details
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
                <h3>{group.title}</h3>
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
                        {displays[0].label}
                        {row.different && row.advantageIndex == null && (
                          <span className={styles.differenceBadge}>
                            Different
                          </span>
                        )}
                        {row.notes.map((note) => (
                          <small className={styles.comparisonNote} key={note}>
                            {note}
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
                          {display.primary}
                          {display.note && (
                            <small className={styles.specNote}>
                              {display.note}
                            </small>
                          )}
                          {row.advantageIndex === index && (
                            <span className={styles.advantageBadge}>
                              {row.reason}
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
          <Resources key={p.id} product={p} />
        ))}
      </div>
    </Modal>
  );
}

export default function JetsonSelector() {
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
    tags = filterTags(filters);
  const selectedProducts = selected
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  const moduleOptions = moduleOptionsForType(type);
  const jetpackOptions = [...new Set(allType.flatMap((p) => p.jetpackVersions))]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((value) => ({ value, label: `JetPack ${value}` }));
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
    setMessage(
      selected.length
        ? "Filters cleared. Comparison selection kept."
        : "Filters cleared.",
    );
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
    setMessage(result.message);
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
      <div className={styles.toolbar} aria-label="Product filters">
        <Menu
          label="Product type"
          value={type}
          options={types}
          onChange={(v) => {
            setType(v);
            setMessage("");
          }}
        />
        <Menu
          label="Application"
          value={filters.application}
          options={[
            { value: "", label: "All applications", illustration: "all" },
            ...applications,
          ]}
          onChange={(v) => filter("application", v)}
          help="Filters by documented product positioning. Other products may support the same task with suitable integration."
        />
        {type !== "expansion" && (
          <Menu
            label={type === "carrier" ? "Supported modules" : "Jetson module"}
            value={filters.module}
            options={any("Any module", moduleOptions)}
            onChange={(v) => filter("module", v)}
          />
        )}
        {type !== "carrier" && (
          <Menu
            label="Minimum memory"
            value={filters.memory}
            options={any(
              "Any memory",
              [4, 8, 16, 32, 64].map((v) => ({
                value: String(v),
                label: `${v}GB or more`,
              })),
            )}
            onChange={(v) => filter("memory", v)}
          />
        )}
        {type !== "carrier" && (
          <Menu
            label="Minimum AI compute (TOPS)"
            value={filters.computeMin}
            options={any("Any compute", computeOptions())}
            onChange={(v) => filter("computeMin", v)}
            help="Filters by published TOPS for the listed configuration. Figures may use different compute and power modes; they are not measured system performance."
          />
        )}
        <InterfaceMenu
          value={filters.interfaces}
          options={interfaces}
          minimum={filters.usbAMin}
          quantities={usbAOptions(type)}
          onChange={(interfaces, usbAMin) => {
            update({ filters: { ...filters, interfaces, usbAMin } });
            setMessage("");
          }}
        />
        {type !== "expansion" && (
          <Menu
            label="Support JetPack"
            value={filters.jetpack}
            options={any("Any version", jetpackOptions)}
            onChange={(v) => filter("jetpack", v)}
            help="Documented supported versions, not the factory-installed version. See Details for the corresponding guides."
          />
        )}
        <label className={`${styles.control} ${styles.search}`}>
          <span className={styles.label}>Find a model</span>
          <input
            aria-label="Find a model"
            value={filters.search}
            onChange={(e) => filter("search", e.target.value)}
            placeholder="Model, SKU or interface"
            type="search"
          />
        </label>
        <Menu
          label="Storage & expansion"
          value={filters.storage}
          options={any("Any expansion", storageOptions)}
          onChange={(v) => filter("storage", v)}
          help="A slot is an expansion option, not an installed SSD or wireless modem."
        />
        <Menu
          label="Protection rating"
          value={filters.ip}
          options={any("Any rating", [
            { value: "IP40", label: "IP40" },
            { value: "IP66", label: "IP66" },
          ])}
          onChange={(v) => filter("ip", v)}
          help="Matches the documented rating exactly. Products without a documented rating are excluded when a rating is required."
        />
        <label className={styles.control}>
          <span className={styles.label}>DC input voltage (V)</span>
          <input
            type="number"
            step="any"
            min="0"
            aria-label="DC input voltage"
            placeholder="Any voltage"
            value={filters.voltage}
            onChange={(e) => filter("voltage", e.target.value)}
          />
        </label>
        <label className={styles.control}>
          <span className={styles.label}>Operating temperature (°C)</span>
          <input
            type="number"
            step="any"
            aria-label="Operating temperature"
            placeholder="Any temperature"
            value={filters.temperature}
            onChange={(e) => filter("temperature", e.target.value)}
          />
        </label>
        <p className={styles.advancedNote}>
          Temperature coverage is checked within one documented operating mode.
          Read the airflow, cooling and power-mode conditions in Details.
        </p>
      </div>
      <div className={styles.resultsHeader}>
        <h2 aria-live="polite">
          {groups.length} series{" "}
          <span>
            {" "}
            / {list.length}{" "}
            {list.length === 1 ? "configuration" : "configurations"}
          </span>
        </h2>
        <button
          className={styles.secondary}
          disabled={!tags.length}
          onClick={clear}
        >
          <span aria-hidden="true">↶</span> Clear filters
        </button>
      </div>
      {tags.length > 0 && (
        <div className={styles.tags} aria-label="Selected filters">
          {tags.map((tag) => (
            <button
              className={styles.tag}
              key={`${tag.key}-${tag.value || ""}`}
              aria-label={`Remove ${tag.label} filter`}
              onClick={() => removeTag(tag)}
            >
              {tag.label}
              <CloseIcon />
            </button>
          ))}
        </div>
      )}
      <p className={styles.hint}>
        Select two configurations of the same product type to compare their
        specifications.
      </p>
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
                <ProductImage product={p} />
                <div className={styles.cardContent}>
                  {type === "all" && (
                    <span className={styles.typeBadge}>
                      {p.type === "system" ? "System" : "Carrier board"}
                    </span>
                  )}
                  <h3>{group.name}</h3>
                  <Menu
                    compact
                    label={`Configuration for ${group.name}`}
                    value={p.id}
                    options={configOptions(group.products)}
                    onChange={(id) => configure(group.id, id)}
                  />
                  <dl className={styles.cardSpecs}>
                    {p.type === "system" ? (
                      <>
                        <div>
                          <dt>Module</dt>
                          <dd>{p.module?.replace("Jetson ", "")}</dd>
                        </div>
                        <div>
                          <dt>DC input</dt>
                          <dd>{valueText(p.power)}</dd>
                        </div>
                      </>
                    ) : (
                      <div className={styles.fullSpec}>
                        <dt>
                          {p.type === "carrier"
                            ? "Supported modules"
                            : "Compatible host"}
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
                            : p.host}
                        </dd>
                      </div>
                    )}
                    <div className={styles.fullSpec}>
                      <dt>
                        {type === "expansion"
                          ? "Added interfaces"
                          : "Key interfaces"}
                      </dt>
                      <dd>
                        {portSummary(p).split(" · ").slice(0, 4).join(" · ")}
                      </dd>
                    </div>
                  </dl>
                  <div className={styles.cardActions}>
                    <button
                      className={styles.secondary}
                      onClick={() => setDetail(p)}
                    >
                      Details
                    </button>
                    <label className={styles.check}>
                      <input
                        type="checkbox"
                        aria-label={`Compare ${p.name}`}
                        checked={checked}
                        onChange={() => toggle(p)}
                      />
                      Compare
                    </label>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <h3>No configurations match these requirements.</h3>
          <p>
            Remove a selected condition above or clear the filters to browse
            this product type.
          </p>
          <button className={styles.secondary} onClick={clear}>
            Clear filters
          </button>
        </div>
      )}
      {selectedProducts.length > 0 && (
        <aside className={styles.tray} aria-label="Comparison selection">
          <div>
            <strong>{selected.length}/2 selected</strong>
            <div className={styles.trayItems}>
              {selectedProducts.map((p) => (
                <div className={styles.trayItem} key={p.id}>
                  <span>
                    {p.name}
                    {!matchesProduct(p, filters, type) && (
                      <small>Outside current filters</small>
                    )}
                  </span>
                  <button
                    className={styles.iconButton}
                    aria-label={`Remove ${p.name} from comparison`}
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
              Clear selection
            </button>
            <button
              className={styles.primary}
              disabled={selected.length !== 2}
              onClick={() => setCompare(true)}
            >
              Compare ({selected.length})
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
          onClose={() => setDetail(null)}
          onCompare={toggle}
        />
      )}
      {compare && selectedProducts.length === 2 && (
        <Comparison
          items={selectedProducts}
          filters={filters}
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
