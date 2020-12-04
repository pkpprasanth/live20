import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                  <h3>Search</h3>
                  <input className="input" name="search"type="text" onChange={this.props.searchInput}></input>
            </div>
        )
    }
}
