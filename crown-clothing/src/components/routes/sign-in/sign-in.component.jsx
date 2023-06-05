import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

import SignupForm from '../../signup-form/signup-form.component';
import Button from '../../button/button.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    // console.log(user);

    createUserDocumentFromAuth(user);

    // console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
