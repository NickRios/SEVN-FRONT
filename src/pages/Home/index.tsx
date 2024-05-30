import { useEffect, useState } from 'react';

import { Header, Ads, Category, NewsTitle } from '../../components';
import { api } from '../../services/api';

import { INews } from '../../interfaces/News';

import './styles.css';

const Home = () => {
  const [newsHighligths, setNewsHighligths] = useState<INews[] | undefined>();
  const [headlineNews, setHeadlineNews] = useState<INews | undefined>();

  const handleGetHighligthsNews = async () => {
    const result = await api.get('/news/highlights');

    const healineNews = result.data.find((news: INews) => news.headline);
    setHeadlineNews(healineNews);

    setNewsHighligths(result.data);
  }

  useEffect(() => {
    handleGetHighligthsNews();
  }, []);

  return (
    <>
      <Header />
      <div className='home-container'>
        <Ads />
        <section className='home-section'>
          <div className='home-main-news'>
            <Category categoryName={headlineNews?.category!} />
            <NewsTitle title={headlineNews?.title!} size='58px' />
          </div>
          <div className='home-highligths-news'>
            {newsHighligths?.map(newsHigh => (
              <>
                {(newsHigh.highlights && !newsHigh.headline) && (
                  <div className='news-card'>
                    <img className='news-image' src={newsHigh?.main_image} alt="" />
                    <Category categoryName={newsHigh?.category} />
                    <NewsTitle title={newsHigh?.title} size='20px' />
                  </div>
                )}
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export { Home }