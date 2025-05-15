
import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container-custom mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3" 
            alt="صورة المتجر" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-custom mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">من نحن</h1>
              <p className="text-white max-w-lg">
                تعرف على قصتنا وقيمنا وكيف نعمل على توفير أفضل المنتجات التقنية لعملائنا
              </p>
            </div>
          </div>
        </div>
        
        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title">قصتنا</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                تأسس متجر تك عرب في عام 2023 بهدف توفير أحدث المنتجات الإلكترونية وأكثرها تطوراً للمستخدمين في العالم العربي. بدأنا كمتجر صغير متخصص في بيع إكسسوارات الحاسوب والهواتف، وسرعان ما توسعنا لنصبح واحداً من أكبر متاجر الإلكترونيات في المنطقة.
              </p>
              <p className="text-gray-300 leading-relaxed">
                نحن نفتخر بتقديم منتجات عالية الجودة من أشهر العلامات التجارية العالمية، مع التركيز على خدمة العملاء المتميزة والأسعار التنافسية. هدفنا الأساسي هو تسهيل وصول التكنولوجيا الحديثة إلى كل بيت عربي.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521322800607-8c38375eef04?ixlib=rb-4.0.3" 
                alt="قصتنا" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Vision & Mission */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-techTheme-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-techTheme-primary">رؤيتنا</h3>
              <p className="text-gray-300 leading-relaxed">
                أن نصبح الوجهة الأولى لعشاق التكنولوجيا في العالم العربي، ونساهم في نشر الثقافة التقنية وتسهيل وصول أحدث المنتجات التكنولوجية للجميع بأسعار تنافسية وجودة عالية.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-techTheme-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-techTheme-secondary">مهمتنا</h3>
              <p className="text-gray-300 leading-relaxed">
                توفير منتجات إلكترونية عالية الجودة مع خدمة عملاء متميزة وأسعار تنافسية، والتركيز على تثقيف المستهلكين وتقديم المشورة المتخصصة لمساعدتهم في اختيار المنتجات المناسبة لاحتياجاتهم.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-16">
          <h2 className="section-title text-center mb-8">قيمنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-techTheme-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-techTheme-primary">💯</span>
              </div>
              <h4 className="text-xl font-bold mb-2">الجودة</h4>
              <p className="text-gray-400 text-sm">
                نختار بعناية منتجاتنا من أفضل المصنعين والعلامات التجارية لضمان رضا عملائنا.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-techTheme-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-techTheme-secondary">🔒</span>
              </div>
              <h4 className="text-xl font-bold mb-2">الموثوقية</h4>
              <p className="text-gray-400 text-sm">
                نلتزم بتقديم خدمات سريعة وموثوقة لعملائنا مع ضمان على جميع منتجاتنا.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-techTheme-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-techTheme-primary">💡</span>
              </div>
              <h4 className="text-xl font-bold mb-2">الابتكار</h4>
              <p className="text-gray-400 text-sm">
                نسعى دوماً لمواكبة أحدث التقنيات وتوفيرها لعملائنا في أسرع وقت.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-techTheme-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-techTheme-secondary">👥</span>
              </div>
              <h4 className="text-xl font-bold mb-2">خدمة العملاء</h4>
              <p className="text-gray-400 text-sm">
                نضع رضا العملاء في قمة أولوياتنا ونسعى لتقديم تجربة تسوق مميزة.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <h2 className="section-title text-center mb-8">فريقنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3" 
                  alt="مؤسس الشركة" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">أحمد محمود</h4>
              <p className="text-techTheme-primary mb-2">المؤسس والرئيس التنفيذي</p>
              <p className="text-gray-400 text-sm">
                خبير في مجال التكنولوجيا مع أكثر من 10 سنوات من الخبرة في قطاع الإلكترونيات.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3" 
                  alt="مدير المنتجات" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">سارة عبدالله</h4>
              <p className="text-techTheme-primary mb-2">مديرة المنتجات</p>
              <p className="text-gray-400 text-sm">
                متخصصة في اختيار أفضل المنتجات التقنية وضمان جودتها قبل عرضها للبيع.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-techTheme-muted p-6 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3" 
                  alt="مدير خدمة العملاء" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">محمد خالد</h4>
              <p className="text-techTheme-primary mb-2">مدير خدمة العملاء</p>
              <p className="text-gray-400 text-sm">
                متخصص في تقديم أفضل تجربة للعملاء وحل مشاكلهم بسرعة وكفاءة.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-techTheme-muted p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">هل أنت مستعد للتسوق؟</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            استكشف مجموعتنا الواسعة من المنتجات الإلكترونية وإكسسوارات الكمبيوتر والهواتف من أفضل العلامات التجارية العالمية.
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <Link to="/shop" className="btn-primary px-8 py-3">
              تسوق الآن
            </Link>
            <Link to="/contact" className="border border-techTheme-primary text-techTheme-primary hover:bg-techTheme-primary hover:text-white transition-colors px-8 py-3 rounded-md">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
