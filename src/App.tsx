import * as React from "react";
// import * as ReactDOM from "react-dom";
import { ChakraProvider, Container, VStack } from '@chakra-ui/react'
import axios from "axios";
import './App.css';
import UserList from "./components/UserList";
import SkeletonTable from "./components/SkeletonTable";
import bgblob from './zippeoBlob.svg';

// https://jsonplaceholder.typicode.com/todos


export interface ToDoState {
  todoList: {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }[]
}




function App() {

  const [todoList, setToDo] = React.useState<ToDoState["todoList"]>([]);
  const [userList, setUserList] = React.useState<ToDoState["todoList"]>([]);
  const [loading, setLoading] = React.useState(false);



  React.useEffect(() => {
    setLoading(true);
    
    const axiosPosts = async() =>  {
      const response = await axios('https://jsonplaceholder.typicode.com/todos');
      setToDo(response.data);
      setUserList(response.data)
      setLoading(false);
    };
    axiosPosts();
    
  }, []);


  return (
    <ChakraProvider>
      <Container maxW='container.xl' centerContent bgImage={bgblob} bgRepeat="no-repeat" bgSize="contain" bgPosition="top right">
      {loading && <SkeletonTable/>}
      {!loading &&
        <VStack>
          <UserList todoList={todoList} setToDo={setToDo} userList={userList} setUserList={setUserList}/>
        </VStack>
      }
      </Container>
    </ChakraProvider>
  );
}

export default App;
