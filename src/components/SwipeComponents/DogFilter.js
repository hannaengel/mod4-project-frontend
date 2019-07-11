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

  }

  handleSexClick = (ev) => {
    ev.persist()
    let btnName = ev.currentTarget.attributes[0].value
    let removeBtnName = this.state.desiredSex
    let selectedBtn = document.getElementById(btnName)
    let removeBtn = document.getElementById(removeBtnName)

      removeBtn.classList.remove("active")
      this.setState({desiredSex: btnName})
      this.activateBtn(btnName)
  }

  handleAgeClick = (ev) => {
    ev.persist()
    let btnName = ev.currentTarget.attributes[0].value
    let removeBtnName = this.state.desiredAge
    let selectedBtn = document.getElementById(btnName)
    let removeBtn = document.getElementById(removeBtnName)

      removeBtn.classList.remove("active")
      this.setState({desiredAge: btnName})
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
        <div onClick={this.handleAgeClick} id = "baby" name="baby" class="ui right attached button" role="button" tabindex="0">Baby</div>
        <div onClick={this.handleAgeClick} id = "young" name="young" class="ui right attached button" role="button" tabindex="0">Young</div>
        <div onClick={this.handleAgeClick} id = "adult" name="adult" class="ui right attached button" role="button" tabindex="0">Adult</div>
        <div onClick={this.handleAgeClick}  id = "senior" name="senior" class="ui right attached button" role="button" tabindex="0">Senior</div>
      </div>
      <div class = "sex-icons">
        <div onClick={this.handleSexClick} id="all-sexes" name="all-sexes" class="ui right attached button" role="button" tabindex="0">All</div>
        <div onClick={this.handleSexClick} id = "female" name="female" class="ui right attached button" role="button" tabindex="0"><i class = "venus icon"></i></div>
        <div onClick={this.handleSexClick} id = "male" name="male" class="ui right attached button" role="button" tabindex="0"><i class = "mars icon"></i></div>
      </div>
    </div>

    )
  }
}
