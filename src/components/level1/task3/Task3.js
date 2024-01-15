import React from 'react'
import './Task3.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
function Task3() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    let [temp, setTemp] = useState(0)
    let readTemp = (formObj) => {
        if (formObj.from == 'celsius') {
            if (formObj.to == 'celsius') setTemp(`${formObj.degrees} 'C`)
            else if (formObj.to == 'kelvin') setTemp(`${parseInt(formObj.degrees) + 273.15} 'K`)
            else setTemp(`${(formObj.degrees * (9 / 5)) + 32} 'F`)
        }
        else if (formObj.from == 'fahrenheit') {
            if (formObj.to == 'celsius') setTemp(`${(formObj.degrees - 32) * (5 / 9)} 'C`);
            else if (formObj.to == 'kelvin') setTemp(`${((formObj.degrees - 32) * 5 / 9) + 273.15} 'K`)
            else setTemp(`${formObj.degrees} 'F`)
        }
        else if (formObj.from == 'kelvin') {
            if (formObj.to == 'celsius') setTemp(`${formObj.degrees - 273.15} 'C`)
            else if (formObj.to == 'fahrenheit') setTemp(`${((formObj.degrees - 273.15) * (9 / 5)) + 32} 'F`)
            else if (formObj.to == 'kelvin') setTemp(`${formObj.degrees} 'K`)
        }
    }
    return (
        <div className='mt-5'>
            <div className='col col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-auto mt-5'>
                <h3 className='fs-3 text-center mb-4 fw-bold'>Temperature Converter</h3>
                <form className='form mx-auto border p-3 shadow rounded' onSubmit={handleSubmit(readTemp)}>
                    <div className='mb-3'>
                        <label className='form-label fw-bold' htmlFor='type'>From</label>
                        <select className='form-select' {...register("from")}>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label fw-bold' htmlFor='type'>To</label>
                        <select className='form-select' {...register("to")}>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="celsius">Celsius</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label fw-bold'>Input</label>
                        <input type='number' className='form-control' placeholder='0' {...register("degrees", { minLength: 1 })}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label fw-bold'>Result</label>
                        <input className='form-control bg-white' placeholder={temp} disabled></input>
                    </div>
                    <button className='btn btn-dark px-5 py-2 d-block mx-auto'>Convert</button>
                </form>
            </div>
        </div>
    )
}

export default Task3