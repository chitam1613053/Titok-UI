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

    const [followingAccountData, setFollowingAccountData] = useState(JSON.parse(localStorage.getItem('follow')) || []);
    const getUserData = (userAccount) => {
        setUserData(userAccount);
    };
    const addFollowingAccountData = (followAccounts) => {
        setFollowingAccountData(followAccounts);
    };
    return (
        <UserContext.Provider value={{ getUserData, followingAccountData, addFollowingAccountData }}>
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
