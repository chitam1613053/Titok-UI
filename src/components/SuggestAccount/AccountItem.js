import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '~/Layout/DefaultLayout';
import PropTypes from 'prop-types';
import { Wrapper } from '../Popper';
import NewBtn from '../Button';
const cx = classNames.bind(styles);

function AccountItem({ account }) {
    const useInfo = useContext(UserContext);

    const addFollowingAccountData = useInfo.addFollowingAccountData;
    const followingAccountData = useInfo.followingAccountData;

    let index = followingAccountData.indexOf(account);
    index = -1;
    followingAccountData.forEach((acc, i) => {
        if (acc.nickname === account.nickname) {
            return (index = i);
        }
    });
    const handleFollow = () => {
        if (index < 0) {
            addFollowingAccountData((pre) => {
                const newFollows = [...pre, account];
                localStorage.setItem('follow', JSON.stringify(newFollows));
                return newFollows;
            });
        } else {
            const newFollows = followingAccountData.filter((account, i) => index !== i);
            localStorage.setItem('follow', JSON.stringify(newFollows));
            addFollowingAccountData(newFollows);
        }
    };
    const handleClickAccount = () => {
        useInfo.getUserData(account);
        localStorage.setItem('user', JSON.stringify(account));
    };
    const renderPreview = (props) => {
        return (
            <div className={cx('review')} tabIndex="-1" {...props}>
                <Wrapper>
                    <div className={cx('review-wrapper')}>
                        <div className={cx('review-header')}>
                            <img src={account.avatar} alt="avatar" className={cx('review-avatar')} />
                            <NewBtn primary className={cx('review-btn')} onClick={handleFollow}>
                                {index > -1 ? 'UnFollow' : 'Follow'}
                            </NewBtn>
                        </div>
                        <p className={cx('review-nickname')}>
                            <strong>{account.nickname}</strong>{' '}
                            {account.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick-icon')} />}
                        </p>
                        <p className={cx('review-name')}>{account.full_name}</p>
                        <div className={cx('review-info')}>
                            <p className={cx('review-followers')}>
                                {' '}
                                <strong>{account.followers_count}</strong> Followers
                            </p>
                            <p className={cx('review-likes')}>
                                {' '}
                                <strong>{account.likes_count}</strong> Likes
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
                <Link className={cx('account-item')} onClick={handleClickAccount} to={`/@${account.nickname}`}>
                    <img className={cx('item-img')} src={account.avatar} alt="avatar" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{account.nickname}</strong>{' '}
                            {account.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick-icon')} />}
                        </p>
                        <p className={cx('name')}>{account.full_name}</p>
                    </div>
                </Link>
            </TippyHeadless>
        </div>
    );
}
AccountItem.propTypes = {
    account: PropTypes.object,
};
export default AccountItem;
