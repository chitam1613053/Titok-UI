import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import NewBtn from '~/components/Button';
import { userState } from '~/Layout/DefaultLayout';
import { useContext, useState } from 'react';
import { LinkIcon } from '~/components/Icons';
import UserMedia from './UserMedia';
const cx = classNames.bind(styles);
function Profile() {
    const userData = useContext(userState);
    const [isFollow, setIsFollow] = useState(false);
    const handleFollow = () => {
        setIsFollow(!isFollow);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <header className={cx('header')}>
                    <img src={userData.avatar} alt={userData.nickname} className={cx('avatarImage')} />
                    <div className={cx('userTitle')}>
                        <h2 className={cx('userNickname')}>{userData.nickname}</h2>
                        <p className={cx('userName')}> {userData.full_name}</p>
                        <NewBtn className={cx('followBtn')} primary onClick={handleFollow}>
                            {isFollow ? 'Followed' : 'Follow'}
                        </NewBtn>
                    </div>
                </header>
                <div className={cx('userInformation')}>
                    <div className={cx('userSocial')}>
                        <p className={cx('socialItem')}>
                            <span className={cx('userCount')}>{userData.followings_count}</span>Following
                        </p>
                        <p className={cx('socialItem')}>
                            <span className={cx('userCount')}>{userData.followers_count}</span>Followers
                        </p>
                        <p className={cx('socialItem')}>
                            <span className={cx('userCount')}>{userData.likes_count}</span>Likes
                        </p>
                    </div>
                    <div className={cx('userMoreInfo')}>
                        <p className={cx('userInfoItem')}>📨 Mail : {userData.nickname}@gmail.com</p>
                        <p className={cx('userInfoItem')}>✨FB: {userData.full_name}✨</p>
                        <p className={cx('userInfoItem')}>✨IG : {userData.nickname}_IG✨</p>
                        <p className={cx('userInfoItem')}>
                            <LinkIcon />
                            youtube.com/@HT2905
                        </p>
                    </div>
                </div>
                <div className={cx('userMedia')}>
                    <UserMedia />
                </div>
            </div>
        </div>
    );
}

export default Profile;
