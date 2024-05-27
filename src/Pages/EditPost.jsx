import React, { useState , useEffect} from 'react'
import {Container, PostForm} from '../component'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect((post) => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate])
  return posts ? (
    <div className='py-8'>
        <Container>
            <PostForm post={posts} />
        </Container>
    </div>
  ) : null
}

export default EditPost