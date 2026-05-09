import React from 'react'

const Container = ({ children }) => {
    return (
        <section className='max-w-298.5 mx-auto w-full px-5 md:px-10 lg:px-20'>
            {children}
        </section>
    )
}

export default Container