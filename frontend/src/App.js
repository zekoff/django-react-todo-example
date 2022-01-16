import React, {Component} from "react";
import axios from "axios";
import { Stack, Fab, Container } from "@mui/material";
import TodoItem from "./components/TodoItem"
import NavigationIcon from "@mui/icons-material/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
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

  handleDelete = (id) => {
    axios
      .delete(`/api/todos/${id}/`)
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
          key={`todo-item-${item.id}`}
          item={item}
          deleteFunction={this.handleDelete}
        />
      )
    }
    return returnedItems;
  }

  render() {
    return (
      <Container>
        <Stack spacing={3}>
          {
            this.getTodoItems()
          }
          <Fab variant="extended" onClick={this.refreshList}>
            <NavigationIcon />
            Refresh List
          </Fab>
        </Stack>
      </Container>
    )
  }
}

export default App;