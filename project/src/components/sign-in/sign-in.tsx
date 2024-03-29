import {useRef, FormEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../store/api-actions';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {redirectToRoute} from '../../store/action';

function SignIn(): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.Root));
  }

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className='user-page'>
      <Header class={'user-page__head'} isSingInPage />

      <div className='sign-in user-page__content'>
        <form action='#' className='sign-in__form' onSubmit={handleSubmit}>
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input ref={loginRef} className='sign-in__input' type='email' placeholder='Email address' name='user-email' id='user-email' />
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input ref={passwordRef} className='sign-in__input' type='password' placeholder='Password' name='user-password' id='user-password' />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit'>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
export default SignIn;
