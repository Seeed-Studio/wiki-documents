import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Selector.module.css";
import ApplicationIllustration from "./ApplicationIllustration";

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="m6 6 12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Menu({
  label,
  value,
  options,
  onChange,
  multiple = false,
  help,
  compact = false,
}) {
  const [open, setOpen] = useState(false),
    [active, setActive] = useState(0),
    [position, setPosition] = useState({});
  const trigger = useRef(null),
    panel = useRef(null),
    id = useId(),
    typed = useRef({ text: "", time: 0 });
  const illustrated = options.some((option) => option.illustration);
  const [hovered, setHovered] = useState(null);
  const [inputMode, setInputMode] = useState("keyboard");
  const [environment, setEnvironment] = useState({
    reduced: true,
    touch: false,
    hidden: true,
    suspended: false,
  });
  const positioned = position.top != null || position.bottom != null;
  const chosen = multiple
    ? options
        .filter((o) => value.includes(o.value))
        .map((o) => o.label)
        .join(", ")
    : options.find((o) => o.value === value)?.label;
  const selected = (option) =>
    multiple ? value.includes(option.value) : option.value === value;
  function close() {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  function choose(option) {
    if (!option || option.disabled) return;
    onChange(
      multiple
        ? value.includes(option.value)
          ? value.filter((v) => v !== option.value)
          : [...value, option.value]
        : option.value,
    );
    if (!multiple) close();
  }
  useEffect(() => {
    if (!open || !illustrated) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touch = window.matchMedia("(hover: none), (pointer: coarse)");
    let suspended = document.hidden;
    const update = () => {
      suspended ||= document.hidden;
      setEnvironment({
        reduced: reduced.matches,
        touch: touch.matches,
        hidden: document.hidden,
        suspended,
      });
      setHovered(null);
    };
    update();
    reduced.addEventListener("change", update);
    touch.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      reduced.removeEventListener("change", update);
      touch.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [open, illustrated]);
  useEffect(() => {
    if (!open) {
      setPosition({});
      setHovered(null);
      return undefined;
    }
    const update = () => {
      const r = trigger.current.getBoundingClientRect(),
        width = Math.min(
          illustrated ? 400 : Math.max(r.width, 260),
          400,
          window.innerWidth - 24,
        );
      const inset = illustrated ? 18 : 12;
      const below = window.innerHeight - r.bottom - inset,
        above = r.top - inset;
      const flip = below < (illustrated ? 240 : 180) && above > below,
        available = Math.max(illustrated ? 0 : 100, flip ? above : below);
      setPosition({
        width,
        left: Math.min(Math.max(12, r.left), window.innerWidth - width - 12),
        ...(flip
          ? { bottom: window.innerHeight - r.top + 6 }
          : { top: r.bottom + 6 }),
        maxHeight: Math.min(illustrated ? 560 : 380, available),
      });
    };
    const outside = (e) => {
      if (
        !trigger.current?.contains(e.target) &&
        !panel.current?.contains(e.target)
      )
        setOpen(false);
    };
    update();
    window.addEventListener("resize", update);
    const scroll = (e) => {
      if (!illustrated || !panel.current?.contains(e.target)) update();
    };
    window.addEventListener("scroll", scroll, true);
    document.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", scroll, true);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open, illustrated]);
  useEffect(() => {
    if (
      open &&
      illustrated &&
      positioned &&
      (inputMode === "keyboard" || hovered == null)
    ) {
      const root = panel.current;
      const option = root?.querySelector(`[data-index="${active}"]`);
      if (!option) return;
      if (option.offsetTop < root.scrollTop) root.scrollTop = option.offsetTop;
      else if (
        option.offsetTop + option.offsetHeight >
        root.scrollTop + root.clientHeight
      )
        root.scrollTop =
          option.offsetTop + option.offsetHeight - root.clientHeight;
    } else if (open && !illustrated)
      panel.current
        ?.querySelector(`[data-index="${active}"]`)
        ?.scrollIntoView({ block: "nearest" });
  }, [active, open, positioned, illustrated, inputMode]);
  function keyDown(e) {
    if (illustrated) {
      setInputMode("keyboard");
      setHovered(null);
    }
    if (e.key === "Tab") {
      setOpen(false);
      return;
    }
    if (e.key === "Escape" && open) {
      e.preventDefault();
      e.stopPropagation();
      close();
      return;
    }
    if (["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      if (!open) {
        setActive(Math.max(0, options.findIndex(selected)));
        setOpen(true);
        return;
      }
      if (e.key === "Enter" || e.key === " ") choose(options[active]);
      else
        setActive((i) =>
          e.key === "Home"
            ? 0
            : e.key === "End"
              ? options.length - 1
              : (i + (e.key === "ArrowDown" ? 1 : -1) + options.length) %
                options.length,
        );
    } else if (e.key.length === 1 && !e.metaKey && !e.ctrlKey) {
      const now = Date.now();
      typed.current.text =
        (now - typed.current.time < 650 ? typed.current.text : "") +
        e.key.toLowerCase();
      typed.current.time = now;
      const index = options.findIndex((o) =>
        o.label.toLowerCase().startsWith(typed.current.text),
      );
      if (index >= 0) {
        setActive(index);
        setOpen(true);
      }
    }
  }
  const host =
    trigger.current?.closest("dialog") ||
    (typeof document !== "undefined" ? document.body : null);
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={`${styles.control} ${compact ? styles.compactControl : ""} ${illustrated ? styles.illustratedControl : ""}`}
        title={illustrated ? chosen : undefined}
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={id}
        aria-activedescendant={open ? `${id}-${active}` : undefined}
        onKeyDown={keyDown}
        onPointerDown={() => {
          if (illustrated) setInputMode("pointer");
        }}
        onClick={() => {
          setActive(Math.max(0, options.findIndex(selected)));
          setOpen((o) => !o);
        }}
      >
        <span>
          {!compact && <span className={styles.label}>{label}</span>}
          <span className={styles.controlValue}>
            {chosen || (multiple ? "Any interfaces" : "Not selected")}
          </span>
        </span>
        <span aria-hidden="true">⌄</span>
      </button>
      {open &&
        host &&
        createPortal(
          <div
            ref={panel}
            className={`${styles.menu} ${illustrated ? styles.illustratedMenu : ""}`}
            style={{
              ...position,
              ...(illustrated && !positioned ? { visibility: "hidden" } : {}),
            }}
            onKeyDown={keyDown}
          >
            {help && <p className={styles.menuHelp}>{help}</p>}
            <div
              role="listbox"
              id={id}
              aria-label={label}
              aria-multiselectable={multiple || undefined}
            >
              {options.map((option, index) => (
                <div
                  role="option"
                  aria-selected={selected(option)}
                  aria-disabled={option.disabled || undefined}
                  aria-labelledby={
                    illustrated ? `${id}-${index}-label` : undefined
                  }
                  aria-describedby={
                    illustrated && option.description
                      ? `${id}-${index}-description`
                      : undefined
                  }
                  id={`${id}-${index}`}
                  data-index={index}
                  key={option.value}
                  className={`${styles.option} ${illustrated ? styles.illustratedOption : ""} ${selected(option) ? styles.optionSelected : ""} ${index === active ? styles.optionActive : ""}`}
                  onPointerMove={(e) => {
                    if (illustrated && e.pointerType !== "mouse") return;
                    setActive(index);
                    if (illustrated) {
                      setInputMode("pointer");
                      setHovered(option.value);
                    }
                  }}
                  onPointerLeave={() => {
                    if (illustrated) setHovered(null);
                  }}
                  onMouseDown={(e) => {
                    if (illustrated) e.preventDefault();
                  }}
                  onClick={() => choose(option)}
                >
                  {option.illustration && (
                    <ApplicationIllustration
                      scene={option.illustration}
                      hovered={hovered === option.value}
                      environment={environment}
                      inputMode={inputMode}
                      scrollRoot={panel}
                      ready={positioned}
                    />
                  )}
                  <span
                    className={illustrated ? styles.illustratedText : undefined}
                  >
                    <span id={illustrated ? `${id}-${index}-label` : undefined}>
                      {option.label}
                    </span>
                    {option.description && (
                      <small
                        id={
                          illustrated ? `${id}-${index}-description` : undefined
                        }
                        className={styles.optionDescription}
                      >
                        {option.description}
                      </small>
                    )}
                  </span>
                  <span
                    className={
                      illustrated ? styles.illustratedCheck : undefined
                    }
                    aria-hidden="true"
                  >
                    {selected(option) ? "✓" : ""}
                  </span>
                </div>
              ))}
            </div>
            {multiple && (
              <button type="button" className={styles.menuDone} onClick={close}>
                Done
              </button>
            )}
          </div>,
          host,
        )}
    </>
  );
}

export function InterfaceMenu({
  options,
  value,
  minimum,
  quantities,
  onChange,
}) {
  const [open, setOpen] = useState(false),
    [position, setPosition] = useState({});
  const trigger = useRef(null),
    panel = useRef(null),
    id = useId();
  const summary = options
    .filter((o) => value.includes(o.value))
    .map((o) => (o.value === "usb_a" ? `USB-A ≥ ${minimum || 1}` : o.label))
    .join(", ");
  function close() {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  useEffect(() => {
    if (!open) return undefined;
    const update = () => {
      const r = trigger.current.getBoundingClientRect();
      const width = Math.min(
        Math.max(300, r.width),
        400,
        window.innerWidth - 24,
      );
      const below = window.innerHeight - r.bottom - 12,
        above = r.top - 12;
      const flip = below < 200 && above > below;
      setPosition({
        width,
        left: Math.min(Math.max(12, r.left), window.innerWidth - width - 12),
        ...(flip
          ? { bottom: window.innerHeight - r.top + 6 }
          : { top: r.bottom + 6 }),
        maxHeight: Math.max(100, Math.min(420, flip ? above : below)),
      });
    };
    const outside = (e) => {
      if (
        !trigger.current?.contains(e.target) &&
        !panel.current?.contains(e.target)
      )
        setOpen(false);
    };
    update();
    panel.current?.querySelector("input")?.focus({ preventScroll: true });
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    document.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  const host =
    trigger.current?.closest("dialog") ||
    (typeof document !== "undefined" ? document.body : null);
  return (
    <>
      <button
        type="button"
        ref={trigger}
        className={styles.control}
        aria-label="Required interfaces"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span>
          <span className={styles.label}>Required interfaces</span>
          <span className={styles.controlValue}>
            {summary || "Any interfaces"}
          </span>
        </span>
        <span aria-hidden="true">⌄</span>
      </button>
      {open &&
        host &&
        createPortal(
          <div
            ref={panel}
            id={id}
            className={styles.menu}
            style={position}
            role="dialog"
            aria-label="Required interfaces"
            onBlur={(e) => {
              if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget))
                setOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                close();
              }
              if (e.key === "Tab") {
                const fields = [
                  ...panel.current.querySelectorAll("input, select, button"),
                ];
                if (
                  (e.shiftKey && document.activeElement === fields[0]) ||
                  (!e.shiftKey && document.activeElement === fields.at(-1))
                ) {
                  e.preventDefault();
                  close();
                }
              }
            }}
          >
            <p className={styles.menuHelp}>
              Select every interface you need. Wireless options mean module
              expansion, not an installed radio.
            </p>
            {options.map((option) => (
              <div key={option.value}>
                <label
                  className={`${styles.option} ${value.includes(option.value) ? styles.optionSelected : ""}`}
                >
                  <span className={styles.interfaceCheck}>
                    <input
                      type="checkbox"
                      checked={value.includes(option.value)}
                      onChange={(e) => {
                        const next = e.target.checked
                          ? [...value, option.value]
                          : value.filter((v) => v !== option.value);
                        onChange(
                          next,
                          next.includes("usb_a") ? minimum || "1" : "",
                        );
                      }}
                    />
                    {option.label}
                  </span>
                </label>
                {option.value === "usb_a" && value.includes("usb_a") && (
                  <label className={styles.quantity}>
                    Minimum USB-A ports
                    <select
                      aria-label="Minimum USB-A ports"
                      value={minimum || "1"}
                      onChange={(e) => onChange(value, e.target.value)}
                    >
                      {quantities.map((n) => (
                        <option key={n} value={n}>
                          {n} or more
                        </option>
                      ))}
                    </select>
                  </label>
                )}
              </div>
            ))}
            <button type="button" className={styles.menuDone} onClick={close}>
              Done
            </button>
          </div>,
          host,
        )}
    </>
  );
}

export function ProductImage({ product, className = "" }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [product.id, product.image]);
  return (
    <div className={`${styles.image} ${className}`}>
      {!failed && product.image ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={styles.imageFallback}>Product image unavailable</span>
      )}
    </div>
  );
}

export function Modal({ title, onClose, children, footer, wide = false }) {
  const dialog = useRef(null),
    opener = useRef(null),
    close = useRef(onClose);
  close.current = onClose;
  const id = useId();
  useEffect(() => {
    opener.current = document.activeElement;
    dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = previous;
      if (opener.current?.isConnected)
        opener.current.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      aria-labelledby={id}
      className={`${styles.dialog} ${wide ? styles.wideDialog : ""}`}
      onCancel={(e) => {
        e.preventDefault();
        close.current();
      }}
      onKeyDown={(e) => {
        if (e.key !== "Tab") return;
        const focusable = [
          ...dialog.current.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ].filter(
          (element) =>
            element.getClientRects().length > 0 &&
            getComputedStyle(element).visibility !== "hidden",
        );
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }}
      onClick={(e) => {
        if (e.target === dialog.current) {
          const r = dialog.current.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            close.current();
        }
      }}
    >
      <header className={styles.dialogHeader}>
        <h2 id={id}>{title}</h2>
        <button
          type="button"
          className={styles.close}
          aria-label="Close dialog"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </header>
      <div className={styles.dialogBody}>{children}</div>
      {footer && <footer className={styles.dialogFooter}>{footer}</footer>}
    </dialog>
  );
}
