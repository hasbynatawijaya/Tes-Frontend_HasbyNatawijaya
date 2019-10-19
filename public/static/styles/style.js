import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    borderTopWidth: 12,
    borderTopColor: '#fd6542',
  },
  containerBackgroundDef: {
    backgroundColor: '#f7f9fa',
  },
  emptyStateContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  emptyStateImage: {
    flex: 1,
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderLeftWidth: 10,
    borderRadius: 5,
    padding: 7,
    height: 120,
    marginTop: 10,
    margin: 5,
  },
  cardIndicatorColorSuccess: {
    borderLeftColor: '#56b586',
  },
  cardIndicatorColorPending: {
    borderLeftColor: 'orange',
  },
  cardStatus: {
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  cardStatusColorSuccess: {
    backgroundColor: '#56b586',
  },
  cardStatusColorPending: {
    backgroundColor: 'orange',
  },
  cardStatusText: {
    color: '#ffffff',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexJustifySpaceAround: {
    justifyContent: 'space-around',
  },
  flexJustifySpaceBetween: {
    justifyContent: 'space-between',
  },
  flexAlignCenter: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textInput: {
    height: 60,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  iconMargin: {
    marginRight: 3,
    marginLeft: 3,
  },
  dotIcon: {
    fontSize: 6,
  },
});
