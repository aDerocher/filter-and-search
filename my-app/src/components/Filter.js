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

			// ======== check data against search term
			if(item.name.toLowerCase().includes(lowSearchVal) ||
				item.type.toLowerCase().includes(lowSearchVal) ||
				item.color.toLowerCase().includes(lowSearchVal) ||
				item.size.toLowerCase().includes(lowSearchVal)){
					return true
			}
		})
		setList(newList)
	},[searchVal, colorFilter, sizeFilter, typeFilter])


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
		let fakeCheckBox = document.getElementById(`fake-${attr}`)
		if(fakeCheckBox){
			fakeCheckBox.classList.toggle('fake-checked')
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
					<div className='filter-option'>
						<label>Red</label>
						<div id="fake-red" className='fake-input' onClick={e=>setColorFilter(updateFilter(e.target.firstChild.value, colorFilter))}>
							<input type='checkbox' value='red' hidden></input>
						</div>
					</div>
					<div className='filter-option'>
						<label>Orange</label>
						<div id="fake-orange" className='fake-input' onClick={e=>setColorFilter(updateFilter(e.target.firstChild.value, colorFilter))}>
							<input type='checkbox' value='orange' hidden></input>
						</div>
					</div>
					<div className='filter-option'>
						<label>Green</label>
						<div id="fake-green" className='fake-input' onClick={e=>setColorFilter(updateFilter(e.target.firstChild.value, colorFilter))}>
							<input type='checkbox' value='green' hidden></input>
						</div>
					</div>
					<div className='filter-option'>
						<label>Blue</label>
						<div id="fake-blue" className='fake-input' onClick={e=>setColorFilter(updateFilter(e.target.firstChild.value, colorFilter))}>
							<input type='checkbox' value='blue' hidden></input>
						</div>
					</div>
					<div className='filter-option'>
						<label>Grey</label>
						<div id="fake-grey" className='fake-input' onClick={e=>setColorFilter(updateFilter(e.target.firstChild.value, colorFilter))}>
							<input type='checkbox' value='grey' hidden></input>
						</div>
					</div>

				</section>
				<section className='filter'>
					<h4>Size</h4>
					<div className='filter-option'>
						<label>Small</label>
						<input type='checkbox' value='sm' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					</div>
					<div className='filter-option'>
						<label>Medium</label>
						<input type='checkbox' value='md' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					</div>
					<div className='filter-option'>
						<label>Large</label>
						<input type='checkbox' value='lg' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					</div>
					<div className='filter-option'>
						<label>X-Large</label>
						<input type='checkbox' value='xl' onChange={e=>setSizeFilter(updateFilter(e.target.value, sizeFilter))}></input>
					</div>
				</section>
				<section className='filter'>
					<h4>Type</h4>
					<div className='filter-option'>
						<label>Shirts</label>
						<input type='checkbox' value='shirt' onChange={e=>setTypeFilter(updateFilter(e.target.value, typeFilter))}></input>
					</div>
					<div className='filter-option'>
						<label>Pants</label>
						<input type='checkbox' value='pants' onChange={e=>setTypeFilter(updateFilter(e.target.value, typeFilter))}></input>
					</div>
					<div className='filter-option'>
						<label>Hats</label>
						<input type='checkbox' value='hat' onChange={e=>setTypeFilter(updateFilter(e.target.value, typeFilter))}></input>
					</div>
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
