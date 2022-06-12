import './styles/app.css';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';
import ChatView from './components/ChatView';
import ChatForm from './components/ChatForm';
import AuthButton from './components/AuthButton';

function App() {
	const [user, setUser] = useState({});

	const handleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				setUser({});
			});
	};

	const handleSignOut = async () => {
		await signOut(auth).then(() => {
			setUser({});
		});
	};

	const isUserSignedIn = () => Object.keys(user).length;

	return (
		<div className='app'>
			{isUserSignedIn() === 0 ? (
				<AuthButton text='Enter Chat Room' handleAuth={handleSignIn} />
			) : (
				<div className='chat-app'>
					<AuthButton
						text='Leave Chat Room'
						handleAuth={handleSignOut}
					/>
					<ChatView />
					<ChatForm />
				</div>
			)}
		</div>
	);
}

export default App;
