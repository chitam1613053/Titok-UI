import classNames from 'classnames/bind';
import style from './Video.module.scss';
// import videos from '~/assets/videos';
import { VideoLikedIcon } from '../Icons';
const cx = classNames.bind(style);
function VideoProfile({ video, index, handleMouseEnter }) {
    return (
        <div className={cx('wrapper')}>
            <video data-index={index} className={cx('video')} muted onMouseEnter={handleMouseEnter}>
                <source src={video.src} type="video/mp4"></source>
            </video>
            <span className={cx('liked')}>
                <VideoLikedIcon /> <span className={cx('liked-amount')}>{video.liked}</span>
            </span>
            <h4 className={cx('title')}>{video.title} </h4>
        </div>
    );
}

export default VideoProfile;
