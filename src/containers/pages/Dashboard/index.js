import React, {Component, Fragment} from 'react';
import './Dashboard.scss';
import { addDataToAPI, getDataFromAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';
import {Media, Jumbotron, Button} from 'reactstrap';
import Header from '../Home/Header';


class Dashboard extends Component{
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

        const {title, content} = this.state;
        const {saveNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data  = {
            title : title,
            content :content,
            date : new Date().getTime(),
            userId : this.props.userData.uid
        }
        saveNotes(data)
        console.log(data)

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
          
            {
            notes.length > 0 ? (
            <Fragment>
                {
                    notes.map(note => {
                        return (
             
                        
            <div className="container">
                
            <div className="card-content" key={note.data.id}>
            <p className="title">{note.data.title}</p>
            <p className="date">{note.data.date}</p>
            <p className="content">{note.data.content}</p>
            </div>
            </div>
                        )
                    })
                }
            </Fragment>
            ) :null
    }   
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
export default connect(reduxState, reduxDispatch) (Dashboard);