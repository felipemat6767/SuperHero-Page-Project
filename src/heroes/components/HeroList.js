import React, { useMemo } from 'react'
import { GetHerobyCompany } from '../../selectors/getHerobyCompany'
import { HeroCard } from './HeroCard'

export const HeroList = ({company}) => {
    const heroes = GetHerobyCompany(company)
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 row-cols-sm-6'>
                {heroes.map(hero => (
                    <HeroCard key = {hero.id}
                    {...hero}
                    /> 
                    
                ))}
            
        </div>
    )
}
