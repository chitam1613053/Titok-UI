import Header from '~/Layout/LayoutComponents/Header';
import Sidebar from '~/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useState, createContext } from 'react';

const cx = classNames.bind(styles);
export const UserContext = createContext();
export const userState = createContext();
function DefaultLayout({ children }) {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
    const getUserData = (userAccount) => {
        setUserData(userAccount);
    };
    return (
        <UserContext.Provider value={getUserData}>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <userState.Provider value={userData}>
                        <div className={cx('content')}>{children}</div>
                    </userState.Provider>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default DefaultLayout;
