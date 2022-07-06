import { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';


export const GetHerobyType = (type) => {
    useEffect(() => {
        actions.setInfo()
    }, [])
    
    const { store, actions } = useContext(Context)

    const Valid = ["DC-Heroes", "DC-Evil", "Marvel-Heroes", "Marvel-Evil"]
    if(!Valid.includes(type)){
        throw new Error(`${type} is not a valid type`)
    }
    return store.heroesinfo.filter(hero => hero.type === type)
}