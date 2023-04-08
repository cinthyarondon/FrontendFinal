import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', width: '100%', padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Powered by</p>
        <img src="img/DH.png" alt='DH-logo' />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://www.facebook.com" target="_blank"><img src="img/ico-facebook.png" alt='Facebook-logo' className="footer-icon" /></a>
            <a href="https://www.instagram.com" target="_blank"><img src="img/ico-instagram.png" alt='Instagram-logo' className="footer-icon" /></a>
            <a href="https://www.tiktok.com" target="_blank"><img src="img/ico-tiktok.png" alt='Tiktok-logo' className="footer-icon" /></a>
            <a href="https://www.whatsapp.com" target="_blank"><img src="img/ico-whatsapp.png" alt='Whatsapp-logo' className="footer-icon" /></a>
        </div>
    </footer>
  )
}

export default Footer
