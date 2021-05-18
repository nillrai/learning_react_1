import React from 'react'
import LogoImage from "./logo.png";

export default function Logo() {
    return (
        <div className="logo">
          <img width="103" src={LogoImage} alt="logo" />
        </div>
    )
}
