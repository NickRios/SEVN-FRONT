import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header, Ads, Category, NewsTitle } from '../../components';
import { handleGetColor } from '../../utils/getColorCategory';
import { api } from '../../services/api';
import { NewsCategory } from '../../enums'

import { INews } from '../../interfaces/News';

import './styles.css';

const Home = () => {
  const navigate = useNavigate();

  const [newsHighligths, setNewsHighligths] = useState<INews[] | undefined>();
  const [headlineNews, setHeadlineNews] = useState<INews | undefined>();
  const [news, setNews] = useState<INews[] | undefined>();

  const categoriesMap = [
    { key: NewsCategory.ECONOMIA},
    { key: NewsCategory.EDUCACAO},
    { key: NewsCategory.ENTRETERIMENTO},
  ];
  
  const handleGetHighligthsNews = async () => {
    const result = await api.get('/news/highlights');

    const healineNews = result.data.find((news: INews) => news.headline);
    setHeadlineNews(healineNews);

    setNewsHighligths(result.data);
  }

  const handleGetNews = async () => {
    const result = await api.get('/news');
    setNews(result.data)
  }

  const handleRedirect = (id: number) => {
    navigate(`/detail/${id}`);
  }

  const renderNewsItems = (news: INews[], category: NewsCategory, handleGetColor: Function) => (
    news?.filter(item => item.category === category).map(item => (
      <div className='short-news' key={item.id} onClick={() => handleRedirect(item.id)}>
        <div className='indicator-category' style={{backgroundColor: handleGetColor(item.category)}} />
        <NewsTitle title={item?.title} size='15px' />
      </div>
    ))
  );

  useEffect(() => {
    handleGetHighligthsNews();
    handleGetNews();
  }, []);

  return (
    <>
      <Header />
      <div className='home-container'>
        <Ads />
        <section className='home-highligths-section'>
          <div className='home-main-news' onClick={() => handleRedirect(headlineNews?.id!)}>
            <Category categoryName={headlineNews?.category!} />
            <NewsTitle title={headlineNews?.title!} size='58px' />
          </div>
          <div className='home-highligths-news'>
            {newsHighligths?.map(newsHigh => (
              <>
                {(newsHigh.highlights && !newsHigh.headline) && (
                  <div className='news-card' onClick={() => handleRedirect(newsHigh?.id)}>
                    <img className='news-image' src={newsHigh?.main_image} alt="" />
                    <Category categoryName={newsHigh?.category} />
                    <NewsTitle title={newsHigh?.title} size='20px' />
                  </div>
                )}
              </>
            ))}
          </div>
        </section>
        <section className='home-shorts-section'>
        {categoriesMap.map(({ key }) => (
          <div key={key} className='news-container'>
            {renderNewsItems(news!, key, handleGetColor)}
          </div>
        ))}

          
        </section>
      </div>
    </>
  )
}

export { Home }