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

    render() {
        const { item } = this.props;
        return (
            <Paper elevation={4}>
                <Grid container spacing={2}>
                    <Grid item md={1}>
                        <ToggleButton value={item.completed}>
                            {
                                item.completed ?
                                <CheckBoxOutlinedIcon /> :
                                <CheckBoxOutlineBlankOutlined />
                            }
                        </ToggleButton>
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="h2">{item.title}</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Button
                            variant="contained"
                            onClick={()=>{this.props.deleteFunction(item.id);}}
                        >
                            <DeleteIcon />
                        </Button>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant="body1">{item.description}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

}