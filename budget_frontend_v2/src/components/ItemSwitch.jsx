import { 
  Box,
  FormControl,
  FormLabel,
  Switch
} from '@chakra-ui/react'


export default function ItemSwitch(props) {

  return (
      <FormControl display='flex' alignItems='center' w='fit-content' h='inherit'>
        <FormLabel htmlFor={props.number+props.title} mb='0'> {/* TODO: htmlFor ??*/}
        </FormLabel>
        <Switch defaultChecked={props.defaultValue}
          id={props.number+props.title} 
          onChange={props.onChange} />
      </FormControl>
  )
}