import React from 'react';

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super();
      this.state = {
        loggedIn: false,
        user: ""
      }
      this.props = props;
      // console.log(this.props);
    }

    componentDidMount() {
      const user = localStorage.getItem('instaCloneUser');
      if (user) {
        this.setState({
          loggedIn: true,
          user: user
        });
      };
    }

    render() {
      if(this.state.loggedIn) return <App />;
      return <LoginPage />
    }
  }

export default authenticate;