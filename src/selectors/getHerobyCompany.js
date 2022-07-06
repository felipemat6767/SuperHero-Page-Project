import { useContext, useEffect } from 'react';
import { heroes } from "../data/Heroes"
import { Context } from '../store/appContext';


export const GetHerobyCompany = (company) => {
    useEffect(() => {
        actions.setInfo()
    }, [])
    
    const { store, actions } = useContext(Context)

    const Valid = ["Marvel Comics", "DC Comics"]
    if(!Valid.includes(company)){
        throw new Error(`${company} is not a valid company`)
    }
    return store.heroesinfo.filter(hero => hero.publisher === company)
}