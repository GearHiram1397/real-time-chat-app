import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import ChatList from './components/ChatList';
import { db } from './firebase';
import { useState, useEffect } from 'react';
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore';

function Home({user, setUser}) {
    const [conversationData, setConversationData] = useState([]);
    const [currentConversation, setCurrentConversation] = useState('');
   /* A hook that is used to fetch data from firebase. */
    useEffect(() => {
        const q = query(collection(db, 'messages'),orderBy('lastUpdated', 'desc'));
      
        const unsubscribe = onSnapshot(q, (snapshot) => {
          /* Creating an empty array. */
            const conversations = []
         
        /* Mapping through the snapshot.docs and pushing the id and data into the conversations array. */
            snapshot.docs.map(doc => (
            conversations.push({
                id: doc.id,
            ...doc.data()
            })
            ))
       /* Setting the state of the conversationData to the conversations array. */
        setConversationData(conversations);
    })
    return () => { unsubscribe();}

    }, [])
  
 /* Returning the wrapper, sidebar, chatlist, and main. */
    return (
    <Wrapper>
      <Sidebar user={user} setUser={setUser} />
      <ChatList 
        currentConversation={currentConversation} 
        setCurrentConversation={setCurrentConversation}
        conversationData={conversationData}
        />
      <Main >
        <ChatView  currentConversation={currentConversation} user={user}/>
      </Main>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  background-color: #282a37;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;	
`
const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`