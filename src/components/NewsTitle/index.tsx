import './styles.css';

interface IHeadLineTitleProps {
  title: string;
  size: string;
}

const NewsTitle: React.FC<IHeadLineTitleProps> = ({ title, size }) => {
  return (
    <h1 style={{fontSize: size}} className='news-title'>{title}</h1>
  )
}

export { NewsTitle }