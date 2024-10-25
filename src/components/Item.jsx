import React, { lazy, Suspense, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './Errorboundary'
import Loading from './Loading'

const Card = lazy(()=>(import ('./Card')))

function Item() {
  const {id} = useParams()
  const location = useLocation()
  const {data,image} = location.state
  const [active,setActive] = useState("details")
  let imagetext = data.text
  let posts = useSelector(state=>state.total_posts)
  let random_num = Math.floor(Math.random() * (posts.length - 12));
  posts = posts.filter(item=>item.id !==data.id).slice(random_num,random_num+10)
  console.log(random_num,random_num+12)
  console.log(data.userid)

  return (
    <div className='item-container'>
      <div className='top'>
        <div className='leftarr'>&larr;</div>
        <h2>Post Number #{id}</h2>
      </div>
      <div className='middle'>
        <div className='image-container'>
          <img src={image} alt="" />
          <div className='text-container'>
            <h3>{data.title}</h3>
            <div className='icon-container'>
              <FontAwesomeIcon className='icon' icon={faShareNodes} />
              <FontAwesomeIcon className='icon' icon={faHeart} />
            </div>
          </div>
        </div>
        <div className='right-container'>
          <div className='buttons-container'>
            <button className={`${active == "details" ? "activ" :"" }`} onClick={()=>{setActive("details")}}>Details</button>
            <button className={`${active == "userinfo" ? "activ" :"" }`} onClick={()=>{setActive("userinfo")}}>User Info</button>
          </div>
          <p>{active == "details" ? imagetext : `Post Was Posted By ${data.userid}`}</p>
        </div>
      </div>
      <div className='last'>
        <h2>More Posts</h2>
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
  )
}

export default Item