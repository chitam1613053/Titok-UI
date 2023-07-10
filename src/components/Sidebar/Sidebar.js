import { routerConfig } from '~/Config/routerConfig';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeIconActive,
    FollowingIconActive,
    LiveIconActive,
} from '~/components/Icons';
import SuggestAccount from '../SuggestAccount/SuggestAccounts';

const cx = classNames.bind(styles);
const suggestAccountData = [
    {
        src: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5624df58e94a6983bd139e816e3e172~c5_100x100.jpeg?x-expires=1689134400&x-signature=kLL2pA1OvWS0v0dbKPHwCtk70AY%3D',
        nickname: '_Ha_.05',
        name: 'ha',
        tick: true,
        likes: 10,
        followers: 16,
    },
    {
        src: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1689127200&x-signature=u8znd9hkLBRwYRDwRtuUJ8AUSEo%3D',
        nickname: 'LeBong95',
        name: 'Lê Bống',
        tick: true,
        likes: '100k',
        followers: '50k',
    },
    {
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f6a62baa919c3eedb75d53ab662588b2.jpeg?x-expires=1689134400&x-signature=X%2F3HWKFS17ONLTAZ8HkQSoDvOrM%3D',
        nickname: 'minhlinhsan',
        name: 'Tâm',
        tick: false,
        likes: 78,
        followers: 13,
    },
];
const followingAccountData = [
    {
        src: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/50f05d95d5f6e23680e79a684fefd7c7~c5_100x100.jpeg?x-expires=1689138000&x-signature=TgcJt1N%2B80ozg7rzhVOrAzqjDsE%3D',
        nickname: 'honq.woa_',
        name: '𝗛𝗼𝗮',
        tick: true,
        likes: 100,
        followers: 20,
    },
    {
        src: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/5eb5fbc4be40cd88bdb11aa283b29bd4~c5_100x100.jpeg?x-expires=1689138000&x-signature=42lQMjTgKWAiW0ZyYX1AxJENoHo%3D',
        nickname: 'haidang_doo ',
        name: 'Hai Dang Doo',
        tick: false,
        likes: 100,
        followers: 20,
    },
    {
        src: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f6a62402b470b199204344ed567cc6a~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1689051600&x-signature=4%2BNk%2FKR9mafvFganZ8XNFNSCs8U%3D',
        nickname: 'ngocjilytg',
        name: 'Ngoc',
        tick: false,
        likes: 100,
        followers: 20,
    },
];
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title={'for you'}
                    to={routerConfig.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <MenuItem
                    title={'Following'}
                    to={routerConfig.Following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingIconActive />}
                />
                <MenuItem title={'live'} to={routerConfig.Live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <SuggestAccount label="Suggest Accounts" data={suggestAccountData} />
            <SuggestAccount label="Following Accounts" data={followingAccountData} />
        </aside>
    );
}

export default Sidebar;
