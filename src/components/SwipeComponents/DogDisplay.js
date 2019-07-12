import React, { Component } from 'react'


export default class DogDisplay extends Component {
    handleClick = e => {
        this.props.onClick(e)
    }

    handleNext = () => {
        this.props.onNext()
    }
    handleFavorite = () => {
        this.props.onFavorite(this.props.dog)
    }
    render() {
      console.log(this.props.dog)
        const {medium_photo_url, name, age, description, gender, breed_primary, status} = this.props.dog
        return(
            <div class="ui three column grid">

                <div class='column'>
                <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>
                <span class="left floated like" onClick={this.handleFavorite}>
                    <i className='heart' class="huge like icon"></i>
                 </span>
                </div>

                <div class="column">
                    <p className='bordered'>
                <h2 class="ui header">
                <div class="content">
                    {name}
                    <div class="sub header">{breed_primary}</div>
                </div>
                </h2>
                 <img alt='dog' className='swipe-image' src={medium_photo_url}/>
                 <div>
                    {age}
                    <br></br>
                    {gender}
                </div>
                </p>
                </div>


                <div class="column">
                <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>
                 <h1 className='spacer'></h1>



                <span class="right floated arrow" onClick={this.handleNext}>
                     <i class="huge arrow circle right icon"></i>
                 </span>
                 </div>

            </div>
        )
    }
}
