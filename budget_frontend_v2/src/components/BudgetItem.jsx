import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  Text,
  Spacer
} from '@chakra-ui/react'
import ItemSwitch from './ItemSwitch'
import { useState } from 'react';


export default function BudgetItem(props) {
  
  const [isActive, setIsActive] = useState(props.itemData.State);

  const handleSwitch = (event) => {
    setIsActive(event.target.checked)
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem sx={
        isActive ? 
        componentStyle.priceEnabled : 
        componentStyle.priceDisabled
      }>
        
        <Flex>
          <ItemSwitch 
            name={props.itemData.id} 
            title={props.itemData.Label}
            onChange={e =>{handleSwitch(e)}}
            defaultValue={props.itemData.State}
            />

          <AccordionButton flexGrow='1' sx={{'_hover':{}}
          }>
            <Box as="span" textAlign='left'>
              <h2>{props.itemData.id}. {props.itemData.Label}</h2> 
            </Box>
            <Spacer />
            <Text >
              ${props.itemData.Price}
            </Text>
            <AccordionIcon />
          </AccordionButton>

        </Flex>

        <AccordionPanel pl={'4em'}>
          {props.itemData.Description}
        </AccordionPanel>

      </AccordionItem>
    </Accordion> 
  )
}

const componentStyle = 
  {
    priceEnabled: {
      opacity:'100%',
    },

    priceDisabled: {
      opacity:'50%',
    },
  }