import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { additem, deleteItem, edititem } from '../Redux/Action/HomeAc';






const Home = () => {
    const [data, setdata] = useState({
        name: '',
        last: '',
        phone: ''
    })

    const list = useSelector(state => state.reducer.list)
    const dispatch = useDispatch()
    const addcontact = (event) => {
        event.preventDefault();
        dispatch(additem(data));
        setdata({
            ...data,
            name: '',
            last: '',
            phone: ''
        })
        console.log(78487, data)


    }
    const handeldeleteItem = (id) => {
        dispatch(deleteItem(id));

    }
    const handeledit = (i) => [
        dispatch(edititem(i))
    ]


    {
        console.log(7327, data)
        console.log(86485, list)
    }

    return (
        <>
            <form onSubmit={addcontact}  >
                <label>Name</label><br></br>
                <input type="text" value={data.name}
                    onChange={(e) => setdata({ ...data, name: e.target.value })} /><br></br>
                <label>Last</label><br></br>
                <input type="text" value={data.last}
                    onChange={(e) => setdata({ ...data, last: e.target.value })} /><br></br>
                <label>phone</label><br></br>
                <input type="text" value={data.phone}
                    onChange={(e) => setdata({ ...data, phone: e.target.value })} /><br></br>
                <button type='text'>submit</button>
            </form>
            <div>
                <table>
                    <tr>

                        <th>name</th>
                        <th>last</th>
                        <th>phone</th>


                    </tr>

                    {list.map((contact, id) => {
                        return (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.last}</td>
                                <td>{contact.phone}</td>
                                <button onClick={() => handeldeleteItem(id)}>delt</button>
                                <button onClick={() => handeledit()}>edit</button>


                            </tr>
                        )
                    })}




                </table>
            </div>


        </>
    )
}
export default Home
