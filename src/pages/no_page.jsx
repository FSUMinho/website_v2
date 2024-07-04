import React, { useEffect } from 'react'

const No_Page = () => {
    useEffect(() => {
        document.title = "Error"
    }, [])
    
    return (
        <div>
            <p>Ups something went wrong</p>
        </div>
    )
};

export default No_Page;