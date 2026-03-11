import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useRef(null);
  const { isVisible } = useScrollReveal(sectionRef);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: '',
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.details.trim()) newErrors.details = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Shake animation will be handled by CSS
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-surface px-6 md:px-12 py-32 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,255,71,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,255,71,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing corner accent */}
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,71,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-accent mb-5">
            <div className="w-8 h-px bg-accent" />
            Contact
          </div>
          <h2 className="font-syne text-[clamp(40px,5vw,68px)] font-extrabold tracking-[-2.5px] leading-[0.95]">
            Get In
            <br />
            <span
              style={{
                WebkitTextStroke: '1px #f0f0f0',
                color: 'transparent',
              }}
            >
              Touch
            </span>
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-0.5 bg-border border border-border">
          {/* Left Panel - Info */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0a0a0a] p-11"
          >
            <div className="flex flex-col">
              <InfoBlock label="Email" value="syed.razaurrehman053@gmail.com" href="mailto:syed.razaurrehman053@gmail.com" />
              <InfoBlock label="Phone" value="+92-315-5783100" href="tel:+923155783100" />
              <InfoBlock label="Location" value="Islamabad, Pakistan" />
              <InfoBlock
                label="LinkedIn"
                value="linkedin.com/in/razashah053"
                href="https://linkedin.com/in/razashah053"
                target="_blank"
              />

              {/* Guarantee Card */}
              <div className="mt-9 bg-[#1a1a1a] border border-border p-7 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, #e8ff47, #ff6b35)',
                  }}
                />
                <span className="text-xl block mb-3">⚡</span>
                <div className="font-syne text-sm font-bold mb-2.5 text-accent tracking-tight">
                  Quick Response Guarantee
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  I respond to all inquiries within <strong className="text-text font-medium">24 hours</strong>. For
                  urgent projects, I'm available for <strong className="text-text font-medium">same-day consultation calls</strong>. Currently working as{' '}
                  <strong className="text-text font-medium">Full Stack Engineer at ALTEGON</strong>.
                </p>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-[rgba(232,255,71,0.07)] border border-[rgba(232,255,71,0.2)] px-4 py-2 text-[11px] text-accent uppercase tracking-wider mt-7">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Available for new projects
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#141414] p-12 relative"
          >
            {!showSuccess ? (
              <>
                <div className="mb-10">
                  <div className="font-syne text-[22px] font-bold tracking-tight mb-2">Send a Message</div>
                  <div className="text-xs text-muted">
                    Tell me about your project and I'll get back to you shortly.
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <FormGroup
                      label="Your Name"
                      required
                      error={errors.name}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Syed Raza"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-[#0a0a0a] border ${
                          errors.name ? 'border-red-500 animate-shake' : 'border-border'
                        } text-text font-mono text-[13px] px-4 py-3.5 outline-none transition-all focus:border-accent focus:bg-[rgba(232,255,71,0.02)] focus:shadow-[0_0_0_3px_rgba(232,255,71,0.06)]`}
                      />
                    </FormGroup>

                    <FormGroup
                      label="Email Address"
                      required
                      error={errors.email}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-[#0a0a0a] border ${
                          errors.email ? 'border-red-500 animate-shake' : 'border-border'
                        } text-text font-mono text-[13px] px-4 py-3.5 outline-none transition-all focus:border-accent focus:bg-[rgba(232,255,71,0.02)] focus:shadow-[0_0_0_3px_rgba(232,255,71,0.06)]`}
                      />
                    </FormGroup>
                  </div>

                  <FormGroup label="Project Type">
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={`w-full bg-[#0a0a0a] border border-border ${
                          formData.projectType ? 'text-text' : 'text-[#333]'
                        } font-mono text-[13px] px-4 py-3.5 outline-none transition-all appearance-none cursor-pointer focus:border-accent focus:bg-[rgba(232,255,71,0.02)] focus:shadow-[0_0_0_3px_rgba(232,255,71,0.06)]`}
                      >
                        <option value="" disabled>
                          e.g., MERN Stack App, AI Integration, E-commerce Platform
                        </option>
                        <option value="mern">MERN Stack Application</option>
                        <option value="ai">AI / ML Integration</option>
                        <option value="ecommerce">E-commerce Platform</option>
                        <option value="api">REST / GraphQL API</option>
                        <option value="mobile">React Native / Mobile App</option>
                        <option value="dashboard">Admin Dashboard / Analytics</option>
                        <option value="devops">DevOps / Cloud Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted text-xs">
                        ▾
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup
                    label="Project Details"
                    required
                    error={errors.details}
                  >
                    <textarea
                      id="details"
                      name="details"
                      placeholder="Tell me about your project, timeline, and specific requirements..."
                      value={formData.details}
                      onChange={handleInputChange}
                      className={`w-full bg-[#0a0a0a] border ${
                        errors.details ? 'border-red-500 animate-shake' : 'border-border'
                      } text-text font-mono text-[13px] px-4 py-3.5 outline-none transition-all resize-vertical min-h-[140px] leading-relaxed focus:border-accent focus:bg-[rgba(232,255,71,0.02)] focus:shadow-[0_0_0_3px_rgba(232,255,71,0.06)]`}
                    />
                  </FormGroup>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-accent text-[#0a0a0a] font-syne text-sm font-bold uppercase tracking-wider mt-8 relative overflow-hidden transition-colors hover:text-white disabled:opacity-70"
                  >
                    <span className="relative z-10">{isSubmitting ? 'Sending…' : 'Send Message'}</span>
                    <span className="relative z-10 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    <span className="absolute inset-0 bg-accent2 -translate-x-full transition-transform duration-400 group-hover:translate-x-0" />
                  </button>

                  <p className="mt-4 text-[11px] text-muted text-center tracking-wide">
                    No spam. Your info stays <span className="text-accent">private</span> — always.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-16 h-full">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-6"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e8ff47"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <div className="font-syne text-2xl font-extrabold tracking-tight mb-3 text-accent">
                  Message Sent!
                </div>
                <p className="text-[13px] text-muted max-w-xs leading-relaxed">
                  Thanks for reaching out. I'll be in touch within 24 hours. Looking forward to working together.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface InfoBlockProps {
  label: string;
  value: string;
  href?: string;
  target?: string;
}

function InfoBlock({ label, value, href, target }: InfoBlockProps) {
  const content = (
    <div className="py-7 border-b border-border relative transition-all duration-300 group hover:pl-2.5">
      <div
        className="absolute left-[-44px] top-0 bottom-0 w-0.5 bg-accent scale-y-0 origin-bottom transition-transform duration-350 group-hover:scale-y-100"
      />
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1.5">{label}</div>
      {href ? (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-[13px] text-text block transition-colors hover:text-accent break-all"
        >
          {value}
        </a>
      ) : (
        <span className="text-[13px] text-text block break-all">{value}</span>
      )}
    </div>
  );

  return content;
}

interface FormGroupProps {
  label: string;
  required?: boolean;
  error?: boolean;
  children: React.ReactNode;
}

function FormGroup({ label, required, error, children }: FormGroupProps) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-[11px] uppercase tracking-[0.15em] text-muted flex items-center gap-1">
        {label}
        {required && <span className="text-accent text-sm">*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-red-500">This field is required</span>}
    </div>
  );
}
