import React, { useState, type MouseEventHandler } from 'react'

import style from './styles/index.module.css'

import { ApiService } from './services/api-service'

import type { Job } from './types'

import { PAGE_SIZE } from './constants'

type PostItemProps = {
	post: Job
}

const PostItem = ({ post }: PostItemProps) => {
	return (
		<div className={style.post}>
			<h2 className={style.postTitle}>{post.title}</h2>
			<p className={style.postContent}>
				{post.by} <span>{new Date(Number(post.time) * 1000).toLocaleString()}</span>
			</p>
		</div>
	)
}

const Post = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [jobs, setJobs] = React.useState<Job[]>([])
	const [jobIds, setJobIds] = React.useState<number[]>([])
	const [page, setPage] = useState<number>(0)

	React.useEffect(() => {
		console.log('fetchIdJob')
		fetchIdJobs()
	}, [])

	React.useEffect(() => {
		if (jobIds.length === 0) return;
		console.log('fetchJobs')

		fetchJobs(page)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [jobIds, page])

	const fetchJobs = async (currPage: number) => {
		const start = currPage * PAGE_SIZE
		const end = start + PAGE_SIZE
		const listIds = Object.values(jobIds).slice(start, end)
		setIsLoading(true)
		const post = listIds.map(async id => {
			const jobService = new ApiService<Job>('https://hacker-news.firebaseio.com/v0', `item/${id}.json`)
			const response = await jobService.get()
			return response.data
		})

		const currentJob = await Promise.all(post ?? [])
		const validJobs = currentJob.filter((job): job is Job => job !== null)
		setJobs(prev => [...prev, ...validJobs])
		setIsLoading(false)
	}

	const fetchIdJobs = async () => {
		const jobService = new ApiService<{ data: number[]; success: boolean }>(
			'https://hacker-news.firebaseio.com/v0',
			'/jobstories.json',
		)
		const { data } = await jobService.get()
		if (Array.isArray(data)) {
			setJobIds(data)
		}
	}

	const handleChangePage: MouseEventHandler<HTMLButtonElement> = () => {
		setPage(prev => prev + 1)
	}

	return (
		<>
			<div className={style.jobs}>
				<h1 className={style.title}>Job Board</h1>
				{isLoading && jobs.length === 0 ? (
					<p>Loading...</p>
				) : (
					<>
						{jobs.map((post, index) => (
							<PostItem key={index} post={post} />
						))}
						{(page + 1) * PAGE_SIZE < jobIds.length && (
							<button className={style.btn} type="button" onClick={handleChangePage}>
								{isLoading ? 'Loading...' : 'Load more jobs'}
							</button>
						)}
					</>
				)}
			</div>
		</>
	)
}

export default Post
