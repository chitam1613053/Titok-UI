import classNames from 'classnames/bind';
import styles from './accountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data, onClick }) {
    return (
        <div className={cx('itemWrapper')} onClick={onClick}>
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.first_name} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </Link>
        </div>
    );
}

export default AccountItem;
