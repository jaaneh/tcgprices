import { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Configure } from 'react-instantsearch-dom'
import Autocomplete from './Autocomplete'

const searchClient = algoliasearch(
  'S3SG8JSL58',
  '77c9f2f349eabd2fbc1c28fe47c23b29'
)

const SearchPage = () => {
  const [query, setQuery] = useState('')

  const onSuggestionSelected = (_, { suggestion }) => setQuery(suggestion.name)

  const onSuggestionCleared = () => setQuery('')

  return (
    <>
      <InstantSearch indexName='cards' searchClient={searchClient}>
        <Configure hitsPerPage={5} />
        <Autocomplete
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionCleared={onSuggestionCleared}
        />
      </InstantSearch>
    </>
  )
}

export default SearchPage
