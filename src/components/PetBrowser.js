import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // isAdopted = () => {
  //   return
  // }

  renderPets = () => {
    return this.props.pets.map((pet)=> {
      return <Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }

}

export default PetBrowser
