import { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

export default function Article() {
    //const params = useParams()
    //params.id OR destructure it?
    const { id } = useParams();
    const url = 'http://localhost:3000/articles/' + id;
    const {data: article, isPending, error } = useFetch(url);
    const history = useHistory();

    //fires when component first load, and  when the dependency [error] change 
    //using outside value in useEffect history, has to be declared as depandacy, but doesn't change anything
    useEffect(() => {
        if(error){//redirect
         //history.goBack() //goes back one page

         //redirect user after 2 seconds, so they can see the error
            setTimeout(() => {
                history.push('/');
            }, 2000)        
        }
    }, [error, history])

  return (
    <div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
