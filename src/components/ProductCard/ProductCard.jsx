import React from 'react'
import { CardWrapper } from './pc.elm'

const ProductCard = ({data,changeSelectedImage}) => {


    return (
        <CardWrapper>
            <div className='product-image'>
                <img src={data.image} alt={data.name} onClick={()=>changeSelectedImage(data.image)}/>
                <span>${data.price}</span>
            </div>
            <div className='product-desc'>
                <h2>{data.name}</h2>
                <p>{data.desc}</p>
            </div>

        </CardWrapper>
    )
}

export default ProductCard
