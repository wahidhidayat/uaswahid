import React, {Component} from 'react';
import './Register.scss';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component{
    state = {
        email:'',
        password:''

    }
    handleChangetext = (e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleRegisterSubmit = async ()=>{
        const {email, password} = this.state;
        const {history} = this.props;
        const res = await this.props.registerAPI({email,password}).catch(err => err);
        if (res){
            alert('Register Succes')            
            this.setState({
                email : '',
                password : '' 
            })

            history.push('/')
        }
        this.setState({
            email: '',
            password:''
        })
    }
    render(){
        return(
        
            <div className="auth-container">
            <div className="auth-card">
                <p className="auth-tittle">Register Page</p>
                <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangetext} value={this.state.email}></input>
                <input className="input" id="password" placeholder="Passsword" type="password" onChange={this.handleChangetext} value={this.state.password}></input>
                <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}  />
            </div>
         </div>
        )
    }
}
const reduxState = (state) => ({
 isLoading: state.isLoading
})
const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})
export default connect(reduxState, reduxDispatch ) (Register);