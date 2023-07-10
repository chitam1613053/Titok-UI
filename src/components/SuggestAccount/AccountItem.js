import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';

import PropTypes from 'prop-types';
import { Wrapper } from '../Popper';
import NewBtn from '../Button';
const cx = classNames.bind(styles);

function AccountItem({ src, nickname, name, tick, likes, followers }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('review')} tabIndex="-1" {...props}>
                <Wrapper>
                    <div className={cx('review-wrapper')}>
                        <div className={cx('review-header')}>
                            <img src={src} alt="avatar" className={cx('review-avatar')} />
                            <NewBtn primary className={cx('review-btn')}>
                                Follow
                            </NewBtn>
                        </div>
                        <p className={cx('review-nickname')}>
                            <strong>{nickname}</strong>{' '}
                            {tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick-icon')} />}
                        </p>
                        <p className={cx('review-name')}>{name}</p>
                        <div className={cx('review-info')}>
                            <p className={cx('review-followers')}>
                                {' '}
                                <strong>{followers}</strong> Followers
                            </p>
                            <p className={cx('review-likes')}>
                                {' '}
                                <strong>{likes}</strong> Likes
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </div>
        );
    };
    return (
        <div>
            <TippyHeadless interactive delay={[500, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('item-img')} src={src} alt="avatar" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{nickname}</strong>{' '}
                            {tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick-icon')} />}
                        </p>
                        <p className={cx('name')}>{name}</p>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}
AccountItem.propTypes = {
    src: PropTypes.string,
    nickname: PropTypes.string,
    name: PropTypes.string,
    tick: PropTypes.bool,
};
export default AccountItem;
