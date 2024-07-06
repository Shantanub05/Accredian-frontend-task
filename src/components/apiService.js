// src/apiService.js

import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const sendReferral = async (referralData) => {
  try {
    const response = await axios.post(`${apiUrl}/api/referrals`, referralData);
    console.log("Referral sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending referral:", error);
  }
};
