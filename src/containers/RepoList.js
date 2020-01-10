import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { fetchRepoList } from '../redux/actions/repositoryActions';
import Loading from '../components/Loading';

class RepoList extends Component {
    static navigationOptions = {
        title: 'Repositories'
    };

    componentDidMount() {
        this.props.fetchRepoList('nguyenchauhuyen');
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>
                this.props.navigation.navigate('Detail', { name: item.name })
            }
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
    render() {
        const { repos, ajaxStatus } = this.props;
        if (ajaxStatus.isLoading) return <Loading/>;

        return (
            <FlatList
                styles={styles.container}
                data={repos}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

const mapStateToProps = state => {
    return {
        repos: state.repos.repos,
        ajaxStatus: state.ajaxStatus
    };
};

const mapDispatchToProps = {
    fetchRepoList
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);