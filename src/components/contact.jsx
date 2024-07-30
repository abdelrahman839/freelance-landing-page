import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     "service_viyexs7",
    //     "template_yjvrfus",
    //     {
    //       from_name: form.name,
    //       to_name: "Fly",
    //       from_email: form.email,
    //       to_email: "asdddghjh@gmail.com",
    //       message: form.message,
    //     },
    //     "9A-nUTcJBhbGcoAKZ"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. We will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div className={`w-full p-4 rounded-[20px] shadow-3xl bg-gray-400`}>
      <div className="">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Number"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-Mail"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8 rounded-xl outline-none w-fit text-black font-bold  bg-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
