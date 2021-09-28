import React from 'react'

const MyFileInput = (props) => {
    return (
        <>
           <input type="file" {...props.inputProps} /> 
        </>
    )
}

export default MyFileInput
