import React, {Component} from "react";
import {
    Button,
    Modal,
    TextField,
} from "@mui/material";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let {name,value} = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = {...this.state.activeItem, [name]: value};
        this.setState({activeItem});
    };

    render() {
        const {toggle, onSave} = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <h1 toggle={toggle}>Todo Item</h1>
                <p>
                    <div>
                        <div>
                            <p for="todo-title">Title</p>
                            <TextField 
                                type="text"
                                id="todo-title"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Todo Title"
                            />
                        </div>
                        <div>
                            <p for="todo-description">Description</p>
                            <TextField 
                                type="text"
                                id="todo-description"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter Todo description"
                            />
                        </div>
                        <div check>
                            <p check>
                                <TextField
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed
                            </p>
                        </div>
                    </div>
                </p>
                <p>
                    <Button
                        color="success"
                        onClick={()=>onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </p>
            </Modal>
        );
    }
}