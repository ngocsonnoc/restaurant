import React, { useEffect, useState } from 'react'
import { Modal } from '..'
import { ProductCard } from '..'
import { Button, Header, ImageGrid, TopSpecialWrapper } from './ts.elm'

const TopSpecialities = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState(null)

    const changeSelectedImage = (value) => {
        setSelectedImage(value)
    }
    const renderCardProduct = (data) => {
        var result = null
        if (data) {
            result = data.map((item, index) => {
                return <ProductCard data={item} key={index} changeSelectedImage={changeSelectedImage} />
            })
        }
        return result
    }
    useEffect(() => {
        const resetModal =()=>{
           setSelectedImage(null)
        }
        window.addEventListener('scroll',resetModal)
        return () => {
            window.removeEventListener('scroll',resetModal)
        }
    }, [selectedImage])
    return (
        <TopSpecialWrapper>
            <Header>
                <div className='text'>
                    <p>Take a look to the best of the meals</p>
                    <h2>TOP SPECIALITIES</h2>
                </div>
                <Button>Full Menu</Button>
            </Header>
            <ImageGrid>
                {renderCardProduct(data)}
            </ImageGrid>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </TopSpecialWrapper>
    )
}

export default TopSpecialities
