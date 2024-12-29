import React from 'react'

const Container = ({ children, type }) => {
    return (
        <div className={`${type==="main"? "w-[90%]" : "w-[95%]"} max-w-[1300px] mx-auto`}>
            {children}
        </div>
    )
}

export default Container
