import React from 'react'
import { GetHerobyType } from '../../selectors/getHerobyType'
import { HeroCard } from '../components/HeroCard'


export const Herofiltered = ({ type }) => {
    const total = GetHerobyType(type)
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {total.map(item => (
                    < HeroCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
