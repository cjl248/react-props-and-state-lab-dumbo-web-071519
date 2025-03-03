import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  onChangeType = (e) => {
    const type = e.target.value
    this.setState({
      filters: {
        type
      }
    })
  }
  onFindPetsClick = (e) => {
    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`)
      .then(resp => resp.json())
      .then((pets) => {
        this.setState({
          pets
        })
      })
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then((pets) => {
        this.setState({
          pets
        })
      })
    }
  }

  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        const oppositeAdoptionStatus = !pet.isAdopted
        if (pet.id === id) {
            return {
            ...pet,
            isAdopted: oppositeAdoptionStatus
          }
        }
        else {
          return {
            ...pet
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">

            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
                option={this.state.filters.type}
              />
            </div>

            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App
