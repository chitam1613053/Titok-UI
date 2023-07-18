import classNames from 'classnames/bind';
import style from './Live.module.scss';
import NewBtn from '~/components/Button';
import { routerConfig } from '~/Config/routerConfig';
const cx = classNames.bind(style);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>No LIVE videos for you yet</h3>
                <p className={cx('desc')}>Go back to explore more videos</p>
                <NewBtn className={cx('back-btn')} to={routerConfig.home}>
                    Go back
                </NewBtn>
            </div>
        </div>
    );
}

export default Live;
