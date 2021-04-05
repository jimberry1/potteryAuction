export interface SignInCardProps {
  forename: string;
  forenameChanged: (value: string) => void;
  surname: string;
  surnameChanged: (value: string) => void;
  email: string;
  emailChanged: (value: string) => void;
  password: string;
  passwordChanged: (value: string) => void;
  confirmPassword: string;
  confirmPasswordChanged: (value: string) => void;
  createAnAccount: boolean;
  createAnAccountChanged: () => void;
  submitFormClicked: (e: Event) => void;
  signInWithGoogleClicked: () => void;
}

export interface SignInCardCreateAccountSubSectionProps {
  forename: string;
  forenameChanged: (value: string) => void;
  surname: string;
  surnameChanged: (value: string) => void;
  email: string;
  emailChanged: (value: string) => void;
  password: string;
  passwordChanged: (value: string) => void;
  confirmPassword: string;
  confirmPasswordChanged: (value: string) => void;
}

export interface SignInCardSignInSubSectionProps {
  email: string;
  emailChanged: (value: string) => void;
  password: string;
  passwordChanged: (value: string) => void;
}

const SignInCard: React.FunctionComponent<SignInCardProps> = ({
  forename,
  forenameChanged,
  surname,
  surnameChanged,
  email,
  emailChanged,
  password,
  passwordChanged,
  confirmPassword,
  confirmPasswordChanged,
  createAnAccount,
  createAnAccountChanged,
  submitFormClicked,
  signInWithGoogleClicked,
}) => {
  return (
    <>
      <section className="flex flex-col items-center h-screen md:flex-row">
        <div className="container mx-auto">
          <div className="flex justify-center px-2 py-6 ">
            <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
              <div className="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                <div className="relative z-10 m-12 text-left ">
                  <a className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
                    <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
                    <h2 className="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 ">
                      Craft Art Fair
                    </h2>
                  </a>
                  <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">
                    {createAnAccount ? 'Create an account.' : 'Sign In'}
                  </h2>
                  <div className="w-full mt-16 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl ">
                    An account is needed to keep track of the art you like,
                    purchase and or sell. Sign in to access user specific
                    information and to tailor your profile.
                  </div>
                </div>
              </div>
              <div className="w-full px-8 py-24 bg-white border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                <div className="relative z-10 text-left ">
                  <div className="flex justify-enter lg:py-6">
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                      onClick={signInWithGoogleClicked}
                    >
                      <div className="flex items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 48 48"
                        >
                          <defs>
                            <path
                              id="a"
                              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            />
                          </defs>
                          <clipPath id="b">
                            <use overflow="visible" />
                          </clipPath>
                          <path
                            clipPath="url(#b)"
                            fill="#FBBC05"
                            d="M0 37V11l17 13z"
                          />
                          <path
                            clipPath="url(#b)"
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          />
                          <path
                            clipPath="url(#b)"
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          />
                          <path
                            clipPath="url(#b)"
                            fill="#4285F4"
                            d="M48 48L17 24l-4-3 35-10z"
                          />
                        </svg>
                        <span className="ml-4">Log in with Google</span>
                      </div>
                    </button>
                  </div>
                  <form
                    className="mt-6"
                    onSubmit={(e: any) => submitFormClicked(e)}
                  >
                    {createAnAccount ? (
                      <CreateAnAccountSubSection
                        forename={forename}
                        forenameChanged={forenameChanged}
                        surname={surname}
                        surnameChanged={surnameChanged}
                        email={email}
                        emailChanged={emailChanged}
                        password={password}
                        passwordChanged={passwordChanged}
                        confirmPassword={confirmPassword}
                        confirmPasswordChanged={confirmPasswordChanged}
                      />
                    ) : (
                      <SignInSubSection
                        email={email}
                        emailChanged={emailChanged}
                        password={password}
                        passwordChanged={passwordChanged}
                      />
                    )}

                    <button
                      type="submit"
                      className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black"
                      onClick={(e: any) => submitFormClicked(e)}
                    >
                      {createAnAccount ? 'Create Account' : 'Log In'}
                    </button>
                  </form>
                  <p className="mt-8 text-center">
                    {createAnAccount
                      ? 'Already have an account?'
                      : "Don't have an account?"}{' '}
                    <a
                      href="#"
                      className="font-semibold text-black hover:text-black"
                      onClick={(e) => {
                        e.preventDefault();
                        createAnAccountChanged();
                      }}
                    >
                      {createAnAccount ? 'Sign In' : 'Create an account'}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInCard;

const CreateAnAccountSubSection: React.FunctionComponent<SignInCardCreateAccountSubSectionProps> = ({
  forename,
  forenameChanged,
  surname,
  surnameChanged,
  email,
  emailChanged,
  password,
  passwordChanged,
  confirmPassword,
  confirmPasswordChanged,
}) => {
  return (
    <>
      <div>
        <label className="block text-base font-medium leading-relaxed text-gray-700">
          First name
        </label>
        <input
          type="text"
          name=""
          id="firstNameInputId"
          placeholder="Your First Name "
          className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
          required
          value={forename}
          onChange={(e) => forenameChanged(e.target.value)}
        />
        <label className="block text-base font-medium leading-relaxed text-gray-700">
          Surname
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Surname "
          className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
          required
          value={surname}
          onChange={(e) => surnameChanged(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block text-base font-medium leading-relaxed text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name=""
          id="emailInputId"
          placeholder="Your Email "
          className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
          required
          value={email}
          onChange={(e) => emailChanged(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap mt-4 mb-6 -mx-3">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="text-base font-medium leading-relaxed text-gray-700">
            Password
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
            id="password"
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => passwordChanged(e.target.value)}
          />
          <p className="mt-1 text-xs italic text-black">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label className="text-base font-medium leading-relaxed text-gray-700">
            Confirm
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500 "
            id="confirm"
            type="password"
            placeholder="Confirm"
            value={confirmPassword}
            onChange={(e) => confirmPasswordChanged(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

const SignInSubSection: React.FunctionComponent<SignInCardSignInSubSectionProps> = ({
  email,
  emailChanged,
  password,
  passwordChanged,
}) => {
  return (
    <>
      <div className="mt-4">
        <label className="block text-base font-medium leading-relaxed text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name=""
          id="emailAddressInputIdSignInSubsection"
          placeholder="Your Email "
          className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
          required
          value={email}
          onChange={(e) => emailChanged(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap mt-4 mb-6 -mx-3">
        <label className="text-base font-medium leading-relaxed text-gray-700">
          Password
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
          id="password"
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => passwordChanged(e.target.value)}
        />
      </div>
    </>
  );
};
