import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Translate, { translate } from '@docusaurus/Translate'
import docList from '../../define/IAGDocs.js'
import styles from './styles.module.scss'
import Link from '@docusaurus/Link'
import { sortedUsers, Tags, TagList, type User, type TagType, Users } from './users'
import { useHistory, useLocation } from '@docusaurus/router'
import { useState, useMemo, useEffect } from 'react'
import {sortBy} from './jsUtils';

function ShowcaseHeader() {
	return (
		<section className={styles.header}>
			<h1>Docusaurus Site Showcase</h1>
			<p>List of websites people are building with Docusaurus</p>
			<Link className='button button--primary'>🙏 Please add your site</Link>
		</section>
	)
}

type UserState = {
	scrollTopPosition: number
	focusedElementId: string | undefined
}

function ShowcaseFilters() {
	return (
		<section className={styles.filters}>
			<div>
				<div className={styles.filters_header}>
					<h2 as='h2'>Filters</h2>
					<span className={styles.filters_number}>400 sites</span>
				</div>
			</div>
			<ul>
				{TagList.map((tag, i) => {
          const {label, description, color} = Tags[tag];
					return (
						<li key={i} className={styles.checkboxListItem}>
							{label}
							<span
								style={{
									backgroundColor: color,
									width: 10,
									height: 10,
									display: 'inline-block',
									borderRadius: '50%',
									marginLeft: 8
								}}
							></span>
						</li>
					)
				})}
			</ul>
		</section>
	)
}


function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );
  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;
        console.log(tagObject,89);
        
        return (
          <div className={styles.card_tag}>
            {tagObject.tag}
          <span
								style={{
									backgroundColor: tagObject.color,
									width: 7,
									height: 7,
									display: 'inline-block',
									borderRadius: '50%',
									marginLeft: 6
								}}
							></span></div>
          );
      })}
    </>
  );
}
function ShowcaseCards() {
	return (
    <section className={clsx('margin-top--lg margin-bottom--xl',styles.cards)}>
			{Users.map((tag, i) => {
				return (
					<li className={styles.card_item} key={i}>
						<div className={styles.card_image}>
							<img
								src={
									'https://www.docusaurus.io/assets/ideal-img/algolia.1026fe5.640.png'
								}
								alt={tag.title}
							/>
						</div>
						<div className={styles.card__body}>
							<div className={styles.card__title}>
								<h4>
									<a
										href='https://docsearch.algolia.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
									{tag.title}
									</a>
								</h4>
                 {tag.source && (
                  <Link
                    href={tag.source}
                    className={clsx(
                      'button button--secondary button--sm',
                      styles.showcaseCardSrcBtn,
                    )}>
                    <Translate id="showcase.card.sourceLink">source</Translate>
                  </Link>
                )}
							</div>
              <p className={styles.showcaseCardBody}>{tag.description}</p>
						</div>
            <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={tag.tags} />
      </ul>
					</li>
				)
			})}
		</section>
	)
}
export default function Home(): JSX.Element {
	return (
		<Layout>
			<div className={styles.contribution}>
				<div className={styles.wrapper}>
					<ShowcaseHeader />
					<ShowcaseFilters />
					<ShowcaseCards />
				</div>
			</div>
		</Layout>
	)
}
