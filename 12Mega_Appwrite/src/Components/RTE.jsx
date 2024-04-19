import React from 'react'
import {Controller} from "react-hook-form"
import {Editor} from "@tinymce/tinymce-react"

function RTE({name, control, defaultValue="", label}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller 
      name={name || "default value"}
      // jo bhi parent element ise call kargea vo ise control de dega
      control={control}
      render={({field : {onChange}}) => (
        <Editor 
        initialValue={defaultValue}
        init={{
            initialValue:defaultValue,
            height:500,
            menubar:true,
            plugins:[],
            toolbar:"",
            onEditorChange : {onChange}
        }}
        />
      )}
      />
    </div>
  )
}

export default RTE
