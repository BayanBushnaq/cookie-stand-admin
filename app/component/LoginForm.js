
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function LoginForm() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useContext(AuthContext);
  function usernameChangeHandler(e) {
    setusername(e.target.value);
  }

  function passwordChangeHandler(e) {
    setpassword(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    login({
      username,
      password,
    });
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <div class="bg-blue-200 flex">
        <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
          <h1 class="font-bold text-2xl my-10 text-white"> Login </h1>
          <form  class="mt-2 flex flex-col lg:w-1/2 w-8/12" onSubmit={submitHandler}>
            <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
              <div class="flex -mr-px justify-center w-15 p-4">
                <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i class="fas fa-user-circle"></i>
                </span>
              </div>
              <input
               name='username'
                id = 'username'
                type="text"
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Username" onChange={usernameChangeHandler} 
              />
            </div>
            <div class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
              <div class="flex -mr-px justify-center w-15 p-4">
                <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
              <input
                name='password'
                id = "password"
                type="password"
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                placeholder="Password" onChange={passwordChangeHandler}
              />
              <div class="flex -mr-px">
                <span class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                  <i class="fas fa-eye-slash"></i>
                </span>
              </div>
            </div>
            <a
              href="#"
              class="text-base text-white text-right font-roboto leading-normal hover:underline mb-6"
            >
              Forget Password ?
            </a>
            <a
              href="https://cookie-stands-project.herokuapp.com/api/token/"
              class="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
            >
              Login
            </a>
          </form>
        </div>
      </div>

      {/* Form 2

      <body class="antialiased bg-gradient-to-br from-green-100 to-white">
        <div class="container px- mx-auto">
          <div class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
            <div class="flex flex-col w-full">
              <div>
                <svg
                  class="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h1 class="text-5xl text-gray-800 font-bold">Client Area</h1>
              <p class="w-5/12 mx-auto md:mx-0 text-gray-500">
                Control and monitorize your website data from dashboard.
              </p>
            </div>
            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
                  Sigin
                </h2>
                <form  class="w-full" onSubmit={submitHandler}>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="username" class="text-gray-500 mb-2">
                      Username
                    </label>
                    <input
                    name = "username"
                      type="text"
                      id="username"
                      placeholder="Please insert your username"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                       onChange={usernameChangeHandler}
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="password" class="text-gray-500 mb-2">
                      Password
                    </label>
                    <input
                    name ='password'
                      type="password"
                      id="password"
                      placeholder="Please insert your password"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                      onChange={passwordChangeHandler}
                    />
                  </div>
                  <div id="button" class="flex flex-col w-full my-5">
                    <button
                      type="submit"
                      class="w-full py-4 bg-green-600 rounded-lg text-green-100"
                    >
                      <div class="flex flex-row items-center justify-center">
                        <div class="mr-2">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        </div>
                        <div class="font-bold">Sigin</div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>  */}

      {/* {/* Form 3

      <div class="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
        <div class="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <div class="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </div>
          <form class="p-12 md:p-24" onSubmit={submitHandler}>
            <div class="flex items-center text-lg mb-6 md:mb-8">
              <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
              name="username"
                type="text"
                id="username"
                class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
                onChange={usernameChangeHandler}
              />
            </div>
            <div class="flex items-center text-lg mb-6 md:mb-8">
              <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
              name="password"
                type="password"
                id="password"
                class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
                onChange={passwordChangeHandler}
              />
            </div>
            <button type="submit" class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
              Login
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
} 

{/* // onSubmit = { submitHandler }
// onChange = { usernameChangeHandler }
// onChange = { passwordChangeHandler }  */}
