import { useState, useEffect } from 'react'
import './FilterList.css'
import Input from './FilterList/Input'
import List from './FilterList/List'

function FilterList() {
    const [values, setValues] = useState([])

    useEffect(() => {
        console.log(values);
    }, [values])

    return (
        <div>
            <h1>Filter List Project</h1>
            <div className='input'>
                <Input setValues={setValues} values={values} />
            </div>
            <div className='list'>
                <List values={values} />
            </div>
        </div>
    )
}

export default FilterList
