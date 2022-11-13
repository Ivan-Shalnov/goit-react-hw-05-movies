import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
export const BackLink = props => {
  return (
    <Link style={{ padding: '15px', display: 'block' }} {...props}>
      <IoMdArrowBack style={{ verticalAlign: 'middle' }} />
      Back
    </Link>
  );
};
