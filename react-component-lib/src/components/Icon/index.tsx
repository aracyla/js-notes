import classNames from 'classnames/bind';

import { ThemeSizes } from 'theme';
import { ReactComponent as DeleteIcon} from 'assets/icons/delete.svg';


const IconExporter = {
    'delete': DeleteIcon,
};

export type IconType = keyof typeof IconExporter;

interface IIcon {
    name: IconType;
    size?: ThemeSizes;
    label?: string;
};

const Icon: React.FC<IIcon> = ({ 
    name,
    size = 'normal',
    label = ''
}) => {
    const IconJsx = IconExporter[name];
    const iconClasses = classNames({
        'icon': true,
        [`is-${size}`]: size,
    });

    return (
        <>
            {label ? (
                <span className={`icon-text is-${size}`}>
                    <span className={iconClasses}>
                        {IconJsx ? (<IconJsx />) : null}
                    </span>
                    <span>{label}</span>
                </span>
            ): (
                <span className={iconClasses}>
                    <i>
                        {IconJsx ? (<IconJsx />) : null}
                    </i>
                </span>
            )}
        </>
    );
};

export default Icon;
