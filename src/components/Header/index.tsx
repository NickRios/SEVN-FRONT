import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

import './styles.css'

const Header = () => {
  const location = useLocation();

  const [showBackButton, setShowBackButton] = useState(false);

  const handleShowBackButton = () => {
    const hasDetail = location.pathname.includes('detail');
    setShowBackButton(hasDetail)
  }

  useEffect(() => {
    handleShowBackButton();
  }, [showBackButton])
  
  return (
    <header>
      {showBackButton && (
        <button>
          <FaArrowLeft color='#ffffff' size={24} />
        </button>
      )}
      <h2>SEVN NEWS</h2>
    </header>
  )
}

export { Header }