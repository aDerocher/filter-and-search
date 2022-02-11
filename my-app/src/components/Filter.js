import React, { useState, useEffect } from 'react'
import DataList from './DataList.js';
import data from '../data/clothes.json'
import './../styles/style.css'

const Filter = () => {

	const clothesData = data.clothes
	const [ list, setList ] = useState([])
	const [ searchVal, setSearchVal ] = useState("")
	const [ colorFilter, setColorFilter ] = useState([])
	const [ sizeFilter, setSizeFilter ] = useState([])
	const [ typeFilter, setTypeFilter ] = useState([])
	const [ yourFilter, setYourFilter ] = useState([])

	useEffect(() => {
		setList(clothesData)
	},[clothesData])

	// ======== Watch for changes to the filter settings
	useEffect(() => {
		if(searchVal === ""){ setList(clothesData) }
		let lowSearchVal = searchVal.toLowerCase()
		if(!clothesData) { return }
		// ======== filter all of the data
		let newList = [...clothesData].filter((item)=> {
			// ======== check data against each of the filters
			if(colorFilter.length > 0 && !colorFilter.includes(item.color)){ return false }
			if(sizeFilter.length > 0 && !sizeFilter.includes(item.size)){ return false }
			if(typeFilter.length > 0 && !typeFilter.includes(item.type)){ return false }
			if(yourFilter.length > 0 && !yourFilter.includes(item.yourAttr)){ return false }

			// ======== check data against search term
			if(item.name.toLowerCase().includes(lowSearchVal) ||
				item.type.toLowerCase().includes(lowSearchVal) ||
				item.color.toLowerCase().includes(lowSearchVal) ||
				item.size.toLowerCase().includes(lowSearchVal) ||
				item.yourAttr.toLowerCase().includes(lowSearchVal)){
					return true
			}
		})
		setList(newList)
	},[searchVal, colorFilter, sizeFilter, typeFilter, yourAttrFilter])


	// ======== toggles an attribute in/out of a given filter
	const updateFilter = (attr, typeFilter) => {
		let newArr = [...typeFilter]
		if (newArr.indexOf(attr) < 0){
			newArr.push(attr)
		} else {
			newArr = newArr.filter((a) => {
				return a !== attr
			})
		}
		return newArr
	}

	return(
		<>
		<div className='container'>
			<div className='filters'>
				<section>
					<label>Search </label>
					<input type='text' value={searchVal} onChange={e=>setSearchVal(e.target.value)}></input>
				</section>

				<section className='filter'>
					<h4>Color</h4>
					<label>Red</label>
					<input type='checkbox' value='red' onChange={e=>setColorFilter(updateFilter(e.target.value, colorFilter))}></input>
					<br />
					<label>Orange</label>
					<input type='checkbox' value='orange' onChange={e=>setColorFilter(updateFilter(e.target.value, colorFilter))}></input>
					<br />
					<label>Green</label>
					<input type='checkbox' value='green' onChange={e=>setColorFilter(updateFilter(e.target.value, colorFilter))}></input>
					<br />
					<label>Blue</label>
					<input type='checkbox' value='blue' onChange={e=>setColorFilter(updateFilter(e.target.value, colorFilter))}></input>
					<br />
					<label>Grey</label>
					<input type='checkbox' value='grey' onChange={e=>setColorFilter(updateFilter(e.target.value, colorFilter))}></input>
				</section>
				<section className='filter'>
					<h4>Size</h4>
					<label>Small</label>
					<input type='checkbox' value='sm' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					<br />
					<label>Medium</label>
					<input type='checkbox' value='md' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					<br />
					<label>Large</label>
					<input type='checkbox' value='lg' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					<br />
					<label>X-Large</label>
					<input type='checkbox' value='xl' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
				</section>
				<section className='filter'>
					<h4>Type</h4>
					<label>Shirts</label>
					<input type='checkbox' value='shirt' onChange={e=>setTypeFilter(updateFilter(e.target.value, typeFilter))}></input>
					<br />
					<label>Pants</label>
					<input type='checkbox' value='pants' onChange={e=>setTypeFilter(updateFilter(e.target.value, typeFilter))}></input>
					<br />
					<label>Hats</label>
					<input type='checkbox' value='hat' onChange={e=>setTypeFilter(updateFilter(e.target.value, typeFilter))}></input>
				</section>
				<section className='filter'>
					<h4>Your Filter</h4>
					<label>Your Attr 1</label>
					<input type='checkbox' value='attr1' onChange={e=>setYourAttrFilter(updateFilter(e.target.value, yourAttrFilter))}></input>
					<br />
					<label>Your Attr 2</label>
					<input type='checkbox' value='attr2' onChange={e=>setYourAttrFilter(updateFilter(e.target.value, yourAttrFilter))}></input>
					<br />

				</section>
			</div>

			<div className='data'>
				<DataList list={list}/>
			</div>
		</div>
		</>
	)
};

export default Filter
