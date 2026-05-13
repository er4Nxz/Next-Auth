"use server";
const registerAction = async (_, formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const c_password = formData.get("confirmPassword");

  const response = await fetch("http://localhost:8000/api/register", {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      email,
      password,
      c_password,
    }),
  });

  const data = await response.json();
  console.log(data);
  

  if (data.ok) {
    return {
      succes: "you are registered",
    };
  } else {
    return {
      error: data,
    };
  }
};

export default registerAction;
