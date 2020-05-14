import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { actionUserName } from '../../../config/redux/action';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component{
    
    state = {
        email:'',
        password:''

    }
    handleChangetext = (e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleLoginSubmit = async ()=>{
        const {email, password} = this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({email,password}).catch(err => err);
        if(res) {
            console.log('login succes');
            localStorage.setItem('userData',JSON.stringify(res))
            this.setState({
                email: '',
                password:''
            })
            history.push('/Home')
        }else {
            console.log('login failed')
        }
        
    }
    render(){
        return(
            <div className="auth-container">
            <div className="auth-card">
                <p className="auth-tittle">Login Page</p>
                <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangetext} value={this.state.email}></input>
                <input className="input" id="password" placeholder="Passsword" type="password" onChange={this.handleChangetext} value={this.state.password}></input>
                <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}  />
                <p>Dont't Have Account?? <a href ='register'>Register</a></p>
            </div>
         </div>

        )
    }
}


const reduxState = (state) => ({
    isLoading: state.isLoading
   })
   const reduxDispatch = (dispatch) => ({
       loginAPI: (data) => dispatch(loginUserAPI(data))
   })
export default connect(reduxState, reduxDispatch)(Login);