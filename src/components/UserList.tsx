import { 
	Box,
	Stack,
	Heading,
	AvatarGroup,
	Button,
	useToast
} from "@chakra-ui/react";
import * as React from "react";
import List from "./List";
import { ToDoState as Props } from "../App" 
import AddToDo from "./AddToDo";

interface ToDoProps {
	todoList: Props["todoList"],
	setToDo: React.Dispatch<React.SetStateAction<Props["todoList"]>>;
	userList: Props["todoList"],
	setUserList: React.Dispatch<React.SetStateAction<Props["todoList"]>>;
}



const UserList: React.FC<ToDoProps> = ({ todoList, setToDo, userList, setUserList }) => {
	const [active, setActive] = React.useState<number>();
	const toast = useToast();

	const UsersLists = [...Array.from(new Set(userList.map((item) => item.userId)))];


		const SelectUser = (index:any, item:any): void => {
				setActive( index );
				setToDo(userList)
				setToDo((PrevState) => { 
					return PrevState.filter((task) => task.userId === item)}
				);
				toast({
					title: 'Now viewing User ' + item,
					description: "Showing the Todo Items for User " + item,
					status: 'info',
					duration: 3000,
					isClosable: true,
				})
		}




	const renderUserList = (): JSX.Element[] => {
		
		return UsersLists.map((item, index, e) => {
			return (
				<>
					<Button 
						key={index}
						aria-label={`User ` + item}
						colorScheme='teal'
						active={active}
						variant={`${ active === index ? 'solid' : 'outline'}`}
						borderRadius="100%"
						onClick={() => {SelectUser(index, item)}}
						m={1}
						w={10}
						h={10}
					>{item}</Button>
				</>
			)
		})
	}
	return (
		<>
		<AddToDo todoList={todoList} setToDo={setToDo} />

		<Box p={4} m={8} w="100%" shadow='sm' borderWidth='1px' bg="white">
		<Stack
 direction='row' align="center" justify="flex-end" width="full" spacing='24px' mb={4} mt={4}>
			<Heading as="h5" size='s' mr={4}>Select a User to Show their Tasks</Heading>
			<AvatarGroup spacing='0.25rem' m={2} direction={['column', 'row']}>
				{renderUserList()}
			</AvatarGroup>
			<Button
			onClick={() => {setToDo(userList)}}
			>
				Show All Tasks
			</Button>
			
		</Stack>
		<List todoList={todoList} setToDo={setToDo}/>
		</Box>
		</>
			
	)
}

export default UserList;