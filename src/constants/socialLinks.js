import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaVk } from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.facebook.com/profile.php?id=100040615362252">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://vk.com/magamedov71">
          <FaVk className="social-icon vk-icon"></FaVk>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/blurryface7_7_7/">
          <FaInstagramSquare className="social-icon instagram-icon"></FaInstagramSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
