import classNames from 'classnames/bind';
import style from './Profile.module.scss';
// import videos from '~/assets/videos';
import VideoProfile from '~/components/VideoProfile';
import { useState } from 'react';
const cx = classNames.bind(style);

function UserMedia({ videos }) {
    const [playing, setPlaying] = useState(null);
    const handleMouseEnter = (e) => {
        if (e.target !== playing) {
            e.target.play();
            if (playing) {
                playing.pause();
            }
            setPlaying(e.target);
        }
    };
    return (
        <div className={cx('videos-wrapper')}>
            {videos.map((video, index) => {
                return <VideoProfile key={video.src} video={video} index={index} handleMouseEnter={handleMouseEnter} />;
            })}
        </div>
    );
}

export default UserMedia;
