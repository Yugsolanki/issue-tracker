'use client';
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMdeReact from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-lg space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder="Title" />
        </TextField.Root>
        <SimpleMdeReact placeholder='Description' />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage