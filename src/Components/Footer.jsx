import React from 'react'

const Footer = () => {
  return (
    <footer className='footer footerDiv'>        
        <p>Powered by</p>
        <img src="img/DH.png" alt='DH-logo' />
        <div className={"right-part"}>
            <img src="img/ico-facebook.png" alt='Facebook-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
            <img src="img/ico-instagram.png" alt='Instagram-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
            <img src="img/ico-tiktok.png" alt='Tiktok-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
            <img src="img/ico-whatsapp.png" alt='Whatsapp-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
        </div>
    </footer>
  )
}

export default Footer
