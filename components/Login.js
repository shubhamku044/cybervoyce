import { signin, signIn } from 'next-auth/client'
import Image from './Image'
import { auth } from '../firebase'
import firebase from 'firebase'

const styles = {
	button: `px-6 py-3 bg-purple-500 hover:bg-purple-600 duration-200 active:bg-purple-700 shadow hover:shadow-lg hover:scale-105 active:scale-95 rounded-full text-white text-center cursor-pointer flex items-center space-x-2 md:space-x-4 font-semibold md:text-lg`,
}

function Login() {
	const signInWithTwitter = () => {
		const provider = new firebase.auth.TwitterAuthProvider()
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((res) => {
				console.log('success')
				console.log(res)
			})
			.catch((err) => {
				console.log('error')
				console.log(err)
			})
	}

	return (
		<div className="flex flex-col justify-center items-center flex-1 w-100 h-screen space-y-20">
			<Image
				src={'/assets/Alpha-Logo.png'}
				height={400}
				width={400}
				className="object-contain"
				alt="Logo"
			/>
			<div className="flex flex-col space-y-4">
				<button className={styles.button} onClick={signIn}>
					<Image alt="icon" src={'/icons/facebook.svg'} className={'w-6'} />
					<span>Login with Facebook</span>
				</button>
				<button className={styles.button} onClick={signIn}>
					<Image alt="icon" src={'/icons/google.svg'} className={'w-6'} />
					<span>Login with Google</span>
				</button>
				<button className={styles.button} onClick={signIn}>
					<Image alt="icon" src={'/icons/twitter.svg'} className={'w-6'} />
					<span>Login with Twitter</span>
				</button>
				<button className={styles.button} onClick={signin}>
					<Image alt="icon" src={'/icons/github.svg'} className={'w-6'} />
					<span>Login with Github</span>
				</button>
			</div>
		</div>
	)
}

export default Login
