export default {
  container: {
    marginLeft: '1rem',
    width: '100%'
  },
  input: {
    borderColor: '#222c3c'
  },
  inputFocused: {
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)'
  },
  sectionContainer: {
    borderRadius: '0.5rem'
  },
  sectionTitle: {
    color: '#ffffff',
    padding: '0.25rem 1rem',
    fontSize: '0.75rem',
    userSelect: 'none'
  },
  suggestionsList: {
    color: '#fffff',
    margin: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem'
  },
  suggestion: {
    display: 'flex',
    padding: '0.35rem 1rem',
    borderRadius: '0.25rem',
    color: '#ffffff'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    backgroundColor: '#2d3748',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    zIndex: 50,
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem'
  },
  suggestionHighlighted: {
    background: '#319795',
    color: '#ffffff',
    cursor: 'pointer'
  }
}
