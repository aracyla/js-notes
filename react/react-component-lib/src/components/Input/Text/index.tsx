import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import { ThemeColors, ThemeSizes } from 'theme';

interface IInput {
    value: string;
    onChange: (v: string) => void;
    debounced?: boolean;
    color?: ThemeColors;
    size?: ThemeSizes;
    type?: 'text' | 'password' | 'email' | 'tel';
    isRounded?: boolean;
    placeholder?: string;
    disabled?: boolean;
    isLoading?: boolean;
    label?: string;
    labelPosition?: 'left' | 'right';
    icon?: string;
    iconPosition?: 'left' | 'right';
    error?: string;
};

const InputText: React.FC<
    IInput & React.InputHTMLAttributes<HTMLInputElement>
> = ({
    value,
    onChange,
    debounced = false,
    color = '',
    size = 'normal',
    type = 'text',
    placeholder = '',
    isRounded = false,
    disabled = false,
    isLoading = false,
    ...rest
}) => {
    const [_value, _setValue] = useState('');
    const timeoutId = useRef<number>(0);
    const inputClasses = classNames({
        'input': true,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        'is-rounded': isRounded,
    });
    const controlClasses = classNames({
        'control': true,
        [`is-${size}`]: size,
        'is-loading': isLoading,
    });

    useEffect(() => {
        _setValue(value);
    }, [value]);

    useEffect(() => {
        if(debounced) {
            if(!timeoutId.current) {
                timeoutId.current = setTimeout(() => onChange(_value), 500);
            }
            else {
                clearTimeout(timeoutId.current);
                timeoutId.current = setTimeout(() => onChange(_value), 500);
            }
        }
        else {
            onChange(_value);
        }

        return () => {
            if(timeoutId.current) clearTimeout(timeoutId.current);
        };
    }, [_value]);

    return (
        <div className={controlClasses}>
            <input
                value={_value}
                onChange={(e) => _setValue(e.target.value)}
                className={inputClasses}
                type={type}
                placeholder={placeholder}
                disabled={disabled || isLoading}
                {...rest} />
        </div>
    );
};

export default InputText;
