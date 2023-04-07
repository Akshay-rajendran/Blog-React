import React, { useRef } from 'react'
import { CatagoryApi } from '../Api/api'
import axios from 'axios'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';



function Catagory() {

    const selectref = useRef()
    const [open, setOpen] = React.useState(false);
    const [catagoryvalue, setcatagoryvalue] = useState([])

    async function get() {
        console.log(CatagoryApi + selectref.current.value);
        let cata = await axios.get(CatagoryApi + selectref.current.value)
        console.log(cata);
        setcatagoryvalue(cata.data.response)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <select name="" id="" onChange={get} ref={selectref} required="true">
                <option value="">Select Category</option>
                <option value="React">React</option>
                <option value="MongoDb">Mongo Db</option>
                <option value="Expressjs">Express js</option>
                <option value="Html-css">Html/css</option>
            </select>


            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}

            >
                <AppBar sx={{ position: 'fixed' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    {catagoryvalue.map((e) => {
                        return (
                            <ListItem >
                                <div className="allblogcards">
                                    <article className="card">
                                        <div className="temporary_text">JVJBG </div>
                                        <div className="card_content">
                                            <div className="home-person-logo">

                                                <span className="card_title">{e.catagory}</span>
                                            </div>
                                            <span className="card_subtitle">IVBIGHOIHOJ</span>
                                            <p className="card_description">KBIHOLKJO</p>
                                            <div className="homeicons">




                                            </div>

                                        </div>
                                    </article>

                                </div>

                            </ListItem>
                        )
                    })}

                </List>
            </Dialog>


        </>
    )
}

export default Catagory