import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';

export default function ChatForm() {
	const [chat, setChat] = useState('');

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		await addDoc(collection(db, 'messages'), {
			message: chat,
			createdAt: Timestamp.now(),
		});
		setChat('');
	};

	const handleFormChange = (event) => {
		setChat(event.target.value);
	};

	return (
		<div className='chat-form-container'>
			<form onSubmit={handleFormSubmit}>
				<textarea value={chat} onChange={handleFormChange} />
				<button type='submit'>Send</button>
			</form>
		</div>
	);
}
