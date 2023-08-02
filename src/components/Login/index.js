import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Login.module.scss';
const cx = classNames.bind(style);
function ModalLogin({ show, setShowModal, setCurrentUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passWordValid, setPassWordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const checkLoginBtn = username && password && password.length > 5;

    const handleValidPassword = () => {
        if (password && password.length < 6) {
            setPassWordValid(false);
        } else {
            setPassWordValid(true);
        }
    };
    const handleClose = () => {
        setShowModal(false);
        setPassword('');
    };
    const handleLogin = async () => {
        if (!username || !password) {
            return;
        }
        setCurrentUser(true);
        // localStorage.setItem('user', username);

        handleClose();
    };
    const handleEnter = (e) => {
        if (e.keyCode === 13 && password && password.length > 5) {
            handleLogin();
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                    <div className={cx('login_title')}>
                        <Modal.Title style={{ fontSize: '30px', fontWeight: '700' }}>Log in to tiktok</Modal.Title>
                    </div>
                </Modal.Header>
                <div className={cx('login-container', 'col-8')}>
                    {/* <h3 className="login_title">Login</h3> */}
                    <span className={cx('Login_desc')}>Username: </span>
                    <input
                        className={cx('login_input')}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <div className={cx('password_contain')} onBlur={handleValidPassword}>
                        <span className={cx('Login_desc')}>Password:</span>

                        <input
                            className={cx('login_input')}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (e.target.value.length > 5) {
                                    setPassWordValid('login_valid');
                                }
                            }}
                            onKeyDown={handleEnter}
                        />
                        <div
                            // className={password ? 'password_action' : 'hidden_class'}
                            className={password ? cx('password_action') : cx('hidden_class')}
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                        >
                            {showPassword ? (
                                <FontAwesomeIcon className={cx('passwordIcon')} icon={faEye} />
                            ) : (
                                <FontAwesomeIcon className={cx('passwordIcon')} icon={faEyeSlash} />
                            )}
                        </div>
                    </div>
                    <span className={passWordValid ? cx('login_valid') : cx('login_valid', 'invalid')}>
                        password must be have more than 6 character
                    </span>
                    <button
                        className={checkLoginBtn ? cx('btn', 'login_btn', 'active_btn') : cx('btn', 'login_btn')}
                        onClick={handleLogin}
                    >
                        Log in
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ModalLogin;
