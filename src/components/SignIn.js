export default function SignIn({ handleSignIn }) {
	return (
		<div className='auth-container'>
			<button onClick={handleSignIn}>Sign In with Google</button>
		</div>
	);
}
