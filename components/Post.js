import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import Image from './Image'

function Post({ name, message, email, postImage, image, timestamp }) {
	return (
		<div className="flex flex-col">
			<div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
				<div className="flex items-center space-x-2">
					<Image
						className="rounded-full"
						layout="fill"
						src={image}
						width={40}
						height={20}
						alt={name}
					/>
					<div>
						<p className="font-medium">{name}</p>
						{timestamp ? (
							<p className="text-xs text-gray-400">
								{new Date(timestamp?.toDate()).toLocaleString()}
							</p>
						) : (
							<p className="text-xs text-gray-400">Loading</p>
						)}
					</div>
				</div>

				<p className="pt-4">{message}</p>
			</div>
			{postImage && (
				<div className="h-56 w-full relative md:h-96 bg-white">
					<img
						src={postImage}
						alt={name}
						className="h-full w-full object-cover"
					/>
				</div>
			)}

			{/* Post Footer */}
			<div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
				<div className="inputIcon p-3 rounded-none rounded-bl-2xl">
					<ThumbUpIcon className="h-4" />
					<p className="text-xs sm:text-base">Like</p>
				</div>

				<div className="inputIcon p-3 rounded-none">
					<ChatAltIcon className="h-4" />
					<p className="text-xs sm:text-base">Comment</p>
				</div>

				<div className="inputIcon p-3 rounded-none rounded-br-2xl">
					<ShareIcon className="h-4" />
					<p className="text-xs sm:text-base">Share</p>
				</div>
			</div>
		</div>
	)
}

export default Post
