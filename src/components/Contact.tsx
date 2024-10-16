import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      id="contact"
      className="bg-gray-800 min-h-screen flex items-center justify-center"
    >
      <div className="py-10 px-7 w-full md:max-w-screen-sm">
        <p className="text-gray-50 text-2xl font-semibold py-10">Contact Me</p>
        <form
          action="https://getform.io/f/paqgxooa"
          method="POST"
          className="space-y-6"
        >
          <div className="">
            <label
              className="block text-gray-300 font-ubuntu mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-gray-500 bg-gray-600 text-gray-100 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-300 font-ubuntu mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-500 bg-gray-600 text-gray-100 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-300 font-ubuntu mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-500 bg-gray-600 text-gray-100 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="border w-3/4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
