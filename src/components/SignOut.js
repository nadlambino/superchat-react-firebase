export default function SignOut({ handleSignOut }) {
	return (
		<div className='auth-container'>
			<button onClick={handleSignOut}>Sign Out</button>
		</div>
	);
}
