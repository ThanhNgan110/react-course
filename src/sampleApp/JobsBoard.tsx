import React, { useState } from 'react'

import style from './styles/index.module.css'

import { ApiService } from './services/api-service'

import type { Job } from './types'

import { PAGE_SIZE } from './constants'

type PostItemProps = {
	post: Job
}

const PostItem = ({ post }: PostItemProps) => {
	const { data } = post

	return (
		<div className={style.post}>
			<h2 className={style.postTitle}>{data.title}</h2>
			<p className={style.postContent}>
				{data.by} <span>{new Date(Number(data.time) * 1000).toLocaleString()}</span>
			</p>
		</div>
	)
}

const Post = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [jobs, setJobs] = React.useState<Job[]>([])
	const [jobId, setJobId] = React.useState(null)
	const [page, setPage] = useState(0)

	React.useEffect(() => {
		fetchJobs(page)
	}, [page])

	const fetchJobs = async (currPage: number) => {
		setIsLoading(true)
		const idJobs = await fetchIdJobs(currPage)
		const posts = idJobs?.map(id => {
			const jobService = new ApiService<Job>('https://hacker-news.firebaseio.com/v0', `item/${id}.json`)
			const postDetail = jobService.get()
			return postDetail
		})

		const jobs = await Promise.all(posts)
		setJobs(jobs)
		setIsLoading(false)
	}

	const fetchIdJobs = async (currPage: number) => {
		const jobService = new ApiService<{ data: number[]; success: boolean }>(
			'https://hacker-news.firebaseio.com/v0',
			'/jobstories.json',
		)
		const { data } = await jobService.get()
		console.log(data)
		const start = currPage * PAGE_SIZE
		const end = start + PAGE_SIZE
		let listIds = []
		if (data) {
			listIds = Object.values(data).slice(start, end)
			return listIds
		}
	}

	return (
		<>
			<div className={style.jobs}>
				<h1 className={style.title}>Job Board</h1>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<>
						{jobs.map((post, index) => (
							<PostItem key={index} post={post} />
						))}
						<button type="button" onClick={() => setPage(page + 1)}>
							Load more jobs
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default Post
