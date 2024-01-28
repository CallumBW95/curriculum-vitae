import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_PUBLIC_KEY, VITE_EMAIL_TEMPLATE_ID } = import.meta.env;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const fields = [
    {
      label: "Firstname",
      name: "firstname",
      required: true,
      type: "text",
    },
    {
      label: "Lastname",
      name: "lastname",
      required: true,
      type: "text",
    },
    {
      label: "Company",
      name: "company",
      required: false,
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      type: "email",
    },
    {
      label: "Phone Number",
      name: "phonenumber",
      required: false,
      type: "text",
    },
    {
      label: "Your Message",
      name: "message",
      required: false,
      type: "textarea",
    },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();

    setFormLoading(true);

    const result = await emailjs.sendForm(
      VITE_EMAIL_SERVICE_ID,
      VITE_EMAIL_TEMPLATE_ID,
      form.current,
      VITE_EMAIL_PUBLIC_KEY
    );

    setFormLoading(false);

    if (result.text === "OK") {
      setFormSubmitted(true);
    } else {
      setFormError(true);
    }
  };

  const onInput = () => {
    setFormError(false);
    setFormSubmitted(false);
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          Get in <span>touch</span>
        </h2>
        <form className="contact__form form" ref={form} onSubmit={onSubmit}>
          {(formSubmitted || formError) && (
            <div className="form__notifications">
              {formSubmitted && (
                <div className="form__notification form__notification--success">Form submitted Successfully</div>
              )}
              {formError && (
                <div className="form__notification form__notification--error">Form error, please try again</div>
              )}
            </div>
          )}
          <div className="form__body">
            {fields.map(({ label, name, required, type }) => (
              <div className="form__row" onInput={onInput}>
                <label className="form__row-label">
                  {label}
                  {required && <span>*</span>}
                </label>
                {type !== "textarea" && (
                  <input
                    className="form__row-input form__row-input--text"
                    type={type}
                    name={name}
                    required={required}
                  />
                )}
                {type === "textarea" && (
                  <textarea className="form__row-input form__row-input--textarea" name={name} required={required} />
                )}
              </div>
            ))}
          </div>
          <div className="form__footer">
            {!formLoading && <input className="form__submit" type="submit" value="Send" />}
            {formLoading && <span className="form__loader" />}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
