import React, { useState } from 'react';
import { siteImages } from '../assets/images';
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageSquare, UserCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Roastery & Cafe Sample',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate server submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* ===================== CONTACT HERO BANNER ===================== */}
      {/* Recreates Strikingly contact page header: "Contact Us" & "Take the Coffee. Keep Meratus in the Story." */}
      <section className="relative py-24 bg-[#2D4438] text-white text-center overflow-hidden border-b border-[#3D5A4A]">
        <div className="absolute inset-0 z-0">
          <img
            src={siteImages.dryingPatio}
            alt="Burakai Village Meratus"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D4438] via-[#2D4438]/75 to-[#2D4438]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4C6F5A]">
            <Mail className="w-3.5 h-3.5" />
            <span>OFFICIAL COOPERATIVE CONTACT</span>
          </div>

          <h1 className="font-bebas text-5xl sm:text-7xl text-[#FAF6ED] tracking-wider">
            Contact Us
          </h1>

          <p className="font-caladea text-xl sm:text-3xl text-[#C4DFC9] italic leading-relaxed">
            "Take the Coffee. Keep Meratus in the Story."
          </p>

          <p className="font-barlow text-sm text-[#DCE8DF] max-w-xl mx-auto pt-2">
            Reach out to the officers of Koperasi Marangkai Sejahtera Bersama for green bean wholesale contracts, cupping samples, retail orders, or international trade inquiries.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT CONTENT & FORM ===================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#DCE5DE] space-y-6">
              <div>
                <span className="text-xs font-bold text-[#4D705C] uppercase tracking-widest font-barlow">
                  COOPERATIVE HEADQUARTERS
                </span>
                <h3 className="font-bebas text-3xl text-[#2D4438] tracking-wide mt-1">
                  KOPERASI MARANGKAI SEJAHTERA BERSAMA
                </h3>
                <p className="text-xs font-barlow text-gray-500 mt-1">
                  Registered Agricultural Producer Cooperative • Tapin Regency
                </p>
              </div>

              <div className="space-y-4 text-sm font-barlow text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E7EFE9] text-[#2D4438] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-semibold">Registered Office & Mill:</strong>
                    <span className="text-xs leading-relaxed text-gray-600">
                      Burakai Village, Hatungun District, Tapin Regency, South Kalimantan 71181, Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E7EFE9] text-[#2D4438] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-semibold">Official Correspondence Email:</strong>
                    <a
                      href="mailto:marangkaisejahterabersama@gmail.com"
                      className="text-xs text-[#2D4438] hover:text-[#4D705C] hover:underline break-all"
                    >
                      marangkaisejahterabersama@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E7EFE9] text-[#2D4438] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <strong className="block text-gray-900 font-semibold">Phone / WhatsApp Contacts:</strong>
                    <div className="space-y-1">
                      <a
                        href="https://wa.me/6289690571731"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#2D4438] hover:text-[#4D705C] hover:underline flex items-center justify-between group"
                      >
                        <span className="font-semibold">+62 896-9057-1731</span>
                        <span className="text-[11px] text-gray-500 font-normal group-hover:text-[#2D4438]">Hotline 1</span>
                      </a>
                      <a
                        href="https://wa.me/6281223741112"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#2D4438] hover:text-[#4D705C] hover:underline flex items-center justify-between group"
                      >
                        <span className="font-semibold">081223741112</span>
                        <span className="text-[11px] text-gray-500 font-normal group-hover:text-[#2D4438]">Hotline 2</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Governance Officers */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F8EFE4] text-[#D4A36E] shrink-0 mt-0.5">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-gray-900 font-semibold">Cooperative Officers:</strong>
                    <div className="text-xs text-gray-700">
                      <span className="font-semibold text-[#2D4438]">Chairman:</span> Fery Setyawan
                    </div>
                    <div className="text-xs text-gray-700">
                      <span className="font-semibold text-[#2D4438]">Secretary:</span> Nugraha Anthoni Najwa
                    </div>
                    <div className="text-xs text-gray-700">
                      <span className="font-semibold text-[#2D4438]">Treasurer:</span> Prawoto
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="https://wa.me/6289690571731?text=Hello%20Marangkai%20Cooperative%20Team,%20I%20would%20like%20to%20inquire%20about%20Meratus%20Excelsa%20coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#2D4438] hover:bg-[#3D5B4A] border border-[#82C79B] text-white font-barlow font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#82C79B]" />
                  <span>CHAT ON WHATSAPP (+62 896-9057-1731)</span>
                </a>
                <a
                  href="https://wa.me/6281223741112?text=Hello%20Marangkai%20Cooperative%20Team,%20I%20would%20like%20to%20inquire%20about%20Meratus%20Excelsa%20coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#EBF2EC] hover:bg-[#DCE8DF] text-[#2D4438] border border-[#B6D1BE] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#2D4438]" />
                  <span>CONTACT HOTLINE (081223741112)</span>
                </a>
              </div>
            </div>

            {/* Geographical Card */}
            <div className="bg-[#24372D] text-white rounded-2xl p-6 border border-[#395444] space-y-3">
              <span className="text-[11px] font-bold text-[#E0B47F] uppercase tracking-wider font-barlow block">
                MERATUS MOUNTAIN AGROFORESTRY ZONE
              </span>
              <h4 className="font-bebas text-xl text-[#FAF6ED]">
                HATUNGUN DISTRICT, TAPIN REGENCY
              </h4>
              <p className="text-xs font-barlow text-[#DCE8DF] leading-relaxed">
                Located in the foothills of the Meratus Mountains, South Kalimantan at 60–90 meters above sea level. The center of multi-generational agroforestry Excelsa coffee groves managed with modern specialty harvesting techniques.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-[#DCE5DE]">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#E7EFE9] text-[#2D4438] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#82C79B]" />
                  </div>
                  <h3 className="font-bebas text-3xl text-gray-900 tracking-wide">
                    THANKS FOR YOUR SUBMISSION!
                  </h3>
                  <p className="text-sm font-barlow text-gray-600 max-w-md mx-auto leading-relaxed">
                    Your message has been received by the team at Koperasi Marangkai Sejahtera Bersama. We will get in touch with you via email or WhatsApp within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Roastery & Cafe Sample',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#2D4438] text-white rounded-lg font-barlow font-bold text-xs uppercase tracking-wider hover:bg-[#3D5B4A] cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold text-[#4D705C] uppercase tracking-widest font-barlow">
                      MESSAGE FORM
                    </span>
                    <h3 className="font-bebas text-3xl text-[#2D4438] tracking-wide mt-0.5">
                      SEND AN INQUIRY OR WHOLESALE ORDER
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase font-barlow mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5DE] focus:outline-none focus:ring-2 focus:ring-[#82C79B] text-sm font-barlow bg-white text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase font-barlow mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5DE] focus:outline-none focus:ring-2 focus:ring-[#82C79B] text-sm font-barlow bg-white text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase font-barlow mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 8..."
                        className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5DE] focus:outline-none focus:ring-2 focus:ring-[#82C79B] text-sm font-barlow bg-white text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase font-barlow mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5DE] focus:outline-none focus:ring-2 focus:ring-[#82C79B] text-sm font-barlow bg-white text-gray-800"
                      >
                        <option value="Roastery & Cafe Sample">Roastery & Cafe Green Bean Sample</option>
                        <option value="Commercial Wholesale Lots">Commercial Wholesale Lots (20kg - 60kg Sacks)</option>
                        <option value="International Export Partnership">International Export Partnership</option>
                        <option value="Retail Coffee Order">Retail / Personal Coffee Order</option>
                        <option value="Agroforestry Field Study">Agroforestry Farm Study & Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase font-barlow mb-1.5">
                      Message / Order Specifications *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your inquiry, required volume of green beans / roast beans, or partnership timeline..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5DE] focus:outline-none focus:ring-2 focus:ring-[#82C79B] text-sm font-barlow bg-white text-gray-800"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#E0B47F]" />
                    <span>{submitting ? 'SENDING INQUIRY...' : 'SUBMIT MESSAGE'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
