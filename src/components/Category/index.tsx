import { NewsCategory } from '../../enums'
import './styles.css'

interface ICategoryProps {
  categoryName: NewsCategory;
}

const Category: React.FC<ICategoryProps> = ({ categoryName }) => {
  const handleGetColor = (category: NewsCategory): string | undefined => {
    const color = {
      [NewsCategory.ECONOMIA]: '#FF2D2D',
      [NewsCategory.EDUCACAO]: '#24538B',
      [NewsCategory.ENTRETERIMENTO]: '#248B28',
    }
    return color[category];
  }

  return (
    <span style={{color: handleGetColor(categoryName)}} className="category">{categoryName}</span>
  )

}

export { Category }