import React from 'react'

class Filters extends React.Component {

  state = {
    option: this.props.option
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={ (e) => {this.props.onChangeType(e)} }>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            className="ui secondary button"
            onClick={(e) => {this.props.onFindPetsClick(e)}}>
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
