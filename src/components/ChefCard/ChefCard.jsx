import React from 'react'
import { CartWrapper } from './chefcard.elm'

const ChefCard = ({ data, index }) => {
    return (
        <CartWrapper>
            <img src={data.image} alt={data.name} />
            <div className='desc'>
                <h2 className='name'>{data.name}</h2>
                <p className='position'> {data.position}</p>
                <ul className='social'>
                    <li> <a href={data.fbLink}><i className="fab fa-facebook-f"></i></a> </li>
                    <li> <a href={data.instagarmLink}><i className="fab fa-instagram"></i></a> </li>
                    <li> <a href={data.twLink}><i className="fab fa-twitter"></i></a> </li>
                </ul>
                <p className='chef-desc'>
                    {data.desc}
                </p>
            </div>
        </CartWrapper>
    )
}

export default ChefCard
