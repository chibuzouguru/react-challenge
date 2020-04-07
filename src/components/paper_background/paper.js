import React from 'react';
import * as PropTypes from 'prop-types';
import cn from './PaperBackground.module.scss';

const ReusablePaperBackground = ({ children }) => <div className={cn.paper_component}>{children}</div>;

ReusablePaperBackground.defaultProps = {
  children: '',
};
ReusablePaperBackground.propTypes = {
  children: PropTypes.node,
};
export default ReusablePaperBackground;
