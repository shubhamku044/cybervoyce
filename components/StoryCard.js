import Image from './Image'

function StoryCard({ name, src, profile, ...rest }) {
	return (
		<div
			className="cursor-pointer overflow-x py-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
			{...rest}
		>
			<div>
				{/* <Image
					className="absolute object-cover opacity-0 lg:opacity-100 rounded-full z-50 top-10"
					src={profile}
					width={36}
					height={36}
					objectFit="cover"
					alt=""
				/> */}
				<img
					alt="profile picture"
					src={profile}
					className={
						'h-10 w-10 absolute hidden lg:block top-6 left-2 z-10 rounded-full'
					}
				/>
			</div>
			{/* <Image
				// className="object-cover h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 brightness-75 rounded-full lg:rounded-3xl"
				className="brightness-75 rounded-full lg:rounded-3xl relative"
				src={src}
				layout={'fill'}
				objectFit={'cover'}
				alt=""
			/> */}
			<img
				src={src}
				className="h-32 sm:h-40 object-cover rounded-xl w-24 md:h-56 lg:h-60 md:w-28 lg:w-36 brightness-75"
				alt={'Post'}
			/>
			<p className="absolute opacity-0 object-cover lg:opacity-100 bottom-4 left-2 text-white text-sm font-bold truncate">
				{name}
			</p>
		</div>
	)
}

export default StoryCard
