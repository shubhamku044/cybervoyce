import React from 'react'
import StoryCard from './StoryCard'

const stories = [
	{
		name: 'Elon Musk',
		src: 'https://links.papareact.com/4zn',
		profile: 'https://links.papareact.com/kxk',
	},
	{
		name: 'Jeff Bezoz',
		src: 'https://links.papareact.com/k2j',
		profile: '/assets/jeff_bezoz.jpg',
	},
	{
		name: 'Mark Zuckerberg',
		src: 'https://links.papareact.com/xql',
		profile: 'https://links.papareact.com/snf',
	},
	{
		name: 'Bill Gates',
		src: 'https://links.papareact.com/4u4',
		profile: 'https://links.papareact.com/zvy',
	},
]

function Stories() {
	return (
		<div className="flex flex-row justify-around space-x-2 sm:space-x-0">
			{stories.map((story, idx) => (
				<StoryCard
					key={idx}
					name={story.name}
					src={story.src}
					profile={story.profile}
				/>
			))}
		</div>
	)
}

export default Stories
