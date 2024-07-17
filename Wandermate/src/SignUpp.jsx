import React, { useState } from "react";
import spider from "./assets/spider.png";
import Nav from "./Nav";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    txt: "",
    email: "",
    password: "",
    confirmpassword: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
    if (!usernamePattern.test(formData.txt)) {
      setError(
        "Username must be 3-15 characters long and can only contain letters, numbers, and underscores."
      );
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    {error && (
      <p className="text-red-500 text-sm mt-2" id="error-message">
        {error}
      </p>
    )}

    // Proceed with form submission
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Nav />
      <div className="flex flex-row">
        <div className="login w-full">
          <div className="flex w-full">
            <div className="flex min-h-full flex-1 flex-col justify-start lg:px-8 ml-40 mt-20">
              <div className="sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  <span className="text-blue-500">Sign Up</span>
                </h2>
                <div className="mt-6 sm:max-w-sm">
                  <form
                    action="#"
                    method="POST"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <div className="mt-2">
                        <label htmlFor="txt" className="sr-only">
                          Username
                        </label>
                        <input
                          id="txt"
                          name="txt"
                          type="text"
                          required
                          placeholder="Username"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          value={formData.txt}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="Email address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          autoComplete="current-password"
                          placeholder="Enter Password"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="confirmpassword" className="sr-only">
                          Confirm Password
                        </label>
                        <input
                          id="confirmpassword"
                          name="confirmpassword"
                          type="password"
                          required
                          autoComplete="current-password"
                          placeholder="Confirm Password"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                          value={formData.confirmpassword}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex items-center mt-4 justify-center">
                        <input
                          id="default-checkbox"
                          name="termsAccepted"
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-3 text-sm font-medium text-gray-500"
                        >
                          I agree to all{" "}
                          <span className="text-blue-500">
                            Terms and Conditions
                          </span>
                        </label>
                      </div>
                      {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                      )}
                      <div>
                        <button
                          type="submit"
                          className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Haha pl-28 w-full py-10">
          <img src={spider} alt="" className="h-5/6" />
        </div>
      </div>
    </>
  );
};

export default SignupForm;
