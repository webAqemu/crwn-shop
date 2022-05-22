import SignUp from '../../components/sign-up-form';
import SignIn from '../../components/sign-in-form';

import './authentication.styles.sass';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
