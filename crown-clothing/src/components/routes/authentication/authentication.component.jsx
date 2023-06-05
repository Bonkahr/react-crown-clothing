import SignupForm from '../../signup-form/signup-form.component';
import SignInForm from '../../signin-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
