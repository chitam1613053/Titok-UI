import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useState } from 'react';
const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [] }) {
    const [accountDisplay, setAccountDisplay] = useState(3);
    const currentData = data.slice(0, accountDisplay);

    const handleSeeMore = () => {
        if (accountDisplay > 3) {
            setAccountDisplay(3);
        } else {
            setAccountDisplay(data.length);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {currentData.map((account, index) => (
                <AccountItem key={index} account={account} />
            ))}
            {accountDisplay < data.length && data.length > 3 && (
                <p className={cx('see-more')} onClick={handleSeeMore}>
                    See more...
                </p>
            )}
            {accountDisplay > 3 && data.length > 3 && (
                <p className={cx('see-more')} onClick={handleSeeMore}>
                    See less
                </p>
            )}
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string,
};
export default SuggestAccounts;
