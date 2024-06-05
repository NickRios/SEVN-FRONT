import { useEffect, useState } from 'react';
import moment from 'moment'

import { Header, Ads, Category, NewsTitle } from '../../components';

import { INews } from '../../interfaces/News';
import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

import './styles.css'

const NewsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [news, setNews] = useState<INews>();
  
  const handleGetNewsDetail = async (id: number) => {
    const result = await api.get(`/news/${id}`);
    setNews(result.data)
  }

  useEffect(() => {
    handleGetNewsDetail(Number(params.id)!)
  }, [params])

  return (
    <>
      <Header onClickButton={() => navigate('/')} />
      <div className='detail-container'>
        <Category categoryName={news?.category!} />

        <NewsTitle title={news?.title!} size='58px' />

        <h3 className='detail-subtitle'>{news?.sub_title}</h3>

        <p className='detail-news-date'>{`${moment(news?.news_data).format('DD/MM/YYYY [as] HH:mm')}, Por: ${news?.author}`}</p>
        
        <div className='detail-ads'>
          <Ads />
        </div>
        <div dangerouslySetInnerHTML={{ __html: news?.body! }}></div>
      </div>
    </>
  )
}

export { NewsDetail }