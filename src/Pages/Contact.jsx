import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 px-4 pt-10">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Contact</h1>
          <p className="mt-2 text-lg text-gray-600">
            À votre disposition pour toute demande ou collaboration
          </p>
        </div>

        {/* Info Cards */}
        <div className="mx-auto mb-12 flex w-max gap-8">
          {/* Email Card */}
          <div
            data-aos="fade-right"
            className="flex w-96 flex-col items-center rounded-lg border-2 border-gray-400 bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-4 rounded-full bg-teal-500 p-4">
              <IoMailOutline color="white" size={24} />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-700">Email</h2>
            <p className="text-xl text-gray-500">ines.anda@gmail.com</p>
          </div>

          {/* Phone Card */}
          <div
            data-aos="flip-up"
            className="flex w-96 flex-col items-center rounded-lg border-2 border-gray-400 bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-4 rounded-full bg-teal-500 p-4">
              <CiPhone color="white" size={24} />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-700">Téléphone</h2>
            <p className="text-xl text-gray-500">+33 7 52 89 95 49</p>
          </div>

          {/* Social Card */}
          <div
            data-aos="fade-left"
            className="flex w-96 flex-col items-center rounded-lg border-2 border-gray-400 bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-4 rounded-full bg-teal-500 p-4">
              <IoShareSocialOutline color="white" size={24} />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-700">Linkedin</h2>

            <a
              href="https://www.linkedin.com/in/ines-benbrahim-andaloussi-b23502197/"
              target="_blank"
              rel="noopener"
              className="mb-4 inline-block rounded-full bg-blue-700 p-3"
            >
              <FaLinkedin color="white" size={25} />{" "}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="pb-10 text-center">
          <ContactForm /> {/* Your custom form component */}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
