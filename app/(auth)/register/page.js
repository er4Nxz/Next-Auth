"use client"
import registerAction from "@/action/register/register";
import { useActionState } from "react";

const register = () => {
  const [state, formHandle] = useActionState(registerAction, {});
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                  <div>
                    <p className="text-danger">{state?.error}</p>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
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
