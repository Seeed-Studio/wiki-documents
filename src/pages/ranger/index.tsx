import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Translate, { translate } from '@docusaurus/Translate'
import styles from './styles.module.scss'
import { joinList, doList, centerJoinList, howDoesList, iconlist } from '../../define/rangerConfig'
import { Circle } from 'rc-progress';
import Link from '@docusaurus/Link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useState, useRef, useEffect } from 'react'
import ThirdPartyComponent from './_components/map';
import { judgeIsMobile } from '../../utils/jsUtils';
import './style.css'
import TopNav from '../../components/topNav';

function getImgUrl(str) {
	return `https://files.seeedstudio.com/wiki/ranger/${str}.png`
}

function bannerRender() {
	return (
		<div className={clsx(styles.banner)}>
			<div className={styles.banner_wrapper}>
				<img src={getImgUrl('banner')} alt="" />
				<div className={styles.banner_container}>
					<div className={styles.title}>What do Rangers do?</div>
					<div className={styles.sec_desc}>The Seeed Studio Ranger Program enlists skilled developers who provide expertise, create collaborative communities, and lead innovation in tech development.</div>
				</div>
			</div>
		</div>
	)
}
function topJoinRender() {
	return (
		<div className={clsx(styles.top_join, styles.section)}>

			<div className={styles.wrapper}>
				<div className={styles.title}>Why join in Seeed Ranger?</div>
				<div className={styles.top_join_container}>
					{joinList.map((item, index) => {
						return (
							<div key={index} className={styles.top_join_item}>
								<img src={getImgUrl(item.img)} alt="" />
								<div className={styles.sec_title}>{item.title}</div>
								<div className={styles.sec_desc}>{item.desc}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	)
}

function whatDoRender() {
	return (
		<div className={clsx(styles.what_do, styles.section)}>
			<div className={styles.wrapper}>
				<div className={styles.title}>What do Rangers do?</div>
				<div className={styles.what_do_container}>
					{doList.map((item, index) => {
						return (
							<div key={index} className={styles.what_do_sec}>
								<div className={styles.name}>{item.title}</div>
								{item.infoList.map((citem, index) => {
									return (
										<div key={index} className={styles.what_do_item}>
											<img src={getImgUrl(citem.img)} alt="" />
											<div className={styles.info}>
												<div className={styles.sec_title}>{citem.title}</div>
												{citem.list.map((ccitem, index) => {
													return (
														<div className={styles.sec_desc}><span>{ccitem}</span></div>
													);
												})}
											</div>

										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	)
}

function centerJoinRender() {
	return (
		<div className={clsx(styles.center_join, styles.section)}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Why join in Seeed Ranger?</div>
				<div className={styles.center_join_container}>
					{centerJoinList.map((item, index) => {
						return (
							<div key={index} className={styles.center_join_item}>
								<img src={getImgUrl(item.img)} alt="" />
								<div className={styles.sec_title}>{item.title}</div>
								<div className={styles.sec_desc}>{item.desc}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	)
}
function doesRender() {
	return (
		<div className={clsx(styles.does, styles.section)}>
			<div className={styles.wrapper}>
				<div className={styles.title}>How does Seeed Ranger Works?</div>
				<div className={styles.does_container}>
					{howDoesList.map((item, index) => {
						return (
							<div key={index} className={styles.does_item}>
								<div className={styles.does_percent_container}>
									<div className={styles.does_percent}>
										<div className={styles.number}><span>{item.percent} </span><span className={styles.unit}>%</span></div>
										<Circle percent={item.percent} trailWidth={10} trailColor={'#E2E6EB'} strokeWidth={10} strokeColor={'#8FC31F'} />
									</div>
								</div>

								{item.list.map((citem, index) => {
									return (
										<div>
											<div className={styles.sec_title}>{citem.title}</div>
											<div className={styles.sec_desc}>{citem.desc}</div>
										</div>
									);
								})}

							</div>
						);
					})}
				</div>
				<div className={styles.btn_container}>
					<Link className={clsx(styles.btn, 'button button--primary')} href='https://docs.google.com/forms/d/1g-dr4rfk7S6urL4r-YmewRv2Fni0V4LgL1eksTBvEic/viewform?edit_requested=true'>Apply Now</Link>
				</div>
			</div>
		</div>
	)
}

function emailRender() {

	return (
		<div className={clsx(styles.email, styles.section)}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Stay Tuned</div>
				<div className={styles.email_container}>
					<div className={styles.green}>Subscribe to Our Newsletter</div>
					<div className="newsletter-form">
						<div id="mc_embed_signup" className={styles.form_container}>
							<form action="https://seeedstudio.us11.list-manage.com/subscribe/post?u=0c272aa6642cc5d058579205f&amp;id=4b071a49e3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate="">
								<div id="mc_embed_signup_scroll" className={styles.newsletter_form_wrap}>
									<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter Email Address" ></input>
									<button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button subscribe">
										<span className="fa fa-angle-right"> > </span>
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className={styles.green}>Follow Us</div>
					<div className={styles.icon_container}>
						{
							iconlist.map((item) => {
								return (
									<a
										rel="nofollow"
										href={item.href}
										target="_blank"
										title=""
									>
										<img
											src={'https://media-cdn.seeedstudio.com/media/device_homepage/' +
												item.icon +
												'.png'}
											alt=""
										/></a>
								)
							})
						}

					</div>



				</div>

			</div>
		</div>
	)
}

function getData(key) {
	const formData = new FormData()
	formData.append("key", key)
	return fetch('https://napi.seeedstudio.com/custom/key-panel', {
		method: 'POST',
		body: formData
	}).then(response => response.json())
		.then(res => {
			return res.data
		})
}
const rangerPersonRender = (isMobile) => {
	const [list, setList] = useState([]);
	function queryData() {
		getData('wiki-ranger-person').then((rangerList) => {
			console.log(999, rangerList);
			setList(rangerList)
		})
	}
	useEffect(() => {
		queryData()

	}, [])
	return (
		<div className={clsx(styles.person, styles.section,'person')}>
			<ThirdPartyComponent/>
			<div className={styles.wrapper}>
				<div className={styles.title}>Why join in Seeed Ranger?</div>
				<div className={styles.person_container}>
					<Swiper
					modules={[Navigation,Pagination]}
						autoplay={true}
						navigation
						slidesPerView={isMobile?1:2} // 每次显示的幻灯片数量
						spaceBetween={40}
						pagination={{ clickable: true }} // 显示分页器
					>
						{/* scrollbar={{ draggable: true }} // 显示滚动条 */}

						{list.map((item, index) => {
							return (
								<SwiperSlide >
									<div key={index} className={styles.person_item}>
										<img src={item.img} alt="" />
										<div className={styles.sec_title}>{item.title}</div>
										<div className={styles.sec_desc}>{item.desc}</div>
									</div>
								</SwiperSlide>
							);
						})}

					</Swiper>

				</div>
			</div>
		</div>
	)
}
const blogPersonRender = (isMobile) => {
	const [list, setList] = useState([]);
	function queryData() {
		getData('wiki-ranger-blog').then((rangerList) => {
			console.log(999, rangerList);
			setList(rangerList)
		})
	}
	useEffect(() => {
		queryData()
	}, [])
	return (
		<div className={clsx(styles.blog, styles.section)}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Where are the Events happened?</div>
				<div className={styles.blog_container}>
					<Swiper
											modules={[Navigation,Pagination]}
											navigation
						slidesPerView={isMobile?1:3} // 每次显示的幻灯片数量
						spaceBetween={24}
						pagination={{ clickable: true }} // 显示分页器
					>
						{list.map((item, index) => {
							return (
								<SwiperSlide >
									<div key={index} className={styles.blog_item_container} onClick={()=>{
										window.open(item.link,'_blank')
									}}>
										<div className={styles.blog_item}>
											<img src={item.img} alt="" />
											<div className={styles.info}>
												<div className={styles.sec_title}>{item.title}</div>
												<div className={styles.time_box}>
													<span className={styles.user}><span>By </span><span className={styles.bold}> {item.user}</span></span>
													<span className={styles.time}> {item.time}</span>
												</div>
												<div className={styles.sec_desc}>{item.desc}</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}

					</Swiper>

				</div>
			</div>
		</div>
	)
}
export default function Ranger(): JSX.Element {
	const [isMobile,setIsMobile]=useState(false)
	useEffect(()=>{
		setIsMobile(judgeIsMobile())	
	},[])
	return (
		<Layout>
			<TopNav></TopNav>
			<div className={clsx(styles.ranger_page, 'ranger_page')}>
				{bannerRender()}
				{topJoinRender()}
				{whatDoRender()}
				{centerJoinRender()}
				{rangerPersonRender(isMobile)}
				{blogPersonRender(isMobile)}
				{doesRender()}
				{emailRender()}
			</div>
		</Layout>
	)
}
