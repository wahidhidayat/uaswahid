import React, {Component} from 'react';
import {Media, Jumbotron, Button} from 'reactstrap';
import Header from './Header';

class Home extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                <Jumbotron>
        <h1 className="display-3">SELAMAT DATANG DI CERITA PENDEK</h1>
        <p className="lead">Website ini berisi beberapa kumpulan cerita pendek yang datanya diambil dari firebase</p>
        <hr className="my-2" />
        <p>UAS React Native</p>
        <p className="lead">
        <a href="/Dashboard">
            <Button color="primary">Lihat Cerpen</Button>
        </a>
        </p>
      </Jumbotron>
      
            </div>
        )
    }
}
export default Home;

class Footer extends Component{
    render(){
        return(
            <div>
                <p></p>
            </div>
        )
    }
}