import { useState } from 'react'

function List({ values }) {
    const [filter, setFilter] = useState("")

    const filtered = values.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toLocaleLowerCase())
        )
    })

    return (
        <div>
            <hr />
            <ul>
                {filtered.map((value, index) => (
                    <li key={index}>{value.name} {value.surname}</li>
                ))}
            </ul>
            <hr />
            <div>
                <input
                    placeholder='Filter part'
                    name='filter'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
        </div>
    )
}

export default List
