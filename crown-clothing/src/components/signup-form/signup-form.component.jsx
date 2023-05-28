import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email and password.</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <label>Email</label>
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          required
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          required
        />

        <label>Confirm Password</label>
        <input
          type='password'
          name='confirmPassowrd'
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
