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
    console.log(formData);
    setTimeout(() => setIsSubmitting(false), 2000);
  }

  return (
    <section id="contact" className="bg-white pt-12 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Contato
          </h2>
          <p className="text-[#4a4a7a] font-medium">— Fale comigo —</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informações */}
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

          {/* Formulário */}
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
                  className="w-full border border-gray-300 text-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-[#4a4a7a]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
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
                className="w-full border border-gray-300 text-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-[#4a4a7a]"
              />
             <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4a4a7a] hover:bg-[#5a5a9a] disabled:opacity-50 text-white font-semibold py-3 transition-colors duration-300 rounded mb-8"
                >
                {isSubmitting ? "Enviando..." : "Enviar"}
             </button>
            </form>
          </div>

        </div>
      </div>
    <div className="overflow-hidden leading-none block mb-[-1px]">
  <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "101%", marginLeft: "-0.5%" }}>
    <path fill="#000000" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
  </svg>
</div>
    </section>
  );
}

export default Contact;