import classNames from 'classnames/bind';
import { useRef, useContext, useState, useEffect } from 'react';
import { UserContext, videoContext } from '~/Layout/DefaultLayout';
import { Link } from 'react-router-dom';
import style from './MainVideo.module.scss';
import NewBtn from '../Button';
import {
    VideoPlayIcon,
    VideoSoundIcon,
    VideoPauseIcon,
    VideoSoundActiveIcon,
    HeartIcon,
    ShareIcon,
    CommentIcon,
} from '../Icons';

const cx = classNames.bind(style);
function MainVideo({ index, video, account }) {
    const useInfo = useContext(UserContext);
    const addFollowingAccountData = useInfo.addFollowingAccountData;
    const followingAccountData = useInfo.followingAccountData;
    let indexAccount = followingAccountData.indexOf(account);
    indexAccount = -1;
    followingAccountData.forEach((acc, i) => {
        if (acc.nickname === account.nickname) {
            return (indexAccount = i);
        }
    });
    //
    const videoContexts = useContext(videoContext);
    const isPlay = videoContexts.isPlay;
    const setIsPlay = videoContexts.setIsPlay;
    const [sound, setSound] = useState(false);
    const videoRef = useRef();
    const handlePlayVideo = () => {
        videoRef.current.play();
        setIsPlay({ play: 'play', current: index });
    };
    const handlePauseVideo = () => {
        videoRef.current.pause();
        setIsPlay({ play: 'pause', current: index });
    };
    const handleSound = () => {
        setSound(!sound);
    };

    const handleClickAccount = () => {
        useInfo.getUserData(account);
        localStorage.setItem('user', JSON.stringify(account));
    };
    const handleFollow = () => {
        if (indexAccount < 0) {
            addFollowingAccountData((pre) => {
                const newFollows = [...pre, account];
                localStorage.setItem('follow', JSON.stringify(newFollows));
                return newFollows;
            });
        } else {
            const newFollows = followingAccountData.filter((account, i) => indexAccount !== i);
            localStorage.setItem('follow', JSON.stringify(newFollows));
            addFollowingAccountData(newFollows);
        }
    };
    console.log(video, account);
    const handleVolumeChange = (e) => {
        videoRef.current.volume = e.target.value;
    };
    useEffect(() => {
        if (!sound) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = videoContexts.volume;
        }
    });

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('account-item')} onClick={handleClickAccount} to={`/@${account.nickname}`}>
                <img className={cx('avatar')} src={account.avatar} alt="avatar" />
            </Link>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <div className={cx('header-content')}>
                        <div className={cx('title')}>
                            <Link
                                className={cx('account-item')}
                                onClick={handleClickAccount}
                                to={`/@${account.nickname}`}
                            >
                                <p className={cx('nickname')}>{account.nickname}</p>
                            </Link>
                            <p className={cx('fullName')}>{account.full_name}</p>
                        </div>
                        <div className={cx('desc')}>
                            <p className={cx('video-title')}>{video.title}</p>
                            <p className={cx('hashtag')}>#{account.nickname}</p>
                            <p className={cx('hashtag')}>#meme</p>
                            <p className={cx('hashtag')}>#XuHuong2023</p>
                            <p className={cx('hashtag')}>#CloneTikTok</p>
                        </div>
                        <div className={cx('music-name')}>original sound - {account.full_name}</div>
                    </div>
                    <NewBtn outline small className={cx('video-follow')} onClick={handleFollow}>
                        {indexAccount > -1 ? 'UnFollow' : 'Follow'}
                    </NewBtn>
                </header>
                <div className={cx('video-wrap')}>
                    <video ref={videoRef} data-index={index} className={cx('video', 'playVideo')} muted={!sound} loop>
                        <source src={video.src} type="video/mp4"></source>
                    </video>
                    <div
                        className={cx('play-icon', 'icon', { removeIcon: isPlay.play === 'play' })}
                        onClick={handlePlayVideo}
                    >
                        <VideoPlayIcon />
                    </div>
                    <div
                        className={cx('pause-icon', 'icon', { removeIcon: isPlay.play === 'pause' })}
                        onClick={handlePauseVideo}
                    >
                        <VideoPauseIcon />
                    </div>
                    <div className={cx('sound-icon', 'icon', { removeIcon: sound })} onClick={handleSound}>
                        <VideoSoundIcon />
                    </div>
                    <div className={cx('sound-active-icon', 'icon', { removeIcon: !sound })} onClick={handleSound}>
                        <VideoSoundActiveIcon />
                    </div>
                    <div className={cx('video-action')}>
                        <div className={cx('video-action-wrap')}>
                            <HeartIcon />
                        </div>
                        <p className={cx('video-action-desc')}>{account.likes_count}</p>
                        <div className={cx('video-action-wrap')}>
                            <CommentIcon />
                        </div>
                        <p className={cx('video-action-desc')}>{account.followers_count}</p>

                        <div className={cx('video-action-wrap')}>
                            <ShareIcon />
                        </div>
                        <p className={cx('video-action-desc')}>{account.followings_count}</p>
                    </div>
                    <div className={cx('change-volume')}>
                        <input
                            className={cx('range')}
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={videoContexts.volume}
                            onChange={(e) => {
                                videoContexts.handleAdjustVolume(e);
                                handleVolumeChange(e);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainVideo;
