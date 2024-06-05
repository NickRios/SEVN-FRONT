import { NewsCategory } from '../../enums'
import { handleGetColor } from '../../utils/getColorCategory'
import './styles.css'

interface ICategoryProps {
  categoryName: NewsCategory;
}

const Category: React.FC<ICategoryProps> = ({ categoryName }) => {
  return (
    <span style={{color: handleGetColor(categoryName)}} className="category">{categoryName}</span>
  )

}

export { Category }