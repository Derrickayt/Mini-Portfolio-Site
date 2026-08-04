import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

    setSubmitted(true);
    setValues(initialValues);
    setTouched({});
  };

  const fieldClass = (field) =>
    `w-full rounded-lg border px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
      touched[field] && errors[field]
        ? "border-red-400"
        : "border-gray-300 focus:border-blue-500"
    }`;

  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      <p className="mt-2 text-gray-600">
        Have a project in mind or just want to say hi? Send a message below.
      </p>

      {submitted && (
        <div className="mt-6 flex items-center gap-2 rounded-lg bg-green-50 text-green-700 px-4 py-3 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          Thanks for reaching out! I'll get back to you soon.
        </div>
      )}

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("name")}
            placeholder="Your name"
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("email")}
            placeholder="you@example.com"
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("message")}
            placeholder="What's on your mind?"
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="bg-blue-600 text-white font-medium rounded-lg px-5 py-3 hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
