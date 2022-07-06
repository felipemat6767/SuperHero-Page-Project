import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

export const Filtercopy = () => {
    const { actions } = useContext(Context)
    return (
        <div>
            <h2 className='text-center mt-3'>Filter Options</h2>
            <div className='d-flex justify-content-center p-2'>
                <div className='mt-2 p-3'>
                    <h5>Type Of</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { actions.changecategory("Heroes") }} />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Heroes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { actions.changecategory("Villians") }} />
                        <label className="form-check-label" for="flexRadioDefault">
                            Villains
                        </label>
                    </div>
                </div>
                <div className='mt-2 p-3 align-items-center'>
                    <h5 className=''>Alphabetical Order</h5>
                    <div className="form-check ">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { actions.changecategory("AtoZ") }} />
                        <label className="form-check-label " for="flexRadioDefault">
                            A-Z
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => { actions.changecategory("ZtoA") }} />
                        <label className="form-check-label" for="flexRadioDefault">
                            Z-A
                        </label>
                    </div>
                </div>


            </div>
        </div>
    )
}
