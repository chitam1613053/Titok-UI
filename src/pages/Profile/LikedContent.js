import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { BlockIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function LikedContent({ user }) {
    return (
        <div className={cx('liked-content')}>
            <BlockIcon width="90px" height="90px" />
            <h3 className={cx('liked-title')}>This user's liked videos are private</h3>
            <p className={cx('liked-desc')}>Videos liked by {user.nickname} are currently hidden</p>
        </div>
    );
}

export default LikedContent;
