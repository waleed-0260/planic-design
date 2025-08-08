import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <FaLocationDot className="text-4xl" />,
      title: "Address",
      text: "123 Street, City, Country",
    },
    {
      icon: <FaPhone className="text-4xl" />,
      title: "Phone",
      text: "+1 (555) 123-4567",
    },
    {
      icon: <FiMail className="text-4xl" />,
      title: "Email",
      text: "info@example.com",
    },
    {
      icon: <FiClock className="text-4xl" />,
      title: "Working Hours",
      text: "Mon - Fri: 9am - 6pm",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-left bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            {item.icon}
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
