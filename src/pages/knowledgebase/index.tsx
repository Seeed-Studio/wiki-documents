import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Translate, { translate } from '@docusaurus/Translate'
import styles from './styles.module.scss'
import Link from '@docusaurus/Link'
import { sortedUsers, Tags, TagList, ContributionList, type User, type TagType, Users } from '../../define/knowledgebase'
import { useHistory, useLocation } from '@docusaurus/router'
import { useState, useMemo, useEffect } from 'react'
import { sortBy } from '../../utils/jsUtils';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import ShowcaseTagSelect, {
	readSearchTags,
} from './_components/ShowcaseTagSelect';
import FavoriteIcon from '../../components/FavoriteIcon';
import ShowcaseFilterToggle, {
	type Operator,
	readOperator,
} from './_components/ShowcaseFilterToggle';
import { usePluralForm } from '@docusaurus/theme-common';
import TopNav from '../../components/topNav';

const SearchNameQueryKey = 'name';

function ShowcaseHeader() {
	return (
		<section className={styles.header}>
			<h1>Products Help</h1>
			<p>Welcome! You can find frequently asked questions and troubled articales about product created by Seeed Studio here. <br/>And we provide our tech support platforms here.</p>
			{/* <Link className='button button--primary'> Need our experts help?</Link> */}
		</section>
	)
}
export function prepareUserState(): UserState | undefined {
	if (ExecutionEnvironment.canUseDOM) {
		return {
			scrollTopPosition: window.scrollY,
			focusedElementId: document.activeElement?.id,
		};
	}

	return undefined;
}
type UserState = {
	scrollTopPosition: number
	focusedElementId: string | undefined
}
function changeFilter(tag) {

}
function filterUsers(
	users: User[],
	selectedTags: TagType[],
	operator: Operator,
	searchName: string | null,
) {
	let template1List = []


	if (searchName) {
		// eslint-disable-next-line no-param-reassign
		ContributionList.forEach((item) => {
			const arr = item.list.filter((user) => {
				let flag1=false,flag2=false,flag3=false,flag4=false
				flag1=user.title&&user.title.toLowerCase().includes(searchName.toLowerCase())
				flag2=user.title1&&user.title1.toLowerCase().includes(searchName.toLowerCase())
				flag3=user.title2&&user.title2.toLowerCase().includes(searchName.toLowerCase())
				flag4=user.title3&&user.title3.toLowerCase().includes(searchName.toLowerCase())
				return flag1||flag2||flag3||flag4
			});
			template1List.push({
				...item,
				list: arr
			})
		});
	} else {
		template1List = ContributionList
	}
	if (selectedTags.length === 0) {
		return template1List;
	}
	let templateList = [], list = []
	template1List.forEach((item) => {
		const arr = item.list.filter((user) => {
			if (user.tags.length === 0) {
				return false;
			}
			if (operator === 'AND') {
				return selectedTags.every((tag) => user.tags.includes(tag));
			}
			const a = selectedTags.some((tag) => user.tags.includes(tag))
			return selectedTags.some((tag) => user.tags.includes(tag));
		});
		templateList.push({
			...item,
			list: arr
		})
		list = [...list, ...arr]
	})
	console.log(list.length, templateList, 'templateList');

	return selectedTags ? templateList : ContributionList

}
function readSearchName(search: string) {
	return new URLSearchParams(search).get(SearchNameQueryKey);
}
function restoreUserState(userState: UserState | null) {
	const { scrollTopPosition, focusedElementId } = userState ?? {
		scrollTopPosition: 0,
		focusedElementId: undefined,
	};
	// @ts-expect-error: if focusedElementId is undefined it returns null
	document.getElementById(focusedElementId)?.focus();
	window.scrollTo({ top: scrollTopPosition });
}

function useFilteredUsers() {
	const location = useLocation<UserState>();
	const [operator, setOperator] = useState<Operator>('OR');
	// On SSR / first mount (hydration) no tag is selected
	const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
	const [searchName, setSearchName] = useState<string | null>(null);
	// Sync tags from QS to state (delayed on purpose to avoid SSR/Client
	// hydration mismatch)
	useEffect(() => {
		setSelectedTags(readSearchTags(location.search));
		setOperator(readOperator(location.search));
		setSearchName(readSearchName(location.search));
		restoreUserState(location.state);
	}, [location]);
	return useMemo(
		() => {
			const arr = filterUsers(sortedUsers, selectedTags, operator, searchName)
			console.log(999, arr);
			return arr
		},
		[selectedTags, operator, searchName],
	);
}
function useSiteCountPlural() {
	const { selectMessage } = usePluralForm();
	return (sitesCount: number) =>
		selectMessage(
			sitesCount,
			translate(
				{
					id: 'showcase.filters.resultCount',
					description:
						'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
					message: '1 site|{sitesCount} sites',
				},
				{ sitesCount },
			),
		);
}
function ShowcaseFilters() {
	const templateList = useFilteredUsers();
	const list = templateList
	let length = 0
	list.forEach((item) => {
		length += item.list && item.list.length
	})
	const siteCountPlural = useSiteCountPlural();
	return (
		<section className={styles.filters}>
			<div className="margin-top--lg ">
				<SearchBar />
			</div>
			<div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
				<div>
					<h2 >Filters</h2>
					<span>{siteCountPlural(length)}</span>
				</div>
				<ShowcaseFilterToggle />
			</div>
			<ul>
				{TagList.map((tag, i) => {
					const { label, description, color } = Tags[tag];
					return (
						<li key={tag} className={styles.checkboxListItem} onClick={() => {
							changeFilter(tag)
						}
						}>
							<ShowcaseTagSelect
								tag={tag}
								id={tag}
								label={label}
								icon={
									tag === 'favorite' ? (
										<FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
									) : (
										<span
											style={{
												backgroundColor: color,
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
					)
				})}
			</ul>
		</section>
	)
}


function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
	const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));
	const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
		TagList.indexOf(tagObject.tag),
	);
	return (
		<>
			{tagObjectsSorted.map((tagObject, index) => {
				const id = `showcase_card_tag_${tagObject.tag}`;
				return (
					<div key={index} className={styles.card_tag}>
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

function SearchBar() {
	const history = useHistory();
	const location = useLocation();
	const [value, setValue] = useState<string | null>(null);
	useEffect(() => {
		setValue(readSearchName(location.search));
	}, [location]);
	return (
		<div className={styles.searchContainer}>
			<input
				id="searchbar"
				placeholder={translate({
					message: 'Search for product in this page...',
					id: 'showcase.searchBar.placeholder',
				})}
				value={value ?? undefined}
				onInput={(e) => {
					setValue(e.currentTarget.value);
					const newSearch = new URLSearchParams(location.search);
					newSearch.delete(SearchNameQueryKey);
					if (e.currentTarget.value) {
						newSearch.set(SearchNameQueryKey, e.currentTarget.value);
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

function ShowcaseCards() {
	const templateList = useFilteredUsers();
	const list = templateList
	let length = 0

	list.forEach((item) => {
		length += item.list && item.list.length
	})
	if (length === 0) {
		return (
			<section className="margin-top--lg margin-bottom--xl">
				<div className="container padding-vert--md text--center">
					<h2 >No result</h2>
					{/* <SearchBar /> */}
				</div>
			</section>
		);
	}
	return (
		<div className="margin-top--lg margin-bottom--xl">
			<div className={styles.searchContainer_wrapper}>
				{/* <SearchBar /> */}
			</div>
			{
				list.map((item, index) => {
					return (!item.list || !item.list.length) ? (<div key={index} ></div>) : (
						<div key={index} className={styles.card_container}>

							<h2 className={styles.card_title}>{item.title}</h2>
							<h4 className={styles.card_describe}>{item.describe}</h4>
							<section className={clsx(' margin-bottom--xl', styles.cards)}>

								{item.list && item.list.map((tag, i) => {
									const imagePath = require(`../../../assets/knowledgebase/${tag.preview}`).default;
									return (
										<li className={styles.card_item} key={i}>
											<div className={styles.card_image}>
												<img
													src={
														imagePath
													}
													alt={tag.title}
												/>
											</div>
											<div className={styles.card__body}>
												<div className={styles.card__title}>
													<a
														href={tag.website}
														target='_blank'
														rel='noopener noreferrer'
													>
														{tag.title}
													</a>
												</div>
												<div className={styles.card__title1}>
													<a
														href={tag.website1}
														target='_blank'
														rel='noopener noreferrer'
													>
														{tag.title1}
													</a>
												</div>
												<div className={styles.card__title2}>
													<a
														href={tag.website2}
														target='_blank'
														rel='noopener noreferrer'
													>
														{tag.title2}
													</a>
												</div>
												<div className={styles.card__title3}>
													<a
														href={tag.website3}
														target='_blank'
														rel='noopener noreferrer'
													>
														{tag.title3}
													</a>
												</div>
												<div className={styles.card__title4}>
													<a
														href={tag.website4}
														target='_blank'
														rel='noopener noreferrer'
													>
														{tag.title4}
													</a>
												</div>
												<div className={styles.card__title5}>
													<a
														href={tag.website5}
														target='_blank'
														rel='noopener noreferrer'
													>
														{tag.title5}
													</a>
												</div>
												{/* <p className={styles.showcaseCardBody}>{tag.description}</p> */}
											</div>
											<ul className={clsx('card__footer', styles.cardFooter)}>
												<ShowcaseCardTag tags={tag.tags} />
											</ul>
											{tag.source && (
												<div className={styles.source_container}>
													<Link
														href={tag.source}
														className={clsx(
															'button button--secondary button--sm',
															styles.showcaseCardSrcBtn,
														)}>
														<Translate id="showcase.card.sourceLink">See More</Translate>
													</Link>
												</div>
											)}

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
			<TopNav></TopNav>
			<div className={styles.knowledgebase}>
				<div className={styles.wrapper}>
					<ShowcaseHeader />
					<ShowcaseFilters />
					<ShowcaseCards />
				</div>
			</div>
		</Layout>
	)
}
