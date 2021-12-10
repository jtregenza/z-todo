import { 
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	Skeleton,
	SkeletonCircle,
	HStack,
	Box,
	Stack,
} from "@chakra-ui/react";




const SkeletonTable = () => {

	return (
		<>
		<Box p={4} m={8} w="100%" shadow='sm' borderWidth='1px' bg="white">
			<Skeleton width="100%" height='48px' mb={4}/>
			<Stack direction={['column', 'row']}>
				<Skeleton width="80%" height='32px'/>
				<Skeleton width="20%" height='32px'/>
			</Stack>
			
		</Box>
		<Box p={4} m={8} w="100%" shadow='sm' borderWidth='1px' bg="white">
		<HStack spacing='24px'>
				<Skeleton width="40%" height='32px'/>
			{[...Array(10)].map((x, i) =>
				<SkeletonCircle key={i} size='12'/>
			)}
			
		</HStack>

		<Table variant='simple'>
			<Thead>
			<Tr>
				<Th></Th>
				<Th>Task</Th>
				<Th>Status</Th>
				<Th></Th>
			</Tr>
			</Thead>
			<Tbody>

			{[...Array(10)].map((x, i) =>
				<Tr key={i}>
				<Td width="20%"><Skeleton height='32px' /></Td>
				<Td width="50%"><Skeleton height='32px' /></Td>
				<Td width="20%"><Skeleton height='32px' /></Td>
				<Td width="16px" ><Skeleton height='32px' /></Td>
			</Tr>
			)}
				
			</Tbody>
			<Tfoot>
			<Tr>
				<Th></Th>
				<Th>Task</Th>
				<Th>Status</Th>
				<Th></Th>
			</Tr>
			</Tfoot>
		</Table>
		</Box>
		</>
	)
}

export default SkeletonTable;