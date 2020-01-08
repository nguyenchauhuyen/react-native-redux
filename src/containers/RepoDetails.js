import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getRepoDetail } from '../redux/actions/repositoryActions';
import Loading from '../components/Loading';

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
            <View>
                <Text>{name}</Text>
                <Text>{full_name}</Text>
                <Text>{description}</Text>
                <Text>Forks: {forks_count}</Text>
                <Text>Stars: {stargazers_count}</Text>
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