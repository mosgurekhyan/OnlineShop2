import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li>
          <h3>Links</h3>
          <a>About Us</a>
          <a>Contact</a>
          <a>Blog</a>
          <a>FAQ's</a>
        </li>
        <li>
          <h3>Poacies</h3>
          <a>Terms & Conditions</a>
          <a>Cookies Policy</a>
          <a>Data Policy</a>
        </li>
        <li>
          <h3>About Shopping Hub</h3>
          <a>Company Info</a>
          <a>Branches</a>
          <a>Store</a>
        </li>
        <li>
          <h3>Contact</h3>
          <a><i className='fas fa-phone'></i> +59345 54789</a>
          <a><i className='fas fa-envelope'></i> info@shophub.com</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer