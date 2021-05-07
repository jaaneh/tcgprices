import { useState } from 'react'
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom'
import AutoSuggest from 'react-autosuggest'
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text
} from '@chakra-ui/react'

import { AiOutlineSearch } from 'react-icons/ai'

import { createURL } from '@utils/helpers'

import theme from './theme'
import { NextChakraLink } from '@components/NextChakraLink'

interface IAutoComplete {
  hits: object[]
  currentRefinement: string
  refine: (arg?: any) => void
  onSuggestionSelected: () => void
  onSuggestionCleared: () => void
}

const AutoComplete = (props: IAutoComplete) => {
  const [value, setValue] = useState(props.currentRefinement)
  const { hits, onSuggestionSelected } = props

  const onChange = async (_: any, { newValue, method }) => {
    if (!newValue) {
      props.onSuggestionCleared()
    }

    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => props.refine(value)

  const onSuggestionsClearRequested = () => props.refine()

  const getSuggestionValue = (hit: any) => `${hit.series}: ${hit.name}`

  const renderSuggestion = (hit: any) => (
    <>
      <NextChakraLink
        href={`/pokemon/${createURL([hit.series, hit.name])}`}
        noUnderline
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div>
          <div className='hit-picture'>
            <img src={`${hit.images.symbol}`} alt={hit.name} />
          </div>
        </div>
        <div className='hit-content'>
          <Flex>
            <Highlight attribute='series' hit={hit} tagName='span' />
            <Text mr={1}>:</Text>
            <Highlight attribute='name' hit={hit} tagName='span' />
          </Flex>
        </div>
      </NextChakraLink>
      <style jsx>
        {`
          .hit-content {
            padding: 0px 10px;
          }
          .hit-picture img {
            object-fit: contain;
            width: 32px;
            height: 32px;
          }
        `}
      </style>
    </>
  )

  const renderInputComponent = (inputProps: any) => (
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<AiOutlineSearch color='gray.400' />}
      />
      <Input {...inputProps} />
    </InputGroup>
  )

  const inputProps = {
    placeholder: 'Search sets..',
    onChange,
    value
  }

  return (
    <AutoSuggest
      id='tcg-searchbar'
      detachedMediaQuery=''
      theme={theme}
      suggestions={hits}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      inputProps={inputProps}
      renderInputComponent={renderInputComponent}
      renderSuggestion={renderSuggestion}
    />
  )
}

export default connectAutoComplete(AutoComplete)
