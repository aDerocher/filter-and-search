import React, { useState, useEffect } from 'react'
import data from './../data/clothes.json'
import './../styles/style.css'

const SearchBar = () => {

	const clothesData = data.clothes
	const [ list, setList ] = useState([])
	const [ searchVal, setSearchVal ] = useState("")
	const [ colorFilter, setColorFilter ] = useState([])
	const [ sizeFilter, setSizeFilter ] = useState([])

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
			if(sizeFilter.length > 0 && !sizeFilter.includes(item.size)){
				return false
			}
			if(item.type.includes(searchVal) ||
				item.color.includes(searchVal) ||
				item.size.includes(searchVal)){
					return true
			}
		})
		setList(newList)
	},[searchVal, colorFilter, sizeFilter])

	const handleColorFilter = (color) => {
		let colors = [...colorFilter]
		if (colors.indexOf(color) < 0){
			colors.push(color)
		} else {
			colors = colors.filter((col) => {
				return col !== color
			})
		}
		setColorFilter(colors)
		return
	}
	const handleSizeFilter = (size) => {
		let sizes = [...sizeFilter]
		if (sizes.indexOf(size) < 0){
			sizes.push(size)
		} else {
			sizes = sizes.filter((col) => {
				return col !== size
			})
		}
		setSizeFilter(sizes)
		return
	}

	return(
		<>
		<div className='container'>
			<div className='filters'>
				<section>
					<label>Search </label>
					<input type='text' value={searchVal} onChange={e=>setSearchVal(e.target.value)}></input>
				</section>

				<section>
					<label>Red</label>
					<input type='checkbox' value='red' onChange={e=>handleColorFilter(e.target.value)}></input>
					<br />
					<label>Orange</label>
					<input type='checkbox' value='orange' onChange={e=>handleColorFilter(e.target.value)}></input>
					<br />
					<label>Green</label>
					<input type='checkbox' value='green' onChange={e=>handleColorFilter(e.target.value)}></input>
					<br />
					<label>Blue</label>
					<input type='checkbox' value='orange' onChange={e=>handleColorFilter(e.target.value)}></input>
					<br />
					<label>Grey</label>
					<input type='checkbox' value='grey' onChange={e=>handleColorFilter(e.target.value)}></input>
				</section>
				<section>
					<label>Small</label>
					<input type='checkbox' value='sm' onChange={e=>handleSizeFilter('sm')}></input>
					<br />
					<label>Medium</label>
					<input type='checkbox' value='md' onChange={e=>handleSizeFilter('md')}></input>
					<br />
					<label>Large</label>
					<input type='checkbox' value='lg' onChange={e=>handleSizeFilter('lg')}></input>
					<br />
					<label>X-Large</label>
					<input type='checkbox' value='xl' onChange={e=>handleSizeFilter('xl')}></input>
				</section>
			</div>

			<div className='data'>
				<ul>
					{!list &&
						<p>No Results Found</p>
					}
					{list && list.map((item, i)=>(
						<li key={i}><span style={{color: `${item.color}`}}>{item.color}</span> {item.type} ({item.size})</li>
						))}
				</ul>
			</div>
		</div>
		</>
	)
};

export default SearchBar
