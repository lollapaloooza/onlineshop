import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import {Component} from "react";
import {SignInContainer, ButtonsContainer, SignInTitle} from "./sign-in.styles";



class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    }

    handleChange = evt => {
        const {name, value} = evt.target;

        this.setState({
            [name]: value
        })
    }


    render() {
        const {googleSignInStart} = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        label='Email'
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                    <FormInput
                        name='password'
                        label='Password'
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required/>

                    <ButtonsContainer>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);