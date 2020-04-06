import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading as setLoadingAction, setUser } from 'ducks/actions';
import { Button } from 'components/buttons/Button';
import Input from 'components/inputs/Input';
import { Redirect } from 'react-router-dom';
import cn from './LoginPage.module.scss';
const { PUBLIC_URL } = process.env;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const user = useSelector(state => state.user);
  const [formError, setFormError] = useState(false);
  // I was having issues with the disabled prop on the button, would like to discuss as well.
  // const isEnabled = email && email.length > 0 && password && password.length > 0;

  const handleFormChange = event => {
    if (event.target.type === 'email') {
      setUserEmail(event.target.value);
    }
    if (event.target.type === 'password') {
      setUserPassword(event.target.value);
    }
  };

  const handleUserSignIn = () => {
    if (email === '' || password === '') {
      setFormError(true);
    } else {
      setFormError(false);
      dispatch(setLoadingAction(true));
      setTimeout(function set_user() {
        dispatch(
          setUser({
            email,
            authenticated: true,
          }),
        );
        dispatch(setLoadingAction(false));
      }, 3000);
    }
  };

  return user.authenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className={cn.loginpage}>
      <section className={cn.header}>
        <img className={cn.logo} src={`${PUBLIC_URL}/cogn-logo-white.png`} alt="Cognitiv Logo" />
      </section>
      <section className={cn.login_and_terms}>
        <section className={cn.login_form}>
          <h3>Cognitiv Login</h3>
          <Input type="email" placeholder="Email Address" handleChange={handleFormChange} value={email} />
          <Input type="password" placeholder="Password" handleChange={handleFormChange} value={password} />
          <Button margin="10px 0 0 0" onClick={handleUserSignIn}>
            Sign In
          </Button>
          {formError ? <p className={cn.form_error}>Please enter a correct email and password</p> : ''}
        </section>
        <div className={cn.verticalDivider}></div>
        <section className={cn.cognitiv_terms}>
          <h3>Cognitiv Terms</h3>
          <p>
            By proceeding to login to your account and use Cognitiv, you are agreeing to our Terms of Service and
            Privacy Policy.
          </p>
          <p className={cn.reset_password}>Forgot Password?</p>
        </section>
      </section>
    </div>
  );
};

export default LoginPage;
