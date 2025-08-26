import { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Loading from './components/Loading';
import NewsFilter from './components/NewsFilter';
import {api_key} from './appsecretes/secretes'

const App = () => {
  const [newses, setNewses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getData()
  }, [])
  
  async function getData() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${api_key}`) 
    const data = await response.json()
    console.log(data.articles);
    setNewses(data.articles)
    setLoading(false);
  }

  const filteredNews = newses.filter(news => {
    const matchesCategory = filter === 'all' || news.category === filter;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          news.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Latest Health News</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings around the world
          </p>
        </div>

        <NewsFilter 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
          {loading ? (
            <Loading />
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No news found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredNews.map((news, i) => (
                <NewsList key={i} news={news} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 News Aggregator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;