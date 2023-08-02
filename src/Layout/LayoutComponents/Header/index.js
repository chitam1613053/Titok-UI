import classNames from 'classnames/bind';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import { InboxIcon, MessagesIcon } from '~/components/Icons';
import Search from '../Search';
import { routerConfig } from '~/Config/routerConfig';
import { useState } from 'react';
import ModalLogin from '~/components/Login';
const cx = classNames.bind(styles);
const logoutmenu = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'VietNamese' },
                { code: 'en', title: 'China' },
                { code: 'vi', title: 'Campodian' },
                { code: 'en', title: 'Japan' },
                { code: 'vi', title: 'Italy' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Indonesia' },
                { code: 'en', title: 'Philipin' },
                { code: 'vi', title: 'Malaysia' },
                { code: 'en', title: 'Myanma' },
                { code: 'vi', title: 'India' },
                { code: 'en', title: 'Us' },
                { code: 'vi', title: 'Arapxiut' },
                { code: 'en', title: 'Jermany' },
                { code: 'vi', title: 'Canada' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tieng Viet' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcut',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coin',
        to: '/Coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/Setting',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'VietNamese' },
                { code: 'en', title: 'China' },
                { code: 'vi', title: 'Campodian' },
                { code: 'en', title: 'Japan' },
                { code: 'vi', title: 'Italy' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Indonesia' },
                { code: 'en', title: 'Philipin' },
                { code: 'vi', title: 'Malaysia' },
                { code: 'en', title: 'Myanma' },
                { code: 'vi', title: 'India' },
                { code: 'en', title: 'Us' },
                { code: 'vi', title: 'Arapxiut' },
                { code: 'en', title: 'Jermany' },
                { code: 'vi', title: 'Canada' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tieng Viet' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcut',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];
function Header() {
    // const currentUser = true;

    const handleMenuChange = (menuItem) => {
        if (menuItem.title === 'Log out') {
            console.log(menuItem);
            setCurrentUser(false);
        }
    };
    const [currentUser, setCurrentUser] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const handleLogin = () => {
        setShowModalLogin(true);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routerConfig.home}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <Search></Search>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('CurrentUser')}>
                                <Tippy content="upload videos">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                                <Tippy content="Messages">
                                    <button className={cx('action-btn')}>
                                        <MessagesIcon className={cx('messages-icon')} />
                                    </button>
                                </Tippy>
                                <Tippy content="Inbox">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon className={cx('inbox-icon')} />
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text onClick={handleLogin}>
                                Up load
                            </Button>
                            <Button primary className={cx('tam')} onClick={handleLogin}>
                                log in
                            </Button>
                        </>
                    )}
                    {/* <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-tiktok/users/4737/6462410bca9e5.jpg"
                                alt="User"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu> */}
                    {console.log(currentUser)}
                    {currentUser && (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <img
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-tiktok/users/4737/6462410bca9e5.jpg"
                                alt="User"
                            />
                        </Menu>
                    )}{' '}
                    {!currentUser && (
                        <Menu items={logoutmenu} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
            <ModalLogin show={showModalLogin} setShowModal={setShowModalLogin} setCurrentUser={setCurrentUser} />
        </header>
    );
}

export default Header;
