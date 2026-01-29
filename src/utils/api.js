import api from "./apiInstance";

/* Register */
export const registerUser = async (username, password) => {
  const res = await api.post("/api/auth/register", {
    username,
    password,
  });
  return res.data;
};

/* Login */
export const loginUser = async (username, password) => {
  const res = await api.post("/api/auth/login", {
    username,
    password,
  });

  localStorage.setItem("authToken", res.data.token);
  return res.data;
};

/* Update preferences */
export const updateUserPreferences = async (preferences) => {
  const res = await api.put("/api/preferences", { preferences });
  return res.data;
};

/* Fetch articles ✅ */
export const fetchArticles = async () => {
  const res = await api.get("/api/articles/fetch-articles");
  //console.log("Fetched articles:", res.data);
  // Safety: always return array
  return Array.isArray(res.data) ? res.data : [];
};
