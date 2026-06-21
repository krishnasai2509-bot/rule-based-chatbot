import { useState } from 'react'
import { ChatInput} from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import './App.css'

 
       
function App(){
               const [ chatMessages, setChatMessages ] = useState([{
          message:' hey chatbot',
          sender: 'user',
          id:'id1'
        }, { 
          message: 'How can i help you',
          sender:'robot',
          id:'id2'
        },{ 
          message:'whats today s date',
          sender:'user',
          id:'id3'
        },{ 
          message:'feb 28!',
          sender:'robot',
          id:'id4'
        },]);


        return (
            <div className="app-container">    
               <ChatMessages
                  chatMessages={chatMessages}
               />
               <ChatInput
                  chatMessages={chatMessages}
                  setChatMessages={setChatMessages}
               />
             </div>  
        );
       }
       
export default App
 