import { useState } from 'react'
import { Tweet } from './components/Tweet'
import './App.css';
import AppRoutes from './pages/AppRoutes';

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3"
  ]);
  const [newTweet, setNewtweet] = useState("");

  function createTweet () {
    setTweets([...tweets, newTweet]);
  }

  return (
    <div>
      <AppRoutes/>
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
      })}

      <input type="text" value={newTweet} onChange={event => setNewtweet(event.target.value)}/>
      <button style={{
        backgroundColor: '#8257e6',
        border: 0,
        padding: '6px 12px',
        color: '#fff',
      }} 
        onClick={createTweet}>Adicionar Tweet
      </button>
    </div>
  )
}

export default App
