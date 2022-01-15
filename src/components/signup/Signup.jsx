import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSnackbar } from 'notistack';
import './Signup.css';
import { useSateValue } from '../../context/StateProvider';

function Login() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const signUp = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        enqueueSnackbar('Sign up success', {
          variant: 'success',
        });
        navigate('/login');
      }
    } catch (err) {
      enqueueSnackbar(err.message, {
        variant: 'error',
      });
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
          alt=""
          className="login__img"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__h1">Sign-up</h1>
        <form action="">
          <h5 className="login__h5">Email</h5>
          <input
            placeholder="Email"
            type="email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="login__h5">Password</h5>
          <input
            placeholder="Password"
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__button " onClick={signUp}>
            Sign up
          </button>
          <p className="p">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <Link to="/login">
            <button className="login_signupButton">
              Already have an account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
