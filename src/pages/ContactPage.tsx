import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // انتهاء التحميل
      setSubmitted(true); // أظهر رسالة تم الإرسال
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      toast({
        title: "تم إرسال الرسالة",
        description: "سنتواصل معك في أقرب وقت ممكن. شكراً لتواصلك معنا!",
      });
    }, 3000); // هنا بتحاكي تأخير 2 ثانية كأنك بتبعت البيانات

    console.log("Form submitted:", formData);
  };
  function handleNewMessage() {
    setSubmitted(false);
  }
  return (
    <div className="py-8">
      <div className="container-custom mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">تواصل معنا</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-techTheme-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-techTheme-primary">
                  العنوان
                </h3>

                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.0676766450847!2d31.234268176840997!3d30.044420018754714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b9991a5a6d%3A0xbfcd3c71eba9ef3f!2z2YXZitiv2KfZhiDYp9mE2KrYrdix2YrYsdiMINmI2LPYtyDYp9mE2KjZhNiv2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1650077971056!5m2!1sar!2seg"
                  className="text-gray-300 hover:text-techTheme-primary"
                >
                  شارع التحرير ،القاهره،مصر
                </a>
              </div>

              {/* Email */}
              <div className="bg-techTheme-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-techTheme-primary">
                  البريد الإلكتروني
                </h3>
                <a
                  href="mailto:info@tech-arab.com"
                  className="text-gray-300 hover:text-techTheme-primary"
                >
                  info@tech-arab.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-techTheme-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-techTheme-primary">
                  الهاتف
                </h3>

                <a
                  href="tel:+201234567890"
                  className="text-gray-300 hover:text-techTheme-primary block flex"
                >
                  {<FaPhoneAlt className=" text-2xl " />}{" "}
                  <span className="mx-3">:</span> +20 123456 7890
                </a>

                <a
                  href="https://wa.me/201234567890"
                  className="text-gray-300 hover:text-techTheme-primary block mt-1 flex"
                >
                  {<FaWhatsapp className=" text-2xl " />}{" "}
                  <span className="mx-3">:</span> +20 123456 7890
                </a>
              </div>

              {/* Hours */}
              <div className="bg-techTheme-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-techTheme-primary">
                  ساعات العمل
                </h3>
                <p className="text-gray-300">
                  من الأحد الى الخميس : 10:00 ص - 9:00 م
                </p>
                <p className="text-gray-300">الجمعة و السبت: 2:00 م - 9:00 م</p>
              </div>

              {/* Social Media */}
              <div className="bg-techTheme-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-techTheme-primary">
                  وسائل التواصل الاجتماعي
                </h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-techTheme-primary"
                  >
                    <span className="text-2xl">
                      <FaFacebook style={{ fontSize: "24px" }} />
                    </span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-techTheme-primary"
                  >
                    <span className="text-2xl">
                      <FaInstagram style={{ fontSize: "24px" }} />
                    </span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-techTheme-primary"
                  >
                    <span className="text-2xl">
                      <FaTwitter style={{ fontSize: "24px" }} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="text-green-400 font-medium">
                شكراً لتواصلك! تم إرسال الرسالة بنجاح.
                <button
                  onClick={handleNewMessage}
                  className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  لى رسالة جديدة
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>{" "}
                {loading ? (
                  <div className="text-center text-white font-medium py-3 flex justify-center items-center gap-1">
                    <span>يتم الآن إرسال الشكوى</span>
                    <span className="dot-flash">.</span>
                    <span className="dot-flash delay-200">.</span>
                    <span className="dot-flash delay-400">.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-techTheme-muted p-6 rounded-lg"
                  >
                    <div className="mt-4"></div>
                    {/* Name */}
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        الاسم
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-techTheme-background border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-techTheme-primary"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-techTheme-background border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-techTheme-primary"
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-techTheme-background border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-techTheme-primary"
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-techTheme-background border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-techTheme-primary"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-techTheme-primary hover:bg-opacity-90 text-white py-3 rounded-md font-medium transition-colors"
                    >
                      إرسال الرسالة
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold mb-6">موقعنا</h2>
          <div className="h-80 bg-techTheme-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.0676766450847!2d31.234268176840997!3d30.044420018754714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b9991a5a6d%3A0xbfcd3c71eba9ef3f!2z2YXZitiv2KfZhiDYp9mE2KrYrdix2YrYsdiMINmI2LPYtyDYp9mE2KjZhNiv2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1650077971056!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="خريطة موقع المتجر"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
