import { NewsCategory } from '../enums'


const handleGetColor = (category: NewsCategory): string | undefined => {
  const color = {
    [NewsCategory.ECONOMIA]: '#FF2D2D',
    [NewsCategory.EDUCACAO]: '#24538B',
    [NewsCategory.ENTRETERIMENTO]: '#248B28',
  }
  return color[category];
}

export { handleGetColor }