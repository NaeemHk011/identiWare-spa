<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>identiWARE — Own Your Med Spa</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,600&family=Nunito:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --pink:#E8547A;
  --pink2:#F07A95;
  --pink-light:#FADADD;
  --pink-pale:#FFF0F3;
  --rose:#F9EEF0;
  --blush:#FCF5F6;
  --gold:#C9943A;
  --white:#FFFFFF;
  --text:#3A2030;
  --text2:#7A5868;
  --text3:#B89AA8;
  --serif:'Playfair Display',Georgia,serif;
  --sans:'Nunito',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--white);color:var(--text);font-family:var(--sans);font-weight:400;line-height:1.7;overflow-x:hidden}

/* ─── NAV ─── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;background:rgba(255,255,255,0.96);backdrop-filter:blur(12px);box-shadow:0 2px 20px rgba(232,84,122,0.08);padding:0 5%}
.nav-inner{max-width:1300px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:75px}
.nav-brand{display:flex;align-items:center;gap:12px}
.nav-brand-icon{width:40px;height:40px;background:linear-gradient(135deg,var(--pink),var(--pink2));border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--serif);font-size:1rem;font-style:italic}
.nav-brand-text{font-family:var(--serif);font-size:1.4rem;font-weight:500;color:var(--text)}
.nav-brand-text span{color:var(--pink)}
.nav-brand-by{font-size:0.6rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--text3);display:block;margin-top:-2px}
.nav-links{display:flex;gap:2rem;align-items:center}
.nav-links a{font-size:0.78rem;font-weight:500;color:var(--text2);text-decoration:none;letter-spacing:0.05em;transition:color 0.3s}
.nav-links a:hover{color:var(--pink)}
.nav-btn{background:linear-gradient(135deg,var(--pink),#C94070);color:#fff;padding:0.6rem 1.8rem;border-radius:30px;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-decoration:none;box-shadow:0 6px 20px rgba(232,84,122,0.35);transition:all 0.3s}
.nav-btn:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,84,122,0.45)}

/* ─── HERO ─── */
.hero{min-height:100vh;padding-top:75px;display:grid;grid-template-columns:1fr 1fr;position:relative;overflow:hidden}
.hero-bg-deco{position:absolute;top:-100px;right:-100px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(232,84,122,0.08) 0%,transparent 70%);pointer-events:none}
.hero-bg-deco2{position:absolute;bottom:-150px;left:-100px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(249,190,200,0.15) 0%,transparent 70%);pointer-events:none}
.hero-left{display:flex;flex-direction:column;justify-content:center;padding:5rem 4rem 5rem 8%;position:relative;z-index:2}
.hero-tag{display:inline-flex;align-items:center;gap:8px;background:var(--pink-pale);border:1px solid rgba(232,84,122,0.2);border-radius:30px;padding:0.45rem 1.2rem;font-size:0.7rem;font-weight:600;color:var(--pink);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:1.8rem;width:fit-content;opacity:0;animation:fadeUp 0.6s 0.2s forwards}
.hero-tag-dot{width:7px;height:7px;background:var(--pink);border-radius:50%;animation:blink 2s infinite}
.hero-h1{font-family:var(--serif);font-size:clamp(2.8rem,4.5vw,5rem);font-weight:700;line-height:1.08;color:var(--text);margin-bottom:1.2rem;opacity:0;animation:fadeUp 0.7s 0.35s forwards}
.hero-h1 span{color:var(--pink);font-style:italic}
.hero-h1 .line-thin{font-weight:400;font-size:0.85em}
.hero-desc{font-size:1rem;color:var(--text2);line-height:1.85;max-width:460px;margin-bottom:2.5rem;opacity:0;animation:fadeUp 0.7s 0.5s forwards}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:3rem;opacity:0;animation:fadeUp 0.7s 0.65s forwards}
.btn-pink{background:linear-gradient(135deg,var(--pink),#C94070);color:#fff;padding:0.9rem 2.4rem;border-radius:35px;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-decoration:none;box-shadow:0 8px 24px rgba(232,84,122,0.4);transition:all 0.3s;display:inline-block}
.btn-pink:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(232,84,122,0.5)}
.btn-ghost{background:transparent;border:2px solid var(--pink);color:var(--pink);padding:0.9rem 2.4rem;border-radius:35px;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-decoration:none;transition:all 0.3s;display:inline-block}
.btn-ghost:hover{background:var(--pink-pale)}
.hero-stats{display:flex;gap:2.5rem;opacity:0;animation:fadeUp 0.7s 0.8s forwards}
.hero-stat .num{font-family:var(--serif);font-size:2rem;font-weight:700;color:var(--pink);line-height:1}
.hero-stat .lbl{font-size:0.7rem;color:var(--text3);margin-top:2px;letter-spacing:0.05em}
.hero-stat-div{width:1px;background:rgba(232,84,122,0.2);align-self:stretch}
.hero-right{position:relative;overflow:hidden}
.hero-img-main{width:100%;height:100%;object-fit:cover;display:block}
.hero-img-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(255,255,255,0.3) 0%,transparent 40%)}
.hero-float-card{position:absolute;bottom:3.5rem;left:-1.5rem;background:#fff;border-radius:16px;padding:1.2rem 1.8rem;box-shadow:0 16px 48px rgba(232,84,122,0.18);min-width:210px;animation:floatUp 3s ease-in-out infinite}
.hfc-icon{width:42px;height:42px;background:var(--pink-pale);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;margin-bottom:0.7rem}
.hfc-title{font-size:0.78rem;font-weight:700;color:var(--text);margin-bottom:0.2rem}
.hfc-sub{font-size:0.7rem;color:var(--text3)}
.hero-float-card2{position:absolute;top:4rem;right:2rem;background:#fff;border-radius:16px;padding:1rem 1.5rem;box-shadow:0 12px 40px rgba(232,84,122,0.15);animation:floatUp 3s 1.5s ease-in-out infinite}
.hfc2-stars{color:var(--pink);font-size:0.9rem;margin-bottom:0.3rem}
.hfc2-text{font-size:0.72rem;font-weight:600;color:var(--text)}
.hfc2-sub{font-size:0.65rem;color:var(--text3)}

/* ─── WAVE ─── */
.wave{overflow:hidden;line-height:0;margin-top:-2px}
.wave svg{display:block;width:100%}

/* ─── SERVICES SECTION ─── */
.services-sec{background:var(--blush);padding:7rem 5%}
.sec-head{text-align:center;max-width:600px;margin:0 auto 4.5rem}
.sec-tag{display:inline-block;background:var(--pink-pale);color:var(--pink);font-size:0.65rem;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;padding:0.4rem 1.2rem;border-radius:20px;margin-bottom:1rem}
.sec-h2{font-family:var(--serif);font-size:clamp(1.9rem,3.5vw,3rem);font-weight:700;color:var(--text);line-height:1.2;margin-bottom:1rem}
.sec-h2 em{color:var(--pink);font-style:italic}
.sec-p{font-size:0.9rem;color:var(--text2);line-height:1.85}
.services-grid{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
.srv-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(232,84,122,0.08);transition:transform 0.35s,box-shadow 0.35s;cursor:default}
.srv-card:hover{transform:translateY(-8px);box-shadow:0 16px 48px rgba(232,84,122,0.18)}
.srv-img{height:220px;overflow:hidden;position:relative}
.srv-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s}
.srv-card:hover .srv-img img{transform:scale(1.08)}
.srv-num-badge{position:absolute;top:1rem;left:1rem;background:linear-gradient(135deg,var(--pink),#C94070);color:#fff;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700}
.srv-body{padding:1.8rem}
.srv-title{font-family:var(--serif);font-size:1.2rem;font-weight:600;color:var(--text);margin-bottom:0.6rem}
.srv-text{font-size:0.82rem;color:var(--text2);line-height:1.7}
.srv-link{display:inline-flex;align-items:center;gap:6px;color:var(--pink);font-size:0.75rem;font-weight:600;margin-top:1rem;text-decoration:none;letter-spacing:0.05em}
.srv-link-arr{transition:transform 0.3s}
.srv-card:hover .srv-link-arr{transform:translateX(4px)}

/* ─── WHO SECTION ─── */
.who-sec{padding:7rem 5%;background:#fff}
.who-inner{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.who-img-wrap{position:relative}
.who-img-main{width:100%;border-radius:24px;overflow:hidden;aspect-ratio:4/5}
.who-img-main img{width:100%;height:100%;object-fit:cover;display:block}
.who-img-accent{position:absolute;bottom:2rem;right:-2rem;width:55%;border-radius:16px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,0.15);border:4px solid #fff}
.who-img-accent img{width:100%;display:block}
.who-badge-num{position:absolute;top:-1.5rem;left:2rem;background:linear-gradient(135deg,var(--pink),#C94070);color:#fff;border-radius:16px;padding:1rem 1.5rem;text-align:center;box-shadow:0 8px 28px rgba(232,84,122,0.4)}
.who-badge-num .n{font-family:var(--serif);font-size:2.2rem;font-weight:700;line-height:1;display:block}
.who-badge-num .l{font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;display:block;margin-top:2px}
.who-cards{display:flex;flex-direction:column;gap:1.2rem;margin-top:2rem}
.who-card{display:flex;gap:1.2rem;align-items:flex-start;background:var(--blush);border-radius:16px;padding:1.5rem;transition:box-shadow 0.3s,transform 0.3s}
.who-card:hover{transform:translateX(6px);box-shadow:0 8px 28px rgba(232,84,122,0.12)}
.who-card-icon{width:50px;height:50px;min-width:50px;background:linear-gradient(135deg,var(--pink-pale),#FADADD);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.4rem}
.who-card-title{font-size:0.9rem;font-weight:700;color:var(--text);margin-bottom:0.3rem}
.who-card-text{font-size:0.8rem;color:var(--text2);line-height:1.7}

/* ─── PROCESS ─── */
.process-sec{background:var(--rose);padding:7rem 5%}
.process-inner{max-width:1300px;margin:0 auto}
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-top:4rem;position:relative}
.process-steps::before{content:'';position:absolute;top:60px;left:12.5%;right:12.5%;height:2px;background:linear-gradient(to right,var(--pink-light),var(--pink),var(--pink-light));z-index:0}
.pstep{text-align:center;position:relative;z-index:1}
.pstep-circle{width:120px;height:120px;border-radius:50%;overflow:hidden;margin:0 auto 1.5rem;border:4px solid #fff;box-shadow:0 8px 28px rgba(232,84,122,0.2);position:relative}
.pstep-circle img{width:100%;height:100%;object-fit:cover;display:block}
.pstep-num{position:absolute;bottom:-6px;right:-6px;width:32px;height:32px;background:linear-gradient(135deg,var(--pink),#C94070);border-radius:50%;border:3px solid #fff;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:800;color:#fff}
.pstep-title{font-family:var(--serif);font-size:1rem;font-weight:600;color:var(--text);margin-bottom:0.5rem}
.pstep-text{font-size:0.78rem;color:var(--text2);line-height:1.7;padding:0 0.5rem}

/* ─── BRAND IDENTITY ─── */
.brand-sec{padding:7rem 5%;background:#fff;overflow:hidden}
.brand-inner{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.brand-img-col{position:relative}
.brand-img-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.brand-img-grid .bi1{border-radius:20px;overflow:hidden;aspect-ratio:3/4;grid-row:span 2}
.brand-img-grid .bi2,.brand-img-grid .bi3{border-radius:20px;overflow:hidden;aspect-ratio:4/3}
.brand-img-grid img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s}
.brand-img-grid div:hover img{transform:scale(1.05)}
.brand-float{position:absolute;bottom:-1.5rem;right:1rem;background:#fff;border-radius:16px;padding:1.2rem 1.6rem;box-shadow:0 12px 40px rgba(232,84,122,0.18);display:flex;align-items:center;gap:1rem}
.brand-float-icon{width:44px;height:44px;background:var(--pink-pale);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem}
.brand-float-text .t{font-weight:700;font-size:0.82rem;color:var(--text)}
.brand-float-text .s{font-size:0.7rem;color:var(--text3)}
.brand-pills{display:flex;flex-wrap:wrap;gap:0.7rem;margin-top:2rem}
.brand-pill{background:var(--blush);border:1px solid rgba(232,84,122,0.2);border-radius:24px;padding:0.5rem 1.2rem;font-size:0.75rem;font-weight:600;color:var(--text2)}
.brand-pill:hover{background:var(--pink-pale);color:var(--pink);border-color:var(--pink)}

/* ─── SPECIAL OFFER / CTA BANNER ─── */
.offer-banner{background:linear-gradient(135deg,var(--pink) 0%,#C94070 50%,#A03058 100%);padding:5rem 5%;position:relative;overflow:hidden;text-align:center}
.offer-banner::before{content:'';position:absolute;top:-80px;left:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.06)}
.offer-banner::after{content:'';position:absolute;bottom:-100px;right:-60px;width:350px;height:350px;border-radius:50%;background:rgba(255,255,255,0.05)}
.ob-inner{position:relative;z-index:2;max-width:700px;margin:0 auto}
.ob-tag{display:inline-block;background:rgba(255,255,255,0.18);color:#fff;font-size:0.65rem;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;padding:0.4rem 1.2rem;border-radius:20px;margin-bottom:1.5rem}
.ob-h2{font-family:var(--serif);font-size:clamp(2rem,4vw,3.5rem);font-weight:700;color:#fff;line-height:1.15;margin-bottom:1.2rem}
.ob-h2 em{font-style:italic;opacity:0.88}
.ob-p{font-size:0.95rem;color:rgba(255,255,255,0.82);line-height:1.8;margin-bottom:2.5rem}
.btn-white{background:#fff;color:var(--pink);padding:1rem 3rem;border-radius:35px;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-decoration:none;box-shadow:0 8px 24px rgba(0,0,0,0.15);transition:all 0.3s;display:inline-block}
.btn-white:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,0.2)}

/* ─── TESTIMONIAL / QUOTE ─── */
.quote-sec{background:var(--blush);padding:7rem 5%}
.quote-inner{max-width:800px;margin:0 auto;text-align:center}
.quote-flowers{font-size:2rem;margin-bottom:1.5rem;opacity:0.5}
.quote-body{font-family:var(--serif);font-size:clamp(1.5rem,2.8vw,2.3rem);font-weight:400;font-style:italic;color:var(--text);line-height:1.5;margin-bottom:2rem}
.quote-author{display:inline-flex;align-items:center;gap:1rem}
.qa-line{width:30px;height:2px;background:var(--pink)}
.qa-name{font-size:0.75rem;font-weight:700;color:var(--pink);letter-spacing:0.15em;text-transform:uppercase}

/* ─── APPLY FORM ─── */
.apply-sec{padding:7rem 5%;background:#fff}
.apply-inner{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.apply-img-col{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:4/5}
.apply-img-col img{width:100%;height:100%;object-fit:cover;display:block}
.apply-img-col::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(232,84,122,0.4),transparent 60%)}
.apply-img-text{position:absolute;bottom:3rem;left:2rem;right:2rem;z-index:2;color:#fff}
.apply-img-text h3{font-family:var(--serif);font-size:1.8rem;font-weight:700;line-height:1.2;margin-bottom:0.5rem}
.apply-img-text p{font-size:0.82rem;opacity:0.85}
.apply-form-col{}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem}
.form-group{margin-bottom:1.4rem}
.form-group label{display:block;font-size:0.68rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--text3);margin-bottom:0.5rem}
.form-group input,.form-group select{width:100%;background:var(--blush);border:2px solid transparent;border-radius:12px;padding:0.85rem 1.1rem;font-family:var(--sans);font-size:0.88rem;color:var(--text);outline:none;transition:all 0.3s}
.form-group input::placeholder{color:var(--text3)}
.form-group input:focus,.form-group select:focus{background:#fff;border-color:var(--pink);box-shadow:0 0 0 4px rgba(232,84,122,0.1)}
.form-group select{-webkit-appearance:none;cursor:pointer;color:var(--text2)}
.form-group select option{background:#fff}
.form-submit{width:100%;background:linear-gradient(135deg,var(--pink),#C94070);color:#fff;border:none;border-radius:35px;padding:1.1rem;font-family:var(--sans);font-size:0.85rem;font-weight:700;letter-spacing:0.1em;cursor:pointer;box-shadow:0 8px 24px rgba(232,84,122,0.4);transition:all 0.3s;margin-top:0.5rem}
.form-submit:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(232,84,122,0.5)}
.form-note{text-align:center;font-size:0.75rem;color:var(--text3);margin-top:1rem}
.form-note a{color:var(--pink);text-decoration:none;font-weight:600}

/* ─── FOOTER ─── */
footer{background:var(--text);padding:5rem 5% 2rem}
.footer-top{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;padding-bottom:3.5rem;border-bottom:1px solid rgba(255,255,255,0.08)}
.ft-brand .name{font-family:var(--serif);font-size:1.5rem;color:#fff;margin-bottom:0.3rem}
.ft-brand .name span{color:var(--pink2)}
.ft-brand .by{font-size:0.62rem;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:1rem}
.ft-brand p{font-size:0.82rem;color:rgba(255,255,255,0.4);line-height:1.8;max-width:260px}
.ft-col h4{font-size:0.65rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--pink2);margin-bottom:1.2rem;font-weight:700}
.ft-col a{display:block;font-size:0.8rem;color:rgba(255,255,255,0.45);text-decoration:none;margin-bottom:0.65rem;transition:color 0.3s}
.ft-col a:hover{color:var(--pink2)}
.footer-bottom{max-width:1300px;margin:2.5rem auto 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
.ft-copy{font-size:0.7rem;color:rgba(255,255,255,0.2)}
.ft-socials{display:flex;gap:0.8rem}
.ft-soc{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.4);font-size:0.8rem;text-decoration:none;transition:all 0.3s}
.ft-soc:hover{border-color:var(--pink2);color:var(--pink2)}

/* ─── ANIMATIONS ─── */
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
@keyframes floatUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

/* ─── REVEAL ─── */
.reveal{opacity:0;transform:translateY(30px);transition:opacity 0.85s ease,transform 0.85s ease}
.reveal.visible{opacity:1;transform:none}
.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}.d5{transition-delay:.5s}

/* ─── RESPONSIVE ─── */
@media(max-width:1024px){
  .hero{grid-template-columns:1fr;min-height:auto}
  .hero-left{padding:8rem 5% 3rem}
  .hero-right{height:70vw;max-height:500px}
  .hero-float-card,.hero-float-card2{display:none}
  .who-inner,.brand-inner,.apply-inner{grid-template-columns:1fr;gap:3rem}
  .who-img-accent{display:none}
  .process-steps{grid-template-columns:repeat(2,1fr)}
  .process-steps::before{display:none}
  .services-grid{grid-template-columns:1fr 1fr}
  .footer-top{grid-template-columns:1fr 1fr;gap:2rem}
  nav{padding:0 4%}
  .nav-links{display:none}
}
@media(max-width:640px){
  .services-grid{grid-template-columns:1fr}
  .hero-stats{gap:1.5rem}
  .process-steps{grid-template-columns:1fr 1fr}
  .brand-img-grid{grid-template-columns:1fr}
  .brand-img-grid .bi1{grid-row:auto;aspect-ratio:3/2}
  .footer-top{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <div class="nav-brand">
      <div class="nav-brand-icon">iW</div>
      <div>
        <div class="nav-brand-text">identi<span>WARE</span></div>
        <div class="nav-brand-by">by Identity Aesthetics</div>
      </div>
    </div>
    <div class="nav-links">
      <a href="#services">What We Handle</a>
      <a href="#who">Who It's For</a>
      <a href="#process">Process</a>
      <a href="#brand">Brand</a>
      <a href="#apply" class="nav-btn">Apply Now →</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hero-bg-deco"></div>
  <div class="hero-bg-deco2"></div>
  <div class="hero-left">
    <div class="hero-tag"><div class="hero-tag-dot"></div>Full-Scale Med Spa Ownership System</div>
    <h1 class="hero-h1">
      Own Your<br>
      <span>Med Spa.</span><br>
      <span class="line-thin">We Handle Everything.</span>
    </h1>
    <p class="hero-desc">identiWARE is Identity Aesthetics' complete done-for-you partnership — lease, construction, buildout, systems, financing, and deal structure. Proven across Texas. Open to you.</p>
    <div class="hero-btns">
      <a href="#apply" class="btn-pink">Apply for Partnership →</a>
      <a href="#services" class="btn-ghost">See How It Works</a>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><div class="num">5+</div><div class="lbl">TX Locations</div></div>
      <div class="hero-stat-div"></div>
      <div class="hero-stat"><div class="num">100%</div><div class="lbl">Turnkey Package</div></div>
      <div class="hero-stat-div"></div>
      <div class="hero-stat"><div class="num">$22B</div><div class="lbl">Industry Size</div></div>
    </div>
  </div>
  <div class="hero-right">
    <img class="hero-img-main" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop" alt="Luxury Med Spa">
    <div class="hero-img-overlay"></div>
    <div class="hero-float-card">
      <div class="hfc-icon">💆‍♀️</div>
      <div class="hfc-title">Done-For-You Setup</div>
      <div class="hfc-sub">From lease to launch — we handle it all</div>
    </div>
    <div class="hero-float-card2">
      <div class="hfc2-stars">★★★★★</div>
      <div class="hfc2-text">Trusted Across Texas</div>
      <div class="hfc2-sub">5+ Luxury Locations</div>
    </div>
  </div>
</div>

<!-- WAVE -->
<div class="wave" style="background:var(--blush)">
  <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="white"/>
  </svg>
</div>

<!-- SERVICES WHAT WE HANDLE -->
<section class="services-sec" id="services">
  <div class="sec-head reveal">
    <div class="sec-tag">The Full Package</div>
    <h2 class="sec-h2">Six Things We <em>Handle For You</em></h2>
    <p class="sec-p">From the moment you sign with us, every complex part of opening a luxury med spa is taken off your plate. We have done it five times. The system is proven.</p>
  </div>
  <div class="services-grid">
    <div class="srv-card reveal d1">
      <div class="srv-img">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75&fit=crop" alt="Lease">
        <div class="srv-num-badge">01</div>
      </div>
      <div class="srv-body">
        <div class="srv-title">Lease Negotiations</div>
        <p class="srv-text">We scout, evaluate, and negotiate your commercial lease — optimal location, favorable terms, and long-term viability for your med spa.</p>
        <a href="#apply" class="srv-link">Partner With Us <span class="srv-link-arr">→</span></a>
      </div>
    </div>
    <div class="srv-card reveal d2">
      <div class="srv-img">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=75&fit=crop" alt="Construction">
        <div class="srv-num-badge">02</div>
      </div>
      <div class="srv-body">
        <div class="srv-title">Construction</div>
        <p class="srv-text">Our vetted construction partners build your space to luxury med spa standards — compliant, efficient, and on-brand from floor to ceiling.</p>
        <a href="#apply" class="srv-link">Partner With Us <span class="srv-link-arr">→</span></a>
      </div>
    </div>
    <div class="srv-card reveal d3">
      <div class="srv-img">
        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=75&fit=crop" alt="Buildout">
        <div class="srv-num-badge">03</div>
      </div>
      <div class="srv-body">
        <div class="srv-title">Full Buildout</div>
        <p class="srv-text">Interior design, equipment sourcing, treatment rooms, reception — every detail handled with Identity Aesthetics' luxury signature.</p>
        <a href="#apply" class="srv-link">Partner With Us <span class="srv-link-arr">→</span></a>
      </div>
    </div>
    <div class="srv-card reveal d1">
      <div class="srv-img">
        <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=75&fit=crop" alt="Operating System">
        <div class="srv-num-badge">04</div>
      </div>
      <div class="srv-body">
        <div class="srv-title">Operating System</div>
        <p class="srv-text">Booking platforms, staff training, protocols, compliance docs, marketing playbook — the complete infrastructure is ready for you.</p>
        <a href="#apply" class="srv-link">Partner With Us <span class="srv-link-arr">→</span></a>
      </div>
    </div>
    <div class="srv-card reveal d2">
      <div class="srv-img">
        <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=75&fit=crop" alt="Financing">
        <div class="srv-num-badge">05</div>
      </div>
      <div class="srv-body">
        <div class="srv-title">Financing</div>
        <p class="srv-text">Access our financing network and flexible funding options. We help structure the entire capital stack to get your doors open.</p>
        <a href="#apply" class="srv-link">Partner With Us <span class="srv-link-arr">→</span></a>
      </div>
    </div>
    <div class="srv-card reveal d3">
      <div class="srv-img">
        <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=75&fit=crop" alt="Deal Structuring">
        <div class="srv-num-badge">06</div>
      </div>
      <div class="srv-body">
        <div class="srv-title">Deal Structuring</div>
        <p class="srv-text">Equity partner, franchise model, or co-investment — we craft bespoke arrangements that align both parties for long-term success.</p>
        <a href="#apply" class="srv-link">Partner With Us <span class="srv-link-arr">→</span></a>
      </div>
    </div>
  </div>
</section>

<!-- WAVE -->
<div class="wave" style="background:#fff">
  <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="var(--blush)"/>
  </svg>
</div>

<!-- WHO IS THIS FOR -->
<section class="who-sec" id="who">
  <div class="who-inner" style="max-width:1300px;margin:0 auto">
    <div class="who-img-wrap reveal">
      <div class="who-img-main">
        <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80&fit=crop" alt="Med Spa Owner">
      </div>
      <div class="who-img-accent">
        <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=75&fit=crop" alt="Spa Treatment">
      </div>
      <div class="who-badge-num">
        <span class="n">100%</span>
        <span class="l">Done For You</span>
      </div>
    </div>
    <div class="reveal d2">
      <div class="sec-tag">Ideal Partners</div>
      <h2 class="sec-h2" style="text-align:left;margin-bottom:0.8rem">Who Is <em>identiWARE</em><br>Built For?</h2>
      <p class="sec-p" style="margin-bottom:0">Three types of ambitious people who are ready to own a luxury med spa — with the right system behind them.</p>
      <div class="who-cards">
        <div class="who-card">
          <div class="who-card-icon">🏢</div>
          <div>
            <div class="who-card-title">Operators & Entrepreneurs</div>
            <p class="who-card-text">You have the drive and capital — you just need a proven system, not a blank page. identiWARE gives you full infrastructure from day one.</p>
          </div>
        </div>
        <div class="who-card">
          <div class="who-card-icon">✨</div>
          <div>
            <div class="who-card-title">Licensed Estheticians</div>
            <p class="who-card-text">You've mastered your craft. Now own your space, build real equity, and operate under a luxury brand clients already trust across Texas.</p>
          </div>
        </div>
        <div class="who-card">
          <div class="who-card-icon">📈</div>
          <div>
            <div class="who-card-title">Investors & Co-Founders</div>
            <p class="who-card-text">You see the $22B med spa market opportunity and want structured co-ownership with a brand that has a real, proven track record.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process-sec" id="process">
  <div class="process-inner">
    <div class="sec-head reveal" style="max-width:600px;margin:0 auto 0">
      <div class="sec-tag">The Journey</div>
      <h2 class="sec-h2">From Inquiry to <em>Grand Opening</em></h2>
      <p class="sec-p">Four clear steps from your first call to opening day — guided by our team every step of the way.</p>
    </div>
    <div class="process-steps">
      <div class="pstep reveal d1">
        <div class="pstep-circle">
          <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=300&q=75&fit=crop&crop=face" alt="Discovery">
          <div class="pstep-num">1</div>
        </div>
        <div class="pstep-title">Discovery Call</div>
        <p class="pstep-text">Private strategy consultation — your goals, market, vision. Zero pressure.</p>
      </div>
      <div class="pstep reveal d2">
        <div class="pstep-circle">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=75&fit=crop" alt="Agreement">
          <div class="pstep-num">2</div>
        </div>
        <div class="pstep-title">Partnership Agreement</div>
        <p class="pstep-text">Custom deal structure — franchise, equity, or co-investment model tailored to you.</p>
      </div>
      <div class="pstep reveal d3">
        <div class="pstep-circle">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=75&fit=crop" alt="Build">
          <div class="pstep-num">3</div>
        </div>
        <div class="pstep-title">Site & Full Buildout</div>
        <p class="pstep-text">Location secured, lease negotiated, construction done. Ready to operate.</p>
      </div>
      <div class="pstep reveal d4">
        <div class="pstep-circle">
          <img src="https://images.unsplash.com/photo-1560750133-c4ca1c0f7c7d?w=300&q=75&fit=crop&crop=face" alt="Launch">
          <div class="pstep-num">4</div>
        </div>
        <div class="pstep-title">Training & Launch</div>
        <p class="pstep-text">Staff trained, marketing live, grand opening executed. We are with you on day one.</p>
      </div>
    </div>
  </div>
</section>

<!-- BRAND -->
<section class="brand-sec" id="brand">
  <div class="brand-inner">
    <div class="brand-img-col reveal">
      <div class="brand-img-grid">
        <div class="bi1"><img src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&q=80&fit=crop" alt="Spa 1"></div>
        <div class="bi2"><img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=75&fit=crop" alt="Spa 2"></div>
        <div class="bi3"><img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=75&fit=crop" alt="Spa 3"></div>
      </div>
      <div class="brand-float">
        <div class="brand-float-icon">🌸</div>
        <div class="brand-float-text">
          <div class="t">Identity Aesthetics</div>
          <div class="s">The Art of Refined Beauty</div>
        </div>
      </div>
    </div>
    <div class="reveal d2">
      <div class="sec-tag">Backed By Identity Aesthetics</div>
      <h2 class="sec-h2" style="text-align:left">A Brand Already <em>Trusted</em><br>Across Texas</h2>
      <p class="sec-p" style="margin-bottom:1.5rem">When you partner through identiWARE, you inherit years of brand equity, a loyal client base, trusted medical suppliers, and proven clinical protocols — across 5 Texas markets.</p>
      <p class="sec-p">No building from scratch. No guesswork. The playbook is written. You just execute.</p>
      <div class="brand-pills">
        <span class="brand-pill">✓ Botox Cosmetic</span>
        <span class="brand-pill">✓ Juvéderm</span>
        <span class="brand-pill">✓ Restylane</span>
        <span class="brand-pill">✓ Sculptra</span>
        <span class="brand-pill">✓ Epionce</span>
        <span class="brand-pill">✓ Skin Script</span>
        <span class="brand-pill">✓ Radiesse</span>
        <span class="brand-pill">✓ LASEMD</span>
        <span class="brand-pill">✓ Velashape III</span>
      </div>
      <div style="margin-top:2rem">
        <a href="#apply" class="btn-pink">Become a Partner →</a>
      </div>
    </div>
  </div>
</section>

<!-- OFFER BANNER -->
<div class="offer-banner">
  <div class="ob-inner reveal">
    <div class="ob-tag">✦ Limited Partnership Spots Available ✦</div>
    <h2 class="ob-h2">Your Med Spa.<br><em>Our Blueprint.</em></h2>
    <p class="ob-p">We handle the complexity. You own the business. Join the identiWARE partnership program and open your luxury med spa with everything already in place.</p>
    <a href="#apply" class="btn-white">Start Your Application →</a>
  </div>
</div>

<!-- QUOTE -->
<section class="quote-sec">
  <div class="quote-inner reveal">
    <div class="quote-flowers">✿ ✿ ✿</div>
    <p class="quote-body">"We didn't just build a med spa — we built a replicable system. identiWARE is how we share that with people who are ready to own their chapter of this story."</p>
    <div class="quote-author">
      <div class="qa-line"></div>
      <div class="qa-name">Identity Aesthetics — Founder</div>
      <div class="qa-line"></div>
    </div>
  </div>
</section>

<!-- APPLY FORM -->
<section class="apply-sec" id="apply">
  <div class="apply-inner">
    <div class="apply-img-col reveal">
      <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&q=80&fit=crop" alt="Consultation">
      <div class="apply-img-text">
        <h3>Let's Build<br>Yours Together</h3>
        <p>We respond within 48 hours — no pressure, pure strategy.</p>
      </div>
    </div>
    <div class="reveal d2">
      <div class="sec-tag">Apply for Partnership</div>
      <h2 class="sec-h2" style="text-align:left;margin-bottom:0.8rem">Start Your <em>Journey</em></h2>
      <p class="sec-p" style="margin-bottom:2rem">Fill in the short form below and our team will reach out within 48 hours for a private discovery call.</p>
      <div>
        <div class="form-row">
          <div class="form-group"><label>First Name</label><input type="text" placeholder="Jane"></div>
          <div class="form-group"><label>Last Name</label><input type="text" placeholder="Smith"></div>
        </div>
        <div class="form-group"><label>Email Address</label><input type="email" placeholder="jane@example.com"></div>
        <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="(713) 000-0000"></div>
        <div class="form-group">
          <label>I am a...</label>
          <select>
            <option value="" disabled selected>Select your role</option>
            <option>Operator / Entrepreneur</option>
            <option>Licensed Esthetician</option>
            <option>Investor / Co-Founder</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group"><label>City & State of Interest</label><input type="text" placeholder="Houston, TX"></div>
        <button class="form-submit" onclick="alert('Thank you! Our team will reach out within 48 hours.')">Submit My Application →</button>
        <p class="form-note">Or call us: <a href="tel:7132686963">713-268-6963</a> &nbsp;·&nbsp; <a href="https://713botoxme.com" target="_blank">713botoxme.com</a></p>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div class="ft-brand">
      <div class="name">identi<span>WARE</span></div>
      <div class="by">by Identity Aesthetics</div>
      <p>At Identity Aesthetics, we are here to meet all of your aesthetic treatment needs — and now, to help you own your own chapter of this story.</p>
    </div>
    <div class="ft-col">
      <h4>Partnership</h4>
      <a href="#services">What We Handle</a>
      <a href="#who">Who It's For</a>
      <a href="#process">The Process</a>
      <a href="#apply">Apply Now</a>
    </div>
    <div class="ft-col">
      <h4>Identity Aesthetics</h4>
      <a href="https://713botoxme.com" target="_blank">Main Website</a>
      <a href="https://713botoxme.com/med-spa-services/" target="_blank">Our Services</a>
      <a href="https://713botoxme.com/locations/" target="_blank">Locations</a>
    </div>
    <div class="ft-col">
      <h4>Contact</h4>
      <a href="tel:7132686963">713-268-6963</a>
      <a href="https://www.facebook.com/identityAestheticCenters/" target="_blank">Facebook</a>
      <a href="https://www.instagram.com/identityaesthetics/" target="_blank">Instagram</a>
      <a href="https://www.tiktok.com/@identityaestheticcenter" target="_blank">TikTok</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="ft-copy">&copy; 2026 Identity Aesthetic Center LLC — All Rights Reserved</div>
    <div class="ft-copy"><a href="https://713botoxme.com/privacy-policy/" style="color:inherit;text-decoration:none">Privacy Policy</a></div>
  </div>
</footer>

<script>
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
</script>
</body>
</html>
