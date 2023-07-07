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
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tieng Viet' },
                { code: 'en', title: 'China' },
                { code: 'vi', title: 'Campodian' },
                { code: 'en', title: 'Japan' },
                { code: 'vi', title: 'Italy' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Indonesia' },
                { code: 'en', title: 'Philipin' },
                { code: 'vi', title: 'Malaysia' },
                { code: 'en', title: 'Mianma' },
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
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];
function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
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
                            <Button text>Up load</Button>
                            <Button primary className={cx('tam')}>
                                log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/348555833_262309772936980_6885896410385128857_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=111&ccb=1-7&_nc_sid=f67be1&_nc_ohc=NGZTs8ULcaUAX8HG1Mz&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfCJw1aZ2HFMITGjEP90ckr8ulIcR-wqpmya44vE3nWpKg&oe=64A75FA3"
                                alt="User"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
