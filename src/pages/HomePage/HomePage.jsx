import React from 'react'
import { BookingTable, HomeAbout, HomeBanner, TopSpecialities } from '../../components'
import {topSpecial} from '../../assets/data/topSpecial'
import { combos } from '../../assets/data/combos'
const HomePage = () => {
    return (
        <div style={{position:'relative'}}>
           <HomeBanner/>
           <HomeAbout/>
           <TopSpecialities data={topSpecial}/>
           <BookingTable combos={combos}/>
        </div>
    )
}

export default HomePage
