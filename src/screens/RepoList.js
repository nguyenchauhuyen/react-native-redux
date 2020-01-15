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
import { globalStyles } from '../styles/global';

class RepoList extends Component {
    // static navigationOptions = {
    //     title: 'Repositories'
    // };

    componentDidMount() {
        this.props.fetchRepoList('nguyenchauhuyen');
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>
                this.props.navigation.navigate('RepoDetails', { name: item.name })
            }
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
    render() {
        const { repos, ajaxStatus } = this.props;
        if (ajaxStatus.isLoading) return <Loading />;

        return (
            <View style={globalStyles.container}>
                <FlatList
                    styles={styles.container}
                    data={repos}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
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