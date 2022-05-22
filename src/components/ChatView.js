import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

export default function ChatView() {
	const [messages, setMessages] = useState([]);

	const getMessages = async () => {
		const messageQuery = query(collection(db, 'messages'));
		const messageSnapShot = await getDocs(messageQuery);
		const data = [];
		messageSnapShot.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data(),
			});
		});
		setMessages(data);
	};

	useEffect(() => {
		getMessages();
	});

	return (
		<div className='view-container'>
			{messages.map((message) => (
				<div key={message.id}>
					<p>{message.message}</p>
				</div>
			))}
		</div>
	);
}
