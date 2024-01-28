'use client';
import styles from './page.module.css'
import { Box, Grid, Typography } from '@mui/material';
import { colors, images } from '../store/commonUtils';
import Typed from 'typed.js';
import { useEffect, useRef, } from 'react';
import Header from './components/Header';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {

    const typedText = useRef(null);
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

 // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {

  //   const pin = gsap.fromTo(sectionRef.current, {
  //     translateX: 0
  //   }, {
  //     translateX: "-200vw",
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       start: "top top",
  //       end: "1519 top",
  //       scrub: 0.6,
  //       pin: true
  //     }
  //   })

  //   return () => {
  //     pin.kill();
  //   }
  // }, [])

    const homeRef = useRef<HTMLInputElement>(null);
    const aboutMeRef = useRef<HTMLInputElement>(null);

    const executeScroll = (scrollComponent: string) => {
        console.log("The ScrollComponent - ", scrollComponent)
        switch (scrollComponent) {
            case "Home":
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "AboutMe":
                aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "Project":
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "Publications":
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "Contact":
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }

    return (
        <Box className={styles.bgImage} >
            <Header onNavItemPress={executeScroll} />
            <Grid ref={homeRef} item md={12} >
                <Box className={styles.p1_titleBox}>
                    <Typography variant='h2' className={styles.firstText}>I'm a <span className={styles.secondText} ref={typedText} /></Typography>
                </Box>
                <Box className={styles.p1_descBox}>
                    <Typography>
                        My work focuses on creating systems that allow for the efficient and automated study of ecological systems. Specifically, I focus on combining imaging and computer vision to study the relationship between individuals and their social and physical landscapes.
                    </Typography>
                </Box>
            </Grid >
            <Grid ref={aboutMeRef} height={"100vh"} item md={12}>
                <Box> </Box>
            </Grid>
        </Box>
    )
}

{/* <Grid paddingTop={{ md: "65px", sx: "30px" }} className={[styles.bgImage, styles.bgImage1].join(" ")} ref={researchRef} md={12} item paddingX={{ md: "2em", xs: "1em" }} flexDirection={"row"} display={"flex"} height={"100vh"} justifyContent={"center"} alignItems={"center"} >
<Box position={"relative"} ref={triggerRef} overflow={"hidden"}>
  <Box ref={sectionRef} display={"flex"} flexDirection={"row"} position={'relative'} width={"300vw"}>
    <Box height={"100vh"} width={"100vw"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Typography variant='h2'>This is page one</Typography>
    </Box>
    <Box height={"100vh"} width={"100vw"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Typography variant='h2'>This is page two</Typography>
    </Box>
    <Box height={"100vh"} width={"100vw"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Typography variant='h2'>This is page three</Typography>
    </Box>
  </Box>
</Box>
</Grid> */}


// .bgImage{
//     width: 100%;
//     height: 100vh;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     background-image: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.1)),url(../assets/images/bg_01.jpg);
//     -ms-overflow-style: none;  /* Internet Explorer 10+ */
//     scrollbar-width: none;  /* Firefox */
// }
// .navBar{
//     width: 100%;
//     position: fixed;
//     box-shadow: 0px 5px 33px  rgba(255, 216, 90,0.4);
// }
// .navButtonBox{
//     cursor: pointer;
//     background-color: transparent;
//     transition: 1s;
//     color: #fffbd4;
    
// }
// .navButtonBox:hover{
//     background-color: rgba(241,240,232,.81);
//     color:#644F0A;
//     transition: 1s --primary-glow;
//     box-shadow: 5px 0px 33px rgba(245,247,248,.65);
// }
// .p1_titleBox{
//     margin-top: 18em;
//     flex: 1;
//     background-color: red;

//     display: flex;
//     color: #fffbd4;
//     padding-left: 10em;  
// }
// .p1_descBox{
//     margin-top: 1em;
//     display: flex;
//     color: #fffbd4;
//     max-width: 50em;
//     padding-left: 10em;  
// }
// .firstText{
//     font-weight: 500; 
//     display: flex;
//     flex-direction: row;
// }
// .secondText{
//     margin-left: 0.3em;
//     color: #ffd85a;
// }