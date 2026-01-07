'use client';

import { useState, useCallback } from 'react';
import { Icons } from '@/components/Icons';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary text-white border-b border-primary/50 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo - Right Side (RTL) */}
            <a href="#home" className="flex items-center gap-1.5 group cursor-pointer">
              <div className="text-primary transition-transform group-hover:rotate-12 duration-300">
                <Icons.coffee className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h1 className="text-sm md:text-base font-bold tracking-wide group-hover:text-primary transition-colors duration-300">قهوجي الرياض</h1>
            </a>

            {/* Desktop Navigation - Left Side (RTL) */}
            <div className="hidden lg:flex items-center gap-4">
              <nav className="flex items-center gap-4">
                <a className="text-xs font-medium hover:text-primary transition-colors duration-200" href="#home">الرئيسية</a>
                <a className="text-xs font-medium hover:text-primary transition-colors duration-200" href="#about">من نحن</a>
                <a className="text-xs font-medium hover:text-primary transition-colors duration-200" href="#services">خدماتنا</a>
                <a className="text-xs font-medium hover:text-primary transition-colors duration-200" href="#blog">مقالاتنا</a>
                <a className="text-xs font-medium hover:text-primary transition-colors duration-200" href="#gallery">معرض الأعمال</a>
                <a className="text-xs font-medium hover:text-primary transition-colors duration-200" href="#contact">تواصل معنا</a>
              </nav>
              <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                <div className="relative group cursor-pointer">
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <a className="text-white hover:text-green-400 transition-colors" href="https://wa.me/966503521344" aria-label="تواصل واتساب">
                    <Icons.whatsapp className="w-5 h-5" />
                  </a>
                </div>
                <a className="bg-primary hover:bg-[#b88a5c] text-secondary font-bold text-xs px-4 py-2 rounded shadow-md transform hover:scale-105 transition-all duration-300" href="#booking">
                  اطلب الآن
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a className="text-white hover:text-green-400 transition-colors relative" href="https://wa.me/966503521344" aria-label="تواصل واتساب">
                <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <Icons.whatsapp className="w-5 h-5" />
              </a>
              <button className="text-white hover:text-primary p-1" onClick={toggleMobileMenu} aria-label="القائمة">
                {mobileMenuOpen ? <Icons.close className="w-5 h-5" /> : <Icons.menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-white/10">
              <nav className="flex flex-col gap-2">
                <a className="text-sm font-medium hover:text-primary transition-colors py-1.5" href="#home" onClick={closeMobileMenu}>الرئيسية</a>
                <a className="text-sm font-medium hover:text-primary transition-colors py-1.5" href="#about" onClick={closeMobileMenu}>من نحن</a>
                <a className="text-sm font-medium hover:text-primary transition-colors py-1.5" href="#services" onClick={closeMobileMenu}>خدماتنا</a>
                <a className="text-sm font-medium hover:text-primary transition-colors py-1.5" href="#blog" onClick={closeMobileMenu}>مقالاتنا</a>
                <a className="text-sm font-medium hover:text-primary transition-colors py-1.5" href="#gallery" onClick={closeMobileMenu}>معرض الأعمال</a>
                <a className="text-sm font-medium hover:text-primary transition-colors py-1.5" href="#contact" onClick={closeMobileMenu}>تواصل معنا</a>
                <a className="bg-primary hover:bg-[#b88a5c] text-secondary font-bold text-sm px-4 py-2.5 rounded text-center mt-2" href="#booking" onClick={closeMobileMenu}>
                  اطلب الآن
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#2D1B0B]/75 z-10"></div>
          <img
            alt="قهوجي الرياض - ضيافة عربية فاخرة"
            className="w-full h-full object-cover"
            src="/images/1.webp"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-5 fade-in-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-primary/30 text-primary text-xs font-medium tracking-wide">
              <Icons.star className="w-3.5 h-3.5" filled />
              <span>ضيافة سعودية فاخرة</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              قهوجيين وصبابين الرياض
              <span className="text-primary block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">خدمة قهوجي محترف على مدار الساعة</span>
            </h1>
            <p className="text-neutral-light/90 text-sm md:text-base max-w-xl leading-relaxed">
              نقدم خدمات ضيافة قهوة عالية الجودة لجميع المناسبات والحفلات، نهتم بأدق التفاصيل لنجعل مناسبتك ذكرى لا تنسى تعكس كرم الضيافة السعودية.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-neutral-light/80 text-xs my-3">
              <div className="flex items-center gap-1.5">
                <Icons.verified className="w-4 h-4 text-primary" />
                <span>فريق محترف</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icons.cleanHands className="w-4 h-4 text-primary" />
                <span>نظافة تامة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icons.clock className="w-4 h-4 text-primary" />
                <span>التزام بالوقت</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-3 w-full sm:w-auto">
              <a className="bg-primary text-secondary hover:bg-[#b88a5c] px-6 py-3 rounded font-bold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2" href="https://wa.me/966503521344">
                <span>احجز الآن عبر الواتساب</span>
                <Icons.whatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-primary">
          <Icons.arrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden" id="features">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-primary font-bold text-sm mb-1.5">لماذا تختارنا</h2>
            <h3 className="text-xl md:text-2xl font-bold text-secondary">التميز في كل تفاصيل الضيافة</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-neutral-light p-4 md:p-5 rounded-lg border border-transparent hover:border-primary transition-all duration-300 text-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Icons.users className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-sm md:text-base font-bold text-secondary mb-1">طاقم خبير</h4>
              <p className="text-neutral-dark/70 text-xs hidden sm:block">صبابين وقهوجيين مدربين على أعلى مستوى من الاحترافية</p>
            </div>
            <div className="bg-neutral-light p-4 md:p-5 rounded-lg border border-transparent hover:border-primary transition-all duration-300 text-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Icons.diamond className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-sm md:text-base font-bold text-secondary mb-1">جودة فاخرة</h4>
              <p className="text-neutral-dark/70 text-xs hidden sm:block">نستخدم أجود أنواع البن والهيل والتمور لضمان مذاق أصيل</p>
            </div>
            <div className="bg-neutral-light p-4 md:p-5 rounded-lg border border-transparent hover:border-primary transition-all duration-300 text-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Icons.uniform className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-sm md:text-base font-bold text-secondary mb-1">زي موحد أنيق</h4>
              <p className="text-neutral-dark/70 text-xs hidden sm:block">زي تراثي موحد ونظيف يليق بمناسبتكم</p>
            </div>
            <div className="bg-neutral-light p-4 md:p-5 rounded-lg border border-transparent hover:border-primary transition-all duration-300 text-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Icons.heritage className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-sm md:text-base font-bold text-secondary mb-1">أصالة التراث</h4>
              <p className="text-neutral-dark/70 text-xs hidden sm:block">نحافظ على العادات والتقاليد السعودية الأصيلة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 md:py-20 bg-neutral-light" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-primary font-bold text-sm mb-1.5">خدماتنا</h2>
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">خدمات قهوجيين متكاملة لجميع المناسبات</h3>
            <p className="text-neutral-dark/80 text-sm">تغطية شاملة للمناسبات الخاصة والعامة، حفلات الزواج، الاجتماعات، والعزائم</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <article className="group bg-white p-5 md:p-6 rounded-lg shadow-sm border border-transparent hover:border-primary/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neutral-light rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icons.coffee className="w-6 h-6" />
                </div>
                <span className="text-2xl text-neutral-light font-bold group-hover:text-primary/20 transition-colors">01</span>
              </div>
              <h4 className="text-base font-bold text-secondary mb-2">قهوجي وصبابين</h4>
              <p className="text-neutral-dark/70 text-sm leading-relaxed">
                توفير عدد مفتوح من القهوجيين والصبابين المحترفين لخدمة ضيوفكم طوال فترة المناسبة بكل رقي.
              </p>
            </article>
            <article className="group bg-white p-5 md:p-6 rounded-lg shadow-sm border border-transparent hover:border-primary/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neutral-light rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icons.teaCup className="w-6 h-6" />
                </div>
                <span className="text-2xl text-neutral-light font-bold group-hover:text-primary/20 transition-colors">02</span>
              </div>
              <h4 className="text-base font-bold text-secondary mb-2">مشروبات ساخنة متنوعة</h4>
              <p className="text-neutral-dark/70 text-sm leading-relaxed">
                قائمة غنية تشمل القهوة العربية، الشاي بأنواعه، الكرك، الزنجبيل، والنعناع الطازج.
              </p>
            </article>
            <article className="group bg-white p-5 md:p-6 rounded-lg shadow-sm border border-transparent hover:border-primary/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neutral-light rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icons.cookie className="w-6 h-6" />
                </div>
                <span className="text-2xl text-neutral-light font-bold group-hover:text-primary/20 transition-colors">03</span>
              </div>
              <h4 className="text-base font-bold text-secondary mb-2">ضيافة التمور والحلويات</h4>
              <p className="text-neutral-dark/70 text-sm leading-relaxed">
                تقديم أفخر أنواع التمور والمعمول والحلويات الشعبية التي تكمل متعة القهوة.
              </p>
            </article>
          </div>
          <div className="mt-8 text-center">
            <a className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all" href="#contact">
              استفسر عن خدماتنا <Icons.arrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-14 md:py-20 bg-white relative" id="service-details">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-neutral-light rounded-xl lg:rounded-2xl overflow-hidden shadow-lg border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[250px] sm:min-h-[350px] lg:min-h-full group overflow-hidden">
                <img
                  alt="فريق قهوجيين محترفين بالزي الرسمي"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/2.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent lg:bg-gradient-to-r lg:from-secondary/80 lg:via-transparent lg:to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-primary/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20">
                  <Icons.verified className="w-4 h-4" />
                  <span>الخيار الأول للنخبة</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-inner border border-primary/20">
                    <Icons.coffee className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-accent font-bold text-xs tracking-wide">خدمات الضيافة الملكية</span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary mt-0.5">قهوجي محترف بالرياض</h2>
                  </div>
                </div>
                <div className="text-neutral-dark/80 mb-6 leading-relaxed text-sm">
                  <p className="mb-3">
                    استمتع بتجربة ضيافة لا تنسى مع خدمة قهوجي محترف، حيث نجمع بين عبق الماضي وروعة الحاضر. فريقنا ليس مجرد مقدمي خدمة، بل هم سفراء للكرم السعودي الأصيل.
                  </p>
                  <p>
                    نهتم بأدق التفاصيل، بدءا من اختيار أجود أنواع <strong className="text-secondary">البن الخولاني</strong> و<strong className="text-secondary">التمور السكرية</strong> الفاخرة.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 border-t border-white pt-5">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 bg-primary/10 p-1 rounded text-primary">
                      <Icons.award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm mb-0.5">احترافية عالية</h4>
                      <p className="text-xs text-neutral-dark/70">فريق مدرب على فنون الضيافة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 bg-primary/10 p-1 rounded text-primary">
                      <Icons.uniform className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm mb-0.5">أناقة المظهر</h4>
                      <p className="text-xs text-neutral-dark/70">زي موحد تراثي نظيف ومكوي</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 bg-primary/10 p-1 rounded text-primary">
                      <Icons.clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm mb-0.5">دقة في المواعيد</h4>
                      <p className="text-xs text-neutral-dark/70">نلتزم بالوصول قبل الموعد</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 bg-primary/10 p-1 rounded text-primary">
                      <Icons.star className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm mb-0.5">معدات فاخرة</h4>
                      <p className="text-xs text-neutral-dark/70">دلال ذهبية وفضية لامعة</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a className="flex-1 bg-secondary hover:bg-secondary/90 text-white text-center py-3 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 group" href="#booking">
                    <span>طلب الخدمة الآن</span>
                    <Icons.arrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  </a>
                  <a className="flex-1 border border-primary text-secondary hover:bg-primary hover:text-white text-center py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-1.5" href="https://wa.me/966503521344">
                    <span>استفسار واتساب</span>
                    <Icons.whatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/50 p-4 border-t border-neutral-200">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-center">
                <div className="flex items-center gap-1.5 text-neutral-dark/70 text-xs">
                  <Icons.coffee className="w-4 h-4 text-primary" />
                  <span>قهوة عربية أصيلة</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-dark/70 text-xs">
                  <Icons.teaCup className="w-4 h-4 text-primary" />
                  <span>شاي ومشروبات ساخنة</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-dark/70 text-xs">
                  <Icons.cookie className="w-4 h-4 text-primary" />
                  <span>تمور وحلويات شرقية</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-dark/70 text-xs">
                  <Icons.sparkle className="w-4 h-4 text-primary" />
                  <span>خدمة نظافة فورية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabab Maher Service Details Section */}
      <section className="py-14 md:py-20 bg-neutral-light overflow-hidden" id="sabab-service">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-inner">
                  <Icons.teaCup className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-primary font-bold text-sm mb-0.5">تفاصيل الخدمة</h2>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary">صبابين وصبابات القهوة والشاي</h3>
                </div>
              </div>
              <p className="text-neutral-dark/80 text-sm leading-relaxed mb-5">
                نقدم خدمة صباب ماهر المتكاملة التي تجمع بين عراقة الماضي وأناقة الحاضر. يتميز فريقنا بالمهارة العالية في فنون التقديم وفق التقاليد السعودية الأصيلة.
              </p>
              <div className="bg-white/80 p-4 sm:p-5 rounded-xl border border-primary/10 mb-6">
                <h4 className="text-sm font-bold text-secondary mb-3 flex items-center gap-1.5">
                  <Icons.menuBook className="w-4 h-4 text-primary" />
                  قائمة المشروبات الساخنة الفاخرة
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="font-bold text-secondary">الشاي الأحمر الفاخر</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span className="font-bold text-secondary">الشاي الأخضر</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="font-bold text-secondary">شاي الزنجبيل</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span className="font-bold text-secondary">شاي النعناع</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm md:col-span-2 bg-neutral-light p-2.5 rounded border-r-2 border-primary">
                    <Icons.teaCup className="w-4 h-4 text-primary" />
                    <span className="font-bold text-secondary">شاي الكرك الأصلي</span>
                    <span className="text-xs text-neutral-dark/60">- خلطة خاصة بالزعفران والهيل</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-secondary mb-2">مميزات فريق الصبابين والصبابات:</h4>
                <div className="flex gap-3">
                  <div className="mt-0.5 bg-secondary/5 p-1.5 rounded-lg shrink-0">
                    <Icons.women className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-sm">خبرة الصبابات للمناسبات النسائية</h5>
                    <p className="text-neutral-dark/70 text-xs mt-0.5">
                      نخصص فريقا من الصبابات المحترفات للمناسبات الخاصة والنسائية، يتميزن باللباقة العالية والزي الموحد الأنيق.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-0.5 bg-secondary/5 p-1.5 rounded-lg shrink-0">
                    <Icons.serving className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-sm">إتقان فن التقديم</h5>
                    <p className="text-neutral-dark/70 text-xs mt-0.5">
                      إتقان مسكة الدلة والفنجان بمهارة، والتحرك بخفة وهدوء بين الضيوف.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a className="bg-secondary text-white hover:bg-secondary/90 px-5 py-2.5 rounded font-bold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-1.5 w-full sm:w-auto justify-center" href="#booking">
                  <span>طلب الخدمة الآن</span>
                  <Icons.arrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
              <div className="sticky top-20">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border-2 border-white group">
                  <img
                    alt="صباب محترف يقدم القهوة بأناقة"
                    className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/images/2.webp"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Icons.verified className="w-5 h-5 text-primary" />
                      <span className="font-bold text-base">احترافية وموثوقية</span>
                    </div>
                    <p className="text-white/80 text-xs">فريق مدرب على أعلى مستويات الضيافة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabab Features Section */}
      <section className="py-10 md:py-14 bg-white border-y border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-neutral-light p-3 sm:p-4 rounded-lg shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-2 sm:mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icons.clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-secondary text-xs sm:text-sm mb-0.5">دقة المواعيد</h3>
              <p className="text-xs text-neutral-dark/70 hidden sm:block">نصل قبل الموعد للتجهيز</p>
            </div>
            <div className="bg-neutral-light p-3 sm:p-4 rounded-lg shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-2 sm:mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icons.uniform className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-secondary text-xs sm:text-sm mb-0.5">زي موحد فاخر</h3>
              <p className="text-xs text-neutral-dark/70 hidden sm:block">مظهر لائق يعكس فخامة مناسبتك</p>
            </div>
            <div className="bg-neutral-light p-3 sm:p-4 rounded-lg shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-2 sm:mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icons.trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-secondary text-xs sm:text-sm mb-0.5">أدوات ذهبية</h3>
              <p className="text-xs text-neutral-dark/70 hidden sm:block">دلال وفناجين ذهبية فاخرة</p>
            </div>
            <div className="bg-neutral-light p-3 sm:p-4 rounded-lg shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-2 sm:mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icons.users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-secondary text-xs sm:text-sm mb-0.5">فريق متكامل</h3>
              <p className="text-xs text-neutral-dark/70 hidden sm:block">عدد كاف حسب حجم مناسبتك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-14 md:py-20 bg-neutral-light" id="blog">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-primary font-bold text-sm mb-1.5">مقالاتنا</h2>
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">نصائح وخبرات في الضيافة</h3>
            <p className="text-neutral-dark/80 text-sm">اكتشف أسرار الضيافة السعودية الأصيلة ونصائح الخبراء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Article 1 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-44 overflow-hidden">
                <img
                  alt="فن تقديم القهوة السعودية"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/3.webp"
                />
                <div className="absolute top-3 right-3 bg-primary text-secondary text-xs font-bold px-2 py-0.5 rounded shadow">
                  القهوة السعودية
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-neutral-dark/60 mb-2 gap-1.5">
                  <Icons.calendar className="w-3.5 h-3.5" />
                  <span>15 أكتوبر 2023</span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2 group-hover:text-primary transition-colors">فن القهوجي - كيفية تقديم القهوة السعودية بأسلوب احترافي</h4>
                <p className="text-neutral-dark/70 text-xs leading-relaxed mb-3 line-clamp-3 flex-grow">
                  تعرف على القواعد الذهبية لتقديم القهوة السعودية، من طريقة مسك الدلة والفنجال إلى بروتوكول الوقوف والتحرك بين الضيوف.
                </p>
                <a className="inline-flex items-center gap-1 text-accent font-bold text-xs hover:text-primary transition-colors mt-auto" href="#">
                  اقرأ المقال كاملا
                  <Icons.arrowLeft className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-44 overflow-hidden">
                <img
                  alt="أنواع الشاي والمشروبات الساخنة"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/4.webp"
                />
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded shadow">
                  مشروبات ساخنة
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-neutral-dark/60 mb-2 gap-1.5">
                  <Icons.calendar className="w-3.5 h-3.5" />
                  <span>12 أكتوبر 2023</span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2 group-hover:text-primary transition-colors">أنواع الشاي والمشروبات الساخنة - دليل شامل</h4>
                <p className="text-neutral-dark/70 text-xs leading-relaxed mb-3 line-clamp-3 flex-grow">
                  دليلك الشامل لأفضل أنواع الشاي والأعشاب والمشروبات الساخنة التي تناسب مختلف الأذواق في مناسبتك.
                </p>
                <a className="inline-flex items-center gap-1 text-accent font-bold text-xs hover:text-primary transition-colors mt-auto" href="#">
                  اقرأ المقال كاملا
                  <Icons.arrowLeft className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-44 overflow-hidden">
                <img
                  alt="اختيار قهوجي محترف"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="/images/2.webp"
                />
                <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded shadow">
                  نصائح عامة
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-neutral-dark/60 mb-2 gap-1.5">
                  <Icons.calendar className="w-3.5 h-3.5" />
                  <span>08 أكتوبر 2023</span>
                </div>
                <h4 className="text-sm font-bold text-secondary mb-2 group-hover:text-primary transition-colors">كيفية اختيار قهوجي محترف لحفلتك</h4>
                <p className="text-neutral-dark/70 text-xs leading-relaxed mb-3 line-clamp-3 flex-grow">
                  ما هي الصفات التي يجب أن تبحث عنها في القهوجي؟ وكيف تضمن خدمة احترافية تبيض الوجه أمام ضيوفك؟
                </p>
                <a className="inline-flex items-center gap-1 text-accent font-bold text-xs hover:text-primary transition-colors mt-auto" href="#">
                  اقرأ المقال كاملا
                  <Icons.arrowLeft className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>

          <div className="mt-8 text-center">
            <a className="inline-flex items-center gap-1.5 bg-secondary text-white hover:bg-secondary/90 px-5 py-2.5 rounded font-bold text-sm transition-all" href="#">
              عرض جميع المقالات
              <Icons.arrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 md:py-20 bg-white overflow-hidden" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border-2 border-neutral-light">
                <img
                  alt="فريق قهوجي الرياض المحترف"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  src="/images/2.webp"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-primary font-bold text-sm mb-1.5">من نحن</h2>
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">خبرة عريقة في فن الضيافة السعودية</h3>
              <p className="text-neutral-dark/80 text-sm leading-relaxed mb-6">
                نحن في قهوجي الرياض نفخر بكوننا الخيار الأول للباحثين عن التميز في الضيافة. نجمع بين أصالة الماضي ورقي الحاضر، لنقدم لكم خدمة تليق بمقام ضيوفكم. فريقنا مدرب بعناية لضمان تجربة سلسة ومريحة، مع التزام تام بأعلى معايير النظافة والجودة.
              </p>
              <a className="bg-secondary text-white hover:bg-secondary/90 px-5 py-2.5 rounded font-bold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-1.5" href="#contact">
                تواصل معنا الآن
                <Icons.arrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 md:py-20 bg-neutral-light" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-2">معرض أعمالنا</h2>
            <p className="text-neutral-dark/80 text-sm max-w-xl mx-auto">لقطات من المناسبات التي تشرفنا بخدمتها</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[180px]">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Icons.eye className="w-8 h-8 text-primary mx-auto mb-1" />
                  <p className="font-bold text-sm">حفل زفاف ملكي</p>
                </div>
              </div>
              <img
                alt="حفل زفاف ملكي - ضيافة فاخرة"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="/images/5.webp"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <Icons.eye className="w-6 h-6 text-primary" />
              </div>
              <img
                alt="صب القهوة العربية"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="/images/3.webp"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <Icons.eye className="w-6 h-6 text-primary" />
              </div>
              <img
                alt="تمور فاخرة"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="/images/6.webp"
              />
            </div>
            <div className="col-span-2 relative group overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <Icons.eye className="w-6 h-6 text-primary" />
              </div>
              <img
                alt="طقم شاي فاخر"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="/images/4.webp"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <Icons.eye className="w-6 h-6 text-primary" />
              </div>
              <img
                alt="مبخرة تراثية"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="/images/1_.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 md:py-20 bg-white overflow-hidden" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-2">آراء العملاء</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-4 snap-x">
            <div className="min-w-[280px] md:min-w-[340px] bg-neutral-light p-5 rounded-lg shadow-sm snap-center border-t-2 border-primary">
              <div className="flex gap-0.5 text-primary mb-3">
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
              </div>
              <p className="text-neutral-dark text-sm italic mb-4">خدمة مشرفة وتبيض الوجه، القهوجيين كانوا في قمة الذوق والأخلاق، والقهوة طعمها لا يعلى عليه. شكرا لكم.</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Icons.person className="w-5 h-5" /></div>
                <div>
                  <h5 className="font-bold text-secondary text-sm">أبو عبد الله</h5>
                  <p className="text-xs text-neutral-dark/60">حفل زواج</p>
                </div>
              </div>
            </div>
            <div className="min-w-[280px] md:min-w-[340px] bg-neutral-light p-5 rounded-lg shadow-sm snap-center border-t-2 border-primary">
              <div className="flex gap-0.5 text-primary mb-3">
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
              </div>
              <p className="text-neutral-dark text-sm italic mb-4">تعامل راقي جدا والتزام دقيق بالوقت. الدلال نظيفة والزي مرتب. سأعتمد عليكم في كل مناسباتي القادمة.</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Icons.person className="w-5 h-5" /></div>
                <div>
                  <h5 className="font-bold text-secondary text-sm">محمد السبيعي</h5>
                  <p className="text-xs text-neutral-dark/60">اجتماع عمل</p>
                </div>
              </div>
            </div>
            <div className="min-w-[280px] md:min-w-[340px] bg-neutral-light p-5 rounded-lg shadow-sm snap-center border-t-2 border-primary">
              <div className="flex gap-0.5 text-primary mb-3">
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
                <Icons.star className="w-4 h-4" filled />
              </div>
              <p className="text-neutral-dark text-sm italic mb-4">ما شاء الله تبارك الله، شغل احترافي. الضيوف أثنوا كثيرا على جودة التمر والقهوة. الله يوفقكم.</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Icons.person className="w-5 h-5" /></div>
                <div>
                  <h5 className="font-bold text-secondary text-sm">سعد القحطاني</h5>
                  <p className="text-xs text-neutral-dark/60">عزيمة خاصة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-14 md:py-16 relative overflow-hidden" id="booking">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-[#5a3818] z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">هل أنت جاهز للحجز؟</h2>
          <p className="text-primary text-sm md:text-base mb-8 max-w-xl mx-auto">تواصل معنا الآن واحجز خدمتنا لحفلتك القادمة، نضمن لك تجربة ضيافة لا تنسى</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a className="bg-primary text-secondary hover:bg-white hover:text-secondary px-6 py-3 rounded font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md" href="tel:+966503521344">
              <Icons.phone className="w-4 h-4" />
              اتصال مباشر
            </a>
            <a className="bg-[#25D366] text-white hover:bg-[#128C7E] px-6 py-3 rounded font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md" href="https://wa.me/966503521344">
              <Icons.whatsapp className="w-4 h-4" />
              رسالة واتساب
            </a>
            <a className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded font-bold text-sm transition-all flex items-center justify-center gap-2" href="mailto:info@riyadh-coffee.com">
              <Icons.mail className="w-4 h-4" />
              البريد الإلكتروني
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 md:py-20 bg-neutral-light" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-neutral-200/60">
                <h3 className="text-base font-bold text-secondary mb-4 flex items-center gap-1.5">
                  <Icons.phone className="w-4 h-4 text-primary" />
                  قنوات التواصل المباشر
                </h3>
                <div className="space-y-3">
                  <a className="flex items-center justify-between bg-[#25D366] text-white p-3 rounded-lg hover:bg-[#20bd5a] transition-all shadow group hover:-translate-y-0.5" href="https://wa.me/966503521344">
                    <div className="flex items-center gap-3">
                      <span className="bg-white/20 p-1.5 rounded-full">
                        <Icons.whatsapp className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="font-bold text-sm">تواصل عبر الواتساب</div>
                        <div className="text-xs text-white/90">للرد الفوري والسريع</div>
                      </div>
                    </div>
                    <Icons.arrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <a className="flex items-center gap-3 bg-neutral-light/50 p-3 rounded-lg border border-transparent hover:border-primary/30 hover:bg-white transition-all group" href="tel:+966503521344">
                    <div className="bg-primary/10 text-primary p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icons.phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-dark/70">اتصال هاتفي</div>
                      <div className="font-bold text-sm text-secondary group-hover:text-primary transition-colors" dir="ltr">+966 50 352 1344</div>
                    </div>
                  </a>
                  <a className="flex items-center gap-3 bg-neutral-light/50 p-3 rounded-lg border border-transparent hover:border-primary/30 hover:bg-white transition-all group" href="mailto:info@riyadh-coffee.com">
                    <div className="bg-primary/10 text-primary p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icons.mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-dark/70">البريد الإلكتروني</div>
                      <div className="font-bold text-sm text-secondary group-hover:text-primary transition-colors">info@riyadh-coffee.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-secondary text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute -top-4 -left-4 opacity-5 rotate-12">
                  <Icons.location className="w-32 h-32" />
                </div>
                <h3 className="text-base font-bold text-primary mb-4 relative z-10">معلومات الموقع والعمل</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-primary/20 p-1.5 rounded text-primary">
                      <Icons.store className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm mb-0.5">المكتب الرئيسي</strong>
                      <p className="text-neutral-light/70 text-xs leading-relaxed">طريق الملك فهد، حي العليا<br />الرياض، المملكة العربية السعودية</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-primary/20 p-1.5 rounded text-primary">
                      <Icons.clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm mb-0.5">ساعات العمل</strong>
                      <p className="text-neutral-light/70 text-xs">خدمة متوفرة 24 ساعة / 7 أيام</p>
                      <span className="inline-block mt-1.5 text-xs bg-accent px-2 py-0.5 rounded text-white">متاح الآن</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-5 md:p-7 rounded-xl shadow-lg border-t-4 border-primary relative">
                <h2 className="text-xl font-bold text-secondary mb-2">حجز جديد / استفسار</h2>
                <p className="text-neutral-dark/60 text-xs mb-6">املأ البيانات التالية وسيقوم فريقنا بالتواصل معك في أقرب وقت لتأكيد الحجز.</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-secondary flex items-center gap-1">
                        <Icons.person className="w-3.5 h-3.5 text-primary" />
                        الاسم الكريم
                      </label>
                      <input className="w-full bg-neutral-light/50 border border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded h-10 px-3 text-sm transition-all placeholder:text-neutral-dark/30" placeholder="الاسم ثلاثي" type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-secondary flex items-center gap-1">
                        <Icons.smartphone className="w-3.5 h-3.5 text-primary" />
                        رقم الجوال
                      </label>
                      <input className="w-full bg-neutral-light/50 border border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded h-10 px-3 text-sm transition-all placeholder:text-neutral-dark/30 text-left" dir="ltr" placeholder="05xxxxxxxx" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-secondary flex items-center gap-1">
                      <Icons.mail className="w-3.5 h-3.5 text-primary" />
                      البريد الإلكتروني
                    </label>
                    <input className="w-full bg-neutral-light/50 border border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded h-10 px-3 text-sm transition-all placeholder:text-neutral-dark/30" placeholder="example@email.com" type="email" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-secondary flex items-center gap-1">
                        <Icons.document className="w-3.5 h-3.5 text-primary" />
                        نوع المناسبة
                      </label>
                      <select defaultValue="" className="w-full bg-neutral-light/50 border border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded h-10 px-3 text-sm transition-all text-neutral-dark cursor-pointer">
                        <option disabled value="">اختر نوع المناسبة</option>
                        <option value="wedding">حفل زواج / ملكة</option>
                        <option value="business">اجتماع عمل / مؤتمر</option>
                        <option value="private">عزيمة خاصة / منزلية</option>
                        <option value="reception">حفل استقبال</option>
                        <option value="outdoor">مناسبة خارجية</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-secondary flex items-center gap-1">
                        <Icons.calendar className="w-3.5 h-3.5 text-primary" />
                        تاريخ المناسبة
                      </label>
                      <input className="w-full bg-neutral-light/50 border border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded h-10 px-3 text-sm transition-all text-neutral-dark cursor-pointer" type="date" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-secondary flex items-center gap-1">
                      <Icons.document className="w-3.5 h-3.5 text-primary" />
                      رسالة أو تفاصيل إضافية
                    </label>
                    <textarea className="w-full bg-neutral-light/50 border border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded p-3 text-sm transition-all placeholder:text-neutral-dark/30 resize-none" placeholder="أخبرنا المزيد عن متطلباتك، عدد الضيوف المتوقع، أو أي تفاصيل خاصة..." rows="3"></textarea>
                  </div>
                  <div className="pt-2">
                    <button className="w-full bg-secondary text-white hover:bg-primary hover:text-secondary font-bold text-sm h-11 rounded shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" type="button">
                      <span>إرسال الطلب</span>
                      <Icons.send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-[350px] md:h-[400px] bg-neutral-200 border-t border-b border-secondary/10">
        <div className="absolute inset-0 group overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.0256935!2d46.5423!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="خريطة موقع قهوجي الرياض"
          />
          <div className="absolute inset-0 bg-secondary/10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute top-full left-1/2 -translate-x-1/2 -mt-1.5"></div>
              <Icons.location className="w-10 h-10 text-red-600 drop-shadow-lg relative z-10" />
            </div>
            <div className="bg-white px-4 py-1.5 rounded shadow-lg mt-1.5 border border-primary/20 transform transition-transform duration-300 hover:scale-105 pointer-events-auto cursor-pointer">
              <p className="font-bold text-secondary text-xs">مقر قهوجي الرياض</p>
              <div className="flex items-center gap-0.5 text-xs text-neutral-dark">
                <Icons.star className="w-3 h-3 text-yellow-500" filled />
                <span>4.9 (120 تقييم)</span>
              </div>
            </div>
          </div>
          <a className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded shadow text-xs font-bold text-secondary hover:bg-white transition-colors flex items-center gap-1.5" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            عرض في خرائط جوجل
            <Icons.externalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-neutral-light pt-14 pb-8 border-t-4 border-primary" id="contact">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20 lg:gap-32 mb-10">
            <div className="space-y-4 text-center md:text-right">
              <div className="flex items-center gap-1.5 mb-3 justify-center md:justify-start">
                <div className="text-primary">
                  <Icons.coffee className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-white">قهوجي الرياض</h2>
              </div>
              <p className="text-neutral-light/70 text-xs leading-relaxed max-w-xs">
                نقدم أرقى خدمات الضيافة العربية في الرياض. نجمع بين الأصالة والاحترافية لنضمن نجاح مناسباتكم.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-neutral-light/90 text-xs hover:text-primary transition-colors cursor-pointer justify-center md:justify-start">
                  <Icons.phone className="w-4 h-4 text-primary" />
                  <span dir="ltr">+966 50 352 1344</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-light/90 text-xs hover:text-primary transition-colors cursor-pointer justify-center md:justify-start">
                  <Icons.location className="w-4 h-4 text-primary" />
                  الرياض، المملكة العربية السعودية
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-base font-bold text-white mb-4 border-b border-primary/30 pb-1.5 inline-block">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs justify-center md:justify-start" href="#home"><Icons.chevronLeft className="w-3 h-3" /> الرئيسية</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs justify-center md:justify-start" href="#about"><Icons.chevronLeft className="w-3 h-3" /> من نحن</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs justify-center md:justify-start" href="#services"><Icons.chevronLeft className="w-3 h-3" /> خدماتنا</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs justify-center md:justify-start" href="#gallery"><Icons.chevronLeft className="w-3 h-3" /> المعرض</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs justify-center md:justify-start" href="#booking"><Icons.chevronLeft className="w-3 h-3" /> احجز الآن</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 flex justify-center items-center">
            <p className="text-xs text-neutral-light/60 text-center">
              جميع الحقوق محفوظة 2024 - قهوجي الرياض
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group" href="https://wa.me/966503521344" aria-label="تواصل عبر واتساب">
        <Icons.whatsapp className="w-6 h-6" />
        <span className="absolute right-full mr-2 bg-white text-secondary px-2.5 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">تواصل عبر واتساب</span>
      </a>
    </>
  );
}
