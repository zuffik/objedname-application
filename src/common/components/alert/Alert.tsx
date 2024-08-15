import classNames from 'classnames';

export interface AlertProps {
  variant: 'info'; //'success' | 'error' ...
  message: string;
}

export const Alert = ({ variant, message }: AlertProps) => {
  return (
    <div
      className={classNames('px-5 py-2', {
        'bg-blue-400 text-gray-50 rounded-md': variant === 'info',
      })}
    >
      {message}
    </div>
  );
};
