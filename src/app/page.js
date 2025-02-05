"use client";
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Enabling from "./img/Enabling.png"
import Cpoe from "./img/Cpoe.png"
import NextArrow from "./img/arrow-next.png"
import Conveyor from "./img/conveyor-rendering.png"
import Scalability from "./img/Scalability.png"
import Image5 from "./img/image5.svg";
import Image6 from "./img/image6.svg";
import Image7 from "./img/image7.svg";
import Image8 from "./img/image8.svg";
import Image9 from "./img/image9.svg";
import lock from "./img/lock.png"
import logo from "./img/logo.svg"
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import setting from "./img/setting.png"
import vector from "./img/Vector.png"
import Frame from "./img/Frame9.png"
import laptop1 from "./img/laptop1.svg"
import Union from "./img/Union.svg"
import Frame2 from "./img/Frame2.svg"
import Vector1 from "./img/Vector1.svg"
import Line9 from "./img/Line9.png"
import Group5 from "./img/Group5.png"
import Software from "./img/Software.png"
import './page.css'

const caseStudies = [
    {
        title: "Enabling Telehealth for a Leading EHR platform",
        description:
            "An innovative AI-based SaaS platform was developed to transform logistics and supply chain management, focusing on document management and optimization of previously manual workflows. This cutting-edg...",
        image: Enabling,
    },
    {
        title: "CPOE & Labs EHR Integration using HL7",
        description:
            "This project focused on integrating Clinical Provider Order Entry (CPOE) and lab systems into a leading EHR platform, enhancing the healthcare workflow through the use of HL7 standards. This case study details our journe...",
        image: Cpoe,
    },
    {
        title: "Harnessing TMS for Enhanced Supply Chains",
        description:
            "A project was undertaken to modernize the logistics and supply chain management processes in a traditionally manual industry. The goal was to develop an AI-based SaaS platform capable of supporting the operations...",
        image: Enabling,
    },
];

const TransformationInfo = [
    {
        title: "AI-Driven Supply Chain SaaS Transformation",
        description:
            "A significant project was undertaken to modernize the logistics and supply chain management processes in a traditionally manual industry. The goal was to develop an AI-based SaaS platform capable of supporting the operations of major food distributors and other logistics companies at high volume.",
        image: Conveyor,
    },
    {
        title: "Navigating Database Scalability",
        description:
            "In the ever-evolving realm of database management, the hurdle of scalability frequently poses a significant for numerous organizations. As companies experience growth and deal with increasing amounts of data, they may encounter limitations with the traditional approach of vertical to explore alternative strategies for database scalability.",
        image: Scalability,
    }
];

const services = [
    {
        title: "Software Engineering Solutions",
        description: "Your technology stack, simplified. We offer a unified approach to software engineering, combining custom software solutions, full-stack development, and cloud & DevOps services. Our team of experts ensures that your business is equipped with scalable, secure, and efficient systems that drive growth and innovation.",
        image: Union,
    },
    {
        title: "Fractional CTO Services",
        description: "Strategic technology leadership without the full-time commitment. Our Fractional CTO services offer you the expertise and guidance needed to align your technology strategy with business objectives. Whether you're a startup or an established enterprise, we provide actionable insights that make a difference.",
        image: Vector1,
    },
    {
        title: "Engineering Staffing Solutions",
        description: "The right talent for your tech needs. Our specialized staffing services provide you with skilled professionals in full-stack development, cloud solutions, and DevOps. Eliminate the bottlenecks in your projects with our vetted, high-caliber engineering talent.",
        image: Frame2,
    },
];

const serviceData = [
    { icon: lock, text: "CTO Services", styles: { fontSize: "16px", fontWeight: 700 } },
    { icon: Software, text: "Full-Stack Software Development", styles: { fontSize: "16px", fontWeight: 700 } },
    { icon: setting, text: "Engineering Staffing Solutions", styles: { fontSize: "16px", fontWeight: 700 } }
];


const pages = ["About us", "Services", "Insights", "Testimonial", "Elevate"];
const Home = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
           
            <Box className="container">
                <Box className="rect">

                <Container>
                    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none", paddingLeft: "0px !important", paddingRight: '0px !important' }}>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between", paddingLeft: "0px !important", paddingRight: '0px !important', alignItems: 'center' }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Image src={logo} alt="Logo" height={40} style={{ maxWidth: "100%", height: "auto" }} />
                            </Box>

                            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                                {pages.map((page) => (
                                    <Button key={page} sx={{ color: "#161414", fontSize: "18px", fontWeight: 400, textTransform: 'capitalize' }}>
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <Button variant="contained" sx={{ width: '157px', height: '44px', borderRadius: "8px", fontSize: '18px', fontWeight: 500, backgroundColor: '#2B68FF', textTransform: 'capitalize' }}>
                                    Contact Us
                                </Button>
                            </Box>

                            <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={handleDrawerToggle}>
                                <MenuIcon sx={{ color: "black" }} />
                            </IconButton>
                        </Toolbar>
                        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                            <List sx={{ width: 250 }}>
                                {pages.map((page) => (
                                    <ListItem key={page} disablePadding>
                                        <ListItemButton onClick={handleDrawerToggle}>
                                            <ListItemText primary={page} sx={{ textAlign: "center" }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                <ListItem sx={{ justifyContent: "center", mt: 2 }}>
                                    <Button variant="contained" sx={{ borderRadius: 2, px: 3, backgroundColor: '#2B68FF', textTransform: 'capitalize' }}>
                                        Contact Us
                                    </Button>
                                </ListItem>
                            </List>
                        </Drawer>
                    </AppBar>
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems="center"
                        justifyContent="space-between"
                        py={5}
                        gap={1}
                    >
                        <Box flex={1.5} textAlign={{ xs: "center", md: "left" }}>
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ fontSize: { xs: "25px", md: "42px" }, fontWeight: 500 }}
                            >
                                Transforming{" "}
                                <span className="bottom-image">
                                    Software Challenges
                                    <Image src={Group5} alt="Group5" className="underline-image" />
                                </span>{" "}
                                into Business{" "}
                                <span >Success</span>.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: "14px", md: "18px" }, lineHeight: { xs: '24px', md: '32.4px' }, fontWeight: 400 }} paragraph>
                                Encountering technical roadblocks or lacking strategic direction?
                                TeqEngine is your definitive solution for transforming software
                                challenges into business advantages.
                            </Typography>
                            <Box display="flex" alignItems="center" flexWrap="wrap" mt={2} gap={2}>
                                {serviceData.map((item, index) => (
                                    <Typography
                                        key={index}
                                        variant="body2"
                                        display="flex"
                                        alignItems="center"
                                        sx={{ flex: "0.5 0.5 1", whiteSpace: "nowrap", ...item.styles }}
                                    >
                                        {item.icon && <Image style={{ marginRight: "2px", width: '24px', height: '25px' }} src={item.icon} alt='icon'/>}
                                        {item.text}
                                    </Typography>
                                ))}
                            </Box>
                            <Box
                                mt={3}
                                display="flex"
                                gap={2}
                                justifyContent={{ xs: "center", md: "flex-start" }}
                                flexWrap="wrap"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        width: '247px',
                                        height: '55px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        background: 'linear-gradient(89.78deg, #FEA439 0.19%, #F06128 99.8%);',
                                        color: '#FFFFFF',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Schedule A Call
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        width: '247px',
                                        height: '55px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        background: '#FFFFFF',
                                        color: '#2B68FF',
                                        textTransform: 'capitalize',
                                        border: '1px solid #2B68FF',
                                    }}
                                >
                                    <Image src={vector}  alt="SEO Message" />&nbsp; SEO Message
                                </Button>
                            </Box>
                        </Box>
                        <Box flex={1} display="flex" justifyContent="center">
                            <Image
                                src={Frame}
                                alt="Illustration"
                                width={500}
                                height={400}
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </Box>
                    </Box>
                </Container>
                </Box>
            </Box>

            <Container>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    alignItems="center"
                    justifyContent="space-between"
                    gap={4}
                    py={5}
                    style={{ marginBottom: { xs: "50px", md: "100px" } }}

                >
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                            <Box textAlign={{ xs: "center", md: "left" }} >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "25px", md: "45px" },
                                        fontWeight: 500,
                                        color: '#757575',
                                    }}
                                >
                                    Our technology partners that
                                    <Box
                                        component="span"
                                        sx={{
                                            fontSize: { xs: "25px", md: "45px" },
                                            fontWeight: 500,
                                            background: 'linear-gradient(269.42deg, #F06128 25.23%, #FEA439 77.63%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            color: '#FEA439',
                                        }}
                                    >
                                        {' '}rely on us
                                    </Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box
                                display="grid"
                                gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
                                gap={4}
                                justifyContent="center"
                                alignItems="center"
                                textAlign="center"
                                maxWidth="800px"
                                margin="0 auto"
                            >
                                <Image
                                    src={Image5}
                                    alt="Amazon Web Services"
                                    width={120}
                                    height={120}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        filter: "grayscale(100%)",
                                    }}
                                />
                                <Image
                                    src={Image6}
                                    alt="Microsoft Azure"
                                    width={120}
                                    height={120}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        filter: "grayscale(100%)",
                                    }}
                                />
                                <Image
                                    src={Image8}
                                    alt="Node.js"
                                    width={120}
                                    height={120}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        filter: "grayscale(100%)",
                                    }}
                                />
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    gridColumn="1 / span 3"
                                    gap={4}
                                >
                                    <Image
                                        src={Image9}
                                        alt="React"
                                        width={120}
                                        height={120}
                                        style={{
                                            maxWidth: "30%",
                                            height: "auto",
                                            filter: "grayscale(100%)",
                                        }}
                                    />
                                    <Image
                                        src={Image7}
                                        alt="Google Cloud Platform"
                                        width={120}
                                        height={120}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            filter: "grayscale(100%)",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <section className="header">
                    <Typography variant="h2" sx={{ fontSize: { xs: "25px", md: "45px" }, color: "black", fontWeight: 500, textAlign: 'center' }}>
                        What can TeqEngine do for your business?
                    </Typography>
                    <Grid container spacing={4} justifyContent="start" className="services" alignItems="stretch">
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{ paddingBottom: '0px !important' }}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        borderRadius: "12px",
                                        paddingTop: { xs: "20px", md: "40px" },
                                        paddingX: { xs: "20px", md: "40px" },
                                        paddingBottom: "16px",
                                        height: "100%",
                                        border: "2px solid #faf9f9f5",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardContent sx={{ padding: 0, display: "flex", flexDirection: "column", alignItems: "start", textAlign: "left", flexGrow: 1 }}>
                                        <Image
                                            component="img"
                                            src={service.image}
                                            alt={service.title}
                                            className='feature-icon'
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: "18px",
                                                color: "#0D0D0D",
                                                lineHeight: "27px",
                                                fontWeight: "bold",
                                                marginBottom: "10px",
                                                fontWeight: 400
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 400,
                                                color: "#7A7A7A",
                                                flexGrow: 1,
                                                lineHeight: "26px",
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
                        <Button variant="contained" sx={{ width: '157px', height: '44px', fontSize: '18px', borderRadius: "8px", px: 3, backgroundColor: '#2B68FF', textTransform: 'capitalize' }}>
                            Contact Us
                        </Button>
                    </Box>
                </section>
            </Container>
            <div className="banner" style={{ marginTop: '100px', marginBottom: { xs: '50px', md: '100px' } }}>
                <Container>
                    <Grid
                        container
                        className="cta-section"
                        spacing={3}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item xs={12} sm={6}>
                            <Box className="cta-text" textAlign={{ xs: "center", sm: "left" }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: "32px", sm: "40px", md: "46px" },
                                        fontWeight: 700,
                                        color: "#FFFFFF",
                                        textAlign: { xs: 'center', sm: 'left' }
                                    }}
                                >
                                    Engineering your vision into reality.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: "16px", sm: "18px" },
                                        fontWeight: 500,
                                        color: "#FFFFFF",
                                        marginTop: "18px",
                                        textAlign: { xs: 'center', sm: 'left' }
                                    }}
                                >
                                    Talk to our team to scope your next project. Let's work together!
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                display="flex"
                                justifyContent={{ xs: "center", sm: "flex-end" }}
                                mt={{ xs: 2, sm: 0 }}
                            >
                                <Button className="cta-button" sx={{ padding: "12px 24px" }}>
                                    Schedule a Call
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container>
                <div>
                    <section className="about-us">
                        <h2 className="about-us-title">About Us</h2>
                        <h3 className="about-us-subtitle"><span className=""> <span className="bottom-image">
                            TeqEngine: Y
                            <img src={Line9} alt="" className="underline-image" />
                        </span></span>our Partner in Digital Transformation</h3>
                        <p className="about-us-description">
                            In a landscape where technology is the linchpin of business success, many companies find themselves struggling with software challenges and strategic gaps. At TeqEngine, we understand that businesses seek more than just technical fixes they aim for solutions that drive tangible business
                            advantages
                        </p>
                        <Grid container spacing={3} alignItems="center" justifyContent="center" className="about-us-services">
                            <Grid item xs={12} sm={6} md={6}>
                                <div className="about_text">
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <div className="about-us-card">
                                                <h3 className="about-us-card-title">Comprehensive Solutions for Your Business</h3>
                                                <p className="about-us-card-description">
                                                    We specialize in Full-Stack Software Solutions, Fractional CTO Solutions, and Engineering Staffing Solutions. Our expertise is designed to address your most pressing technical and strategic needs, enabling you to focus on what you do best—running your business.
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item>
                                            <div className="about-us-card">
                                                <h3 className="about-us-card-title">Results-Driven Approach</h3>
                                                <p className="about-us-card-description">
                                                    We specialize in Full-Stack Software Solutions, Fractional CTO Solutions, and Engineering Staffing Solutions. Our expertise is designed to address your most pressing technical and strategic needs, enabling you to focus on what you do best—running your business.
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <div>
                                    <Image src={laptop1} alt="TeqEngine" className="about-us-image" />
                                </div>
                            </Grid>
                        </Grid>
                        <Button variant="contained" className="about-button">
                            Learn More
                        </Button>
                    </section>
                </div>
                <Box sx={{ display: 'flex', textAlign: 'center', width: '100%' }} className="about-us-title">Our Projects</Box>
                <Typography sx={{ fontSize: { xs: '20px', md: '45px' }, fontWeight: 500, textAlign: 'center', margin: '16px 0px' }}>Our Case Studies: A Track Record of Success</Typography>
                <Typography sx={{ fontSize: { xs: '16px', md: '19px' }, fontWeight: 300, textAlign: 'center', lineHeight: { xs: '25.4px', md: '32.4px' } }}>In today's digital-first landscape, agility and innovation are not just buzzwords — they're imperatives. Reach out for a free consultation to discover how TeqEngine can be your strategic partner in achieving digital excellence.</Typography>
                <Box sx={{ flexGrow: 1, marginTop: '48px', marginBottom: '32px' }}>
                    <Grid container spacing={3} justifyContent="center">
                        {caseStudies.map((study, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card elevation={0}>
                                    <CardMedia style={{ borderRadius: 12, objectFit: 'fill' }} component="img" height="331" image={study.image.src} alt={study.title} />
                                    <CardContent sx={{ p: "16px 0px" }}>
                                        <Typography variant="h6" sx={{ fontSize: { xs: "18px", md: "22px" } }} fontWeight="500">
                                            {study.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography variant="body2" sx={{ mt: 1, fontSize: '16px', color: "text.secondary", lineHeight: '27px' }}>
                                                {study.description}
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", mt: { xs: 21, md: 15 }, color: "primary.main" }}>
                                                <img src={NextArrow.src} width={20} height={19.5} alt="Next Arrow" />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, marginTop: '48px', marginBottom: '32px' }}>
                    <Grid container spacing={3} >
                        {TransformationInfo.map((study, index) => (
                            <Grid item xs={12} sm={12} md={6} key={index}>
                                <Card elevation={0}>
                                    <CardMedia style={{ borderRadius: 12, objectFit: 'fill' }} component="img" height="331" image={study.image.src} alt={study.title} />
                                    <CardContent sx={{ p: { xs: "16px 0px", md: "16px 0px 16px 16px" } }}>
                                        <Typography variant="h6" fontSize={22} fontWeight="bold">
                                            {study.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography variant="body2" sx={{ mt: 1, fontSize: '16px', color: "text.secondary", lineHeight: '27px' }}>
                                                {study.description}
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", mt: { xs: 28, md: 15 }, color: "primary.main" }}>
                                                <img src={NextArrow.src} width={20} height={19.5} alt="Next Arrow" />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button style={{ color: '#FFFFFF', fontSize: '18px', textTransform: 'capitalize', borderRadius: '8px', display: 'flex', justifyContent: 'center', backgroundColor: '#F48F16', width: '153px', height: '44px', alignItems: 'center' }}>Read more</Button>
                </Box>
            </Container>
        </>
    );
};

export default Home;
