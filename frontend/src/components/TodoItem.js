import React from "react";
import {
    Button,
    Grid,
    ToggleButton,
    Paper,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlined from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <Grid container spacing={2}>
                    <Grid item md={1}>
                        <ToggleButton>
                            {
                                this.props.completed ?
                                <CheckBoxOutlinedIcon /> :
                                <CheckBoxOutlineBlankOutlined />
                            }
                        </ToggleButton>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="h2">{this.props.title}</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="contained"><DeleteIcon /></Button>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant="body1">{this.props.description}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}