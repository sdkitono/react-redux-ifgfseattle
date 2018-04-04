import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { withContext } from 'recompose';

const Provider = withContext(
  {
    app: PropTypes.objectOf(PropTypes.any),
    restApp: PropTypes.objectOf(PropTypes.any)
  },
  ({ app, restApp }) => ({ app, restApp })
)(ReduxProvider);

export default Provider;
