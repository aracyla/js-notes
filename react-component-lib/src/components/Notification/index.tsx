import classNames from 'classnames/bind';

import { ThemeColors } from 'theme';

interface INotification {
    duration?: number;
    color?: ThemeColors;
    isLight?: boolean;
}

const Notification: React.FC<INotification> = ({
    duration = 3000,
    color = 'success',
    isLight = false,
    children,
    ...rest
}) => {
    const notificationClasses = classNames({
        'notification': true,
        [`is-${color}`]: color,
        'is-light': isLight,
    });
    return (
        <div className={notificationClasses} {...rest}>
            <button className="delete"
                onClick={() => alert('click')}></button>
            {children}
        </div>
    );
};

export default Notification;
