import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class DogFilter extends Component {
  constructor(){
    super()
    this.state = {
      desiredSex: ['all'],
      desiredAge: ['all']
    }
  }

  componentDidMount(){
    if (this.state.desiredSex[0] === 'all') {
      let allBtn = document.getElementById("all-ages")
      allBtn.classList.add("active")
    }
    if (this.state.desiredAge[0] === 'all') {
      let allBtn = document.getElementById("all-sexes")
      allBtn.classList.add("active")
    }
    this.state.desiredAge 
  }

  handleAgeClick = (ev) => {
    ev.preventDefault()
    ev.persist()
    let btnName = ev.currentTarget.attributes[0].value
    let selectedBtn = document.getElementById(btnName)
    let allBtn = document.getElementById("all-ages")
    if (this.state.desiredSex[0] === 'all') {
      allBtn.classList.remove("active")
      const {desiredSex, ...state} = this.state
      this.setState({state})
      this.setState({desiredAge: [btnName]})
    }
  }

  render(){
    return(
    <div class = "dog-form-wrapper">
      <div class = "age-icons">
        <div id="all-ages" name="all-ages" class="ui right attached button" role="button" tabindex="0">All</div>
        <div id = "baby" name="baby" onClick={this.handleAgeClick} class="ui right attached button" role="button" tabindex="0">Baby</div>
        <div id = "young" name="young" class="ui right attached button" role="button" tabindex="0">Young</div>
        <div id = "adult" name="adult" class="ui right attached button" role="button" tabindex="0">Adult</div>
        <div id = "senior" name="senior" class="ui right attached button" role="button" tabindex="0">Senior</div>
      </div>
      <div class = "sex-icons">
        <div id="all-sexes" name="all-sexes" class="ui right attached button" role="button" tabindex="0">All</div>
        <div id = "female" name="female" class="ui right attached button" role="button" tabindex="0"><i class = "venus icon"></i></div>
        <div id = "male" name="male" class="ui right attached button" role="button" tabindex="0"><i class = "mars icon"></i></div>
      </div>
    </div>

    )
  }
}
