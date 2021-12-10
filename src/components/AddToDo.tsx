import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Heading, Input, Button, Stack, useToast, Select } from "@chakra-ui/react";
import * as React from "react";
import { ToDoState as Props } from "../App" 

interface ToDoProps {
	todoList: Props["todoList"],
	setToDo: React.Dispatch<React.SetStateAction<Props["todoList"]>>
}


const AddToDo: React.FC<ToDoProps> = ({todoList, setToDo}) => {

	const [input, setInput] = React.useState({
		userId: "",
		id: "",
		title: "",
		completed: ""
	})


	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const toast = useToast();

	const handleClick = (): void => {
		if(!input.title ||
			!input.userId) {
					toast({
					title: 'Cannot Create Task.',
					description: "Fill in the form to add a new task.",
					status: 'error',
					duration: 3000,
					isClosable: true,
				  })
				  return
		}
			setToDo([
				{
					userId: parseInt(input.userId),
					id: Date.now(),
					title: input.title,
					completed: false

				},
				...todoList

			]);

			setInput({
				userId: "",
				id: "",
				title: "",
				completed: ""
			})
			toast({
				title: 'Task Created.',
				description: "New Task Created. Get to it.",
				status: 'success',
				duration: 3000,
				isClosable: true,
			  })

	}


	return (
		<Box p={4} m={8} w="100%" shadow='sm' borderWidth='1px' bg="white">
			<Heading as='h2' size='lg' mb={4} >Add to your ToDo List</Heading>
			<Stack direction={['column', 'row']}>
			<Input 
			variant='outline'
			 placeholder='User' 
			 value={input.userId}
			 onChange={handleChange}
			 name="userId"
			 hidden={true}
			/>
			<Select
			variant='outline'
			placeholder='Select User' 
			value={input.userId}
			onChange={handleChange}
			w="25%"
			name="userId"
			
			>
				<option value='1'>User 1</option>
				<option value='2'>User 2</option>
				<option value='3'>User 3</option>
				<option value='4'>User 4</option>
				<option value='5'>User 5</option>
				<option value='6'>User 6</option>
				<option value='7'>User 7</option>
				<option value='8'>User 8</option>
				<option value='9'>User 9</option>
				<option value='10'>User 10</option>
			</Select>
			<Input 
			variant='outline'
			 placeholder='Task' 
			 value={input.title}
			 onChange={handleChange}
			 name="title"
			/>
			<Button 
				rightIcon={<SmallAddIcon/>} 
				colorScheme='teal' 
				variant='solid'
				w="15%"
				onClick={handleClick}
			>
				Add Task
			</Button>
			</Stack>
			
		</Box>
	)
}

export default AddToDo;