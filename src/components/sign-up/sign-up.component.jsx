import {useState} from "react";
import {SignUpTitle, SignUpContainer} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";

import {signUpStart} from "../../redux/user/user.actions";

const SignUp  = () => {
    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;


    const handleSubmit = async evt => {
        evt.preventDefault();

        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        dispatch(signUpStart({displayName, email, password}));
    }

    const handleChange = evt => {
        const {name, value} = evt.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
}

export default SignUp;