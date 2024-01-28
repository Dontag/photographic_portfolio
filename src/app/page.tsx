'use client';
import styles from './page.module.css'
import { Box, Button, Card, CardActions, CardContent, CardMedia, ClickAwayListener, Divider, Grid, IconButton, Modal, Paper, Typography } from '@mui/material';
import { colors, images } from '../store/commonUtils';
import Typed from 'typed.js';
import { useEffect, useRef, useState, } from 'react';
import Header from './components/Header';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export default function Home() {

  const typedText = useRef(null);
  const homeRef = useRef<HTMLInputElement>(null);
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const researchRef = useRef<HTMLInputElement>(null);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: [' Wildlife Photographer'],
      typeSpeed: 100,
      loop: true,
      backSpeed: 80,
      backDelay: 1500
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);




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
  }
  const executeScroll = (scrollComponent: string) => {
    console.log("The ScrollComponent - ", scrollComponent)
    switch (scrollComponent) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "AboutMe":
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Research":
        researchRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Photos":
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Blog":
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  return (
    <Grid container>
      <Header onNavItemPress={executeScroll} />
      <Grid ref={homeRef} md={12} item paddingX={{ md: 0, xs: "1em" }} flexDirection={"column"} display={"flex"} justifyContent={"center"} className={styles.bgImage} >
        <Box color={"#fffbd4"} paddingLeft={{ lg: "12em", md: "10em", xs: 0 }} display={"flex"} >
          <Typography suppressHydrationWarning display={"flex"} sx={{ fontSize: { md: '60px', xs: '34px' } }} flexWrap={"wrap"} flexDirection={"row"} fontWeight={"500"}>I'm a&nbsp;<Typography color={"#ffd85a"} sx={{ fontSize: { md: '60px', xs: '34px' } }} ref={typedText} /></Typography>
        </Box>
        <Box marginTop={"1em"} color={"#fffbd4"} maxWidth={"50em"} paddingLeft={{ lg: "12em", md: "10em", xs: 0 }} >
          <Typography variant='body1'>
            My work focuses on creating systems that allow for the efficient and automated study of ecological systems. Specifically, I focus on combining imaging and computer vision to study the relationship between individuals and their social and physical landscapes.
          </Typography>
        </Box>
      </Grid>
      <Grid paddingTop={{ md: "65px", sx: "30px" }} className={[styles.bgImage, styles.bgImage1].join(" ")} ref={aboutMeRef} md={12} item paddingX={{ md: "2em", xs: "1em" }} flexDirection={"row"} display={"flex"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box sx={{ backdropFilter: "blur(8px)" }} borderRadius={"5px"} bgcolor={"#fffbd499"} flexDirection={"row"} display={{ base: 'none', md: 'flex', xs: 'none' }}>
          <Box bgcolor={"#ffd85a"} overflow={"hidden"} borderRadius={"5px"} boxShadow={"0px 0px 12px"}>
            <Image priority={false} className={styles.portrait} alt='About Me' src={images?.aboutMe} />
          </Box>
          <Box flexDirection={"column"} borderRadius={"0px 5px 5px 0px"} maxWidth={600} display={"flex"} flex={1} padding={"1em"}>
            <Typography variant='subtitle1'><span style={{ fontSize: 40, color: "#ffd85a", lineHeight: '1.2' }}>W</span>elcome to my corner of the scientific realm! I am a passionate early-career researcher specializing in animal behavior and cognition, with a wealth of field experience spanning diverse taxa across continents. My research journey has led me to unravel the intricacies of collective behaviors in wild animal groups, employing cutting-edge technologies such as drone imaging and computer vision.
            </Typography>
            <Typography marginTop={"0.5em"} variant='subtitle1'>
              <span style={{ fontSize: 40, color: "#ffd85a", lineHeight: '1.2' }}>S</span>eamlessly blending project design and management with effective liaisoning with stakeholders, my diverse skill set is a testament to my commitment to holistic wildlife research. This collaboration extends harmoniously from the scientific community to local communities.
            </Typography>
          </Box>
        </Box>
        <Card style={{ height: "80vh", backgroundColor: "#fffbd499" }} sx={{ display: { md: 'none' }, overflow: 'scroll', marginTop: { xs: "80px", sm: "90px" } }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250px"
            image="/images/aboutMe.jpg"
          />
          <CardContent sx={{ display: "flex", flex: 1 }}>
            <Typography sx={{ fontSize: { md: '16px', sm: '14px', xs: '12px' } }} variant='subtitle1'><span style={{ fontSize: 26, color: "#ffd85a", lineHeight: '1.2' }}>W</span>elcome to my corner of the scientific realm! I am a passionate early-career researcher specializing in animal behavior and cognition, with a wealth of field experience spanning diverse taxa across continents. My research journey has led me to unravel the intricacies of collective behaviors in wild animal groups, employing cutting-edge technologies such as drone imaging and computer vision.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button onClick={openPopper} style={{ color: "#644F0A", backgroundColor: "#ffd85a" }} variant='contained' size="small">Read More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid paddingTop={{ md: "65px", sx: "30px" }} display={"flex"} flex={1} className={[styles.bgImage, styles.bgImage1].join(" ")} ref={researchRef} md={12} item paddingX={{ md: "2em", xs: "1em" }} height={"100vh"}>
        <Box overflow={"scroll"} marginTop={{ xs: "80px", sm: "90px" }} display={"flex"} flex={1} flexDirection={{ md: 'row', sm: 'column', xs: 'column' }} justifyContent={"space-evenly"} alignItems={"center"}>
          <Card style={{ backgroundColor: "rgba(0,0,0,.5)" }} sx={{ maxWidth: { md: "calc(25vw - 2em)", sm: "calc(100vw -2em)" } }}>
            <CardContent>
              <Typography color={"#fffbd4"} suppressHydrationWarning sx={{ fontSize: { md: '24px', xs: '19px' } }} textAlign={"center"} >Research Fellow</Typography>
              <Divider sx={{ backgroundColor: 'rgba(241,240,232,.81)' }} light={false} />
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <SchoolIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  National Institute of Advanced Studies, India
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <AssessmentIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Studying referential and intentional communication in wild bonnet macaques
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <Diversity3Icon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Conducted in Southern India for a duration of 6 months
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card style={{ backgroundColor: "rgba(0,0,0,.5)" }} sx={{ maxWidth: { md: "calc(25vw - 2em)", sm: "calc(100vw -2em)" } }}>
            <CardContent>
              <Typography color={"#fffbd4"} suppressHydrationWarning sx={{ fontSize: { md: '24px', xs: '19px' } }} textAlign={"center"} >Junior Research Fellow</Typography>
              <Divider sx={{ backgroundColor: 'rgba(241,240,232,.81)' }} light={false} />
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <SchoolIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Centre for Ecological Sciences, Indian Institute of Science, India
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <AssessmentIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Investigating the behavioral ecology and ecological niche modeling of avian frugivores
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <Diversity3Icon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Carried out in Southern India with a field duration of 2 months
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card style={{ backgroundColor: "rgba(0,0,0,.5)" }} sx={{ maxWidth: { md: "calc(25vw - 2em)", sm: "calc(100vw -2em)" } }}>
            <CardContent>
              <Typography color={"#fffbd4"} suppressHydrationWarning sx={{ fontSize: { md: '24px', xs: '19px' } }} textAlign={"center"} >Research Fellow</Typography>
              <Divider sx={{ backgroundColor: 'rgba(241,240,232,.81)' }} light={false} />
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <SchoolIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  National Institute of Advanced Studies, India
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <AssessmentIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Studying referential and intentional communication in wild bonnet macaques
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <Diversity3Icon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Conducted in Southern India for a duration of 6 months
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper style={{ backgroundColor: "rgb(241, 240, 232)" }}>
          <ClickAwayListener onClickAway={handleClose} >
            <Box >
              <Box flexDirection={"row"} justifyContent={"flex-end"} flex={1} display={"flex"}>
                <IconButton onClick={handleClose} aria-label="delete" sx={{ color: "#644F0A" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box paddingX={"1em"} paddingBottom={"1em"} paddingTop={"0.1"}>
                <Typography variant='subtitle1'>
                  <span style={{ fontSize: 40, color: "#ffd85a", lineHeight: '1.2' }}>W</span>elcome to my corner of the scientific realm! I am a passionate early-career researcher specializing in animal behavior and cognition, with a wealth of field experience spanning diverse taxa across continents. My research journey has led me to unravel the intricacies of collective behaviors in wild animal groups, employing cutting-edge technologies such as drone imaging and computer vision.
                </Typography>
                <Typography marginTop={"0.5em"} variant='subtitle1'>
                  <span style={{ fontSize: 40, color: "#ffd85a", lineHeight: '1.2' }}>S</span>eamlessly blending project design and management with effective liaisoning with stakeholders, my diverse skill set is a testament to my commitment to holistic wildlife research. This collaboration extends harmoniously from the scientific community to local communities.
                </Typography>
              </Box>
            </Box>
          </ClickAwayListener>
        </Paper>
      </Modal>
    </Grid >
  )
}