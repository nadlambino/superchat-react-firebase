import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';
import './styles/app.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatView from './components/ChatView';
import ChatForm from './components/ChatForm';

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
				const errorMessage = error.message;
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
				<SignIn handleSignIn={handleSignIn} />
			) : (
				<div>
					<SignOut handleSignOut={handleSignOut} />
					<ChatView />
					<ChatForm />
				</div>
			)}
		</div>
	);
}

export default App;
