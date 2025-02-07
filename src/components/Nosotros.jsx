import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Somos una pequeña empresa que recientemente ofrecemos a toda la comunidad productos relacionados con la ropa. Desde remeras hasta pantalones.</p>
        <h2>Nuestro equipo</h2>
        <p>Nuestro equipo está conformado por una familia.</p>
    </div>
  )
}

export default Nosotros
