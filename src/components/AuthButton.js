export default function AuthButton({ text, handleAuth }) {
	return (
        <button className="auth-btn" onClick={handleAuth}>{text}</button>
	);
}
