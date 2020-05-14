import React, {Component, Fragment} from 'react';
import './input.scss';
import { addDataToAPI, getDataFromAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';
import {Media, Jumbotron, Button} from 'reactstrap';
import Header from '../Home/Header';

class Input extends Component{
   state = {
       title : '',
       content : '',
       date : ''
   }
   componentDidMount(){
       const userData = JSON.parse(localStorage.getItem('userData'));
       this.props.getNotes(userData.uid);
   }
    handleSaveNotes = () => {
        const fakeDate = new Date().getTime();
        const realDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(fakeDate);
        const {title, content} = this.state;
        const {saveNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data  = {
            title : title,
            content :content,
            date : realDate,
            userId : this.props.userData.uid
        }
        saveNotes(data)
        alert('berhasil disimpan')

    }
    onInputChange = (e, type) => {
       this.setState({
        [type] : e.target.value
    })
    }
  
    render(){
        const {title, content , date} = this.state;
        const {notes} = this.props;
        console.log('notes', notes);
        return(
            <div>
                <Header></Header>
        <div className="container">
            
            <div className="input-form">
            <input className="input-title" placeholder="title" value={title} onChange= {(e) => this.onInputChange(e, 'title')}></input>
            <textarea className="input-content" placeholder="content" value={content} onChange= {(e) => this.onInputChange(e, 'content')}>
            </textarea>
            <Button className="info" onClick={this.handleSaveNotes}>Simpan</Button>
            </div>
            <hr/>
           
        </div>
        </div>

        )
    }  
}
const reduxState = (state) => ({
    userData : state.user,
    notes : state.notes
})
const reduxDispatch = (dispatch) => ({
    saveNotes : (data) => dispatch(addDataToAPI(data)),
    getNotes : (data) => dispatch(getDataFromAPI(data))
})
export default connect(reduxState, reduxDispatch) (Input);