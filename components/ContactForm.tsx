"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const f = CONTACT.form.fields;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">
          {f.name.label} <span className="req">*</span>
        </label>
        <input id="name" name="name" type="text" placeholder={f.name.placeholder} required />
      </div>

      <div className="field">
        <label htmlFor="company">{f.company.label}</label>
        <input id="company" name="company" type="text" placeholder={f.company.placeholder} />
      </div>

      <div className="field">
        <label htmlFor="email">
          {f.email.label} <span className="req">*</span>
        </label>
        <input id="email" name="email" type="email" placeholder={f.email.placeholder} required />
      </div>

      <div className="field">
        <label htmlFor="category">{f.category.label}</label>
        <select id="category" name="category" defaultValue={f.category.options[0]}>
          {f.category.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">
          {f.message.label} <span className="req">*</span>
        </label>
        <textarea id="message" name="message" placeholder={f.message.placeholder} required />
      </div>

      <button type="submit" className="btn btn-grad" disabled={status === "sending"}>
        {status === "sending" ? CONTACT.form.sendingLabel : CONTACT.form.submitLabel}
      </button>

      <p className="note">{CONTACT.form.note}</p>

      {status === "success" && (
        <p style={{ color: "#1f8a5b", fontWeight: 600, textAlign: "center", marginTop: 14 }}>
          {CONTACT.form.successMessage}
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#ff4d4d", fontWeight: 600, textAlign: "center", marginTop: 14 }}>
          {CONTACT.form.errorMessage}
        </p>
      )}
    </form>
  );
}
