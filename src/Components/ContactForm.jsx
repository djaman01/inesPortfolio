import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactForm = () => {
  //function pour envoyer données formulaire à emailJs
  const sendEmail = (data) => {
    //we pass to the "data" parameter, the values of the Form captured by Formik thanks to the "values" property in onSubmit
    return emailjs.send(
      //respecter cet ordre: 1)service_id 2) template_id 3) values du formulaire 4) publicKey
      "service_2gizxei", // service_id => A trouver dans Section Email services
      "template_zmdv7r9", // template_id => A trouver dans section Email templates => Settings
      data, //values of the Form
      "Y0xUIekoCqNDAUq39", // publicKey: A trouver dans account => API Keys
    );
  };

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  return (
    <>
      <div className="mx-auto mb-4 w-[1200px] rounded-lg border-2 border-gray-400 px-20 pb-8 pt-5">
        <div className="prose mx-auto mb-10">
          <h1 className="text-[28px] font-extrabold text-gray-800">
            Envoyez un mail via ce formulaire
          </h1>
        </div>

        <Formik
          initialValues={{
            lastName: "",
            firstName: "",
            agence: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            lastName: Yup.string()
              .max(30, "Doit comporter 30 caractères maximum")
              .required("Requis"),
            firstName: Yup.string()
              .max(20, "Doit comporter 20 caractères maximum")
              .required("Requis"),
            agence: Yup.string()
              .max(50, "Doit comporter 50 caractères maximum"),
            email: Yup.string()
              .email("Adresse email invalide")
              .required("Requis"),
            message: Yup.string()
              .min(30, "Doit comporter 30 caractères minimum")
              .required("Requis"),
          })}
          onSubmit={async (values, { resetForm }) => {
            // En 1er: le paramètre "values" capture les valeurs écrites dans le formulaire, donc même si on reset le form avant envoie, values stockera toujours les valeurs
            alert("Formulaire envoyé:\nJe vous répondrais dès que possible");
            console.log("Form submitted with values: ", values); //Permet de voir dans la console ce qui a été rempli dans le formulaire après avoir cliquer sur envoyer
            resetForm(); //Reset l'affichage des valeurs sur la page, mais values store toujours les valeurs écrites dans le formulaire

            try {
              const result = await sendEmail(values); //Appel de la function sendEmail avec pour argument 'values' => valeurs du formulaire capturés par Formik
              console.log("Email sent successfully", result);
            } catch (error) {
              console.error("Error sending Email:", error);
            }
          }}
        >
          <Form>
            <div className="grid grid-cols-2">
              <div className="mb-10">
                <label htmlFor="lastName" className="font-roboto-bold text-lg">
                  Nom
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="font-roboto mx-auto block w-96 rounded border-2 border-gray-400 px-3 py-2 text-center leading-tight focus:border-blue-500 focus:outline-none"
                />
                {/* ErrorMessage est ce qui permet de voir "Requis", si on appuie sur le champ mais qu'on ne le remplit pas et qu'on passe à un autre champ */}
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>

              <div className="mb-10">
                <label htmlFor="firstName" className="font-roboto-bold text-lg">
                  Prénom
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="font-roboto mx-auto block w-96 rounded border-2 border-gray-400 px-3 py-2 text-center leading-tight focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>
              <div className="mb-10">
                <label htmlFor="agence" className="font-roboto-bold text-lg">
                  Agence d'architecture
                </label>
                <Field
                  id="agence"
                  name="agence"
                  type="text"
                  placeholder="Architecture agency"
                  className="font-roboto mx-auto block w-96 rounded border-2 border-gray-400 px-3 py-2 text-center leading-tight focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="agence"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>

              <div className="mb-10">
                <label htmlFor="email" className="font-roboto-bold text-lg">
                  E-mail
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  className="font-roboto mx-auto block w-96 rounded border-2 border-gray-400 px-3 py-2 text-center leading-tight focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="message" className="font-roboto-bold text-lg">
                  Message
                </label>
                <Field
                  id="message"
                  name="message"
                  as="textarea"
                  placeholder="Message"
                  rows="7"
                  className="font-roboto mx-auto block w-[800px] rounded border-2 border-gray-400 leading-tight focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>
            </div>
            <button
              type="submit" //Dans un Formulaire Formik, lorsqu'on clique sur un bouton de type="submit", il appelle automatiquement la fonction onSubmit définie dans le composant Formik
              className="mt-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-500"
            >
              Envoyer
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
