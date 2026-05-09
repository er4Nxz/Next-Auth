"use server";
const registerAction = async (_, formData) => {
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

  console.log(formData);
};

export default registerAction;
