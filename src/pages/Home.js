import { useFetch } from '../hooks/useFetch'

//style
import './Home.css'

export default function Home() {

  const {data: articles, isPending, error} = useFetch('http://localhost:3000/articles')

  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      
      {articles && articles.map((atricle) => (
       <div key={atricle.id} className="card">
         <h3>{atricle.title}</h3>
         <p>{atricle.author}</p>
       </div>

      ))}
    </div>
  )
}
