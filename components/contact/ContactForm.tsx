"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, User, Building2, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(20, "Please write at least 20 characters in your message."),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Audit & Assurance",
  "Taxation & Compliance",
  "Advisory Services",
  "Accounting & Business Support",
  "Corporate Compliance",
  "General Inquiry",
];

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  register,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon: React.ElementType;
  register: any;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold text-[#00335B] tracking-wider uppercase">
        {label} {required && <span className="text-[#00A7CE]">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00A7CE]/60 pointer-events-none" />
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full rounded-2xl border bg-white pl-11 pr-4 py-3.5 text-sm text-[#00335B] placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00A7CE]/30 focus:border-[#00A7CE] ${
            error ? "border-red-400" : "border-black/10 hover:border-black/20"
          }`}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00335B]/10 mb-6">
            <CheckCircle className="h-10 w-10 text-[#00335B]" />
          </div>
          <h3 className="text-2xl font-display font-bold text-[#00335B]">Inquiry Sent</h3>
          <p className="mt-3 text-sm text-[#64748B] leading-relaxed max-w-sm">
            Thank you for reaching out. A member of our team will review your inquiry and respond within one business day.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-sm font-semibold text-[#00335B] hover:bg-black/5 transition-colors"
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <InputField
              label="Full Name"
              name="name"
              placeholder="Your full name"
              icon={User}
              register={register}
              error={errors.name?.message}
              required
            />
            <InputField
              label="Company / Organisation"
              name="company"
              placeholder="Your company (optional)"
              icon={Building2}
              register={register}
              error={errors.company?.message}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@company.com"
              icon={Mail}
              register={register}
              error={errors.email?.message}
              required
            />
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+92 300 0000000"
              icon={Phone}
              register={register}
              error={errors.phone?.message}
            />
          </div>

          {/* Service Select */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#00335B] tracking-wider uppercase">
              Service Required <span className="text-[#00A7CE]">*</span>
            </label>
            <div className="relative">
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00A7CE]/60 pointer-events-none" />
              <select
                {...register("service")}
                defaultValue=""
                className={`w-full appearance-none rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#00335B] outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00A7CE]/30 focus:border-[#00A7CE] ${
                  errors.service ? "border-red-400" : "border-black/10 hover:border-black/20"
                }`}
              >
                <option value="" disabled>Select a service…</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            {errors.service && (
              <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#00335B] tracking-wider uppercase">
              Message <span className="text-[#00A7CE]">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-[#00A7CE]/60 pointer-events-none" />
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Briefly describe your requirements or the nature of your inquiry…"
                className={`w-full rounded-2xl border bg-white pl-11 pr-4 py-3.5 text-sm text-[#00335B] placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#00A7CE]/30 focus:border-[#00A7CE] resize-none ${
                  errors.message ? "border-red-400" : "border-black/10 hover:border-black/20"
                }`}
              />
            </div>
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#00335B] px-8 py-4 text-sm font-semibold text-white hover:bg-[#002240] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Sending…
              </span>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#64748B]">
            We respond to all inquiries within one business day. Your information is kept strictly confidential.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
