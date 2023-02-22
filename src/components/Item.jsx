import { Card, Stack, CardBody, CardFooter, Heading, Divider, ButtonGroup, Button,Text, Image} from '@chakra-ui/react'
import { Link} from 'react-router-dom';

const Item = ({id,precio,nombre, imagen}) => {
  return (
    <div className='caard' >
        <Card maxW='sm' key={id}>
            <CardBody>
                <Image src={imagen} alt=''borderRadius='lg'/>
                <Stack mt='6' spacing='3'>
                <Heading size='md'></Heading>
                <h3 className='h3'>
                   {nombre}
                </h3>
                <Text color='blue.600' fontSize='2xl'>
                    ${precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter className='vermas'>
                <ButtonGroup spacing='2'>
                    <Link to={`/item/${id}`}>
                    <Button  variant='solid' colorScheme='blue'>
                        Ver mas
                    </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Item