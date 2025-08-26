const NewsList = ({ news }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="md:w-1/4">
        <img 
          className="w-full h-48 md:h-40 object-cover rounded-lg" 
          src={news.urlToImage || 'https://cdn.dribbble.com/users/71890/screenshots/2368143/health_news.jpg'} 
          alt={news.title} 
          onError={(e) => {
            e.target.src = 'https://cdn.dribbble.com/users/71890/screenshots/2368143/health_news.jpg';
          }}
        />
      </div>
      
      <div className="md:w-3/4 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {news.category || 'general'}
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            {news.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {news.description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <a 
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center" 
            href={news.url}
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <p className="text-sm text-gray-500">
            Published on {formatDate(news.publishedAt)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default NewsList;