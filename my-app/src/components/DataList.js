import React from "react";

const DataList = (props) => {

    return (
        <ul>
            {!props.list &&
                <p>No Results Found</p>
            }
            {props.list && props.list.map((item, i)=>(
                <li key={i}>
                    <span style={{fontWeight: 'bold'}}>{item.name} - </span>
                    <span style={{color: `${item.color}`}}>{item.color}</span> {item.type} ({item.size})
                </li>
            ))}
        </ul>
    )
}

export default DataList
