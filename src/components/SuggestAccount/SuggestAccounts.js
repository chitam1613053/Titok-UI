import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem
                    key={account.nickname}
                    src={account.src}
                    nickname={account.nickname}
                    name={account.name}
                    tick={account.tick}
                    likes={account.likes}
                    followers={account.followers}
                />
            ))}
            <p className={cx('see-more')}>See more...</p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string,
};
export default SuggestAccounts;
