import PropTypes from 'prop-types';
import { PageBox } from './PageContainer.styled';

export function PageContainer({ children }) {
  return <PageBox>{children}</PageBox>;
}

PageContainer.propTypes = {
  children: PropTypes.node,
};
