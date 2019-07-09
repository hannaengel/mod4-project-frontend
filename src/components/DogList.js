import React, { Component } from 'react'
import DogCard from './DogCard';
import { Header, Icon} from 'semantic-ui-react'
import Navbar from './Navbar';
export default class DogList extends Component {

//state here
    render() {
        return( 
            
            <React.Fragment> 
            {document.body.style = 'background: white;'}
            <Navbar />
                <header className='small-spacer'></header>
                <div>
                    <Header as='h1' icon textAlign='center'>
                    <Icon name='paw' circular />
                    <Header.Content>Favorites</Header.Content>
                    </Header>
                 
                </div>
                <header className='small-spacer'></header>

   
                <div className="ui three column grid" >
                {this.props.dogs.map((dog) => {
                    return   <div className="column"><DogCard key={dog.id} dog={dog}/></div>
                })}
                </div>
         
            </React.Fragment>
        )
    }
}