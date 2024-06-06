import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage = (props) => {
  return (
    <div>
      <LoginForm history={props.history} />
    </div>
  );
};

export default LoginPage;