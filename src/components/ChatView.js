import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

export default function ChatView() {
	const [messages, setMessages] = useState([]);
	const mockData = [
		{ id: '73KJaYp3ZEaid4MD3sun', createdAt: null, message: '' },
		{ id: 'E8ikxTf9ePOC2NfGYhpd', createdAt: null, message: 'dasda' },
		{
			id: 'F1MieZt2OGl9fuGblaZi',
			createdAt: null,
			message: 'rwerwerwe',
		},
		{ id: 'KUpjMoFc8G4JCV1sDpPx', message: 'asdas', createdAt: null },
		{
			id: 'NBkgv5d1mkg79LJN5Jm3',
			createdAt: null,
			message: 'patarek?',
		},
		{ id: 'Q0JW10blT0b60jLoBHvD', createdAt: null, message: 'as' },
		{ id: 'ToBDRBcz9wscx0zrrh0f', createdAt: null, message: 'sdas' },
		{ id: 'UOXNrgvMxhK7a1PnQNW1', createdAt: null, message: '' },
		{ id: 'VMpNaVvKuFnCaBo0oKJc', createdAt: null, message: '' },
		{ id: 'cSRk8DO9W9tO8asWiPMo', createdAt: null, message: 'hello' },
		{ id: 'gqqE4cS3M7UkZ2WyXHRF', createdAt: null, message: '' },
		{ id: 'kDDdO3ejzK0ryoWsQTgf', message: 'asdad', createdAt: null },
		{ id: 'kR7Xph7uyXoxCP17Hax2', message: '', createdAt: null },
		{ id: 'lH5TQJEQVXA30uHS5wGC', message: 'ewew', createdAt: null },
		{ id: 'lI1svBLb4QJ81Jzb9JHL', message: 'dasd', createdAt: null },
		{ id: 'pGPLTZxwBljXykb48rM2', message: '', createdAt: null },
		{ id: 'rgVAalKwqxp9Sj9Gx76N', message: 'asda', createdAt: null },
		{ id: 'rkLvhyqiurUvz7sWEFYL', createdAt: null, message: '' },
		{ id: 'ukfiMPfHP34CGR40o1tb', createdAt: null, message: ' ' },
		{ id: 'uu0k4ssMeZqcLkT1wWrV', createdAt: null, message: '' },
		{ id: 'vTdXYM9EVUbj9ns3LVwx', message: '', createdAt: null },
		{ id: 'vwLBYeJeOUUpNgdUrirl', message: 'rwerw', createdAt: null },
		{ id: 'yarvMOVFUaAY4C6B58lV', message: 'yow', createdAt: null },
	];

	const getMessages = async () => {
		setMessages(mockData);
		return;
		const messageQuery = query(collection(db, 'messages'));
		const messageSnapShot = await getDocs(messageQuery);
		const data = [];
		messageSnapShot.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data(),
			});
		});
		console.log(data);
		setMessages(data);
	};

	useEffect(() => {
		getMessages();
	}, []);

	return (
		<div className='view-container'>
			{messages.map((message) => (
				<div className='message-container' key={message.id}>
					<p>{message.message}</p>
				</div>
			))}
		</div>
	);
}
