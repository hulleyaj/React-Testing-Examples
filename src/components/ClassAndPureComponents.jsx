import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PureComponent = ({ unmountCallback }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    return () => unmountCallback();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{`Is loaded: ${loaded}`}</span>;
};

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    const { unmountCallback } = this.props;

    unmountCallback();
  }

  render() {
    const { loaded } = this.state;

    return <span>{`Is loaded: ${loaded}`}</span>;
  }
}

PureComponent.defaultProps = {
  unmountCallback: () => {},
};

PureComponent.propTypes = {
  unmountCallback: PropTypes.func,
};

ClassComponent.defaultProps = {
  unmountCallback: () => {},
};

ClassComponent.propTypes = {
  unmountCallback: PropTypes.func,
};
