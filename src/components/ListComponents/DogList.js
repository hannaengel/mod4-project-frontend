import React, { Component } from 'react'
import DogCard from './DogCard';
import { Header, Icon} from 'semantic-ui-react'
import Navbar from '../Navbar.js';

export default class DogList extends Component {

    constructor() {
        super();
        this.state = {
            dogs: []
        };
    }

    componentDidMount(){
        this.fetchDogs()
    }

    fetchDogs = () =>{
        {/*fetch('http://localhost:3000/api/v1/pets')
            .then(res=>res.json())
            .then(data => {
            console.log(data)
            this.setState({dogs: data})
        })
        */}

        let token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/api/v1/users/displayPets', {
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


    render() {
        return(

            <React.Fragment>
            {document.body.style = 'background: white;'}
            <Navbar />
            <div className='list-top-image'>
                <header className='small-spacer'></header>
                <div>
                    <Header as='h1' icon textAlign='center'>
                    <Icon name='paw' circular />
                    <Header.Content>Favorites</Header.Content>
                    </Header>

                </div>
                <header className='small-spacer'></header>
                </div>

                <div className="ui three column grid" >
                {this.state.dogs.map((dog) => {
                    return   <div className="column"><DogCard key={dog.id} dog={dog}/></div>
                })}
                </div>

            </React.Fragment>
        )
    }
}
