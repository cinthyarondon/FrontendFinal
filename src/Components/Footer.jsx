import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' style={{ backgroundColor: '#333', color: '#fff', width: '100%', padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Powered by</p>
        <img src="img/DH.png" alt='DH-logo' />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="img/ico-facebook.png" alt='Facebook-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
            <img src="img/ico-instagram.png" alt='Instagram-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
            <img src="img/ico-tiktok.png" alt='Tiktok-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
            <img src="img/ico-whatsapp.png" alt='Whatsapp-logo' style={{ width: '2vw', height: '2vw', margin: '0 1em' }} />
        </div>
    </footer>
  )
}

export default Footer
