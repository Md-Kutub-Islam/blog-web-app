import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../component'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {} , [])
    appwriteService.getPosts({}.then((post) => {
        if(post){
            setPosts(posts.documents)
        }
    }))
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts && posts.map((post) => (
                    <div key={post.$id} className='py-2 w-1'>
                        <PostCard post={posts} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts