import { useState } from 'react'

function Input({ setValues, values }) {
    const [form, setForm] = useState({ name: "", surname: "", privateNumber: "" })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.name === "" || form.surname === "" || form.privateNumber === "") {
            return false
        }

        setValues([...values, form])

        setForm({ name: "", surname: "", privateNumber: "" })
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name='name' placeholder='Enter your name' onChange={onChangeInput} value={form.name} />
                <br />
                <input name='surname' placeholder='Enter your surname' onChange={onChangeInput} value={form.surname} />
                <br />
                <input name='privateNumber' placeholder='Enter your private number' onChange={onChangeInput} value={form.privateNumber} />
                <br />
                <br />
                <button>Add</button>
            </div>
        </form>
    )
}

export default Input
