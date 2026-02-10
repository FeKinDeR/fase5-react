import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "agrotech_mensagens";

function loadMessages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveMessages(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
}

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [messages, setMessages] = useState(() => loadMessages());

  const chars = useMemo(() => form.mensagem.length, [form.mensagem]);

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    setStatus("");
  }

  function validate() {
    const next = {};
    if (!form.nome.trim()) next.nome = "Informe seu nome completo.";
    if (!form.email.trim()) next.email = "Informe seu e-mail.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "E-mail inválido.";
    if (!form.mensagem.trim()) next.mensagem = "Escreva uma mensagem.";
    if (form.mensagem.length > 500) next.mensagem = "Máximo de 500 caracteres.";
    return next;
  }

  function onSubmit(e) {
    e.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const id =
      (typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID()) ||
      String(Date.now());

    const newItem = {
      id,
      nome: form.nome.trim(),
      email: form.email.trim(),
      mensagem: form.mensagem.trim(),
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [newItem, ...prev]);
    setStatus("Mensagem enviada e salva no histórico ✅");
    setForm({ nome: "", email: "", mensagem: "" });
  }

  function removeOne(id) {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }

  function clearAll() {
    setMessages([]);
    setStatus("Histórico limpo ✅");
  }

  return (
    <>
      <section className="Blank" style={{ height: 50 }} />

      <section className="contato">
        <h2>Fale Conosco</h2>

        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="Nome">Nome Completo</label>
            <input
              id="Nome"
              name="nome"
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={form.nome}
              onChange={onChange}
            />
            {errors.nome && <div className="error">{errors.nome}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={onChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              required
              maxLength={500}
              placeholder="Digite sua mensagem...(Max 500 caracteres)"
              value={form.mensagem}
              onChange={onChange}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <small>{chars}/500</small>
            </div>
            {errors.mensagem && <div className="error">{errors.mensagem}</div>}
          </div>

          <button type="submit">Enviar</button>
          {status && <p style={{ marginTop: 10 }}>{status}</p>}
        </form>

        <p>
          Envie sugestões ou dúvidas para: <strong>contato@fiapgrupo.com</strong>
        </p>

        <div style={{ marginTop: 28 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>Mensagens recebidas</h3>

            <button
              type="button"
              onClick={clearAll}
              disabled={messages.length === 0}
              style={{ opacity: messages.length === 0 ? 0.6 : 1 }}
            >
              Limpar tudo
            </button>
          </div>

          {messages.length === 0 ? (
            <p style={{ marginTop: 10, opacity: 0.85 }}>
              Ainda não há mensagens salvas.
            </p>
          ) : (
            <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
              {messages.map((m) => (
                <div
                  key={m.id}
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div>
                      <strong>{m.nome}</strong>{" "}
                      <span style={{ opacity: 0.85 }}>({m.email})</span>
                      <div style={{ fontSize: 12, opacity: 0.75 }}>
                        {formatDate(m.createdAt)}
                      </div>
                    </div>

                    <button type="button" onClick={() => removeOne(m.id)}>
                      Excluir
                    </button>
                  </div>

                  <p style={{ marginTop: 10, whiteSpace: "pre-wrap" }}>
                    {m.mensagem}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
