import React, {Component} from "react";
import axios from "axios";
import { Stack, CssBaseline } from "@mui/material";
import TodoItem from "./components/TodoItem"

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

  getTodoItems = (num) => {
    let returnedItems = [];
    for (let i = 0; i < num; i++) {
      returnedItems.push(<TodoItem key={`todo-item-${i}`}></TodoItem>)
    }
    return returnedItems;
  }

  render() {
    return (
      <>
        <CssBaseline />
        <Stack spacing={2}>
          {
            this.getTodoItems(4)
          }
        </Stack>
      </>
    )
  }
}

export default App;