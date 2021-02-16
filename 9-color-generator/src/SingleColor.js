import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',');
  //const hex = rgbToHex(...rgb);   // Bunu kullanarak da hex colors a ulaşabilirdik.
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {  // 3 sn sonra alert false olacak yazı kaybolacak
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)  // timeout zamanını temizlemek içinyani başa sarmak için
  }, [alert])

  return (
    <article className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)  // alert i true yapıp kopyalandı yazısını çıkartmak için
        navigator.clipboard.writeText(hexValue)   // hexValue yi panoya kopyalama işlemi için
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
