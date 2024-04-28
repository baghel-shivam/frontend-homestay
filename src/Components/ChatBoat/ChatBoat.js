import React, { useState } from 'react'
import chat from '../../Images/chatbot_-_blip__dribbble_gif_.gif'
import FormChatBot from './FormChatBot'

export default function ChatBoat() {
 
    const [showForm, setShowForm] = useState(false)


    return (
        <>
            {showForm &&
                <FormChatBot setShowForm={setShowForm} />
            }
            <div className='chat-main-outline'>
                <div className='gif-img-div' onClick={() => setShowForm(!showForm)} >
                    <img src={chat} className='img-chat' alt='chat-bot' style={{ background: 'transparent' }} />
                </div>
            </div>
        </>
    )
}
