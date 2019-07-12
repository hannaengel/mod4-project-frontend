import React, { Component } from 'react'


export default class DogDisplay extends Component {

    constructor(props){
        super(props)
        this.state = {
          isLiked: false
        }
      }

    handleClick = e => {
        this.props.onClick(e)
    }


    handleNext = () => {
        this.setState(prevState => ({
          isLiked: false }), ()=> console.log(this.state.isLiked))
        this.props.onNext()

    }
    handleFavorite = () => {
       this.setState(prevState => ({
         isLiked: true}), ()=> console.log(this.state.isLiked));
         this.props.onFavorite(this.props.dog)
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
                  {this.state.isLiked===true?
                    <i id='favoriteIcon' className="huge like icon heart"></i>:
                    <i id='favoriteIcon' className="huge like icon"></i>}
                 </span>
                </div>

                <div class="column">
                    <p className='bordered'>
                <h2 class="ui header">
                <div class="content">
                    {name}
                    {gender==='Female'?
                     <i className="small venus icon"></i>
                     : <i class="small mars icon"></i>
                     }
                    <div class="sub header">{breed_primary}</div>
                </div>
                </h2>
                 <img alt='dog' className='swipe-image' src={medium_photo_url}/>
                 <div id="age-div">
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
