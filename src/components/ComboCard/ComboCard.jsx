import React from 'react'
import { CardWrapper } from './cc.elm'

const ComboCard = ({data}) => {
    return (
        <CardWrapper>
            <div className='combo-image'>
                <img src={data.image} alt={data.name} />
                <span className='discount'>{data.discount}%</span>
            </div>
            <h2>{data.name}</h2>
        </CardWrapper>
    )
}

export default ComboCard
