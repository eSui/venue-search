import React, { Component } from 'react'
import superagent from 'superagent'

class Search extends Component{

  constructor(){
    super()
    this.state = {
      search:{
        location: '',
        query: ''
      }
    }


  }

  updateSearchFilters(field, event){
    let search = Object.assign({}, this.search.state)
    search[field] = event.field.value
    this.setState({
      search: search
    })
  }

  searchVenuese(event){
    const url = ''

    const params = {
      
    }

    superagent
    .get(url)
    .query()
    .set()
    .end()
  }

  render(){
    return(

      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h3>Search Venues</h3>
            <input onChange={this.updateSearchFilters.bind(this, 'query')} type="text" placeholder="Query"/> <br />
            <input onChange={this.updateSearchFilters.bind(this, 'lcoation')} type="text" placeholder="Location "/> <br />
            <button onClick = {this.searchVenues.bind(this)}> Search </button>
          </div>

          <div className="col-md-8">

          </div>

        </div>
      </div>

    )

  }

}


export default Search
