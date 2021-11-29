import React from 'react'

import './Preview.css'

export default function Preview({ title, subtitle, font, align, text }) {
  return (
    <div className={`preview ${font}`} style={{ textAlign: align }}>
      <h1>title {title}</h1>
      <h3> subtitle {subtitle}</h3>
      <p>text{text}</p>
    </div>
  )
}
