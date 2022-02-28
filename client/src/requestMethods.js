import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWM0ZDdhNjAxZTQ0ZTc3OWYwZDA2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjAyMjE1NywiZXhwIjoxNjQ2MjgxMzU3fQ.yQOtDTgnvTqVmnzE-ssqG3J79t0FHYT0J1C8gg8hCpM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
