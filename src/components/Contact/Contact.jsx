import { useState } from "react";
import emailjs from "@emailjs/browser";
import personalInfo from "../../data/personalInfo";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Toast({ status, onClose }) {
  if (!status) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-lg shadow-lg text-white transition-all duration-300 ${
        status === "success" ? "bg-green-600" : "bg-red-500"
      }`}
    >
      <span className="text-xl">{status === "success" ? "✅" : "❌"}</span>
      <p className="text-sm font-medium">
        {status === "success"
          ? "Mensagem enviada com sucesso! Responderei em breve."
          : "Algo correu mal. Tenta novamente."}
      </p>
      <button
        onClick={onClose}
        className="ml-2 text-white opacity-70 hover:opacity-100 transition-opacity text-lg"
      >
        ✕
      </button>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_surname: formData.surname,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", surname: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  }

  return (
    <>
      <Toast status={status} onClose={() => setStatus(null)} />

      <section id="contact" className="bg-white py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Contato
            </h2>
            <p className="text-[#4a4a7a] font-medium">— Fale comigo —</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Fale Comigo</h3>
              <p className="text-gray-600">
                Ficarei extremamente feliz em receber teu contato, esclarecer qualquer tipo
                de dúvida e estou sempre aberto a receber críticas e sugestões.{" "}
                <strong>Aguardo tua mensagem!</strong>
              </p>
              <div className="space-y-4 text-gray-700">
                <p>👤 <strong>Nome</strong><br />{personalInfo.name}</p>
                <p>🌐 <strong>Endereço</strong><br />{personalInfo.location}</p>
                <p>✉️ <strong>Email</strong><br />{personalInfo.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 text-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-[#4a4a7a]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 text-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-[#4a4a7a]"
                  />
                </div>
                <input
                  type="text"
                  name="surname"
                  placeholder="Sobrenome"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-[#4a4a7a]"
                />
                <textarea
                  name="message"
                  placeholder="Escrever...."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 text-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-[#4a4a7a]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4a4a7a] hover:bg-[#5a5a9a] disabled:opacity-50 text-white font-semibold py-3 rounded transition-colors duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;