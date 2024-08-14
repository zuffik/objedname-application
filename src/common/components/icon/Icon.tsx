import { FaUser, FaStar, FaBackward, FaCalendar } from 'react-icons/fa6';
import { IconBaseProps } from 'react-icons';

export interface IconProps extends IconBaseProps {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) =>
  // could be better, I know
  name === 'user' ? (
    <FaUser {...props} />
  ) : name === 'star' ? (
    <FaStar {...props} />
  ) : name === 'history' ? (
    <FaBackward {...props} />
  ) : name === 'calendar' ? (
    <FaCalendar {...props} />
  ) : null;
