import { getElementbyAtoZ, GetelementbyCategory, getElementbyZtoA } from "../../selectors/getelementbyOrder"

export const NamesAtoZ = ({category}) => {
    const tools = GetelementbyCategory(category)
    const AtoZ = getElementbyAtoZ(tools)
    console.log(tools)
    return (
        <>
         <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {AtoZ}
            </div>
        </>
    )
}

export const NamesZtoA = ({category}) => {
    const tools = GetelementbyCategory(category)
    const ZtoA = getElementbyZtoA( tools)
    return (
        <>
         <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {ZtoA}
            </div>
        </>
    )
}