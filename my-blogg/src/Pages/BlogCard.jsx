import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function BlogCard() {
    const {id}=useParams();
    const [post,setPost]=useState([])
    useEffect(()=>{
        console.log("Id",id)
        getBlogById();
    },[])

    const getBlogById=()=>{
        GlobalApi.getPostById(id).then(resp=>{
           
            const item=resp.data.data;
            const result={
                id:item.id,
                name:item.attributes.name,
                title:item.attributes.title,
                description:item.attributes.description,
                
                coverImage:item.attributes.coverImage.data.attributes.url,
            };
            setPost(result);
            console.log("Result",result);
        })
    }
    return (
        <div className='px-6 md:px-20 lg:px-56 mt-10'>
        <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
        <h3 className='text-[23px] font-bold'>{post.title}</h3>
        <div className='flex items-center mt-5'>
                <h3 className='font-bold text-[12px]'>Stockholm</h3>
                <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
        </div>
        <img src={post.coverImage} className='rounded-2xl mt-5 mb-5 w-full'/>
        {/* <h3>{post.desc}</h3> */}
        <ReactMarkdown children={post.desc} 
        escapeHtml={false} className='leading-9' />
        </div>
    );
}

export default BlogCard;
