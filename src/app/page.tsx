'use client';
import styles from './page.module.css'
import { Box, Button, Card, CardActions, CardContent, CardMedia, ClickAwayListener, Divider, Grid, IconButton, ImageList, ImageListItem, Modal, Paper, Typography } from '@mui/material';
import { colors, images } from '../store/commonUtils';
import Typed from 'typed.js';
import { useEffect, useRef, useState, } from 'react';
import Header from './components/Header';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Diversity3Icon from '@mui/icons-material/Diversity3';

interface imageData {
  img: string;
  title: string;
}

export default function Home() {

  const typedText = useRef(null);
  const homeRef = useRef<HTMLInputElement>(null);
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const researchRef = useRef<HTMLInputElement>(null);
  const photosRef = useRef<HTMLInputElement>(null);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedImgObj, setSelectedImageObj] = useState<imageData>();

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

  const openImagePopper = async (item: imageData) => {
    await setSelectedImageObj(item);
    setOpenImageModal(!openImageModal);
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
    setOpenImageModal(false);
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
        photosRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "Blog":
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1581280227715-56d3062138a9',
      title: 'deer hunting in glencoe scotland',
    },
    {
      img: 'https://images.unsplash.com/photo-1612311683149-939135aa6afa',
      title: 'Northern cardinal',
    },
    {
      img: 'https://images.unsplash.com/photo-1612311683156-faddba5bd472',
      title: 'Northern cardinal (female)',
    },
    {
      img: 'https://images.unsplash.com/photo-1528189333328-7f467fc180c6',
      title: 'This little guy saying hello',
    },
    {
      img: 'https://images.unsplash.com/photo-1616878457342-5cc51083cfac',
      title: 'Birds',
    },
    {
      img: 'https://images.unsplash.com/photo-1664990594768-d6ed59d8983a',
      title: 'My wife leading us through the hiking trail',
    },
    {
      img: 'https://images.unsplash.com/photo-1655481727563-c4e78cc4e515',
      title: 'Bunny',
    },
    {
      img: 'https://images.unsplash.com/photo-1655819243398-17fa7feef508',
      title: 'Sparrow',
    },
    {
      img: 'https://images.unsplash.com/photo-1612311221644-54ade7411621',
      title: 'Black-capped Chickadee',
    },
    {
      img: 'https://images.unsplash.com/photo-1694304804759-7c738ce19586',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1613469555436-35427e42ed4e',
      title: 'Coastal strolling',
    },
    {
      img: 'https://images.unsplash.com/photo-1688997690672-afbcd2100c9f',
      title: 'Tiger',
    },
  ];

  return (
    <Grid container>
      <Header onNavItemPress={executeScroll} />
      <Grid ref={homeRef} md={12} item paddingX={{ md: 0, xs: "1em" }} flexDirection={"column"} display={"flex"} justifyContent={"center"} className={styles.bgImage} >
        <Box color={"#fffbd4"} paddingLeft={{ lg: "12em", md: "10em", xs: 0 }} display={"flex"} >
          <Typography display={"flex"} sx={{ fontSize: { md: '60px', xs: '34px' } }} flexWrap={"wrap"} flexDirection={"row"} fontWeight={"500"}>I'm a&nbsp;<Typography color={"#ffd85a"} sx={{ fontSize: { md: '60px', xs: '34px' } }} ref={typedText} /></Typography>
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
      <Grid paddingTop={{ md: "65px", sx: "30px" }} display={"flex"} flex={1} className={[styles.bgImage, styles.bgImage2].join(" ")} ref={researchRef} md={12} item paddingX={{ md: "2em", xs: "1em" }} height={"100vh"}>
        <Box overflow={"scroll"} marginTop={{ xs: "80px", sm: "90px" }} display={"flex"} flex={1} flexDirection={{ md: 'row', sm: 'column', xs: 'column' }} justifyContent={"space-evenly"} alignItems={"center"}>
          <Card style={{ backgroundColor: "rgba(0,0,0,.5)", overflow: 'scroll' }} sx={{ height: { md: "53vh", sm: "auto" }, maxWidth: { md: "calc(25vw - 2em)", sm: "calc(100vw -2em)" } }}>
            <CardContent>
              <Typography color={"#fffbd4"} sx={{ fontSize: { md: '24px', xs: '19px' } }} textAlign={"center"} >Research Fellow</Typography>
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
          <Card style={{ backgroundColor: "rgba(0,0,0,.5)", overflow: 'scroll' }} sx={{ height: { md: "53vh", sm: "auto" }, maxWidth: { md: "calc(25vw - 2em)", sm: "calc(100vw -2em)" } }}>
            <CardContent>
              <Typography color={"#fffbd4"} sx={{ fontSize: { md: '24px', xs: '19px' } }} textAlign={"center"} >Junior Research Fellow</Typography>
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
          <Card style={{ backgroundColor: "rgba(0,0,0,.5)", overflow: 'scroll' }} sx={{ height: { md: "53vh", sm: "auto" }, maxWidth: { md: "calc(25vw - 2em)", sm: "calc(100vw -2em)" } }}>
            <CardContent>
              <Typography color={"#fffbd4"} sx={{ fontSize: { md: '24px', xs: '19px' } }} textAlign={"center"} >Research Assistant</Typography>
              <Divider sx={{ backgroundColor: 'rgba(241,240,232,.81)' }} light={false} />
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <SchoolIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Wildlife Conservation and Research Society, Pune, India
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <AssessmentIcon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Concentrated on Western India
                </Typography>
              </Box>
              <Box marginTop={".5em"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <Diversity3Icon style={{ color: "#ffd85a89" }} />
                <Typography color={"#fffbd4"} sx={{ fontSize: { md: '14px', sm: '12px', xs: '11px' } }} variant='body2' marginLeft={"1em"}>
                  Conducted for a period of 3 months
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid paddingTop={{ md: "65px", sx: "30px" }} className={[styles.bgImage, styles.bgImage3].join(" ")} ref={photosRef} md={12} item paddingX={{ md: "2em", xs: "1em" }} flexDirection={"row"} display={"flex"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box sx={{ width: { md: "calc(100vw -0.80em)", xs: "calc(100vw -1em)" }, height: "70vh", overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData?.map((item) => (
              <ImageListItem onClick={() => openImagePopper(item)} key={item.img} sx={{ cursor: 'zoom-in' }}>
                <img
                  srcSet={`${item.img}?w=358&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=358&fit=crop&auto=format`}
                  alt={item.title}
                  onLoadStart={() => <img src={"/images/loader.gif"} />}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
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
      <Modal
        open={openImageModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper style={{ backgroundColor: "rgb(241, 240, 232)" }} sx={{ margin: { md: "2em", sm: "1em" }, height: "calc(100% -2em)", marginTop: { xs: "1em" } }} >
          <ClickAwayListener onClickAway={handleClose} >
            <Box >
              <Box flexDirection={"row"} justifyContent={"flex-end"} flex={1} display={"flex"}>
                <IconButton onClick={handleClose} aria-label="delete" sx={{ color: "#644F0A" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ padding: "1em" }} flexDirection={"row"} justifyContent={"center"} flex={1} display={"flex"}>
                <img
                  srcSet={`${selectedImgObj?.img}?w=358&fit=crop&auto=format&dpr=2 2x`}
                  src={`${selectedImgObj?.img}?w=358&fit=crop&auto=format`}
                  alt={selectedImgObj?.title || ""}
                  loading="lazy"
                  height={"100%"}
                  className={styles.modalImage}
                />
              </Box>
            </Box>
          </ClickAwayListener>
        </Paper>
      </Modal>
    </Grid >
  )
}