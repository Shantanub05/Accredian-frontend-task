import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid,
  Container,
} from "@material-ui/core";
import { School, ArrowForwardIos } from "@material-ui/icons";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const styles = {
  sidebar: {
    width: "270px",
    boxShadow: "0px 1px 24.4px 1px rgba(0, 0, 0, 0.16)",
    borderRadius: "14px", // Rounded corners for the sidebar
    marginRight: 16,
    overflow: "hidden", // Ensure no white part is visible
  },
  sidebarHeader: {
    backgroundColor: "#1A73E8",
    color: "#FFFFFF",
    borderRadius: "14px 14px 0px 0px", // Rounded top corners
  },
  tableContainer: {
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // More shadow around the table
    borderRadius: "14px", // Rounded corners for the table
    overflow: "hidden", // Ensures the rounded corners are applied to the table content
  },
  tableHeader: {
    backgroundColor: "#d9e7ff", // Match the background color
    color: "#1A237E", // Match font color
  },
  tableCell: {
    borderRight: "1px solid #ddd",
    "&:last-child": {
      borderRight: "none",
    },
  },
  centeredTableCell: {
    textAlign: "center", // Center the text
    borderRight: "1px solid #ddd",
    "&:last-child": {
      borderRight: "none",
    },
  },
  programIcon: {
    marginRight: 8,
    color: "#1A73E8",
  },
  headerText: {
    marginTop: 16,
    textAlign: "center",
    marginBottom: 64,
  },
};

const Sidebar = () => {
  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      style={styles.sidebar}
    >
      <ListItem button style={styles.sidebarHeader}>
        <ListItemText primary="ALL PROGRAMS" />
        <ArrowForwardIos style={{ color: "#FFFFFF" }} />
      </ListItem>
      {[
        "PRODUCT MANAGEMENT",
        "STRATEGY & LEADERSHIP",
        "BUSINESS MANAGEMENT",
        "FINTECH",
        "SENIOR MANAGEMENT",
        "DATA SCIENCE",
        "DIGITAL TRANSFORMATION",
        "BUSINESS ANALYTICS",
      ].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
          <ArrowForwardIos />
        </ListItem>
      ))}
    </List>
  );
};

const ProgramTable = () => {
  return (
    <TableContainer component={Paper} style={styles.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={styles.tableHeader}>
            <TableCell style={styles.tableCell}>
              <Typography
                variant="h6"
                style={{ color: styles.tableHeader.color }}
              >
                Programs
              </Typography>
            </TableCell>
            <TableCell align="center" style={styles.centeredTableCell}>
              <Typography
                variant="h6"
                style={{ color: styles.tableHeader.color }}
              >
                Referrer Bonus
              </Typography>
            </TableCell>
            <TableCell align="center" style={styles.centeredTableCell}>
              <Typography
                variant="h6"
                style={{ color: styles.tableHeader.color }}
              >
                Referee Bonus
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.name}>
              <TableCell component="th" scope="row" style={styles.tableCell}>
                <Box display="flex" alignItems="center">
                  <School style={styles.programIcon} />
                  {program.name}
                </Box>
              </TableCell>
              <TableCell align="center" style={styles.centeredTableCell}>
                {program.referrerBonus}
              </TableCell>
              <TableCell align="center" style={styles.centeredTableCell}>
                {program.refereeBonus}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ReferralBenefits = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom style={styles.headerText}>
          What Are The{" "}
          <span style={{ color: "#1A73E8" }}>Referral Benefits?</span>
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Sidebar />
          </Grid>
          <Grid item xs>
            <ProgramTable />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReferralBenefits;
