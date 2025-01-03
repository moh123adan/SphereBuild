"use client";

import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">CONTACT</h2>
          <div className="w-24 h-1 bg-[#F7C94B] mx-auto"></div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] mb-16 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0637721809325!2d-122.39591548467432!3d37.77492977975963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807b9f3b0fcf%3A0xbe67c5c86c05e0c3!2sMission%20Bay%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1629308474198!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Inquiries */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Inquiries</h3>
            <p className="text-gray-600 mb-4">
              For any inquiries, questions or commendations, email{" "}
              <a
                href="mailto:contact@sphereconstructions.com"
                className="text-[#1F2937] hover:text-[#F7C94B] transition-colors"
              >
                contact@sphereconstructions.com
              </a>{" "}
              or fill out the following form.
            </p>
          </div>

          {/* Employment */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Employment</h3>
            <p className="text-gray-600 mb-4">
              To apply for a job with Sphere Constructions, please send a cover
              letter together with your C.V. to{" "}
              <a
                href="mailto:contact@sphereconstructions.com"
                className="text-[#1F2937] hover:text-[#F7C94B] transition-colors"
              >
                contact@sphereconstructions.com
              </a>
            </p>
          </div>
        </div>
        {/* Get a Quote */}
        {/* Get a Quote */}
        <div className="flex justify-center items-center">
          <p className="text-lg mr-4">Get a quote:</p>
          <a
            href="mailto:example@example.com"
            className="font-bold underline text-[#1F2937] flex items-center"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
