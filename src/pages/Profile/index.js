import classNames from 'classnames/bind';
import { useContext, useState } from 'react';

import videos from '~/assets/videos';
import styles from './Profile.module.scss';
import NewBtn from '~/components/Button';
import { userState, UserContext } from '~/Layout/DefaultLayout';
import { BlockIcon, LinkIcon } from '~/components/Icons';
import UserMedia from './UserMedia';
import LikedContent from './LikedContent';
const cx = classNames.bind(styles);
function Profile() {
    const userData = useContext(userState);
    const followContext = useContext(UserContext);

    const addFollowingAccountData = followContext.addFollowingAccountData;
    const followingAccountData = followContext.followingAccountData;
    const [userNav, setUserNav] = useState('videos');
    let index = followingAccountData.indexOf(userData);
    index = -1;
    followingAccountData.forEach((account, i) => {
        if (account.nickname === userData.nickname) {
            return (index = i);
        }
    });
    const handleFollow = () => {
        if (index < 0) {
            addFollowingAccountData((pre) => {
                const newFollows = [...pre, userData];
                localStorage.setItem('follow', JSON.stringify(newFollows));
                return newFollows;
            });
        } else {
            const newFollows = followingAccountData.filter((account, i) => index !== i);
            localStorage.setItem('follow', JSON.stringify(newFollows));
            addFollowingAccountData(newFollows);
        }
    };
    const ofSet = userData.id % 7;
    const videosIndex = [];
    for (var i = ofSet; i < videos.length; i = i + ofSet + 4) {
        videosIndex.push(i);
    }
    const a = videos.filter((video, index) => {
        return videosIndex.includes(index);
    });

    console.log(a);
    return (
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <header className={cx('header')}>
                    <img src={userData.avatar} alt={userData.nickname} className={cx('avatarImage')} />
                    <div className={cx('userTitle')}>
                        <h2 className={cx('userNickname')}>{userData.nickname}</h2>
                        <p className={cx('userName')}> {userData.full_name}</p>
                        <NewBtn className={cx('followBtn')} primary onClick={handleFollow}>
                            {index > -1 ? 'UnFollow' : 'Follow'}
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
            </div>
            <div className={cx('user-content')}>
                <div className={cx('user-nav')}>
                    <h3
                        className={cx('user-nav-item', 'videos', { 'user-nav--active': userNav === 'videos' })}
                        onClick={() => {
                            setUserNav('videos');
                        }}
                    >
                        Videos
                    </h3>
                    <h3
                        className={cx('user-nav-item', 'liked', { 'user-nav--active': userNav === 'liked' })}
                        onClick={() => {
                            setUserNav('liked');
                        }}
                    >
                        <BlockIcon /> Liked
                    </h3>
                    <div className={cx('user-nav-line')}></div>
                </div>
                <div className={cx('user-body')}>
                    {userNav === 'videos' ? <UserMedia videos={a} /> : <LikedContent user={userData} />}
                </div>
            </div>
        </div>
    );
}

export default Profile;
