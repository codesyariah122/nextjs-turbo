// import { WindmillSpinner } from 'react-spinner-overlay';
// import PropTypes from 'prop-types';

// const LoadingSpinner = (props: { isLoaded: any }) => {
//   return <WindmillSpinner loading={props.isLoaded} size={40} />;
// };

// LoadingSpinner.propTypes = {
//   loading: PropTypes.bool,
// };

// export default LoadingSpinner;

import classNames from 'classnames';
import { RiLoader2Fill } from 'react-icons/ri';

const variantStyle = new Map<any, string>([
  [
    'overlay',
    'flex justify-center fixed top-0 left-0 w-full h-full items-center bg-[#f6ebda] opacity-90 pb-16 z-50',
  ],
  ['fullpage', 'w-full h-full flex items-center justify-center pb-16'],
  ['inline', 'w-full'],
  ['vanilla', ''],
]);

const sizeStyles = new Map<any, any>([
  ['xs', { text: 'text-3xl', icon: 'text-sm' }],
  ['sm', { text: 'text-4xl', icon: 'text-md' }],
  ['md', { text: 'text-6xl', icon: 'text-xl' }],
  ['lg', { text: 'text-8xl', icon: 'text-2xl' }],
]);

interface LoadingOverlayProps {
  variant?: 'overlay' | 'fullpage' | 'inline' | 'vanilla';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isShow?: boolean;
  className?: string;
  label?: string;
  iconClassName?: string;
  labelClassName?: string;
}

const LoadingSpinner: React.FC<LoadingOverlayProps> = ({
  variant = 'overlay',
  size = 'lg',
  className,
  label = 'Loading...',
  iconClassName,
  labelClassName,
  isShow = true,
}) => {
  const sizeStyle = sizeStyles.get(size);

  return (
    <div
      className={classNames(
        variantStyle.get(variant),
        className,
        !isShow ? 'hidden' : ''
      )}
      style={variant === 'fullpage' ? { height: 'calc(100vh - 200px)' } : {}}
    >
      <div className="flex flex-col items-center justify-center text-[#9c6d27] bg-neutral-10/10">
        <RiLoader2Fill
          className={classNames(
            sizeStyle.text,
            'm-0 animate-spin p-0',
            iconClassName
          )}
        />
        {label && (
          <span className={classNames(sizeStyle.icon, 'pt-4', labelClassName)}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
