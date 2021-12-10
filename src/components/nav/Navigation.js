import React from "react"

/**
 * Navigation renders a prev and next button which simply increment
 * or decrement the album number by one. The select element iterates
 * over an 'empty' 100 count array for the options, and sets the album
 * number to the selected number.
 */

const Navigation = ({ albumNum, handleChange}) => {
    return (
        <div className="navigation">
            <button type="button" className="btn btn-primary" onClick={() => handleChange(albumNum - 1)} disabled={albumNum === 1}>{`<- Prev`}</button>
            <div>
            <select onChange={e => handleChange(Number(e.target.value))} value={albumNum}>
                {
                Array(100).fill(0).map((_,i) => {
                    return <option value={i+1} key={i+1}>Album { i+1 }</option>
                })
                }
            </select>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => handleChange(albumNum + 1)} disabled={albumNum === 100}>{'Next ->'}</button>
        </div>
    )
}

export default Navigation
