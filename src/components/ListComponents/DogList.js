import React, { Component } from 'react'
import DogCard from './DogCard';
import { Header, Icon} from 'semantic-ui-react'
import Navbar from '../Navbar.js';

export default class DogList extends Component {

    constructor() {
        super();
        this.state = {
            dogs: [],
            user_id: null,
            username: ''
        }
      }

    componentDidMount(){
        this.fetchDogs()
        this.getUser()
    }

    fetchDogs = () => {
        {/*fetch('http://localhost:3000/api/v1/pets')
            .then(res=>res.json())
            .then(data => {
            console.log(data)
            this.setState({dogs: data})
        })
        */}

        let token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/api/v1/displayPets', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(res=>res.json())
        .then(json=> {
          console.log(json)
          this.setState({
            dogs: json
          })
        })
    }

    removeFavorite = (dog) => {
      console.log('in top remove favorite')
      let dogId = dog.id
      let userId = this.state.user_id

      // fetch(`http://localhost:3000/api/v1/profile`, {
      //   method: "DELETE",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ image_id: imageID, content: comment.content })
      // })

    }

    getUser = () => {
      let token = localStorage.getItem("jwt")
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res=>res.json())
      .then(json=> {
        this.setState({
          user_id: json.user.id,
          username: json.user.username
        })
      })
    }

    render() {
        return(

            <React.Fragment>
              
            <Navbar />
            <div>
                <h1 className='mini-spacer'></h1>
                <div  className='white'>
                <h1 class="ui center aligned icon header paw">
                    <i className=" paw icon "></i>
                     Favorites
                </h1>
                </div>
                <h1 className='mini-spacer'></h1>
                </div>
                <div className="ui three column grid" >
                {this.state.dogs.map((dog) => {
                    return   <div className="column"><DogCard removeFavorite={this.removeFavorite}key={dog.id} userId={this.state.user_id} dog={dog}/></div>
                })}
                </div>
             

            </React.Fragment>
        )
    }
}
