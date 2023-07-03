import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import BudgetItem from './components/BudgetItem.jsx'
import { fakeBudget } from './development-files'
import { useFetchBudget } from './hooks/useFetchBudget'

function App() {

  const [ BudgetState, isLoading, errorMessage ] = useFetchBudget('1', "populate=budget_item")

  const itemsList = BudgetState.attributes.budget_item.map((item) => {
    const itemData = {
      'State': item.State,
      'id': item.id,
      'Label': item.Label,
      'Description': item.Description,
      'Price': item.Price
    }

    return (
      <BudgetItem 
        itemData={itemData}
        key={itemData.id}
      />
    )
  })


  if (isLoading) {
    return(
      <Box>
        Loading
      </Box>
    )
  } else if (isLoading === null) {
    return(
      <Box>
        {`Error: ${errorMessage}`}
      </Box>
    )
  }


  return (
    <Container>
      <ul>
        { itemsList }
      </ul>
    </Container>
  )
}

export default App
