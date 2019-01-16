import React from 'react';

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super();
      this.state = {
        loggedIn: false
      }
      this.props = props;
      // console.log(this.props);
    }

    componentDidMount() {
      if (localStorage.getItem('userLoggedIn'));
    }

    render() {
      if(this.state.loggedIn) return <App />;
      return <LoginPage />
    }
  }

export default authenticate;