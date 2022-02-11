import React, { useState, useEffect } from 'react'
import data from './../data/clothes.json'

const SearchBar = () => {

	
	
	const clothesData = data.clothes
	const [ list, setList ] = useState([])
	const [ searchVal, setSearchVal ] = useState("")
	const [ colorFilter, setColorFilter ] = useState([])

	useEffect(() => {
		setList(clothesData)
	},[clothesData])

	useEffect(() => {
		if(searchVal === ""){ setList(clothesData) }
		if(!clothesData) { return }
		let newList = [...clothesData].filter((item)=> {
			if(colorFilter.length > 0 && !colorFilter.includes(item.color)){
				return false
			}
			if(item.type.includes(searchVal) || 
				item.color.includes(searchVal) ||
				item.size.includes(searchVal)){
					return true
			}
		})
		setList(newList)
	},[searchVal, colorFilter])

	const handleColorFilter = (color) => {
		console.log(colorFilter)
		let colors = [...colorFilter]
		console.log(colors, color, colors.indexOf(color))
		if (!(-1)){
			console.log('nope. add ', color)
			colors.push(color)
		} else {
			colors.filter((col) => {
				return col !== color
			})
		}
		setColorFilter(colors)
		console.log(colorFilter)
		return
	}

	return(
		<>
			<input type='text' value={searchVal} onChange={e=>setSearchVal(e.target.value)}></input>
			<br />
			<label>Red</label>
			<input type='checkbox' value='red' onChange={e=>handleColorFilter('red')}></input>
			<br />
			<label>Orange</label>
			<input type='checkbox' value='orange' onChange={e=>handleColorFilter('orange')}></input>
			<ul>
				{list && list.map((item, i)=>(
					<li key={i}><span style={{color: `${item.color}`}}>{item.color}</span> {item.type} ({item.size})</li>
				))}
			</ul>
		</>
	)
};

export default SearchBar