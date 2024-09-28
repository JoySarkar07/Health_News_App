import { useState , useEffect} from "react"
import Navbar from "./components/Navbar"
import NewsList from "./components/NewsList"
import Loading from "./components/Loading"
import {api_key} from './appsecretes/secretes'

function App() {
   const [newses, setNewses] = useState([])


   useEffect(() => {
    getData()
   }, [])
   
   async function getData() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${api_key}`) 
    const data = await response.json()
    setNewses(data.articles)
   }

  return (
    <>
      <Navbar/>
      <div className="container bg-blue-400 m-auto mt-3 md:w-2/3 p-2 rounded-md h-1/2">
      {newses.length == 0 && <Loading/>}
      {newses.map((news,i)=>{
        return <NewsList key={i} news={news}/>
      })}
      </div>
    </>
  )
}

export default App
