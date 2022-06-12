export default function AuthButton({ text, handleAuth }) {
	return (
		<button type='button' className='auth-btn' onClick={handleAuth}>
			{text}
		</button>
	);
}
