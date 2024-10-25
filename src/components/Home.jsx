import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { setPosts } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from './Loading';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Errorboundary';

const Card = lazy(()=>(import ('./Card')))

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts());
  }, []);

  const posts = useSelector((state) => state.total_posts);
  
 

  return (
    <div className='body'>
      <div>
        <h2>Social Media For Travellers</h2>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text" placeholder='Search here...' />
        </div>
        <ErrorBoundary FallbackComponent={Fallback} onReset={()=>{}}>
        <Suspense fallback={<Loading />} >
        <div className='cards'>
          {posts.map((item)=>
            <Card key={item.id} title={item.title} text={item.body} id={item.id} userid={item.userId} />
          )}
        </div>
        </Suspense>
        </ErrorBoundary>
      </div>

    </div>
  );
}

export default Home;
