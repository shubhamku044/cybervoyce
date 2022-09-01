import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import styles from '../styles/welcomeModal.module.css'
import { XIcon } from '@heroicons/react/solid'

const WelcomeModal = () => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={() => setIsOpen(false)} className="relative z-50">
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div
						className="fixed inset-0 backdrop-blur-sm bg-black/40"
						aria-hidden="true"
					/>
				</Transition.Child>
				<div className="fixed inset-0 flex items-center justify-center p-4">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="flex items-center relative justify-center bg-white max-w-md px-4 py-8 rounded-md shadow-lg">
							<Dialog.Panel>
								<Dialog.Title
									as={'h2'}
									className="flex items-center justify-center"
								>
									<img
										src="/assets/Alpha-Logo.png"
										alt="Alpha logo"
										className="h-16"
									/>
								</Dialog.Title>
								<div className="mt-4 space-y-4">
									<div className="text-center">
										<h4 className="text-xl font-bold">Welcome to our Alpha!</h4>
										<p className="text-sm text-gray-700">
											We are excited your here. Our page is still under
											construction so please wear a hard hat when using our
											platform. We are continously working on CyberVoyce,
											getting it ready for the open Beta. Only whitelisted
											members get access to this page. Feel free to post on
											here, and keep checking in for changes!
										</p>
									</div>
									<div className="w-5/6 h-1 bg-purple-500 rounded-md flex mx-auto" />
									<div className="space-y-1">
										<h6 className="text-base font-semibold">
											Quality of Life Changes/Bug Fixes*
										</h6>
										<ul
											className={`text-sm ml-2 text-gray-700 ${styles.qualityLife}`}
										>
											<li>
												Login button was distorted. Would not contain words
												displayed correctly within the button causing an oval
												shape instead of a horizontal pill shape. Fixed.
											</li>
											<li>New Logins. Google and Twitter logins added.</li>
											<li>
												Phone view dimensions not optimized. Small movement when
												scrolling. Post text box not contained in phone view.
												Fixed
											</li>
											<li>
												Posting. When posting a picture the picture would fall
												out of the parent container, and cover half of the
												header of the next post.
											</li>
											<li>
												Pop up added. Pop up added to display a wecome message
												and quality of life/bug fixes.
											</li>
										</ul>
									</div>
								</div>
								<XIcon
									onClick={() => setIsOpen(false)}
									className="absolute top-2 right-2 h-8 text-purple-500 cursor-pointer"
								/>
							</Dialog.Panel>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}

export default WelcomeModal
