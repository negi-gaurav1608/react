import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { PostForm } from '../components'
function EditPost() {
    const [post,setPosts]=useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })

        }else{
            navigate('/')
        }
    },[slug,navigate])
    return (
        <div>
            post?(
                <div className='py-8'>
                    <container>
                        <PostForm post={post}/>
                    </container>
                </div>
            ):null
        </div>
    )
}

export default EditPost
