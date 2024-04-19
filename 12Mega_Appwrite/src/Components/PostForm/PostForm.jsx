import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import Service from "../../AppWrite/configure"

function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues:{
      title: post?.title || "",
      slug: slug?.slug || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })
  const Navigate = useNavigate()
  const userDATA = useSelector((state) => state.user.userDATA)

  const submit = async(data) => {
    if(post){
      const file = data.image[0] ? Service.uploadFile(data.image[0]) : null
    }

    if (file) {
      Service.deleteFile(post.featuredImage)
    }
    const dbpost = await Service.updatePost(post.$id, {
      ...data, featuredImage: file ? file.$id:undefined,
      if (dbpost) {
        Navigate(`/post/${dbpost.$id}`)
      }
    }
  )
  }
  return (
    <div>
    </div>
  )
}

export default PostForm
