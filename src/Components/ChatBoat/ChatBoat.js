import React from 'react'
import chat from '../../Images/chatbot_-_blip__dribbble_gif_.gif'

export default function ChatBoat() {
    return (
        <div className='chat-main-outline'>
            <div className='gif-img-div'>
                <img src={chat} className='img-chat' alt='chat-bot' style={{ background: 'transparent' }} />
            </div>
        </div>
    )
}
