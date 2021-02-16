import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)  // div için
  const linksRef = useRef(null)   // unordered list için

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)} >
          <FaBars />
        </button>
      </div>
      {/* <div className={`links-container ${showLinks ? 'show-container' : null}`}> */}
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map(link => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(socialItem => {
          const { id, url, icon } = socialItem
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
        {/* <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li> */}
      </ul>
    </div>
  </nav>
}

export default Navbar
