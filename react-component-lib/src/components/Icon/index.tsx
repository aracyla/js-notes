import classNames from 'classnames/bind';

import { ThemeSizes, ThemeSizeValues } from 'theme';
import { ReactComponent as DeleteIcon} from 'assets/icons/delete.svg';


const IconExporter = {
    'delete': DeleteIcon,
};

export type IconType = keyof typeof IconExporter;

interface IIcon {
    name: IconType;
    size?: ThemeSizes;
};

const Icon: React.FC<IIcon> = ({ 
    name,
    size = 'normal',
    ...rest
}) => {
    const IconJsx = IconExporter[name];
    const w = ThemeSizeValues[size];
    const iconClasses = classNames({
        'icon': true,
    });

    return (
        <span className={iconClasses} {...rest}>
            {IconJsx ? (<IconJsx style={{width: w, height: w}} />) : null}
        </span>
    );
};

export default Icon;
