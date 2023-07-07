import PropTypes from 'prop-types';
import NewBtn from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { separate: data.separate });
    return (
        <NewBtn className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </NewBtn>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
