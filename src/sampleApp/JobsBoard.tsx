import React, { type ReactNode } from 'react'

import style from './styles/index.module.css'

import { JobService } from './services/job-service'

type PostItemProps = {
	title: string
	author: string
	date: ReactNode
}

const PostItem = ({ title, author, date }: PostItemProps) => {
	return (
		<div className={style.post}>
			<h2 className={style.postTitle}>{title}</h2>
			<p className={style.postContent}>
				{author} {date}
			</p>
		</div>
	)
}

const Post = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)

	const fetchIdJobs =  () => {
		//
	}

	React.useEffect(() => {}, [])

	return (
		<>
			<div className={style.jobs}>
				<h1>Job Board</h1>
				<PostItem />
			</div>
		</>
	)
}

export default Post
