import React, {useState,useContext} from 'react';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import {FirebaseContext} from '../context/firebase'

export default function SignIn() {
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //check form input elements are valid
    //email & password
    //if password is empty isInvalid will be true
    const isInvalid = password === '' || emailAddress ===  '';
    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(() => {

            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.mesage);
            });
    };

    return (
    <>
    <HeaderContainer>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">
                <Form.Input
                placeholder ="Email address"
                value ={emailAddress}
                onChange ={({target})=> setEmailAddress(target.value)}
                />
                <Form.Input
                type ="passsword"
                placeholder ="Password"
                autoComplete ="off"
                value ={password}
                onChange ={({target})=> setPassword(target.value)}
                />
                <Form.Submit disabled={isInvalid} type="submit">
                    Sign In
                </Form.Submit>
            </Form.Base>
            <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign Up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </Form.TextSmall>
        </Form>
    </HeaderContainer>
    <FooterContainer/>
    </>
    );
}