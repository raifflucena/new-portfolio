const Contact = () => {
  return (
    <div className="py-32">
      <div className="flex flex-col mx-auto max-w-screen-lg gap-24">
        <div className="w-full">
          <h3 className="text-lg font-bold mb-2 text-blue-500">CONTACT</h3>
          <h2 className="text-2xl font-bold">Don&apos;t be shy! Hit me up! 👇</h2>
          <div className="flex flex-wrap sm:flex-nowrap mt-12 gap-20">
            <div className="flex gap-5 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-geo-alt text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Location</h3>
                <h5 className="text-gray-500">Campina Grande, Brazil</h5>
              </div>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-envelope text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Mail</h3>
                <h5 className="text-gray-500">contato@raiff.com.br</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
