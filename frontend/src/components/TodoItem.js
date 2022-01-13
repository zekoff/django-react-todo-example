import React from "react";
import {
    Button,
    Grid,
    ToggleButton,
    Paper,
    Typography,
} from "@mui/material";

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
                            X
                        </ToggleButton>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="h2">Todo item title</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="contained">Delete</Button>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant="body1">To-do item description. Should contain a lot of long text... etc.</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}