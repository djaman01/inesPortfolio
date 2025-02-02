import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { GiPositionMarker } from "react-icons/gi";
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 px-4 pt-10 ">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Contact</h1>
          <p className="mt-2 text-lg text-gray-600">
            À votre disposition pour toute demande ou collaboration
          </p>
        </div>

        {/* Info Cards */}
        <div className="mb-12 flex gap-8 w-max mx-auto ">
          {/* Email Card */}
          <div
            data-aos="fade-right"
            className=" w-96 flex flex-col items-center rounded-lg border-2 border-gray-400 bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-4 rounded-full bg-teal-500 p-4">
              <IoMailOutline color="white" size={24} />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-700">Email</h2>
            <p className="text-gray-500">contact@client.com</p>
          </div>

          {/* Phone Card */}
          <div
            data-aos="flip-up"
            className="w-96 flex flex-col items-center rounded-lg border-2 border-gray-400 bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-4 rounded-full bg-teal-500 p-4">
              <CiPhone color="white" size={24} />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-700">Phone</h2>
            <p className="text-gray-500">
              +1 234 567 8901 <br />
              +1 234 567 8902
            </p>
          </div>

          {/* Address Card */}
          <div
            data-aos="fade-left"
            className="w-96 flex flex-col items-center rounded-lg border-2 border-gray-400 bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-4 rounded-full bg-teal-500 p-4">
              <GiPositionMarker color="white" size={24} />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              Address
            </h2>
            <p className="text-gray-500">123 Main Street, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-[-20px] pb-10 text-center">
          <ContactForm /> {/* Your custom form component */}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
