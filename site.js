/* ============================================================
   CONFIGURAÇÕES DA IMÓVEIS 10 — altere aqui e vale para o site todo
   ============================================================ */
const CONFIG = {
  whatsapp: "5519997450292",
  whatsappTexto: "(19) 99745-0292",
  email: "",                       // ex.: "contato@imoveis10.com.br"  (vazio = não aparece)
  instagram: "https://www.instagram.com/imoveis10.com.br/",
  facebook: "https://www.facebook.com/imoveis10.Cardoso/",
};

/* ---------- Ícones (compartilhados entre as páginas) ---------- */
document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.33-8.04"/></symbol>
  <symbol id="i-ig" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88"/></symbol>
  <symbol id="i-fb" viewBox="0 0 24 24"><path fill="currentColor" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></g></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g></symbol>
  <symbol id="i-area" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></g></symbol>
  <symbol id="i-bed" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></g></symbol>
  <symbol id="i-bath" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.68 3 4 3.68 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M2 12h20M7 19v2M17 19v2"/></g></symbol>
  <symbol id="i-car" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 6H8.3a2 2 0 0 0-1.6.8L4 10l-2.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></g></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 15 8.5l7 .9-5.1 4.8 1.3 7-6.2-3.4-6.2 3.4 1.3-7L2 9.4l7-.9z"/></g></symbol>
  <symbol id="i-key" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/></g></symbol>
  <symbol id="i-home" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></g></symbol>
  <symbol id="i-swap" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></g></symbol>
  <symbol id="i-brief" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></symbol>
  <symbol id="i-left" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6"/></symbol>
  <symbol id="i-right" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" d="M18 6 6 18M6 6l12 12"/></symbol>
  <symbol id="i-share" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></g></symbol>
</svg>`);

/* ---------- Helpers dos imóveis ---------- */
const IM = (window.IMOVEIS || []).map(enrich);

function enrich(i) {
  const n = i.nome.toLowerCase();
  let tipo = "apartamento", rotulo = "Apartamento";
  if (n.startsWith("casa de condom")) { tipo = "casa"; rotulo = "Casa em condomínio"; }
  else if (n.startsWith("sobrado")) { tipo = "casa"; rotulo = "Sobrado"; }
  else if (n.startsWith("casa")) { tipo = "casa"; rotulo = "Casa"; }
  else if (n.startsWith("terreno")) { tipo = "terreno"; rotulo = "Terreno"; }
  else if (n.startsWith("galp")) { tipo = "comercial"; rotulo = "Galpão"; }
  else if (n.startsWith("sala")) { tipo = "comercial"; rotulo = "Sala comercial"; }
  else if (n.startsWith("im")) { tipo = "comercial"; rotulo = "Imóvel comercial"; }
  const cm = i.nome.match(/,\s*([^,]+?)\s*-\s*SP\s*$/i);
  const cap = s => s.toLowerCase().replace(/(^|[\s(-])(\p{L})/gu, (m, a, b) => a + b.toUpperCase())
    .replace(/ (De|Do|Da|Dos|Das) /g, m => m.toLowerCase()).replace(/\bCil\b/, "CIL");
  const cidade = cap(cm ? cm[1].trim() : "Limeira");
  const bairro = cap(i.bairro || (n.includes("santa cruz") ? "Centro" : ""));
  const ops = [];
  if (i.venda) ops.push("venda");
  if (i.aluguel || (n.includes("loca") || n.includes("alugar"))) ops.push("aluguel");
  const titulo = rotulo + (i.quartos ? ` com ${i.quartos} quarto${i.quartos > 1 ? "s" : ""}` : (i.area ? ` de ${i.area} m²` : ""));
  return { ...i, tipo, rotulo, cidade, bairro, ops, titulo };
}

const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
function precoPrincipal(i) {
  if (i.venda) return { label: i.ops.includes("aluguel") ? "Venda" : "Valor", valor: brl(i.venda), extra: i.aluguel ? `ou ${brl(i.aluguel)}/mês` : (i.ops.includes("aluguel") ? "locação: consulte" : "") };
  if (i.aluguel) return { label: "Aluguel", valor: brl(i.aluguel) + "/mês", extra: "" };
  return { label: "Valor", valor: "Consulte", extra: "" };
}
function tagHTML(i) {
  if (i.ops.length > 1) return '<span class="tag">Venda ou locação</span>';
  if (i.ops[0] === "aluguel") return '<span class="tag rent">Para alugar</span>';
  return '<span class="tag">À venda</span>';
}
function featsHTML(i) {
  const f = [];
  if (i.area) f.push(`<span><svg><use href="#i-area"/></svg>${i.area} m²</span>`);
  if (i.quartos) f.push(`<span><svg><use href="#i-bed"/></svg>${i.quartos} quarto${i.quartos > 1 ? "s" : ""}</span>`);
  if (i.banheiros) f.push(`<span><svg><use href="#i-bath"/></svg>${i.banheiros} banh.</span>`);
  if (i.vagas) f.push(`<span><svg><use href="#i-car"/></svg>${i.vagas} vaga${i.vagas > 1 ? "s" : ""}</span>`);
  return f.join("");
}
const linkImovel = i => `imovel.html?id=${i.id}`;
const waURL = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const waImovel = i => waURL(`Olá! Vi no site o imóvel "${i.titulo}" (${i.bairro}, ${i.cidade}) – código ${i.id} – e gostaria de mais informações.`);

function cardHTML(i) {
  const p = precoPrincipal(i);
  return `<article class="card" data-tipo="${i.tipo}" data-op="${i.ops.join(" ")}">
    <a class="card-img" href="${linkImovel(i)}"><img src="${i.fotos[0]}" alt="${i.titulo} – ${i.bairro}" loading="lazy">${tagHTML(i)}<span class="photo-count">${i.fotos.length} fotos</span></a>
    <div class="card-body">
      <span class="card-loc">${i.bairro} · ${i.cidade}</span>
      <h3><a href="${linkImovel(i)}">${i.titulo}</a></h3>
      <div class="feats">${featsHTML(i)}</div>
      <div class="price-row"><div class="price"><small>${p.label}</small><strong>${p.valor}</strong>${p.extra ? `<em>${p.extra}</em>` : ""}</div></div>
      <div class="card-actions">
        <a class="btn btn-outline" href="${linkImovel(i)}">Ver detalhes<svg><use href="#i-arrow"/></svg></a>
        <a class="btn btn-wa btn-icon" href="${waImovel(i)}" target="_blank" rel="noopener" aria-label="Falar sobre este imóvel no WhatsApp"><svg><use href="#i-wa"/></svg></a>
      </div>
    </div></article>`;
}

/* Imóveis semelhantes: mesmo grupo (apto / casa / terreno / comercial),
   pontuando mesma operação, mesmo bairro, mesma cidade e preço parecido. */
function semelhantes(alvo, qtd = 4) {
  const valor = x => x.venda || (x.aluguel ? x.aluguel * 200 : 0);
  const va = valor(alvo);
  return IM.filter(x => x.id !== alvo.id && x.tipo === alvo.tipo)
    .map(x => {
      let s = 0;
      if (x.ops.some(o => alvo.ops.includes(o))) s += 4;
      if (x.bairro && x.bairro === alvo.bairro) s += 3;
      if (x.cidade === alvo.cidade) s += 2;
      const vx = valor(x);
      if (va && vx) s += 3 * Math.max(0, 1 - Math.abs(vx - va) / va);
      if (x.rotulo === alvo.rotulo) s += 1;
      return { x, s };
    })
    .sort((a, b) => b.s - a.s).slice(0, qtd).map(o => o.x);
}

/* ---------- Comum a todas as páginas ---------- */
function preencherContatos() {
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = waURL(a.dataset.wa || "Olá, vim pelo site da Imóveis 10!");
    a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-ig]").forEach(a => { a.href = CONFIG.instagram; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-fb]").forEach(a => { a.href = CONFIG.facebook; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-email]").forEach(el => {
    if (!CONFIG.email) { el.style.display = "none"; return; }
    const a = el.tagName === "A" ? el : el.querySelector("a");
    if (a) { a.href = "mailto:" + CONFIG.email; if (!a.children.length) a.textContent = CONFIG.email; }
  });
  document.querySelectorAll("[data-email-text]").forEach(el => el.textContent = CONFIG.email);
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
}

function iniciarLayout() {
  const header = document.querySelector("header");
  if (header && !header.classList.contains("solid")) {
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 40);
    addEventListener("scroll", onScroll); onScroll();
  }
  const menu = document.getElementById("menu"), burger = document.getElementById("burger");
  if (menu && burger) {
    burger.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}
