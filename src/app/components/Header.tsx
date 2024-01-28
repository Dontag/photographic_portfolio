import React, { useState } from 'react'
import styles from '../page.module.css'
import Image from 'next/image';
import { Box, Grid, MenuList, MenuItem, Typography, Paper, IconButton, ClickAwayListener, Modal } from '@mui/material';
import { colors, images } from '../../store/commonUtils';
import { Menu } from '@mui/icons-material';

function Header({ onNavItemPress }: any) {
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const openPopper = () => {
        setOpen(!open);
    }
    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };
    return (
        <Grid className={styles.navBar} item flex={1} flexDirection={"row"} justifyContent={"space-between"} display={"flex"} sx={{ display: 'flex' }} paddingX={"1em"} paddingY={{ md: 0, xs: ".5em" }}>
            <Box display={"flex"} alignItems={"center"} >
                <Image src={images?.default_logo} alt='Logo' width={40} height={40} />
            </Box>
            <Box
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={'flex-end'}
                display={{ base: 'none', md: 'flex', xs: 'none' }}
                width={{ base: 'full', md: 'auto' }}
                flexGrow={1}
                textAlign={"center"}>
                <Box onClick={() => onNavItemPress("Home")} justifyContent={"center"} alignItems={"center"} paddingX={"1em"} width={"90px"} paddingY={"1em"} className={styles.navButtonBox}>
                    <Typography>
                        Home
                    </Typography>
                </Box>
                <Box onClick={() => onNavItemPress("AboutMe")} justifyContent={"center"} alignItems={"center"} paddingX={"1em"} width={"90px"} paddingY={"1em"} className={styles.navButtonBox}>
                    <Typography >
                        About Me
                    </Typography>
                </Box>
                <Box onClick={() => onNavItemPress("Research")} justifyContent={"center"} alignItems={"center"} paddingX={"1em"} width={"90px"} paddingY={"1em"} className={styles.navButtonBox}>
                    <Typography>
                        Research
                    </Typography>
                </Box>
                <Box onClick={() => onNavItemPress("Photos")} justifyContent={"center"} alignItems={"center"} paddingX={"1em"} width={"90px"} paddingY={"1em"} className={styles.navButtonBox}>
                    <Typography>
                        Photos
                    </Typography>
                </Box>
                <Box onClick={() => onNavItemPress("Blog")} justifyContent={"center"} alignItems={"center"} paddingX={"1em"} width={"90px"} paddingY={"1em"} className={styles.navButtonBox}>
                    <Typography>
                        Blog
                    </Typography>
                </Box>
            </Box>
            <Box display={{ base: 'none', md: 'none', xs: 'flex' }}>
                <IconButton ref={anchorRef} onClick={openPopper}>
                    <Menu fontSize='large' style={{ color: "#fffbd4" }} />
                </IconButton>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper style={{ backgroundColor: "rgb(241, 240, 232)" }}>
                    <ClickAwayListener onClickAway={handleClose} >
                        <MenuList>
                            <MenuItem onClick={() => { onNavItemPress("Home"); openPopper(); }} >Home</MenuItem>
                            <MenuItem onClick={() => { onNavItemPress("AboutMe"); openPopper(); }} >About Me</MenuItem>
                            <MenuItem onClick={() => { onNavItemPress("Research"); openPopper(); }} >Research</MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Modal>

        </Grid>
    )
}

export default Header;