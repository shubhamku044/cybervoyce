import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Login from '../components/Login'
import { useSession } from 'next-auth/client'
import { db } from '../firebase'
import { useEffect, useState } from 'react'
import WelcomeModal from '../components/WelcomeModal'

export default function Home() {
	const [posts, setPosts] = useState([])
	const [session, loadingSession] = useSession()

	const loadPosts = async () => {
		if (session) {
			const posts = await db
				.collection('posts')
				.orderBy('timestamp', 'desc')
				.get()
			const docs = posts.docs.map((post) => ({
				id: post.id,
				...post.data(),
				timestamp: null,
			}))
			setPosts(docs)
		}
	}

	useEffect(() => {
		loadPosts()
	}, [session])

	return (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Head>
				<title>CyberVoyce</title>
			</Head>
			{!session ? (
				<main className="h-screen items-center">
					<Login />
				</main>
			) : (
				<main>
					<WelcomeModal />
					<Header />
					<div className="flex">
						<Sidebar />
						<Feed posts={posts} />
						<Widgets />
					</div>
				</main>
			)}
		</div>
	)
}
