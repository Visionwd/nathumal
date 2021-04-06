import React from 'react'

function FooterSocialIcon({link,icon}) {
    return (
      <a
        href={link}
        style={{
          width: "3rem",
          fontSize: "2rem",
          color: "#8c370e",
        }}
        className=" ml-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class={icon}></i>
      </a>
    )
}

export default FooterSocialIcon
