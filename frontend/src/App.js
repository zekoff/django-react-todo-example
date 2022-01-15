import React, {Component} from "react";
import axios from "axios";
import { Stack, Fab, Box } from "@mui/material";
import TodoItem from "./components/TodoItem"
import NavigationIcon from "@mui/icons-material/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = ()=> {
    axios
      .get("/api/todos/")
      .then((res)=>this.setState({todoList: res.data}))
      .catch((err)=>console.log(err));
  };

  toggle=()=>{
    this.setState({modal: !this.state.modal});
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/todos/${item.id}/`, item)
        .then((res)=>this.refreshList());
      return;
    }
    axios
      .post("/api/todos/", item)
      .then((res)=>this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/todos/${item.id}/`)
      .then((res)=>this.refreshList());
  };

  createItem = () => {
    const item = {title: "", description: "", completed: false};
    this.setState({activeItem: item, modal: !this.state.modal});
  };

  editItem = (item) => {
    this.setState({activeItem:item, modal:!this.state.modal});
  };

  getTodoItems = () => {
    let returnedItems = [];
    for (let i = 0; i < this.state.todoList.length; i++) {
      const item = this.state.todoList[i];
      returnedItems.push(
        <TodoItem
          key={`todo-item-${i}`}
          completed={item.completed}
          title={item.title}
          description={item.description}
        />
      )
    }
    return returnedItems;
  }

  render() {
    return (
      <Box>
        <Stack spacing={2}>
          {
            this.getTodoItems()
          }
        </Stack>
        <Fab variant="extended" onClick={this.refreshList}>
          <NavigationIcon />
          Refresh List
        </Fab>
      </Box>
    )
  }
}

export default App;