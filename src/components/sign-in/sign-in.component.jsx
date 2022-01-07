import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import {SignInContainer, ButtonsContainer, SignInTitle} from "./sign-in.styles";



const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async evt => {
        evt.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = evt => {
        const {name, value} = evt.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        label='Email'
                        type="email"
                        value={email}
                        handleChange={handleChange}
                        required/>
                    <FormInput
                        name='password'
                        label='Password'
                        type="password"
                        value={password}
                        handleChange={handleChange}
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

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);