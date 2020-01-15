import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/repositoryActions';
import { globalStyles } from '../styles/global';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };
  componentDidMount() {
    this.props.getUser('nguyenchauhuyen');
  }

  render() {
    const { user, ajaxStatus } = this.props;
    if (ajaxStatus.isLoading) return <Loading />;

    const { name, login } = user;
    return (
      <View style={globalStyles.container}>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.repos.user,
    ajaxStatus: state.ajaxStatus
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);