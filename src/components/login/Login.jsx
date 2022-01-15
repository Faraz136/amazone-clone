import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { auth } from '../../firebase';
import { useSnackbar } from 'notistack';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        enqueueSnackbar('Sign in success', {
          variant: 'success',
        });
        navigate('/');
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
        <h1 className="login__h1">Sign-in</h1>
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

          <button type="submit" className="login__button " onClick={signIn}>
            Sign in
          </button>
          <p className="p">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <Link to="/signup">
            <button className="login_signupButton">
              Create your amazone account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
