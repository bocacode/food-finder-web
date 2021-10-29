const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#cde',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  card: {
    margin: 8,
    alignSelf: 'center',
    borderRadius: '8px',
    borderColor: '#807060',
    borderWidth: 1,
    width: 320,
    backgroundColor: '#fff',
    padding: 1,
  },
  cardImage: {
    width: 319,
    // marginLeft: 1,
    // marginRight: 10,
    height: 200,
    borderTopRightRadius: '7px',
    borderTopLeftRadius: '7px',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: '600',
    padding: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    padding: 4,
  },
  detailsImage: {
    width: 'auto',
    maxWidth: '100%',
    height: 420,
  }
}

export default styles