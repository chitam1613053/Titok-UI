import styles from './NewBtn.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function NewBtn({
    to,
    href,
    primary,
    outline,
    large,
    small = false,
    text,
    disable,
    rounded,
    children,
    onClick,
    leftIcon,
    rightIcon,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', { [className]: className, primary, outline, small, large, text, disable, rounded });
    const props = {
        onClick,
        ...passProps,
    };

    // remove event listener when disable
    if (disable) {
        Object.keys.forEach((key) => {
            if (key.startWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default NewBtn;
