import React from 'react';
import './Chat.css';
import 'react-chat-elements/dist/main.css';
import { StreamChat } from 'stream-chat';

import  {ChatEngine } from 'react-chat-engine';



function Chat() {
    
    return (
        <ChatEngine
            
            projectID = "89083eb4-71b4-44a5-9f17-fcb51f4e2612"
            userName= "aakash"
            userSecret="123123"
            
          />
    )
}

export default Chat
