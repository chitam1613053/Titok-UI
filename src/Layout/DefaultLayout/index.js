import Header from '~/Layout/LayoutComponents/Header';
import Sidebar from '~/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useState, createContext } from 'react';

const cx = classNames.bind(styles);
export const UserContext = createContext();
export const userState = createContext();
export const videoContext = createContext();

function DefaultLayout({ children }) {
    const [isPlay, setIsPlay] = useState({ play: 'pause', current: null });
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

    const [followingAccountData, setFollowingAccountData] = useState(JSON.parse(localStorage.getItem('follow')) || []);
    const getUserData = (userAccount) => {
        setUserData(userAccount);
    };
    const addFollowingAccountData = (followAccounts) => {
        setFollowingAccountData(followAccounts);
    };
    const elementIsVisibleInViewport = (el) => {
        const { top, bottom } = el.getBoundingClientRect();
        const { innerHeight } = window;
        if (top < 450 && bottom > innerHeight / 2) {
            return true;
        } else {
            return false;
        }
    };

    const handleScroll = () => {
        const videoElements = document.querySelectorAll('.playVideo');

        videoElements.forEach((videoEl, index) => {
            if (elementIsVisibleInViewport(videoEl)) {
                if (index !== isPlay.current) {
                    videoEl.play();
                    setIsPlay({ play: 'play', current: index });
                }
            } else {
                videoEl.pause();
            }
        });
    };
    return (
        <UserContext.Provider value={{ getUserData, followingAccountData, addFollowingAccountData }}>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <userState.Provider value={userData}>
                        <videoContext.Provider value={{ isPlay, setIsPlay }}>
                            <div className={cx('content')} onScroll={handleScroll}>
                                {children}
                            </div>
                        </videoContext.Provider>
                    </userState.Provider>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default DefaultLayout;
