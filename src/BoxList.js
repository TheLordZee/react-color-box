import React, {useState} from "react"
import Box from "./Box"
import {v4 as uuid} from 'uuid';
import BoxForm from "./BoxForm";
import './BoxList.css'

const BoxList = () => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        color: ""
    }
    const [list, setList] = useState([])
    const [formData, setFormData] = useState(INITIAL_STATE)

    const addBox = (boxData) => {
        const box = {...boxData, id: uuid()}
        setList(items => [...items, box])
    }

    const removeBox = (id) =>{
        let newList = [...list]
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id === id){
                newList.splice(i,1)
            }
        }
        setList(newList)
    }

    const onChange = e => {
        let {name, value} = e.target;
        if(name === "height" || name === "width"){
            value = parseInt(value)
        }
        setFormData(fD => ({
            ...fD,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        addBox(formData);
        
        setFormData(INITIAL_STATE);
    }

    return(
        <div className="BoxList">
            <BoxForm handleSubmit={handleSubmit} onChange={onChange} formData={formData}/>
            <div className="BoxList-list">
                {list.map(
                    b => <Box 
                        key={b.id}
                        id={b.id}
                        width={b.width}
                        height={b.height} 
                        bgColor={b.color} 
                        removeBox={removeBox}
                    />
                )}
            </div>
        </div>
    )
}

export default BoxList;