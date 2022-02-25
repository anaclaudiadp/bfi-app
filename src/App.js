import axios from "axios"
import React, { useEffect, useState } from "react"
import './App.css'

const App = () => {
  const [articles, setUsers] = useState([])

  const fetchData = () => {
    axios.get("https://content-store.explore.bfi.digital/api/articles").then(response => {
      setUsers(response.data.data);
    })
  }
  
  const articles2 = articles.data;
  

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {articles.length > 0 && (
        <article className="articlelist">
          {articles.map(article => (
			
			<div key={article.uuid} className="article_text">
				<img src={article.primary_image.url} />
				
				<h2>{article.title}</h2>
				<br />
				<p>{article.summary}</p>
				<a href={article.url}><button type="button">Read more</button></a>
			</div>
            
          ))}
        </article>
      )}
    </div>
  )
}

export default App 