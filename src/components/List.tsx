import { 
	Badge, 
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	Button,
	IconButton,
	useToast,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Heading
} from "@chakra-ui/react";
import { CheckIcon, SmallCloseIcon } from '@chakra-ui/icons'
import * as React from "react";
import { ToDoState as Props } from "../App" 

interface ToDoProps {
	todoList: Props["todoList"],
	setToDo: React.Dispatch<React.SetStateAction<Props["todoList"]>>;
}


const List: React.FC<ToDoProps> = ({todoList, setToDo}) => {
	const toast = useToast();

	const CompleteTask = (item:any): void => {
		item.completed = item.completed ? false : true
		setToDo([
			...todoList
		])

		toast({
			title: 'Task Complete.',
			description: "Great Job, keep up the great work.",
			status: 'success',
			duration: 3000,
			isClosable: true,
		  })
	}


	const DeleteTask = (taskToDelete: string) => {
 
		setToDo(todoList.filter((task) => {
		  return task.title !== taskToDelete
		}))
	  
		  toast({
			title: 'Task Deleted.',
			description: "Goodbye Task.",
			status: 'error',
			duration: 3000,
			isClosable: true,
		  })
	  }

	const renderCompletedList = (): JSX.Element[] => {
		
		return todoList.filter((item) => {
			return item.completed
		  }).map(item => {
			const completeTaskOpacity = item.completed ? 0.6 : 1;
			return (
				<Tr key={item.id} >
					<Td opacity={completeTaskOpacity}>
						<Button 
							leftIcon={<CheckIcon/>} 
							colorScheme='teal' 
							variant='outline'
							isDisabled={item.completed ? true : false}
							onClick={() => {CompleteTask(item)}}
						
						>
							Complete Task
						</Button>
					</Td>
					<Td textAlign="center" opacity={completeTaskOpacity}>
						{item.userId}
					</Td>
					<Td opacity={completeTaskOpacity}>
						{item.title}
					</Td>
					<Td opacity={completeTaskOpacity}>
							{item.completed
								? <Badge mt={2} fontSize='0.8em' colorScheme='green' >Done</Badge>
								: <Badge mt={2} fontSize='0.8em' colorScheme='red'> Not Yet Completed</Badge>
							}
					</Td>
					<Td>
						<IconButton 
							aria-label="Delete Task"
							icon={<SmallCloseIcon />}
							colorScheme='red'
							variant='outline'
							size='xs'
							onClick={() => {DeleteTask(item.title)}}
						
						>
							Complete Task
						</IconButton>
					</Td>

				
				</Tr>
			)
		})
	}
	const renderIncompleteList = (): JSX.Element[] => {
		
		return todoList.filter((item) => {
			return !item.completed
		  }).map(item => {
			const completeTaskOpacity = item.completed ? 0.6 : 1;
			return (
				<Tr key={item.id} >
					<Td opacity={completeTaskOpacity}>
						<Button 
							leftIcon={<CheckIcon/>} 
							colorScheme='teal' 
							variant='outline'
							isDisabled={item.completed ? true : false}
							onClick={() => {CompleteTask(item)}}
						
						>
							Complete Task
						</Button>
					</Td>
					<Td textAlign="center" opacity={completeTaskOpacity}>
						{item.userId}
					</Td>
					<Td opacity={completeTaskOpacity}>
						{item.title}
					</Td>
					<Td opacity={completeTaskOpacity}>
							{item.completed
								? <Badge mt={2} fontSize='0.8em' colorScheme='green' >Done</Badge>
								: <Badge mt={2} fontSize='0.8em' colorScheme='red'> Not Yet Completed</Badge>
							}
					</Td>
					<Td >
						<IconButton 
							aria-label="Delete Task"
							icon={<SmallCloseIcon />}
							colorScheme='red'
							variant='outline'
							size='xs'
							onClick={() => {DeleteTask(item.title)}}
						
						>
							Complete Task
						</IconButton>
					</Td>

				
				</Tr>
			)
		})
	}

	const IncompleteTaskCount = renderIncompleteList().length;
	const CompletedTaskCount = renderCompletedList().length;

	return (
		<Accordion defaultIndex={[0]} allowToggle w="container.lg">
			<AccordionItem>
				<h2>
				<AccordionButton>
					<Box flex='1' textAlign='left'>
					<Heading as="h4" size="s" color="teal">
						Incomplete Tasks ({IncompleteTaskCount})
					</Heading>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
				<Table variant='simple'>
						<Thead>
						<Tr>
							<Th></Th>
							<Th>User</Th>
							<Th>Task</Th>
							<Th>Status</Th>
							<Th></Th>
						</Tr>
						</Thead>
						<Tbody>
							{renderIncompleteList()}
						</Tbody>
						<Tfoot>
						<Tr>
							<Th></Th>
							<Th>User</Th>
							<Th>Task</Th>
							<Th>Status</Th>
							<Th></Th>
						</Tr>
						</Tfoot>
					</Table>
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
				<h2>
				<AccordionButton>
					<Box flex='1' textAlign='left'>
					<Heading as="h4" size="s" color="teal">Completed Tasks ({CompletedTaskCount})</Heading>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
				<Table variant='simple'>
						<Thead>
						<Tr>
							<Th></Th>
							<Th>User</Th>
							<Th>Task</Th>
							<Th>Status</Th>
							<Th></Th>
						</Tr>
						</Thead>
						<Tbody>
							{renderCompletedList()}
						</Tbody>
						<Tfoot>
						<Tr>
							<Th></Th>
							<Th>User</Th>
							<Th>Task</Th>
							<Th>Status</Th>
							<Th></Th>
						</Tr>
						</Tfoot>
					</Table>
				</AccordionPanel>
			</AccordionItem>
			</Accordion>
		
	)
}

export default List;