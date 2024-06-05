import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

import './styles.css'

interface IProps {
  onClickButton?: () => void
}

const Header = ({ onClickButton }:IProps ) => {
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
        <button onClick={onClickButton}>
          <FaArrowLeft color='#ffffff' size={24} />
        </button>
      )}
      <h2>SEVN NEWS</h2>
    </header>
  )
}

export { Header }