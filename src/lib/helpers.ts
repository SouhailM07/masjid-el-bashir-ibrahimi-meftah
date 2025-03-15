import axios from "axios";

export const getCurrentDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = String(now.getFullYear()).slice(-2); // Get last two digits of the year

  return `${day}-${month}-${year}`;
};

/*=============================================================================================*/
/* comment */
/*=============================================================================================*/

export const getAdhanTimes = async () => {
  const date = getCurrentDate();
  const url = `https://api.aladhan.com/v1/timingsByAddress?address=blida,meftah&method=19&date=${date}`;
  try {
    const response = await axios.get(url);
    console.log(response.data.data.timings);
    return response.data.data.timings;
  } catch (error) {
    console.error(error);
  }
};

/*=============================================================================================*/
/* comment */
/*=============================================================================================*/

export const isSalatPassed = (time) => {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hour}:${minute}`;
  return currentTime.split(":") > time.split(":");
};
