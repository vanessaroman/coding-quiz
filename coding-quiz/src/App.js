import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Stack,
  StackDivider,
  GridItem,
  Button,

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            
          <Card>

  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    
  <Grid templateColumns='repeat(2, 1fr)' gap={6}>

  <GridItem w='100%'  bg='blue.500'></GridItem>
     
  <GridItem w='100%'>

      <Box py='5px'>
      <Button colorScheme='teal' variant='solid'>
    
          View a summary of all your clients over the last month.
        
      </Button>
      </Box>
  
      <Box py='5px'>
      <Button colorScheme='teal' variant='solid'>
          Check out the overview of your clients.
        </Button>
      </Box>

      <Box py='5px'>
        <Button colorScheme='teal' variant='solid'>
        
          See a detailed analysis of all your business clients.
        </Button>
      </Box>

  </GridItem>

  
  
    </Grid>
  </CardBody>
</Card>
          




          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
