import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { fetchRepoList } from '../redux/actions/repositoryActions';
import Loading from '../components/Loading';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RepoForm from '../screens/CreateRepoForm';

class RepoList extends Component {
    // static navigationOptions = {
    //     title: 'Repositories'
    // };

    state = {
        modalOpen: false
    }

    componentDidMount() {
        this.props.fetchRepoList('nguyenchauhuyen');
    }

    addReview = (values) => {
        console.log(values)
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={globalStyles.item}
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
                    styles={globalStyles.container}
                    data={repos}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />

                <Modal visible={this.state.modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <Icon
                                name='close'
                                size={24}
                                style={{ ...styles.modalToggle, ...styles.modalClose }}
                                onPress={() => this.setState({ modalOpen: false })}
                            />
                            <RepoForm addReview={this.addReview} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Icon
                    name='add'
                    size={24}
                    style={styles.modalToggle}
                    onPress={() => this.setState({ modalOpen: true })}
                />
            </View>
        );
    }
}

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


const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});