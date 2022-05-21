import './styles/App.css';
import ChatForm from './components/ChatForm';
import ChatView from './components/ChatView';

function App() {
	return (
		<div className='App'>
			<ChatView />
			<ChatForm />
		</div>
	);
}

export default App;
