
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://n8n.srv1040836.hstgr.cloud/webhook/contact-form-petrolchem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact-us" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e37249]/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="w-20 h-2 bg-[#e37249] mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">Connect With Our <br /> <span className="text-[#e37249]">Specialists</span></h2>
          <p className="mt-8 text-gray-500 font-light text-lg max-w-2xl leading-relaxed">
            Reach out today to discuss how our integrated engineering frameworks can optimize your next operational cycle.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#fafbfc] p-10 md:p-16 shadow-[0_40px_100px_rgba(227,114,73,0.08)] border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-12">
            <div className="relative group">
              <input
                required
                type="text"
                id="firstName"
                placeholder=" "
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-[#e37249] transition-all font-medium text-gray-900 placeholder-transparent"
              />
              <label htmlFor="firstName" className="absolute left-0 top-4 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-focus:top-[-12px] peer-focus:text-[11px] peer-focus:text-[#e37249] peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[#e37249]">Given Name</label>
            </div>
            
            <div className="relative group">
              <input
                required
                type="text"
                id="lastName"
                placeholder=" "
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-[#e37249] transition-all font-medium text-gray-900 placeholder-transparent"
              />
              <label htmlFor="lastName" className="absolute left-0 top-4 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-focus:top-[-12px] peer-focus:text-[11px] peer-focus:text-[#e37249] peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[#e37249]">Surname</label>
            </div>
            
            <div className="relative group">
              <input
                required
                type="email"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-[#e37249] transition-all font-medium text-gray-900 placeholder-transparent"
              />
              <label htmlFor="email" className="absolute left-0 top-4 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-focus:top-[-12px] peer-focus:text-[11px] peer-focus:text-[#e37249] peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[#e37249]">Email</label>
            </div>
            
            <div className="relative group">
              <input
                required
                type="tel"
                id="phone"
                placeholder=" "
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-[#e37249] transition-all font-medium text-gray-900 placeholder-transparent"
              />
              <label htmlFor="phone" className="absolute left-0 top-4 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-focus:top-[-12px] peer-focus:text-[11px] peer-focus:text-[#e37249] peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[#e37249]">Direct Dial</label>
            </div>

            <div className="relative group md:col-span-2">
              <textarea
                required
                id="message"
                placeholder=" "
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-[#e37249] transition-all font-medium text-gray-900 placeholder-transparent resize-none"
              />
              <label htmlFor="message" className="absolute left-0 top-4 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-focus:top-[-12px] peer-focus:text-[11px] peer-focus:text-[#e37249] peer-focus:font-black peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[#e37249]">Message</label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">
            <button
              disabled={status === 'loading'}
              type="submit"
              className="bg-[#e37249] text-white px-16 py-5 font-black text-[14px] tracking-[0.4em] uppercase hover:bg-[#c45a33] transition-all disabled:opacity-50 w-full md:w-auto shadow-xl"
            >
              {status === 'loading' ? 'TRANSMITTING...' : 'SEND INQUIRY'}
            </button>
            
            {status === 'success' && (
              <p className="text-green-600 font-black text-xs uppercase tracking-widest animate-bounce">Inquiry transmitted successfully.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-black text-xs uppercase tracking-widest">Transmission error. Please verify data.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;