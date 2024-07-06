import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question:
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer:
      "The minimum system configuration required is a computer with 4GB RAM, 64-bit Windows or macOS, and a stable internet connection.",
  },
 
];

const styles = {
  sidebar: {
    width: "250px",
    marginRight: 16,
  },
  sidebarItem: {
    borderRadius: "8px",
    marginBottom: 8,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
  sidebarItemSelected: {
    borderRadius: "8px",
    marginBottom: 8,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#EEF5FF",
  },
  headerText: {
    marginTop: 16,
    textAlign: "center",
    marginBottom: 32, 
  },
  accordion: {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: 16, 
  },
  accordionSummary: {
    fontWeight: "bold",
    color: "#1A73E8",
  },
};

const FAQ = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom style={styles.headerText}>
          Frequently Asked <span style={{ color: "#1A73E8" }}>Questions</span>
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <List
              component="nav"
              aria-label="faq categories"
              style={styles.sidebar}
            >
              {["Eligibility", "How To Use?", "Terms & Conditions"].map(
                (text, index) => (
                  <ListItem
                    button
                    key={text}
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                    style={
                      selectedIndex === index
                        ? styles.sidebarItemSelected
                        : styles.sidebarItem
                    }
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Grid>
          <Grid item xs>
            {faqs.map((faq, index) => (
              <Accordion key={index} style={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  style={styles.accordionSummary}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FAQ;
