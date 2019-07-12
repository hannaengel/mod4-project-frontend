import React, { Component } from 'react'



export default class CardFront extends Component {
handleClick = e => {
    this.props.onClick(e)
}

  handleRemove = () => {
    console.log('in handle remove')
    this.props.removeFavorite(this.props.dog)
  }


    render() {
        const {medium_photo_url, name} = this.props.dog
        return(
            <div>
                <div class="ui card">
                    <div class="content">
                    <div class="ui medium bordered image">
                    <img onClick={this.handleClick} alt='dog' src={medium_photo_url}/>
                    </div>
                    <div class="ui medium header">
                        {name}
                    </div>


                    </div>
                    <div class="extra content">
                    <div class="ui two buttons">
                        <div onClick={this.handleRemove} class="ui basic grey button">Remove</div>
                        <button class="ui pink button">Request to Meet</button>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
