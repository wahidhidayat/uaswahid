import React, {Component} from 'react';
import {Media, Jumbotron, Button} from 'reactstrap';
import Header from '../Home/Header';

class Home extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                
      <Media>
        <Media object width="holder image" />
      </Media>
      <Media body>
        <Media heading>
        <tr>
            <th scope="row"></th>
            <th>Nama</th>
            <td>:</td>
            <td>Nor Wahid Hidayad Ulloh</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>TTL</th>
            <td>:</td>
            <td>Sragen, 8 Maret 1999</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>Jenis Kelamin</th>
            <td>:</td>
            <td>Laki-Laki</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>Alamat</th>
            <td>:</td>
            <td>Candi Plosorejo Gondang Sragen</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>No. Hp</th>
            <td>:</td>
            <td>085333005636</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>Status</th>
            <td>:</td>
            <td>Mahasiswa</td>
            <td></td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>Nim</th>
            <td>:</td>
            <td>1641720157</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>Hobi</th>
            <td>:</td>
            <td>Olahraga</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <th>Email</th>
            <td>:</td>
            <td>wahidhidayat3899@gmail.com</td>
        </tr>

        </Media>
            Politeknik Negeri Malang 
            Jurusan Teknik Informatika
      </Media>
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