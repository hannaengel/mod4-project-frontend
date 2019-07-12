import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class DogFilter extends Component {
  constructor(){
    super()
    this.state = {
      desiredSex: 'all-sexes',
      desiredAge: 'all-ages'
    }
  }

  componentDidMount(){
    if (this.state.desiredSex === 'all-sexes') {
      let allBtn = document.getElementById("all-ages")
      allBtn.classList.add("active")
    }


    if (this.state.desiredAge === 'all-ages') {
      let allBtn = document.getElementById("all-sexes")
      allBtn.classList.add("active")
    }

      this.activateBtn(this.state.desiredAge)
      this.activateBtn(this.state.desiredSex)

    //add code to fetch dogs from backend here
    this.fetchPets()
  }

  fetchPets = () => {
    let url = new URL(`http://localhost:3000/api/v1/pets`)
    let params = {}
    let ageParam = ''
    let sexParam = ''

    if (this.state.desiredSex !== 'all-sexes') {
      sexParam = this.state.desiredSex
      params["gender"] = sexParam
    }

    if (this.state.desiredAge !== 'all-ages') {
      ageParam = this.state.desiredAge
      console.log(ageParam)
      params["age"] = ageParam
    }

    url.search = new URLSearchParams(params)

    console.log(url.href)

    fetch(url.href, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    })
    .then(res=>res.json())
    .then(json=> {
      console.log('in fetchpets')
      console.log(json)
      this.props.setDogs(json)
    })
  }

  handleSexClick = (ev) => {
    ev.persist()
    let btnName = ev.currentTarget.attributes[0].value
    let removeBtnName = this.state.desiredSex
    let selectedBtn = document.getElementById(btnName)
    let removeBtn = document.getElementById(removeBtnName)

    removeBtn.classList.remove("active")
    this.setState({desiredSex: btnName}, () => this.fetchPets())
    this.props.updateFiltersState({sexFilter: btnName})
    this.activateBtn(btnName)
  }

  handleAgeClick = (ev) => {
    ev.persist()
    let btnName = ev.currentTarget.attributes[0].value
    let removeBtnName = this.state.desiredAge
    let selectedBtn = document.getElementById(btnName)
    let removeBtn = document.getElementById(removeBtnName)

    removeBtn.classList.remove("active")
    this.setState({desiredAge: btnName}, () => this.fetchPets())
    this.props.updateFiltersState({ageFilter: btnName})
    this.activateBtn(btnName)
  }

  activateBtn = (btnName) => {
    let selectedBtn = document.getElementById(btnName)
    selectedBtn.classList.add("active")
  }


  render(){
    return(
    <div class = "dog-form-wrapper">
      <div class = "age-icons">
        <div onClick={this.handleAgeClick} id="all-ages" name="all-ages" class="ui right attached button" role="button" tabindex="0">All</div>
        <div onClick={this.handleAgeClick} id = "Baby" name="Baby" class="ui right attached button" role="button" tabindex="0">Baby</div>
        <div onClick={this.handleAgeClick} id = "Young" name="Young" class="ui right attached button" role="button" tabindex="0">Young</div>
        <div onClick={this.handleAgeClick} id = "Adult" name="Adult" class="ui right attached button" role="button" tabindex="0">Adult</div>
        <div onClick={this.handleAgeClick}  id = "Senior" name="Senior" class="ui right attached button" role="button" tabindex="0">Senior</div>
      </div>
      <div class = "sex-icons">
        <div onClick={this.handleSexClick} id="all-sexes" name="all-sexes" class="ui right attached button" role="button" tabindex="0">All</div>
        <div onClick={this.handleSexClick} id = "Female" name="Female" class="ui right attached button" role="button" tabindex="0"><i class = "venus icon"></i></div>
        <div onClick={this.handleSexClick} id = "Male" name="Male" class="ui right attached button" role="button" tabindex="0"><i class = "mars icon"></i></div>
      </div>
    </div>

    )
  }
}
