"use server";
const registerAction = async (_, formData) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  });
  const name = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confrimPassword = formData.get("confirmPassword");

  if (name === "" || email === "" || password === "") {
    return {
      error: "name, email and password is required",
    };
  }

  if (password !== confrimPassword) {
    return {
      error: "password do not match!",
    };
  }


};

export default registerAction;
