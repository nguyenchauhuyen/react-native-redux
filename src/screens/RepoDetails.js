import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getRepoDetail } from '../redux/actions/repositoryActions';
import Loading from '../components/Loading';
import { globalStyles } from '../styles/global';

class RepoDetail extends Component {
    static navigationOptions = {
        title: 'RepoDetail'
    };
    componentDidMount() {
        const { name } = this.props.navigation.state.params;
        console.log('fetch', name)
        this.props.getRepoDetail('nguyenchauhuyen', name);
    }
    render() {
        const { repoInfo, ajaxStatus } = this.props;
        if (ajaxStatus.isLoading) return <Loading />;

        const {
            name,
            full_name,
            description,
            forks_count,
            stargazers_count
        } = repoInfo;

        return (
            <View style={globalStyles.container}>
                <Text>{name}</Text>
                <Text>{full_name}</Text>
                <Text>{description}</Text>
                <Text>Forks: {forks_count}</Text>
                <Text>Stars: {stargazers_count}</Text>
                {/* <Icon name="menu" size={16} color="green" /> */}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    repoInfo: state.repos.repoInfo,
    ajaxStatus: state.ajaxStatus
});

const mapDispatchToProps = {
    getRepoDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);