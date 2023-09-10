import axios from "axios";
export const todos = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/todos`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
