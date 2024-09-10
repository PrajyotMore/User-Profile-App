import React from 'react'
import {FacebookShareButton, WhatsappShareButton} from "react-share"

const ShareProfile = ({profileUrl}) => {
  return (
    <div>
        <WhatsappShareButton
         url={profileUrl}
         title='check this profile'
        >
            <button>Whatsapp</button>
        </WhatsappShareButton>
        <FacebookShareButton
        url={profileUrl}
        quote="check this profile"
        >
            <button>Facebook</button>
        </FacebookShareButton>
    </div>
  )
}

export default ShareProfile