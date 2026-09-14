import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';

const I18N = {
  en: {
    placeholder: 'Search products, tutorials, and technologies',
    resultLabel: 'results',
    emptyLabel: 'No matching content',
    clearLabel: 'Clear search',
  },
  cn: {
    placeholder: '搜索机器人、教程或技术，按 / 快速聚焦',
    resultLabel: '个结果',
    emptyLabel: '没有找到匹配内容',
    clearLabel: '清除搜索',
  },
  ja: {
    placeholder: '製品、チュートリアル、技術を検索',
    resultLabel: '件の結果',
    emptyLabel: '一致するコンテンツがありません',
    clearLabel: '検索をクリア',
  },
  es: {
    placeholder: 'Buscar productos, tutoriales y tecnologías',
    resultLabel: 'resultados',
    emptyLabel: 'No se encontró contenido coincidente',
    clearLabel: 'Borrar búsqueda',
  },
  'pt-br': {
    placeholder: 'Pesquisar produtos, tutoriais e tecnologias',
    resultLabel: 'resultados',
    emptyLabel: 'Nenhum conteúdo correspondente encontrado',
    clearLabel: 'Limpar pesquisa',
  },
};

function getLocaleFromPath(pathname) {
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/pt-br' || pathname.startsWith('/pt-br/')) return 'pt-br';
  return 'en';
}

function normalize(value) {
  return value.toLocaleLowerCase().replace(/\s+/g, ' ').trim();
}

export default function RoboticsPageSearch() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const {placeholder, resultLabel, emptyLabel, clearLabel} = I18N[locale] || I18N.en;

  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const page = rootRef.current?.closest('.robotics-page');
    if (!page) return;

    const seen = new Set();
    const searchableLinks = page.querySelectorAll(
      '.kit-index-grid a, .learning-steps a, .mini-track a, .resource-grid a, .resource-columns a',
    );

    const nextItems = Array.from(searchableLinks).flatMap((link) => {
      const href = link.getAttribute('href');
      const title =
        link.querySelector('strong, b')?.textContent?.trim() ||
        link.textContent?.replace(/\s+/g, ' ').trim();
      if (!href || !title) return [];

      const key = `${href}:${title}`;
      if (seen.has(key)) return [];
      seen.add(key);

      const description =
        link.querySelector('small')?.textContent?.trim() ||
        link.closest('.section-block')?.querySelector('.section-title-row h2')?.textContent?.trim() ||
        '';

      return [{href, title, description, searchable: normalize(`${title} ${description}`)}];
    });

    setItems(nextItems);
  }, []);

  useEffect(() => {
    const focusSearch = (event) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
      const tagName = document.activeElement?.tagName;
      if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') return;
      event.preventDefault();
      inputRef.current?.focus();
    };

    document.addEventListener('keydown', focusSearch);
    return () => document.removeEventListener('keydown', focusSearch);
  }, []);

  const results = useMemo(() => {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return [];
    return items.filter((item) => item.searchable.includes(normalizedQuery)).slice(0, 12);
  }, [items, query]);

  useEffect(() => {
    setActiveIndex(results.length ? 0 : -1);
  }, [query, results.length]);

  const openResult = (result) => {
    if (result.href.startsWith('#')) {
      const target = document.getElementById(result.href.slice(1));
      if (target?.tagName === 'DETAILS') target.open = true;
    }
    setQuery('');
  };

  const handleKeyDown = (event) => {
    if (!results.length) {
      if (event.key === 'Escape') setQuery('');
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => (index <= 0 ? results.length - 1 : index - 1));
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      const result = results[activeIndex];
      openResult(result);
      window.location.assign(result.href);
    } else if (event.key === 'Escape') {
      setQuery('');
    }
  };

  const listboxId = 'robotics-page-search-results';

  return (
    <div className="robotics-search" ref={rootRef}>
      <div className="robotics-search-shell">
        <span className="robotics-search-glow" aria-hidden="true" />
        <span className="robotics-search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m21 21-4.35-4.35m2.35-5.4a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0Z" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-controls={query ? listboxId : undefined}
          aria-expanded={Boolean(query)}
          aria-activedescendant={activeIndex >= 0 ? `robotics-search-result-${activeIndex}` : undefined}
          autoComplete="off"
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button
            type="button"
            className="robotics-search-clear"
            aria-label={clearLabel}
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
          >
            ×
          </button>
        )}
      </div>

      {query && (
        <div className="robotics-search-results" id={listboxId} role="listbox">
          <div className="robotics-search-status">
            {results.length ? `${results.length} ${resultLabel}` : emptyLabel}
          </div>
          {results.map((result, index) => (
            <a
              id={`robotics-search-result-${index}`}
              key={`${result.href}:${result.title}`}
              href={result.href}
              role="option"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? 'is-active' : undefined}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => openResult(result)}
            >
              <strong>{result.title}</strong>
              {result.description && <span>{result.description}</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}