"use client";
import registerAction from "@/action/register/register";
import SubmitBtn from "@/Components/SubmitBtn/SubmitBtn";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const register = () => {
  const [state, formHandle] = useActionState(registerAction, {});

  useEffect(() => {
    const errors = state?.error;
    const succes = state?.succes;
    if (errors) {
      Object.keys(errors).map((error) => {
        errors[error].map((message) => {
          toast.error(message);
        });
      });
    } else if (succes) {
      console.log(succes);
    }
  }, [state]);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="text-center mb-4">Register Form</h4>

                <form action={formHandle}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      User Name
                    </label>
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="d-grid">
                    <SubmitBtn />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
