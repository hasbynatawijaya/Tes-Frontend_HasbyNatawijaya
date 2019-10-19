import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
import style from '../../public/static/styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getTransactionList} from '../action/TransactionListAction';
import _ from 'lodash';
import moment from 'moment';
import uuid from 'uuid';

class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.props.getTransactionList();
  }

  render() {
    const {transactionList, loading} = this.props;
    const {searchTerm} = this.state;

    let transationLoader = <Text>Loading...</Text>;

    let displayTransaction = [];

    let filteredTranscation = transactionList.filter(transaction => {
      return transaction.beneficiary_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    if (_.isEmpty(filteredTranscation)) {
      displayTransaction.push(
        <View style={style.emptyStateContainer}>
          <Image
            style={style.emptyStateImage}
            source={require('../../public/static/images/undraw_empty_xct9.png')}
          />
          <Text style={[style.text, style.textBold]}>
            Maaf, Data tidak di temukan :(
          </Text>
        </View>,
      );
    } else {
      _.forEach(filteredTranscation, (list, key) => {
        displayTransaction.push(
          <View
            key={uuid.v4()}
            style={[
              style.flexRow,
              style.cardContainer,
              list.status === 'SUCCESS'
                ? style.cardIndicatorColorSuccess
                : style.cardIndicatorColorPending,
            ]}>
            <View style={[style.flexColumn, style.flexJustifySpaceAround]}>
              <View style={[style.flexRow, style.flexAlignCenter]}>
                <Text style={[style.text, style.textBold]}>
                  {list.sender_bank.toUpperCase()}
                </Text>
                <Text style={[style.text, style.textBold, style.iconMargin]}>
                  <Icon name="arrow-right" />
                </Text>
                <Text style={[style.text, style.textBold]}>
                  {list.beneficiary_bank.toUpperCase()}
                </Text>
              </View>
              <View>
                <Text style={style.text}>
                  {list.beneficiary_name.toUpperCase()}
                </Text>
              </View>
              <View style={[style.flexRow, style.flexAlignCenter]}>
                <Text style={style.text}>
                  {'Rp ' +
                    list.amount
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                </Text>
                <Text style={[style.textBold, style.iconMargin]}>
                  <Icon name="circle" style={style.dotIcon} />
                </Text>
                <Text style={style.text}>
                  {moment(list.completed_at)
                    .locale('id')
                    .format('DD MMMM YYYY')}
                </Text>
              </View>
            </View>
            <View
              style={[
                style.cardStatus,
                list.status === 'SUCCESS'
                  ? style.cardStatusColorSuccess
                  : style.cardStatusColorPending,
              ]}>
              <Text style={style.cardStatusText}>
                {list.status === 'SUCCESS' ? 'Berhasil' : 'Pending'}
              </Text>
            </View>
          </View>,
        );
      });
    }

    return (
      <React.Fragment>
        <View style={style.flexColumn}>
          <SearchBar
            containerStyle={{
              backgroundColor: '#ffffff',
              borderTopColor: '#ffffff',
              borderBottomColor: '#ffffff',
            }}
            inputContainerStyle={{backgroundColor: '#ffffff'}}
            placeholder="Cari Nama"
            onChangeText={searchTerm => this.setState({searchTerm})}
            value={searchTerm}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? transationLoader : displayTransaction}
        </ScrollView>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.async.asyncAction,
  transactionList: state.transactionList.transactionList,
});

export default connect(
  mapStateToProps,
  {getTransactionList},
)(TransactionList);
