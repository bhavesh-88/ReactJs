import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
const Post = () => {
    let {category,id} = useParams()

    let [seachParams, setSearchParams] = useSearchParams()
    //  query format
    //  post/mobile/23?price=123123&id=12
    console.log(seachParams);
    console.log(seachParams.get('price'));
    console.log(seachParams.get('id'));
  return (
    <div>
      <h1>Post Page - {category}</h1> 
      <h1>Post Page - {id}</h1> 
    </div>
  )
}

export default Post
