import { useState } from "react";
import personalInfo from "../../data/personalInfo";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    // aqui futuramente ligamos a um serviço de email
    console.log(formData);
    setTimeout(() => setIsSubmitting(false), 2000);
  }

  return (
    <section id="contact" className="bg-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Entre em <span className="text-purple-400">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informações */}
          <div className="text-gray-400 space-y-4">
            <p>📧 {personalInfo.email}</p>
            <p>📍 {personalInfo.location}</p>
            <a href={personalInfo.linkedin} target="_blank" className="block hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" className="block hover:text-purple-400 transition-colors">GitHub</a>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="surname"
              placeholder="Sobrenome"
              value={formData.surname}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;