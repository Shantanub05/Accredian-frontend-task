import React from "react";
import { Box, Typography, Grid, Link, Button, Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const styles = {
  footer: {
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    padding: "40px 0",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: "16px",
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
  },
  button: {
    backgroundColor: "#1A73E8",
    color: "#FFFFFF",
    borderRadius: "24px",
    padding: "8px 24px",
    textTransform: "none",
    fontWeight: "bold",
  },
  socialIcon: {
    marginRight: "8px",
    color: "#FFFFFF",
  },
};

const Footer = () => {
  return (
    <Box style={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={styles.sectionTitle}>
              Programs
            </Typography>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program) => (
              <Link href="#" key={program} style={styles.link}>
                {program}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={styles.sectionTitle}>
              Contact Us
            </Typography>
            <Typography>
              Email us (For Data Science Queries): admissions@accredian.com
            </Typography>
            <Typography>
              Email us (For Product Management Queries): pm@accredian.com
            </Typography>
            <Typography>
              Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
            </Typography>
            <Typography>
              Product Management Admission Helpline: +91 9625811095
            </Typography>
            <Typography>Enrolled Student Helpline: +91 7969322507</Typography>
            <Typography>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={styles.sectionTitle}>
              Why Accredian
            </Typography>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((item) => (
              <Link href="#" key={item} style={styles.link}>
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={styles.sectionTitle}>
              Follow Us
            </Typography>
            <Box display="flex">
              <Link href="#" style={styles.socialIcon}>
                <LinkedInIcon />
              </Link>
              <Link href="#" style={styles.socialIcon}>
                <FacebookIcon />
              </Link>
              <Link href="#" style={styles.socialIcon}>
                <TwitterIcon />
              </Link>
              <Link href="#" style={styles.socialIcon}>
                <InstagramIcon />
              </Link>
              <Link href="#" style={styles.socialIcon}>
                <YouTubeIcon />
              </Link>
            </Box>
            <Box mt={2}>
              <Button variant="contained" style={styles.button}>
                Schedule 1-on-1 Call Now
              </Button>
              <Typography variant="body2" color="inherit" mt={1}>
                Speak with our Learning Advisor
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" color="inherit" textAlign="center">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
