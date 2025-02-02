import Header from "../Components/Header";
import Footer from "../Components/Footer";


const CV = () => {
  return (
    <>
      <Header />

      <iframe
        src="/cv-inesAnda.pdf"
        width="100%"
        height="1200px"
        style={{ border: "none" }}
        title="CV"
      ></iframe>

      <Footer />
    </>
  );
};

export default CV;
