import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-techTheme-muted py-10 mt-20">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-techTheme-primary mb-4">
              تك عرب
            </h3>
            <p className="text-gray-300 mb-4">
              نحن متجرك الموثوق للالكترونيات والإكسسوارات بأفضل الأسعار وأعلى
              جودة.
            </p>
            <p className="text-gray-300">© {year} تك عرب. جميع الحقوق محفوظة</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-techTheme-primary mb-4">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-techTheme-primary transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-techTheme-primary transition-colors"
                >
                  المتجر
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-techTheme-primary transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-techTheme-primary transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-techTheme-primary mb-4">
              تواصل معنا
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">العنوان:</span>
                <span className="block text-sm">
                  {" "}
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.0676766450847!2d31.234268176840997!3d30.044420018754714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b9991a5a6d%3A0xbfcd3c71eba9ef3f!2z2YXZitiv2KfZhiDYp9mE2KrYrdix2YrYsdiMINmI2LPYtyDYp9mE2KjZhNiv2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1650077971056!5m2!1sar!2seg"
                    className="text-gray-300 hover:text-techTheme-primary"
                  >
                    شارع التحرير ،القاهره،مصر
                  </a>
                </span>
              </li>
              <li className="text-gray-300">
                <span className="block">البريد الإلكتروني:</span>
                <a
                  href="mailto:info@tech-arab.com"
                  className="text-sm hover:text-techTheme-primary transition-colors"
                >
                  info@tech-arab.com
                </a>
              </li>
              <li className="text-gray-300 flex">
                <span className="block">الهاتف</span><span className="mx-3">:</span>
                <a
                  href="tel:+201234567890"
                  className="text-sm hover:text-techTheme-primary transition-colors flex"
                >
                  
                  +20 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
