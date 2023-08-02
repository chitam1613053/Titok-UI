import classNames from 'classnames/bind';
// import { useContext, useState } from 'react';

import videos from '~/assets/videos';
import styles from './Home.module.scss';
// import NewBtn from '~/components/Button';
// import { UserContext } from '~/Layout/DefaultLayout';
import MainVideo from '~/components/MainVideo';
const cx = classNames.bind(styles);
const suggestAccountData = [
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        last_name: 'Bống',
        full_name: 'Lê Bống',
        nickname: 'LeBong95',
        id: 3,
        tick: true,
        followers_count: '500',
        followings_count: '25k',
        likes_count: '12k',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        last_name: 'Bống',
        full_name: 'Lê Bống',
        nickname: 'LeBong95',
        id: 3,
        tick: true,
        followers_count: '500',
        followings_count: '25k',
        likes_count: '12k',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        last_name: 'Bống',
        full_name: 'Lê Bống',
        nickname: 'LeBong95',
        id: 3,
        tick: true,
        followers_count: '500',
        followings_count: '25k',
        likes_count: '12k',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4737/6462410bca9e5.jpg',
        last_name: 'Ha',
        full_name: 'Ngoc Ha',
        nickname: '_Ha_.05',
        id: 1112,
        tick: true,
        followers_count: 50,
        followings_count: 25,
        likes_count: 12,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        last_name: 'Bống',
        full_name: 'Lê Bống',
        nickname: 'LeBong95',
        id: 3,
        tick: true,
        followers_count: '500',
        followings_count: '25k',
        likes_count: '12k',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4765/63e222af65973.jpg',
        last_name: 'Tâm',
        full_name: 'Ngọc Tâm',
        nickname: 'minhlinhsan',
        id: 113,
        tick: false,
        followers_count: 98,
        followings_count: 176,
        likes_count: 122,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4765/63e222af65973.jpg',
        last_name: 'Tâm',
        full_name: 'Ngọc Tâm',
        nickname: 'minhlinhsan',
        id: 113,
        tick: false,
        followers_count: 98,
        followings_count: 176,
        likes_count: 122,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4765/63e222af65973.jpg',
        last_name: 'Tâm',
        full_name: 'Ngọc Tâm',
        nickname: 'minhlinhsan',
        id: 113,
        tick: false,
        followers_count: 98,
        followings_count: 176,
        likes_count: 122,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/5167/63f97a1f7015c.jpg',
        last_name: 'Anh',
        full_name: 'Mr Birdy',
        nickname: 'anhbui01vn',
        id: 567,
        tick: false,
        followers_count: 3,
        followings_count: 5,
        likes_count: 11,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/66/630267938a965.jpg',
        last_name: 'Tuấn',
        full_name: 'Tuấn Nguyễn',
        nickname: 'tuandev202',
        id: 66,
        tick: false,
        followers_count: 4,
        followings_count: 6,
        likes_count: 0,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/66/630267938a965.jpg',
        last_name: 'Tuấn',
        full_name: 'Tuấn Nguyễn',
        nickname: 'tuandev202',
        id: 66,
        tick: false,
        followers_count: 4,
        followings_count: 6,
        likes_count: 0,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4199/636bbb27a4661.jpg',
        last_name: 'Đệ',
        full_name: 'Đệ Tam',
        nickname: 'hoangba1477',
        id: 4199,
        tick: true,
        followers_count: 120,
        followings_count: 76,
        likes_count: 11,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/211/63c12e11ab47e.jpg',
        last_name: 'Bách',
        full_name: 'Đỗ Xuân Bách',
        nickname: 'xuanbachdev',
        id: 211,
        tick: false,
        followers_count: 86,
        followings_count: 7,
        likes_count: 26,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/211/63c12e11ab47e.jpg',
        last_name: 'Bách',
        full_name: 'Đỗ Xuân Bách',
        nickname: 'xuanbachdev',
        id: 211,
        tick: false,
        followers_count: 86,
        followings_count: 7,
        likes_count: 26,
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4984/6478489c374c4.png',
        last_name: 'khang',
        full_name: 'khang Khang',
        nickname: 'khang',
        id: 4984,
        tick: true,
        followers_count: 4,
        followings_count: 13,
        likes_count: 22,
    },
];
function Home() {
    const videosShow = videos.slice(0, suggestAccountData.length);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {videosShow.map((video, index) => (
                    <MainVideo key={index} video={video} account={suggestAccountData[index]} index={index}></MainVideo>
                ))}
            </div>
        </div>
    );
}

export default Home;
