/* ---------- DATA ---------- */
const HUES = {
  Bumi:{ label:'Bumi', character:'Grounded, natural, calm', mood:'Earth-inspired, steady', colors:['#8a6a4b','#b79b78','#5c4632'] },
  Bahari:{ label:'Bahari', character:'Fresh, cool, relaxed', mood:'Sea-inspired, easy-going', colors:['#3f6b70','#7fa9ac','#274a4e'] },
  Senja:{ label:'Senja', character:'Warm & expressive', mood:'Confident, energetic, approachable', colors:['#d3703f','#e79a63','#a4502a'] }
};
const PRODUCTS = [
  {id:'senja-tee',name:'Senja Tee',category:'T-Shirt',hue:'Senja',color:'Warm Orange',price:129000,desc:'An easy everyday piece in a warm hue.',material:'100% combed cotton, 24s',sizes:['S','M','L','XL'],shopee:'https://shopee.co.id/hiyue',rec:['bumi-pants','bahari-outer','senja-skirt']},
  {id:'bumi-pants',name:'Bhoemi Pants',category:'Pants',hue:'Bumi',color:'Clay Brown',price:189000,desc:'Relaxed straight-leg pants in a grounded earth tone.',material:'Cotton twill',sizes:['S','M','L','XL'],shopee:'https://shopee.co.id/hiyue',rec:['senja-tee','bahari-outer']},
  {id:'bahari-outer',name:'Bahari Outer',category:'Outerwear',hue:'Bahari',color:'Deep Teal',price:249000,desc:'Lightweight overshirt with a cool, breezy finish.',material:'Linen blend',sizes:['M','L','XL'],shopee:'https://shopee.co.id/hiyue',rec:['senja-tee','bumi-pants']},
  {id:'senja-skirt',name:'Senja Skirt',category:'Skirt',hue:'Senja',color:'Sunset Rust',price:159000,desc:'A-line midi skirt that carries the warmth of dusk.',material:'Rayon crepe',sizes:['S','M','L'],shopee:'https://shopee.co.id/hiyue',rec:['bahari-top','senja-tee']},
  {id:'bahari-top',name:'Bahari Top',category:'Top',hue:'Bahari',color:'Seafoam',price:139000,desc:'Soft cropped top with a fresh, cool character.',material:'Cotton jersey',sizes:['XS','S','M','L'],shopee:'https://shopee.co.id/hiyue',rec:['senja-skirt','bumi-pants']},
  {id:'bumi-jacket',name:'Bhoemi Jacket',category:'Outerwear',hue:'Bumi',color:'Terracotta',price:279000,desc:'Structured jacket grounded in natural earth tones.',material:'Cotton canvas',sizes:['S','M','L','XL'],shopee:'https://shopee.co.id/hiyue',rec:['bahari-top','senja-tee']},
  {id:'bahari-shirt',name:'Bahari Shirt',category:'Top',hue:'Bahari',color:'Aquamarine',price:279000,desc:'Kemeja bintang-bintang.',material:'American Drill',sizes:['S','M','L','XL'],shopee:'https://shopee.co.id/hiyue',rec:['bahari-top','senja-tee']}
];
const fmt = p => 'Rp' + p.toLocaleString('id-ID');
const byId = id => PRODUCTS.find(p=>p.id===id);
const hueColor = h => HUES[h].colors[0];

/* ---------- RENDER HELPERS ---------- */
function productCard(p){
  return `<a href="#/product/${p.id}" class="pcard">
    <div class="thumb" style="background:${hueColor(p.hue)}">${p.name}</div>
    <div class="pinfo">
      <div class="name">${p.name}</div>
      <div class="meta">${p.color} · ${p.hue}</div>
      <div class="price">${fmt(p.price)}</div>
    </div>
  </a>`;
}

function renderHome(){
  return `
  <section class="hero"><div class="wrap hero-grid">
    <div>
      <span class="tag">HIYUE</span>
      <h1 class="h1">Hi to Your<br>New Hue</h1>
      <p class="muted" style="margin-top:18px;max-width:440px;font-size:1.05rem">HIYUE helps you discover colors and create outfits you feel genuinely confident wearing — no guesswork, just your hue.</p>
      <div class="cta-row">
        <a href="#/shop" class="btn btn-primary">Explore Collection</a>
        <a href="#/hue" class="btn btn-outline">Find Your Hue</a>
      </div>
    </div>
    <div class="hero-visual"></div>
  </div></section>

  <section><div class="wrap" style="max-width:640px">
    <h2 class="h2">About HIYUE</h2>
    <p class="muted" style="margin-top:14px;font-size:1.05rem">HIYUE is here to make choosing and combining colors easier, so you can express yourself confidently through what you wear.</p>
  </div></section>

  <section><div class="wrap">
    <div class="section-head"><h2 class="h2">Why HIYUE?</h2></div>
    <div class="cards">
      <div class="card"><div class="ic">◐</div><b>Easy Color Recognition</b><p class="muted" style="margin-top:6px">Clear color labels and visual guidance.</p></div>
      <div class="card"><div class="ic">✚</div><b>Mix &amp; Match</b><p class="muted" style="margin-top:6px">Discover combinations between products.</p></div>
      <div class="card"><div class="ic">✦</div><b>Express Yourself</b><p class="muted" style="margin-top:6px">Clothing designed for personal expression.</p></div>
      <div class="card"><div class="ic">◎</div><b>Inclusive Styling</b><p class="muted" style="margin-top:6px">Color-based styling, made accessible.</p></div>
    </div>
  </div></section>

  <section><div class="wrap">
    <div class="section-head"><h2 class="h2">Featured Collection</h2></div>
    <div class="pgrid">${PRODUCTS.slice(0,4).map(productCard).join('')}</div>
  </div></section>

  <section><div class="wrap">
    <div class="section-head"><h2 class="h2">How HIYUE Works</h2></div>
    <div class="steps">
      <div><div class="step-num">01</div><b>Explore</b><p class="muted" style="margin-top:6px">Discover clothing based on colors and styles.</p></div>
      <div><div class="step-num">02</div><b>Find Your Hue</b><p class="muted" style="margin-top:6px">Understand the color and suitable combinations.</p></div>
      <div><div class="step-num">03</div><b>Style Your Way</b><p class="muted" style="margin-top:6px">Mix, match, and get your pieces on Shopee.</p></div>
    </div>
  </div></section>

  <section style="text-align:center"><div class="wrap">
    <h2 class="h2">Ready to find your hue?</h2>
    <div style="margin-top:22px"><a href="#/shop" class="btn btn-primary">Explore HIYUE</a></div>
  </div></section>`;
}

let shopState = {cat:'All',color:'All',sort:'Recommended'};
function renderShop(){
  const cats = ['All',...new Set(PRODUCTS.map(p=>p.category))];
  const colors = ['All',...new Set(PRODUCTS.map(p=>p.hue))];
  let list = PRODUCTS.filter(p => (shopState.cat==='All'||p.category===shopState.cat) && (shopState.color==='All'||p.hue===shopState.color));
  if(shopState.sort==='Price: Low to High') list = list.slice().sort((a,b)=>a.price-b.price);
  if(shopState.sort==='Price: High to Low') list = list.slice().sort((a,b)=>b.price-a.price);
  if(shopState.sort==='Newest') list = list.slice().reverse();
  return `<section><div class="wrap">
    <div class="section-head"><h2 class="h2">Shop HIYUE</h2><p class="muted">Every piece, in its hue.</p></div>
    <div class="shop-layout">
      <div>
        <div class="filter-group"><h4>Category</h4><div class="chip-row">${cats.map(c=>`<button class="chip ${shopState.cat===c?'active':''}" data-cat="${c}">${c}</button>`).join('')}</div></div>
        <div class="filter-group"><h4>Hue / Color</h4><div class="chip-row">${colors.map(c=>`<button class="chip ${shopState.color===c?'active':''}" data-color="${c}">${c}</button>`).join('')}</div></div>
      </div>
      <div>
        <div class="shop-topbar">
          <span class="muted">${list.length} products</span>
          <select id="sortSel">
            ${['Recommended','Newest','Price: Low to High','Price: High to Low'].map(s=>`<option ${shopState.sort===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="pgrid">${list.map(productCard).join('') || '<p class="muted">No products match these filters.</p>'}</div>
      </div>
    </div>
  </div></section>`;
}

function renderProduct(id){
  const p = byId(id);
  if(!p) return `<section class="wrap"><p>Product not found. <a href="#/shop">Back to shop</a></p></section>`;
  const h = HUES[p.hue];
  const recs = p.rec.map(byId).filter(Boolean);
  return `<section><div class="wrap">
    <p class="muted" style="margin-bottom:20px"><a href="#/shop">Shop</a> / ${p.name}</p>
    <div class="pd-layout">
      <div>
        <div class="pd-main" style="background:${hueColor(p.hue)}">${p.name}</div>
        <div class="pd-thumbs">${h.colors.map(c=>`<div style="background:${c}"></div>`).join('')}</div>
      </div>
      <div>
        <span class="pill">${p.category}</span>
        <h1 class="h2" style="margin-top:10px">${p.name}</h1>
        <p class="muted" style="margin-top:4px">${p.color} · ${p.hue}</p>
        <p style="font-size:1.5rem;font-weight:800;margin-top:12px">${fmt(p.price)}</p>
        <p style="margin-top:14px">${p.desc}</p>

        <div class="detail-block"><h4>Available Sizes</h4>
          <div class="size-row">${p.sizes.map(s=>`<div class="size-box">${s}</div>`).join('')}</div>
        </div>
        <div class="detail-block"><h4>Material</h4><p>${p.material}</p></div>
        <div class="detail-block"><h4>Size Guide</h4><p class="muted">Standard Indonesian sizing — true to size, relaxed fit.</p></div>

        <div class="hue-box">
          <b>Find Your Hue</b>
          <div class="row"><span class="muted">Hue</span><span>${h.label}</span></div>
          <div class="row"><span class="muted">Color Character</span><span>${h.character}</span></div>
          <div class="row"><span class="muted">Mood</span><span>${h.mood}</span></div>
        </div>

        <div style="margin-top:24px">
          <a href="${p.shopee}" target="_blank" rel="noopener" class="btn btn-shopee">Buy on Shopee →</a>
          <p class="muted" style="text-align:center;margin-top:10px;font-size:.85rem">Ready to make it yours? Complete your purchase through our official Shopee store.</p>
        </div>
      </div>
    </div>

    <div style="margin-top:56px">
      <div class="section-head"><h2 class="h2">Complete Your Hue</h2><p class="muted">You might pair it with</p></div>
      <div class="pgrid">${recs.map(productCard).join('') || '<p class="muted">No pairings yet.</p>'}</div>
    </div>
  </div></section>`;
}

function renderHue(active){
  active = active || 'Senja';
  const h = HUES[active];
  return `<section><div class="wrap">
    <div class="section-head"><h2 class="h2">Find Your Hue</h2><p class="muted">Three color families, one confident wardrobe.</p></div>
    <div class="hue-tabs">${Object.keys(HUES).map(k=>`<button class="hue-tab ${k===active?'active':''}" style="${k===active?`background:${hueColor(k)};border-color:${hueColor(k)}`:''}" data-hue="${k}">${k}</button>`).join('')}</div>
    <div class="hue-hero" style="background:linear-gradient(135deg, ${h.colors[0]}, ${h.colors[2]})">
      <h2 style="font-size:2rem;font-weight:800">${h.label}</h2>
      <p style="margin-top:8px;opacity:.95">${h.character} — ${h.mood}</p>
      <div class="swatches">${h.colors.map(c=>`<div class="swatch" style="background:${c}"></div>`).join('')}</div>
    </div>
    <div class="section-head" style="margin-top:32px"><h3 style="font-weight:800">Example Products in ${h.label}</h3></div>
    <div class="pgrid">${PRODUCTS.filter(p=>p.hue===active).map(productCard).join('')}</div>
    <div style="margin-top:30px"><a href="#/shop" class="btn btn-primary">Explore Products</a></div>
  </div></section>`;
}

function renderAbout(){
  return `<section><div class="wrap" style="max-width:680px">
    <h2 class="h2">Our Story</h2>
    <p style="margin-top:18px;font-size:1.1rem">HIYUE was created from a simple problem: sometimes choosing clothes is easy, but choosing colors isn't.</p>
    <p class="muted" style="margin-top:16px">We wanted color-based styling to feel more accessible, more practical, and more enjoyable — so that anyone, regardless of how confident they feel about color, can express themselves through fashion.</p>
    <p class="muted" style="margin-top:16px">Every HIYUE piece belongs to one of three hues — Bumi, Bahari, or Senja — each with its own character, mood, and pairing logic, so combining outfits never feels like guesswork again.</p>
    <div style="margin-top:28px"><a href="#/hue" class="btn btn-outline">Discover the Hues</a></div>
  </div></section>`;
}

/* ---------- ROUTER ---------- */
const app = document.getElementById('app');
function route(){
  const hash = location.hash.replace('#','') || '/';
  document.querySelectorAll('.navlinks a').forEach(a=>a.classList.toggle('active', a.getAttribute('data-r')===hash || (a.getAttribute('data-r')==='/shop'&&hash.startsWith('/product'))));
  document.getElementById('navlinks').classList.remove('open');
  if(hash==='/' ) app.innerHTML = renderHome();
  else if(hash==='/shop') { app.innerHTML = renderShop(); bindShop(); }
  else if(hash.startsWith('/product/')) app.innerHTML = renderProduct(hash.split('/')[2]);
  else if(hash.startsWith('/hue')) { app.innerHTML = renderHue(hash.split('/')[2]); bindHue(); }
  else if(hash==='/about') app.innerHTML = renderAbout();
  else app.innerHTML = `<section class="wrap"><p>Page not found. <a href="#/">Go home</a></p></section>`;
  window.scrollTo(0,0);
  observeReveals();
}
function bindShop(){
  document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{shopState.cat=b.dataset.cat;route();window.location.hash='/shop';});
  document.querySelectorAll('[data-color]').forEach(b=>b.onclick=()=>{shopState.color=b.dataset.color;route();window.location.hash='/shop';});
  const sel = document.getElementById('sortSel');
  if(sel) sel.onchange = ()=>{shopState.sort=sel.value; app.innerHTML=renderShop(); bindShop();};
}
function bindHue(){
  document.querySelectorAll('[data-hue]').forEach(b=>b.onclick=()=>{location.hash='/hue/'+b.dataset.hue;});
}
function observeReveals(){
  document.querySelectorAll('.pcard,.card').forEach(el=>el.classList.add('reveal'));
  const io = new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
document.getElementById('hambBtn').onclick = ()=>document.getElementById('navlinks').classList.toggle('open');
window.addEventListener('hashchange', route);
route();
