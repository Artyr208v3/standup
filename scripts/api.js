import { Notification } from "./Notification";

const API_URL = "https://aware-curved-cartwheel.glitch.me/";

export const getComedians = async () => {
  try {
    const response = await fetch(`${API_URL}comedians`);
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Возникла проблема с fetch-запросом: ${error.message}`);

    Notification.getInstance().show(
      "Возникла ошибка сервера, попробуйте позже"
    );
  }
};
export const getClient = async (ticket) => {
  try {
    const response = await fetch(`${API_URL}clients/${ticket}`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Возникла проблема с fetch-запросом: ${error.message}`);

    Notification.getInstance().show(
      "Возникла ошибка сервера, попробуйте позже"
    );
  }
};

export const sendData = async (method, data, id) => {
  try {
    const response = await fetch(`${API_URL}clients${id ? `/${id}` : ""}`, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Возникла проблема с fetch-запросом: ${error.message}`);

    Notification.getInstance().show("Возникла ошибка сервера,попробуйте позже");
    // return false;
  }
};
console.log();
