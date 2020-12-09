import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                  
                  <input className="input" placeholder="Search " name="search"type="text" onChange={this.props.searchInput}></input>
            </div>
        )
    }
}
