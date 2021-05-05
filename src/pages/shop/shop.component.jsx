import React, {Component} from 'react';
import CollectionsOverview from '../../components/collections-overview/collections.overview.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionPage from '../collection/collection.component';
import {firestore, collectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


//match props is passed in from Route component surrounding app component
class ShopPage extends Component {
    //constructor and super() call will be now handled automatically by react 
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props 
        const collectionRef = firestore.collection('collections');

        // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-6670c/databases/(default)/documents/collections`).then( res => res.json())
        // .then(collections => console.log(collections))
        
        collectionRef.get().then(snapshot => {
            const collectionsMap = collectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

    }
    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                {/* match.path = "/shop" */}
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
        
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
