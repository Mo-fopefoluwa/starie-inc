import React from "react";

const Teams = () => {
  return (
    <div className="pt-[-10rem]">
      <div className="px-8 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-[1.5rem] font-bold leading-none tracking-tight text-blue-800 md:text-[2.6rem] lg:text-[3rem] md:mx-auto">
            Meet The Founders
          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
        <div className="grid gap-10 justify-center items-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-50 md:h-54 xl:h-70"
                src="ceo.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  AJAYI OLUWATOBI DANIEL
                </p>
                <p className="mb-4 text-xs text-gray-100">CEO, Starie Inc</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Founding member of groove Finance. Co-founder Starie
                  incorporated tech.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-50 md:h-54 xl:h-70"
                src="coo2.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  OLUWASEGUN ABAYOMI VINCENT
                </p>
                <p className="mb-4 text-xs text-gray-100">COO, Starie Inc</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Marketing Researcher and lover of business. Co-founder; Inc
                  Inc tech.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-50 md:h-54 xl:h-70"
                src="cpo.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  VICTORIA AWOTUNDE
                </p>
                <p className="mb-4 text-xs text-gray-100">CPO, Starie Inc</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Talented and skilled professional who has successfully
                  combined her passion for linguistics with her creativity in
                  the field of UI/UX design
                </p>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-60 md:h-64 xl:h-80"
                src="cpo.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Victoria Awotunde
                </p>
                <p className="mb-4 text-xs text-gray-100">CPO, Starie Inc.</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Talented and skilled professional who has successfully
                  combined her passion for linguistics with her creativity in
                  the field of UI/UX design
                </p>
              </div>
            </div>
          </div> */}
          {/* <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src=""
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  John Paul
                </p>
                <p className="mb-4 text-xs text-gray-100">CTO, Starie Inc.</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Talented and skilled professional who has successfully
                  combined her passion for linguistics with her creativity in
                  the field of UI/UX design
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="fope.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Mofopefoluwa Faokunla
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  Frontend Developer, Starie Inc.
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400"></p>
              </div>
            </div>
          </div> */}
          {/* <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="bukun.jpeg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Bukunmi Sonibare
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  UI/UX Designer, Starie Inc.
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400"></p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Teams;
