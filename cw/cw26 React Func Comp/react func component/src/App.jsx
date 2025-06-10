import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Post from './Post';
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [postId, setPostId] = useState(1);
  const [postTitle, setPostTitle] = useState('Initial Title');
  const [post, setPost] = useState(null)
  useEffect(()=>{
    // console.log('App component mounted or updated');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response=>response.json())
      .then(data=>setPost(data))
      .catch(err=>console.error(err));

    return ()=>{
      // console.log('App component unmounted')
    }
  }, [postId]); // [] - start onece time, when compon is mounted
  // [] - usually used for fetch call
  // [count] - starting cb when dependencies in [] will change
  const inputRef = useRef(null)
  const cachedCb = useCallback(()=>{
    console.log('useCallback executed');
  }, [postId]); // use if we have large calculations
  const memoRext = useMemo(()=>{
    // console.log('useMemo executed');
    return 'Memoized value based on postId:' + postId;
  }, [postId]);
  function handlePostFetch() {
    console.log(inputRef);
    const id = inputRef.current.value;
    if (id) {
      setPostId(Number(id))
    }else{
      console.wsrn('Please enter a valid post ID')
    }
  }

  return (
    <>
      <h1>React Function Component <br />
          {postTitle}
      </h1>
      
      <h2>{memoRext}</h2>
      <div className="card">
        <input type='number' ref={inputRef}/>
        <button onClick={handlePostFetch}>
          Fetch post with ID
        </button>
        <button onClick={()=>setPostTitle('Updated Title')}>
          Change title
        </button>
      </div>
      {post && <Post post={post}></Post>}
      
    </>
  )
}

export default App
