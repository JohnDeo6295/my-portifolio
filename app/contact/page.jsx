"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    contactVia: "email",
    emailType: "personal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, my name is ${form.name}.
Email: ${form.email}

Message:
${form.message}`;

    if (form.contactVia === "whatsapp") {
      window.open(
        `https://wa.me/255676902199?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    } else {
      const receiver =
        form.emailType === "company"
          ? "disihubtech@gmail.com"
          : "maliwajohn6295@gmail.com";

      window.location.href = `mailto:${receiver}?subject=Portfolio Contact&body=${encodeURIComponent(
        text
      )}`;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-8">
        Reach me directly via WhatsApp, email, or use the form below.
      </p>

      {/* Quick Contact Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href="https://wa.me/255676902199"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold"
        >
          WhatsApp Me
        </a>

        <a
          href="mailto:maliwajohn6295@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
        >
          Personal Email
        </a>

        <a
          href="mailto:disihubtech@gmail.com"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold"
        >
          Company Email
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Contact Via
            </label>
            <select
              name="contactVia"
              value={form.contactVia}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Email Type
            </label>
            <select
              name="emailType"
              value={form.emailType}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="personal">Personal</option>
              <option value="company">Company (Disihub Tech)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6">
        📞 Phone / WhatsApp: +255 676 902 199
      </p>
    </div>
  );
}
