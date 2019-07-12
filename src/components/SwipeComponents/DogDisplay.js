import React, { Component } from 'react'


export default class DogDisplay extends Component {

    constructor(props){
        super(props)
        this.state = {
          isFavorite: this.props.favorite
        }
        this.checkFavorite()
      }

    handleClick = e => {
        this.props.onClick(e)
    }

    checkFavorite = () => {
        console.log('in lower favorite')
        console.log(this.state.isFavorite)
        let favoriteIcon = document.getElementById("favoriteIcon")
        if (this.state.isFavorite === true) {
          console.log('in if')
          favoriteIcon.classList.add("active")
        }
      }

    handleNext = () => {
        let favoriteIcon = document.getElementById("favoriteIcon")
        favoriteIcon.style.pointerEvents = 'auto'; 
        favoriteIcon.classList.remove('heart')
        this.props.onNext()
        this.checkFavorite()
    }
    handleFavorite = () => {
        let favoriteIcon = document.getElementById("favoriteIcon")
        if (!this.state.isFavorite===true){
        favoriteIcon.classList.add('heart')
       
        this.props.onFavorite(this.props.dog)
        this.setState({
          isFavorite: true
        }, () => this.checkFavorite())}
    }
   
    render() {
        const {medium_photo_url, name, age, gender, breed_primary} = this.props.dog
        return( 
            <div class="ui three column grid">

                <div class='column'>
                <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>
                <span class="left floated like" onClick={this.handleFavorite}>
                    <i id='favoriteIcon' class="huge like icon"></i>
                 </span>
                </div>

                <div class="column">
                    <p className='bordered'>
                <h2 class="ui header">
                <div class="content">
                    {name}
                    {gender==='female'?
                     <i className='arrow' class="huge arrow circle right icon"></i>
                     : <i class="heart icon"></i>
                     }
                    <div class="sub header">{breed_primary}</div>
                </div>
                </h2>
                 <img alt='dog' className='swipe-image' src={medium_photo_url}/>
                 <div>
                    {age}
                </div>
                </p>
                </div>


                <div class="column">
                <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>

                

                <span class="right floated arrow" onClick={this.handleNext}>
                     <i className='arrow' class="huge arrow circle right icon"></i>
                 </span>
                 </div>

            </div>
        )
    }
}