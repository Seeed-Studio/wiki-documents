import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Translate, { translate } from '@docusaurus/Translate'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import { sortedUsers, Tags, TagList, ContributionList,type User, type TagType, Users } from '../../define/contribution'
import { useHistory, useLocation } from '@docusaurus/router'
import { useState, useMemo, useEffect } from 'react'
import {sortBy} from '../../utils/jsUtils';

function ShowcaseHeader() {
	return (
		<section className={styles.header}>
			<h1> Welcom Rangers!</h1>
			<p>This is the introductory page for the "Ranger Program". <br></br> Here, you can find all the contribution content we are looking for, as well as the progress and the achievement of them.</p>
			<Link className='button button--primary'> Seeed Studio</Link>
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
			{/* <div>
				<div className={styles.filters_header}>
					<h2 as='h2'>Filters</h2>
					<span className={styles.filters_number}>400 sites</span>
				</div>
			</div> */}
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
    <div>
			{
			ContributionList.map((item,index)=>{
			return (
				<div className={styles.card_container}>

					<h2 className={styles.card_title}>{item.title}</h2>
					<h4 className={styles.card_describe}>{item.describe}</h4>
         <section className={clsx(' margin-bottom--xl',styles.cards)}>

					{item.list.map((tag, i) => {
								return (
									<li className={styles.card_item} key={i}>
										<div className={styles.card_image}>
											<img
												src={
													'https://files.seeedstudio.com/wiki/seeed_logo/Wiki_Platform_GT_Logo.jpg'
												}
												alt={tag.title}
											/>
										</div>
										<div className={styles.card__body}>
											<div className={styles.card__title}>
												<h3>
													<a
														href='/XIAO_ESP32C3_Home'
														target='_blank'
														rel='noopener noreferrer'
													>
													{tag.title}
													</a>
												</h3>
												{tag.source && (
													<Link
														href={tag.source}
														className={clsx(
															'button button--secondary button--sm',
															styles.showcaseCardSrcBtn,
														)}>
														<Translate id="showcase.card.sourceLink">Progress</Translate>
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
				</div>
				)
			}) 
			}
		</div>
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
