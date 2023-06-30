import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import BudgetItem from './components/BudgetItem.jsx'
import { getBudget } from './services/fetchBudget'

function App() {



  const fakeBudget = {
    'Label': "Temp Label",
    'Description': "Lorem description",
    'attributes': {
      'budget_item': []
    },
  }

  const items = [
    {
      id: 1,
      Label: 'Lorem, ipsum',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      Price: 250,
      State: true,
    },
    {
      id: 2,
      Label: 'totam',
      Description: 'Atque exercitationem quo',
      Price: 250,
      State: false,
    },
    {
      id: 3,
      Label: 'elit',
      Description: 'quam nihil non voluptas',
      Price: 250,
      State: false,
    },
  ]

  fakeBudget.attributes.budget_item = items;
  const [ BudgetState, setBudget ] = useState(fakeBudget);
  
  useEffect(() => {
    const fetchBudget = () => {
      const budgetList = fakeBudget;
      setBudget(budgetList)
    };

    fetchBudget();
  }, [] );

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


  return (
    <Container>


      <ul>
        { itemsList }
      </ul>
      <Box>
          {JSON.stringify(BudgetState)}
      </Box>
    </Container>
  )
}

export default App
