import classNames from 'classnames/bind';

import { ThemeColors } from 'theme/colors';

interface IButton {
    color?: ThemeColors | '',
}

const Button: React.FC<
    IButton & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ 
    color = '',
    children,
}) =>{
    const buttonClasses = classNames({
        'button': true,
        [`is-${color}`]: color,
    })
    return (
        <button
            className={buttonClasses}
            >{children}</button>
    );
};

export default Button;
