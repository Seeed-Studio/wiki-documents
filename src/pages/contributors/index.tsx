import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useState, useEffect } from 'react'
import { judgeIsMobile, generateUUID } from '../../utils/jsUtils';
import './style.css'
import { Pagination as AntdPagination, Popover, Segmented, Modal, Button, Space, Form, Input, message } from 'antd';
import { GithubOutlined, ArrowRightOutlined, LikeOutlined, RightOutlined, HeartOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import BrowserOnly from '@docusaurus/BrowserOnly';
import IndexForm from './form'
import TopNav from '../../components/topNav';


// const baseUrl = 'http://sapi-new.seeedstudio.local' //本地环境
// const baseUrl = 'http://relfusionapi.seeedstudio.com'//测试环境
const baseUrl='https://napi.seeedstudio.com'//正式

function getImgUrl(str) {
	return `https://files.seeedstudio.com/wiki/contributor/${str}.png`
}
const toUrl = (url: string) => {
	window.open(url)
}
let client_key = ''
const pageSizeArr = [3, 6, 9]
const rangerwhyRender = (isMobile) => {
	const [list, setList] = useState([]);
	function queryData() {
		return fetch(baseUrl + '/v1/contributor/index', {
			method: 'get',
		}).then(response => response.json())
			.then(res => {
				setList([...res.data,...res.data,...res.data])
			})
	}

	useEffect(() => {
		queryData()
	}, [])
	return (
		<div className={clsx(styles.why, styles.section, 'why')}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Greetings! From Seeed Studio <div className={styles.s_title}>Contributors</div></div>
				<div className={styles.why_container}>
					<Swiper
						modules={[Navigation]}
						autoplay={true}
						navigation
						slidesPerView={isMobile ? 1 : 4} // 每次显示的幻灯片数量
						spaceBetween={24}
						pagination={{ clickable: true }} // 显示分页器
					>
						{list.map((item, index) => {
							return (
								<SwiperSlide key={item.id}>
									<div key={index} className={styles.why_item}>
										<img className={styles.cursor_pointer} src={item.photo} alt="" onClick={() => toUrl(item.url)} />
										<div className={clsx(styles.cursor_pointer)} onClick={() => toUrl(item.url)}>
											<GithubOutlined className={clsx(styles.github)} style={{ fontSize: '24px' }} />
											<span className={clsx(styles.gray)}>{item.project_id}</span>
										</div>
										<div className={styles.sec_title}>{item.author_name}</div>
										<div className={clsx(styles.gray, styles.sec_desc)}>{item.introduce}</div>
										<div className={clsx(styles.project_wrapper)}>

											<div className={styles.project_title}>Project</div>
											<div >
												{item.projects.map((pitem, pindex) => {
													return (
														pindex < 2 && (<a href={pitem.url} target='_blank' key={pindex} className={styles.project_desc} >{pitem.name}</a>)
													)
												})}
											</div>
											{
												item.projects?.length > 2 && (
													<div className={styles.project_more} >
														<Popover trigger="hover" title='Project' content={
															(
																<div  className="project_more_wrapper" >
																	{item.projects.map((pitem, pindex) => {
																		return (
																			(<div onClick={()=>toUrl(pitem.url)} className='project_desc' >{pitem.name}</div>)
																		)
																	})}
																</div>
															)
														}>
															<span className={styles.cursor_pointer}><span className={styles.more_text}>View More</span><ArrowRightOutlined /></span>
														</Popover>
													</div>
												)
											}
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
type Align = 'Popular' | 'Newest';
const claimRender = (isMobile) => {
	const [list, setList] = useState([]);
	const [topicList, setTopicList] = useState([]);
	const [curPge, setCurPage] = useState(1)
	const [topicId, setTopicId] = useState('')

	const [pageSize, setPageSize] = useState(pageSizeArr[0])
	const [listTotal, setListTotal] = useState(0)
	const [alignValue, setAlignValue] = React.useState<Align>('Newest');
	function queryData(page?: number, pageSize?: number) {
		page = page || 1
		pageSize = pageSize || pageSizeArr[0]
		setCurPage(page)
		setPageSize(pageSize)
		const params = {
			page: page,
			size: pageSize,
			order: alignValue == 'Newest' ? '' : alignValue.toLowerCase(),
			client_key: client_key,
			topic_id: topicId
		}
		const queryParams = new URLSearchParams(params);
		const queryString = queryParams.toString();
		fetch(baseUrl + '/v1/contributor/open-github?' + queryString, {
			method: 'get',

		}).then(response => response.json())
			.then(res => {
				setList(res.data.data)
				setListTotal(res.data.count)
			})

	}
	function queryTopicData() {
		fetch(baseUrl + '/v1/contributor/topic-list', {
			method: 'get',
		}).then(response => response.json())
			.then(res => {
				setTopicList(res.data)
			})
	}
	function refreshData() {
		queryData(curPge, pageSize)
	}
	function changeTopicId(id) {
		setTopicId(id)

	}
	useEffect(() => {
		queryTopicData()
	}, [])
	useEffect(() => {
		queryData(1, pageSize)
	}, [alignValue])
	useEffect(() => {
		queryData(1, pageSize)
	}, [topicId])

	return (
		<div className={clsx(styles.claim, styles.section)}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Open Call! Every Little Step Counts!</div>
				<div className={styles.claim_container}>
					<div className={styles.claim_tab}>
						<div className={clsx(styles.tab_btn, topicId === '' ? styles.active : '')} onClick={() => changeTopicId('')} >All</div>
						{topicList.map(item => {
							return (
								<div key={item.id} className={clsx(styles.tab_btn, topicId === item.id ? styles.active : '')} onClick={() => changeTopicId(item.id)} >{item.title}</div>
							)
						})}
					</div>
					<div className={styles.item_radio}>
						<Segmented
							defaultValue="Newest"
							style={{ marginBottom: 8 }}
							onChange={(value) => {
								setAlignValue(value as Align)
							}}
							options={['Popular', 'Newest']}
						/>
					</div>
					<div className={styles.claim_wrapper}>
						{list.length == 0 && (
							<div className={styles.noData}>No Data</div>
						)}
						{
							list.map(item => {
								return (<div className={clsx(styles.claim_item)}
									key={item.id}
								>
									<div className={clsx(styles.item_left)}>
										<div className={clsx(styles.item_title)}>
											{item.title}
										</div>
										<div className={clsx(styles.claim_tab, styles.item_tab)}>
											{item.topic_names.split(';').map(citem => {
												return (
													<div className={clsx(styles.small, styles.tab_btn)} key={item.id}>{citem}</div>
												)
											})}

										</div>
										<div className={clsx(styles.item_desc, styles.gray)}>
											{item.introduce}
										</div>
										<div className={clsx(styles.item_bottom)}>
											<div className={clsx(styles.item_bottom_wrapper)}>
												<div className={clsx(styles.item_github)}  onClick={() => toUrl(item.url)}>
													<GithubOutlined className={clsx(styles.github)} style={{ fontSize: '24px' }} />
													<span className={clsx(styles.github_name)} >	Go to Github</span>
													<RightOutlined />
												</div>
												<div className={clsx(styles.like, styles.gray)}>

													<div className={clsx(styles.like_item)} >
														<HeartOutlined onClick={() => {
															handleOperate(item, OperateType.Gighub, ActionType.Like, item.is_like, refreshData)
														}} style={{ fontSize: '20px', color: item.is_like ? '#8FC31F' : 'rgba(0,0,0,0.6)' }} />
														<span className={clsx(styles.like_number)} >{item.like_number}</span>
													</div>
													<div className={clsx(styles.like_item)} >
														<LikeOutlined onClick={() => {
															handleOperate(item, OperateType.Gighub, ActionType.Appreciate, item.is_appreciation, refreshData)
														}} style={{ fontSize: '20px', color: item.is_appreciation ? '#8FC31F' : 'rgba(0,0,0,0.6)' }} />
														<span className={clsx(styles.like_number)} >{item.appreciation_number}</span>

													</div>
												</div>


											</div>
											<div className={clsx(styles.item_time)}>
												{moment(item.created_at * 1000).format('YYYY-MM-DD hh:mm')}
											</div>
										</div>
									</div>
									<div className={clsx(styles.item_right)}>
										<img src={item.photo} alt="" />
									</div>
								</div>
								)
							})
						}

					</div>
				</div>
				<AntdPagination align="end" showTotal={(total) => `Total ${total} items`} showQuickJumper showSizeChanger current={curPge} total={listTotal} defaultPageSize={pageSizeArr[0]} pageSizeOptions={pageSizeArr}
					onChange={queryData}
				/>

			</div>
		</div>
	)
}

type WishAlign = 'Popular' | 'Newest';
enum OperateType {
	Gighub = 1,
	WishPool = 2
}
enum ActionType {
	Like = 1,
	Appreciate = 2
}
function handleOperate(item: any, type: OperateType, action: ActionType, is_cancel: number, callback) {


	fetch(baseUrl + '/v1/contributor/github-operate', {
		method: 'post',
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			type: type,
			action_type: action,
			is_cancel: is_cancel,
			client_key: client_key,
			param_id: item.id,
		}
		).toString()


	}).then(response => response.json())
		.then(res => {
			callback && callback()
		})
}
type WishPoolAlign = 'Popular' | 'Newest' | 'Accepted';

const wishRender = (isMobile) => {
	const [messageApi, contextHolder] = message.useMessage();
	const [list, setList] = useState([]);
	const [form] = Form.useForm();
	const [curPge, setCurPage] = useState(1)
	const [pageSize, setPageSize] = useState(pageSizeArr[0])
	const [listTotal, setListTotal] = useState(0)
	const [alignValue, setAlignValue] = React.useState<WishPoolAlign>('Newest');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const showModal = () => {

		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const resetFiled = () => {
		form.resetFields();
	}
	function queryData(page?: number, pageSize?: number) {
		page = page || 1
		pageSize = pageSize || pageSizeArr[0]
		setCurPage(page)
		setPageSize(pageSize)
		const params = {
			page: page,
			size: pageSize,
			order: alignValue == 'Newest' ? '' : alignValue.toLowerCase(),
			client_key: client_key

		}
		const queryParams = new URLSearchParams(params);
		const queryString = queryParams.toString();
		fetch(baseUrl + '/v1/contributor/pull-list?' + queryString, {
			method: 'get',

		}).then(response => response.json())
			.then(res => {
				setList(res.data.data)
				setListTotal(res.data.count)
			})

	}
	const onFinish = (values) => {

		fetch(baseUrl + '/v1/contributor/pull', {
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				...values,
				client_key: client_key
			}
			).toString()
		}).then(response => response.json())
			.then(res => {
				if (res.code == 0) {
					messageApi.open({
						type: 'success',
						content: 'Post Success',
					});
					handleCancel()
					resetFiled()
				} else {
					messageApi.open({
						type: 'error',
						content: 'Post Error',
					});
				}
			})
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	function refreshData() {
		queryData(curPge, pageSize)
	}

	useEffect(() => {
		queryData(1, pageSize)
	}, [alignValue])


	return (
		<div className={clsx(styles.wishpool, styles.section)}>
			{contextHolder}

			<div className={styles.wrapper}>
				<div className={styles.title}>Share Your Ideas - Achieve it - Get Rewarded</div>
				<div className={clsx(styles.add, styles.cursor_pointer)} onClick={showModal}><PlusOutlined />&nbsp;Submit your projects </div>
				<div className={styles.wishpool_container}>

					<div className={styles.item_radio}>
						<Segmented
							defaultValue="Newest"
							style={{ marginBottom: 8 }}
							onChange={(value) => {
								setAlignValue(value as Align)
							}}
							options={['Popular', 'Newest']}
						/>
					</div>
					<div className={styles.wishpool_wrapper}>
						{list.length == 0 && (
							<div className={styles.noData}>No Data</div>
						)}
						{
							list.map(item => {
								return (<div className={clsx(styles.wishpool_item)} key={item.id}>
									<div className={clsx(styles.item_title)}>
										<div>{item.title}</div>
										<div className={clsx(styles.like, styles.gray)}>

											<div className={clsx(styles.like_item)} >
												<HeartOutlined onClick={() => {
													handleOperate(item, OperateType.WishPool, ActionType.Like, item.is_like, refreshData)
												}} style={{ fontSize: '20px', color: item.is_like ? '#8FC31F' : 'rgba(0,0,0,0.6)' }} />
												<span className={clsx(styles.like_number)} >{item.like_number}</span>
											</div>
											<div className={clsx(styles.like_item)} >
												<LikeOutlined onClick={() => {
													handleOperate(item, OperateType.WishPool, ActionType.Appreciate, item.is_appreciation, refreshData)
												}} style={{ fontSize: '20px', color: item.is_appreciation ? '#8FC31F' : 'rgba(0,0,0,0.6)' }} />
												<span className={clsx(styles.like_number)} >{item.appreciation_number}</span>

											</div>
										</div>
									</div>
									<div className={clsx(styles.item_publish)}>
										<div>Publisher: {item.author_name}</div>
										<div className={clsx(styles.item_time, styles.gray)}>
											{moment(item.created_at * 1000).format('YYYY-MM-DD hh:mm')}</div>
									</div>
									<div className={clsx(styles.item_introduce)}>
										<div className={clsx(styles.item_desc, styles.gray)}>
											{item.desc
											}
										</div>
										{
											item.status==2&&(
												<div className={clsx(styles.item_img)}>
													<img src={getImgUrl('accept')} alt="" />
												</div>
											)
										}
									</div>

								</div>
								)
							})
						}

					</div>
				</div>
				<AntdPagination align="end" showTotal={(total) => `Total ${total} items`} showQuickJumper showSizeChanger current={curPge} total={listTotal} defaultPageSize={pageSizeArr[0]} pageSizeOptions={pageSizeArr}
					onChange={queryData}
				/>
				<Modal title="Post a Wish" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
					footer={[

					]}>
					<p></p>
					<br></br>
					<Form
						form={form}

						name="basic"
						labelCol={{
							span: 7,
						}}
						wrapperCol={{
							span: 17,
						}}
						style={{
							maxWidth: 600,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							label="Publisher Name"
							name="name"
							rules={[

							]}
						>
							<Input />
						</Form.Item>


						<Form.Item
							label="Wish Title"
							name="title"
							rules={[
								{
									required: true,
									message: 'Please input your Wish Title!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Description desc"
							name="desc"
							rules={[
								{
									required: true,
									message: 'Please input your Description!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item {...{
							wrapperCol: {
								offset: 8,
								span: 16,
							},
						}}>
							<Space>
								<Button key="back" onClick={handleCancel}>
									Cancel
								</Button>
								<Button htmlType="submit" type="primary" loading={loading}>
									Post Wish
								</Button>

							</Space>
						</Form.Item>
					</Form>
				</Modal>
			</div>
		</div>
	)
}
export default function Ranger(): JSX.Element {
	function getContributorUuid() {
		let uuid = window.localStorage.getItem('wiki_contributor_uuid')
		if (!uuid) {
			uuid = generateUUID()
			window.localStorage.setItem('wiki_contributor_uuid', uuid)
		}
		return uuid
	}
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
	  client_key = getContributorUuid()
		setIsMobile(judgeIsMobile())
	}, [])
	return (
		<BrowserOnly >
			{() => (
				<Layout>
					<TopNav></TopNav>
					<div className={clsx(styles.claim_page, 'claim_page')}>
						{rangerwhyRender(isMobile)}
						{claimRender(isMobile)}
						{wishRender(isMobile)}

          <IndexForm ></IndexForm>
					</div>
				</Layout>
			)}

		</BrowserOnly>

	)
}
