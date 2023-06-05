import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signinWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signinWithGooglePopup();
    // console.log(user);

    createUserDocumentFromAuth(user);

    // console.log(userDocRef);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(`Incorrect password for email: ${email}`);
          break;
        case 'auth/user-not-found':
          alert(`User with email '${email}' not found.`);
          break;
        default:
          alert('Error occured on our side, try to log in again.');
          break;
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          require
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          required
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            onClick={signInWithGoogle}
            buttonType='google'
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
