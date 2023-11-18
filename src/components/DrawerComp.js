import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { useTranslation } from 'react-i18next';

const DrawerComp = ({links}) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Drawer variant="" PaperProps={{sx:{background: 'white'}}} background="white" anchor="right" open={open} onClose={() => setOpen(false)}>
                <List>
                    {links.map((link, index)=>(
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemText textColor="white" key={link}>{t(link)}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton sx={{marginLeft: "auto", color: 'white'}} onClick={() => setOpen(!open)}>

                <MenuRoundedIcon></MenuRoundedIcon>
            </IconButton>
        </div>

    )
}

export default DrawerComp;