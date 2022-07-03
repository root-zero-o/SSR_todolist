import React from 'react'

const DarkMode = () => {

    const onLightMode = () => {
        document.documentElement.classList.remove("dark")
    }

    const onDarkMode = () => {
        document.documentElement.classList.add("dark")
    }

  return (
    <div className="absolute top-10 right-10">
        <button onClick={onLightMode}className="bg-green font-serif p-4 rounded-lg mr-5 text-white">light</button>
        <button onClick={onDarkMode} className="bg-green font-serif p-4 rounded-lg text-white">dark</button>
    </div>
  )
}

export default DarkMode;