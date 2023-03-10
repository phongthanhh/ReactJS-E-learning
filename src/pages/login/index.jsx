import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyledLogin } from './styled'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function Login() {
  const { activeLoginPage } = useSelector((state) => state.userReducer)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(activeLoginPage)
  }, [activeLoginPage])

  return (
    <StyledLogin className="container-fluid">
      <div className={`container loginContainer ${isActive ? 'right__panel__active' : null}`}>
        <div className="loginContainer__form sign-up-container">
          <SignUpForm />
        </div>
        <div className="loginContainer__form sign-in-container">
          <SignInForm />
        </div>
        <div className="overlayContainer">
          <div className="overlay">
            <div className="overlay__panel overlay__left">
              <h1>Chào mừng bạn đã trở lại!</h1>
              <p className="overlay__panel__text">Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
              <button type="button" className="overlay__panel__btn" id="signIn" onClick={() => setIsActive(false)}>Đăng nhập</button>
            </div>

            <div className="overlay__panel overlay__right">
              <h1>Xin chào!</h1>
              <p className="overlay__panel__text">Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
              <button type="button" className="overlay__panel__btn" id="signUp" onClick={() => setIsActive(true)}>Đăng ký</button>
            </div>

          </div>
        </div>
      </div>
    </StyledLogin>
  )
}

export default Login
