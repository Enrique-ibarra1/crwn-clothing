import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch(err) {
            console.log(err);
        }
        
    };
    handleChange = (e) => {
        const {value, name} = e.target;
        //[name] here is the name of the key in our state object, value is our form submitted value.
        //will set email: value/password: value
        this.setState({[name] : value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="Email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" type="Password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''}Sign in with Google{''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
