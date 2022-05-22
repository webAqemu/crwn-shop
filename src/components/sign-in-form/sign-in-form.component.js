import { useState } from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

import FormInput from '../form-input';
import Button from '../button';

import './sign-in-form.styles.sass';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('user not found');
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />
        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />
        <div className='sign-in-buttons'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
