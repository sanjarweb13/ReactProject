import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../shared_components/layout";
import { AuthContext } from "../../utilis/authContext";

const loginBgImg = new URL("../../media/logobg.webp", import.meta.url);

function LoginPage() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [emailInp, setEmailInp] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (currentUser != null) {
      navigate("/");
    }
  }, []);

  const onSign = () => {
    setCurrentUser({
      email: emailInp.trim(),
      isAdmin: false,
    });
    navigate("/");
  };

  return (
    <Layout>
      <div className="lg:shadow-md lg:shadow-zinc-800">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 relative backgroundOpacity">
            <img
              src={loginBgImg}
              alt="bg"
              className="backgroundOpacityImage"
            />
            <div className="flex items-center h-full px-20 bg-transparent bg-opacity-40 z-[1]">
              <div>
                <div className="flex items-center">
                  <img
                    className="w-32"
                    src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
                    alt="logo"
                    width={"100%"}
                    height={"100%"}
                  />
                  <h3 className="font-bold text-8xl tracking-widest text-amber-300">
                    ERICHT
                  </h3>
                </div>
                <p className="max-w-xl pl-10 mt-6 text-amber-100 font-semibold text-2xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>


          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-transparent">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <img
                    className="w-20"
                    src="https://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Image.png"
                    alt="logo"
                    width={"100%"}
                    height={"100%"}
                  />
                  <h3 className="font-bold text-5xl tracking-widest text-amber-300">
                    ERICHT
                  </h3>
                </div>

                <p className="mt-3 text-amber-100">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-lg text-amber-200 bg-transparent"
                    >
                      Email Address
                    </label>
                    <input
                      value={emailInp}
                      onChange={(e) => setEmailInp(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-zinc-100 placeholder-orange-100 bg-transparent border border-amber-100 rounded-md  focus:border-amber-300 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label for="password" className="text-lg text-amber-200 bg-transparent">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-md text-amber-100  hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      required
                      className="block w-full px-4 py-2 mt-2 text-zinc-100 placeholder-orange-100 bg-transparent border border-amber-100 rounded-md  focus:border-amber-300 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={onSign}
                      className="w-full px-4 py-2 tracking-wide text-white font-bold transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:bg-amber-400 focus:ring focus:ring-amber-300 focus:ring-opacity-50"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <a
                    href="#"
                    className="text-amber-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
