"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+84 353 830 297" },
  { icon: <FiMail />, title: "Email", description: "dotienmanh070104@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "HCM City, Vietnam" },
];

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const fd = new FormData(event.currentTarget); // ✅ currentTarget
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
      // honeypot (nếu có)
      company: fd.get("company"),
    };

    // optional: chặn bot nếu dùng honeypot
    if (payload.company) {
      setLoading(false);
      setStatus({ ok: true, msg: "Message sent successfully!" });
      event.currentTarget.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus({ ok: true, msg: "Message sent successfully!" });
        event.currentTarget.reset(); // ✅ sửa lỗi chính tả
      } else {
        setStatus({ ok: false, msg: "Something went wrong, please try again later." });
      }
    } catch {
      setStatus({ ok: false, msg: "Something went wrong, please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 w-full">
          {/* FORM */}
          <div className="xl:col-span-7 order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 xl:p-10 bg-[#27272c] rounded-2xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              {/* Honeypot ẩn (optional) */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <h3 className="text-3xl xl:text-4xl font-semibold text-accent">Let&apos;s work together</h3>
                <p className="mt-2 text-white/60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis officiis blanditiis…
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ✅ thêm name + type hợp lệ */}
                <Input name="name" type="text" placeholder="Name" required />
                <Input name="phone" type="tel" placeholder="Phone number" />
                <Input name="email" type="email" placeholder="Email address" required />
              </div>

              <Textarea name="message" className="min-h-[200px]" placeholder="Type your message here" required />

              <Button
                type="submit"
                size="md"
                disabled={loading}
                className="h-10 rounded-full bg-accent hover:bg-accent/85 text-primary px-6 shadow-md disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send message"}
              </Button>

              {status && (
                <p className={status.ok ? "text-emerald-400" : "text-red-400"}>{status.msg}</p>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className="xl:col-span-5 order-1 xl:order-none">
            <div className="h-full flex items-center xl:justify-end">
              <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.03] p-5 xl:p-6 backdrop-blur-sm">
                <ul className="space-y-4">
                  {info.map((item, index) => (
                    <li
                      key={index}
                      className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04] hover:border-white/10 border border-transparent"
                    >
                      <div className="w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] grid place-items-center rounded-xl bg-[#27272c] text-accent ring-1 ring-white/10 group-hover:ring-accent/30 transition">
                        <div className="text-[22px] xl:text-[24px]">{item.icon}</div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs xl:text-sm text-white/60">{item.title}</p>
                        <h3
                          className={
                            item.title === "Email"
                              ? "text-base xl:text-md font-medium tracking-wide break-all"
                              : "text-base xl:text-md font-medium tracking-wide break-words"
                          }
                          title={item.description}
                        >
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* END INFO */}
        </div>
      </div>
    </motion.section>
  );
}
