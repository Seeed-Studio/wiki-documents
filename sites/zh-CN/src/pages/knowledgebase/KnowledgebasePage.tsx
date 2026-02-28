import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useHistory, useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import TopNav from '../../components/topNav';
import FavoriteIcon from '../../components/FavoriteIcon';
import ShowcaseTagSelect, {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, {
  Operator,
  readOperator,
} from './_components/ShowcaseFilterToggle';
import styles from './styles.module.scss';
import {
  getKnowledgebaseContent,
  KnowledgebaseCard,
  KnowledgebaseSection,
  Locale,
  PageCopy,
  TagList,
  TagMeta,
  TagType,
} from '../../define/knowledgebase';

const SearchNameQueryKey = 'name';

export type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }
  return undefined;
}

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  if (focusedElementId) {
    document.getElementById(focusedElementId)?.focus();
  }
  window.scrollTo({ top: scrollTopPosition });
}

type FilteredSection = KnowledgebaseSection & {
  cards: KnowledgebaseCard[];
};

function matchesSearch(card: KnowledgebaseCard, term: string | null) {
  if (!term) return true;
  const lower = term.toLowerCase();
  const textPool: string[] = [];
  if (card.heading) textPool.push(card.heading);
  if (card.description) textPool.push(card.description);
  card.links.forEach((link) => textPool.push(link.label));
  return textPool.some((value) => value.toLowerCase().includes(lower));
}

function matchesTags(
  card: KnowledgebaseCard,
  selectedTags: TagType[],
  operator: Operator,
) {
  if (selectedTags.length === 0) return true;
  if (card.tags.length === 0) return false;
  return operator === 'AND'
    ? selectedTags.every((tag) => card.tags.includes(tag))
    : selectedTags.some((tag) => card.tags.includes(tag));
}

function filterSections(
  sections: KnowledgebaseSection[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null,
): FilteredSection[] {
  return sections.map((section) => {
    const filteredCards = section.cards.filter(
      (card) =>
        matchesSearch(card, searchName) &&
        matchesTags(card, selectedTags, operator),
    );
    return { ...section, cards: filteredCards };
  });
}

function countCards(sections: FilteredSection[]) {
  return sections.reduce(
    (acc, section) => acc + section.cards.length,
    0,
  );
}

function ShowcaseHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className={styles.header}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function ShowcaseCardTag({
  tags,
  tagMeta,
}: {
  tags: TagType[];
  tagMeta: Record<TagType, TagMeta>;
}) {
  const sortedTags = [...tags].sort(
    (a, b) => TagList.indexOf(a) - TagList.indexOf(b),
  );
  return (
    <>
      {sortedTags.map((tag) => {
        const meta = tagMeta[tag];
        if (!meta) {
          return null;
        }
        return (
          <div key={tag} className={styles.card_tag}>
            {tag === 'Frequent' ? (
              <>
                <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                {meta.label}
              </>
            ) : (
              <>
                {meta.label}
                <span
                  style={{
                    backgroundColor: meta.color,
                    width: 7,
                    height: 7,
                    display: 'inline-block',
                    borderRadius: '50%',
                    marginLeft: 6,
                  }}
                />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

function SearchBar({
  placeholder,
}: {
  placeholder: string;
}) {
  const history = useHistory();
  const location = useLocation<UserState>();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={placeholder}
        value={value ?? ''}
        onInput={(e) => {
          const nextValue = e.currentTarget.value;
          setValue(nextValue);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (nextValue) {
            newSearch.set(SearchNameQueryKey, nextValue);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

type FiltersProps = {
  selectedSections: FilteredSection[];
  operator: Operator;
  copy: PageCopy;
  tagMeta: Record<TagType, TagMeta>;
};

function ShowcaseFilters({ selectedSections, operator, copy, tagMeta }: FiltersProps) {
  const total = countCards(selectedSections);

  return (
    <section className={styles.filters}>
      <div className="margin-top--lg ">
        <SearchBar placeholder={copy.searchPlaceholder} />
      </div>
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <h2>{copy.filters.title}</h2>
          <span>{copy.filters.countLabel(total)}</span>
        </div>
        <ShowcaseFilterToggle
          operator={operator}
          ariaLabel={copy.filters.ariaLabel}
          orLabel={copy.filters.or}
          andLabel={copy.filters.and}
        />
      </div>
      <ul>
        {TagList.map((tag) => {
          const meta = tagMeta[tag];
          if (!meta) {
            return null;
          }
          return (
            <li key={tag} className={styles.checkboxListItem}>
              <ShowcaseTagSelect
                tag={tag}
                id={tag}
                label={meta.label}
                icon={
                  tag === 'Frequent' ? (
                    <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                  ) : (
                    <span
                      style={{
                        backgroundColor: meta.color,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        marginLeft: 8,
                      }}
                    />
                  )
                }
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ShowcaseCards({
  sections,
  copy,
  tagMeta,
}: {
  sections: FilteredSection[];
  copy: PageCopy;
  tagMeta: Record<TagType, TagMeta>;
}) {
  const total = countCards(sections);
  if (total === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>{copy.noResultTitle}</h2>
        </div>
      </section>
    );
  }
  return (
    <div className="margin-top--lg margin-bottom--xl">
      {sections.map((section, index) => {
        if (!section.cards.length) {
          return <div key={index} />;
        }
        return (
          <div key={index} className={styles.card_container}>
            {section.title ? (
              <h2 className={styles.card_title}>{section.title}</h2>
            ) : null}
            {section.description ? (
              <h4 className={styles.card_describe}>{section.description}</h4>
            ) : null}
            <section className={clsx('margin-bottom--xl', styles.cards)}>
              {section.cards.map((card, i) => {
                const imagePath = require(`../../../assets/knowledgebase/${card.preview}`).default;
                return (
                  <li className={styles.card_item} key={i}>
                    <div className={styles.card_image}>
                      <img src={imagePath} alt={card.heading ?? card.links[0]?.label ?? 'Knowledgebase card'} />
                    </div>
                    <div className={styles.card__body}>
                      {card.heading ? (
                        <div className={styles.card__title}>{card.heading}</div>
                      ) : null}
                      {card.description ? (
                        <p className={styles.cardDescription}>{card.description}</p>
                      ) : null}
                      <div className={styles.cardLinks}>
                        {card.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardLink}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    <ul className={clsx('card__footer', styles.cardFooter)}>
                      <ShowcaseCardTag tags={card.tags} tagMeta={tagMeta} />
                    </ul>
                    {card.source ? (
                      <div className={styles.source_container}>
                        <Link
                          href={card.source}
                          className={clsx(
                            'button button--secondary button--sm',
                            styles.showcaseCardSrcBtn,
                          )}
                        >
                          {copy.seeMoreLabel}
                        </Link>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </section>
          </div>
        );
      })}
    </div>
  );
}

type KnowledgebasePageProps = {
  locale?: Locale;
};

export default function KnowledgebasePage({
  locale = 'en',
}: KnowledgebasePageProps) {
  const normalizedLocale: Locale = (['en', 'cn', 'ja', 'es'] as Locale[]).includes(
    locale,
  )
    ? locale
    : 'en';

  const content = getKnowledgebaseContent(normalizedLocale);
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);

  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state ?? null);
  }, [location]);

  const filteredSections = useMemo(
    () =>
      filterSections(
        content.sections,
        selectedTags,
        operator,
        searchName,
      ),
    [content.sections, selectedTags, operator, searchName],
  );

  return (
    <Layout>
      <TopNav />
      <div className={styles.knowledgebase}>
        <div className={styles.wrapper}>
          <ShowcaseHeader
            title={content.copy.headerTitle}
            description={content.copy.headerDescription}
          />
          <ShowcaseFilters
            selectedSections={filteredSections}
            operator={operator}
            copy={content.copy}
            tagMeta={content.tags}
          />
          <ShowcaseCards
            sections={filteredSections}
            copy={content.copy}
            tagMeta={content.tags}
          />
        </div>
      </div>
    </Layout>
  );
}
