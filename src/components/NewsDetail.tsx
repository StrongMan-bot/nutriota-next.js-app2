import React from 'react';
import { useRouter } from 'next/router';
import NewsDetail1 from './NewsDetail1';
import NewsDetail2 from './NewsDetail2';
import NewsDetail3 from './NewsDetail3';
import NewsDetail4 from './NewsDetail4';
import NewsDetail5 from './NewsDetail5';
import NewsDetail6 from './NewsDetail6';

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const newsId = parseInt(id as string);

  // Route to the appropriate news detail component
  switch (newsId) {
    case 1:
      return <NewsDetail1 />;
    case 2:
      return <NewsDetail2 />;
    case 3:
      return <NewsDetail3 />;
    case 4:
      return <NewsDetail4 />;
    case 5:
      return <NewsDetail5 />;
    case 6:
      return <NewsDetail6 />;
    default:
      return <NewsDetail1 />; // Default fallback
  }
};

export default NewsDetail;