"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./apply.css";

export default function ApplyPage() {
  return (
    <div className="apply-page-container">
      {/* NAV */}
      <nav className="nav">
        <Image 
          src="/codetrain-logo.png" 
          alt="Codetrain Africa" 
          width={150}
          height={40}
          className="nav-logo invert brightness-200"
        />
        <Link href="https://codetrainafrica.heiapply.com/application" className="nav-apply" target="_blank">Apply Now</Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Ghana&apos;s Leading AI &amp; Tech Training Institution</div>
        <h1>Your tech career<br /><span>starts here.</span></h1>
        <p className="hero-sub">Learn software engineering or product design from scratch. Get hired at top companies — in Ghana and around the world. No experience needed.</p>

        <div className="hero-ctas">
          <Link href="https://codetrainafrica.heiapply.com/application" target="_blank" className="btn-gold">Apply Now</Link>
          <Link href="https://wa.me/233545792397?text=Hi%2C+I+saw+your+ad+and+I%27m+interested+in+Codetrain" target="_blank" className="btn-green">💬 WhatsApp Us</Link>
          <Link href="tel:+233545792397" className="btn-outline">📞 +233 545 792 397</Link>
        </div>

        <div className="video-wrap">
          <iframe 
            src="https://www.youtube.com/embed/xr_pJlJi0JE?rel=0&modestbranding=1" 
            title="Codetrain Africa" 
            allowFullScreen 
            loading="lazy"
          />
        </div>
      </section>

      {/* PROOF */}
      <div className="proof">
        <div className="proof-item"><span className="proof-num">700+</span><span className="proof-lbl">Developers trained</span></div>
        <div className="proof-item"><span className="proof-num">89%</span><span className="proof-lbl">Graduate employment rate</span></div>
        <div className="proof-item"><span className="proof-num">91%</span><span className="proof-lbl">Report improved quality of life</span></div>
        <div className="proof-item"><span className="proof-num">0</span><span className="proof-lbl">Prior experience required</span></div>
      </div>

      {/* PROGRAMMES */}
      <section className="sec off">
        <div className="sec-inner">
          <div className="sec-label">Two Programmes</div>
          <h2>Choose your <span className="g">path.</span></h2>
          <p className="sec-lead">Both are 18 months, open to complete beginners, and cost GHS 38,500. The difference is the career they open.</p>
          <div className="prog-grid">
            <div className="prog-card">
              <div className="prog-head">
                <div className="prog-badge">Software Engineering</div>
                <div className="prog-title">Full Stack AI Developer</div>
                <div className="prog-meta">18 months · GHS 38,500 · Zero experience required</div>
              </div>
              <div className="prog-body">
                <p className="prog-desc">Build and deploy real AI-powered software. The kind companies in Germany, Canada, and the US actively hire for.</p>
                <ul className="role-list">
                  <li>AI Engineer</li>
                  <li>Full Stack Developer</li>
                  <li>Product Engineer</li>
                  <li>Software Engineer</li>
                  <li>Frontend / Backend Developer</li>
                  <li>Tech Founder / CTO</li>
                </ul>
                <Link href="https://codetrainafrica.heiapply.com/application" target="_blank" className="prog-btn">Apply for Software Engineering →</Link>
              </div>
            </div>
            <div className="prog-card">
              <div className="prog-head">
                <div className="prog-badge">Product Design</div>
                <div className="prog-title">Product Designer</div>
                <div className="prog-meta">18 months · GHS 38,500 · Zero experience required</div>
              </div>
              <div className="prog-body">
                <p className="prog-desc">Design digital products from research to a live, published application — assessed by real industry reviewers.</p>
                <ul className="role-list">
                  <li>Product Designer</li>
                  <li>UI/UX Designer</li>
                  <li>Product Designer (AI Tools)</li>
                  <li>UX Researcher</li>
                  <li>Digital Brand Designer</li>
                  <li>No-Code / Framer Developer</li>
                </ul>
                <Link href="https://codetrainafrica.heiapply.com/application" target="_blank" className="prog-btn">Apply for Product Design →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRADUATES */}
      <section className="sec">
        <div className="sec-inner">
          <div className="sec-label">Real Outcomes</div>
          <h2>People just like you. <span className="g">Already there.</span></h2>
          <p className="sec-lead">Real graduates. Real names. Real companies. More stories at codetrainafrica.com/success-stories.</p>
          <div className="grad-grid">
            <div className="gc"><div className="ga">Aw</div><div className="gb"><div className="gn">Awal</div><div className="gbe">Zero coding experience</div><div className="gaf">Senior Developer at Big Viking Games, Canada. Works from Accra.</div></div></div>
            <div className="gc"><div className="ga">Os</div><div className="gb"><div className="gn">Oscarlyn</div><div className="gbe">Medical doctor — no tech background</div><div className="gaf">Best student of 2023. Hired on the spot at demo day.</div></div></div>
            <div className="gc"><div className="ga">An</div><div className="gb"><div className="gn">Anthony</div><div className="gbe">Dropped out of university</div><div className="gaf">Now at Infinitas Media, Berlin. Working in Germany.</div></div></div>
            <div className="gc"><div className="ga">Ca</div><div className="gb"><div className="gn">Catherine</div><div className="gbe">Finance executive for 4 years</div><div className="gaf">Career pivot. Now a frontend developer building an insurance app.</div></div></div>
            <div className="gc"><div className="ga">Ge</div><div className="gb"><div className="gn">Gerard</div><div className="gbe">Attended a Codetrain demo day</div><div className="gaf">Hired on the spot by the CEO of Meqasa. Now at Hubtel.</div></div></div>
            <div className="gc"><div className="ga">Za</div><div className="gb"><div className="gn">Zak</div><div className="gbe">Computer Engineering student</div><div className="gaf">Now at a tech company in Berlin — before his university class graduated.</div></div></div>
          </div>
        </div>
      </section>

      {/* EMPLOYERS */}
      <div className="emp-strip">
        <div className="emp-label">Our graduates work at</div>
        <div className="emp-names">
          <strong>Ecobank</strong> &nbsp;·&nbsp; <strong>Stanchart</strong> &nbsp;·&nbsp; <strong>Hubtel</strong> &nbsp;·&nbsp; <strong>mPharma</strong> &nbsp;·&nbsp; <strong>Meqasa</strong> &nbsp;·&nbsp; <strong>Afrifanom</strong> &nbsp;·&nbsp; <strong>Eganaw</strong> &nbsp;·&nbsp; <strong>Remotown</strong> &nbsp;·&nbsp; <strong>Infinitas Media (Germany)</strong> &nbsp;·&nbsp; <strong>SAGE (Germany)</strong> &nbsp;·&nbsp; <strong>Big Viking Games (Canada)</strong> &nbsp;·&nbsp; <strong>Latter Day Saints</strong> &nbsp;·&nbsp; and more
        </div>
      </div>

      {/* WHO */}
      <section className="sec off">
        <div className="sec-inner">
          <div className="sec-label">Who Can Join</div>
          <h2>This was built <span className="g">for you.</span></h2>
          <p className="sec-lead">No entry test. No prior experience. No degree required. Just commitment.</p>
          <div className="who-grid">
            <div className="wc"><div className="wt">SHS graduate deciding what&apos;s next</div><div className="wb">You could be employed in 18 months — while classmates on a 4-year degree are still waiting.</div></div>
            <div className="wc"><div className="wt">University student</div><div className="wb">Join on weekends. Graduate from Codetrain before your university class — already employed.</div></div>
            <div className="wc"><div className="wt">Working and want to switch careers</div><div className="wb">Train on weekends. Keep your job Monday to Friday. Quit when you are ready.</div></div>
            <div className="wc"><div className="wt">Graduate who can&apos;t find meaningful work</div><div className="wb">89% of Codetrain graduates are employed after the programme. That number speaks for itself.</div></div>
            <div className="wc"><div className="wt">Based outside Accra</div><div className="wb">Fully online. Same live classes, same instructors, same certification — from anywhere in Ghana.</div></div>
            <div className="wc"><div className="wt">Aspiring entrepreneur</div><div className="wb">You have the idea. Codetrain gives you the ability to build it. &quot;I have an idea&quot; becomes &quot;I shipped a product.&quot;</div></div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="sec">
        <div className="sec-inner">
          <div className="sec-label">Fees &amp; Scholarships</div>
          <h2>Transparent. <span className="g">Flexible.</span></h2>
          <p className="sec-lead">One fee for both programmes. Scholarships available. Start with a deposit.</p>
          <div className="fee-row"><div className="fee-lbl">Full programme fee — both programmes</div><div className="fee-val">GHS 38,500</div></div>
          <div className="fee-row"><div className="fee-lbl">Scholarship — women, low-income, people with disability</div><div className="fee-val g">Up to 40% off</div></div>
          <div className="fee-row"><div className="fee-lbl">Minimum fee with full scholarship</div><div className="fee-val g">GHS 23,100</div></div>
          <div className="fee-row"><div className="fee-lbl">Deposit to secure your place</div><div className="fee-val">GHS 10,000</div></div>
          <div className="fee-row"><div className="fee-lbl">Balance</div><div className="fee-val sm">Monthly instalments over 4–6 months before Phase 2</div></div>
          <div className="fee-row"><div className="fee-lbl">Payment methods</div><div className="fee-val sm">Paystack · Bank transfer · Cash at East Legon</div></div>

          <div className="contact-box">
            <div className="contact-item">
              <label>Call or WhatsApp</label>
              <Link href="tel:+233545792397">+233 545 792 397</Link>
              <span>Mon – Sat, 8am – 6pm</span>
            </div>
            <div className="contact-item">
              <label>Email admissions</label>
              <Link href="mailto:admissions@codetrainafrica.com">admissions@codetrainafrica.com</Link>
              <span>We reply within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-sec">
        <div className="sec-inner">
          <div className="sec-label">Apply Today</div>
          <h2>The July 2026 cohort <span className="g">is filling now.</span></h2>
          <p>Spots are limited. Scholarships available.</p>
          <div className="cta-buttons">
            <Link href="https://codetrainafrica.heiapply.com/application" className="btn-gold" target="_blank">Apply on the Website</Link>
            <Link href="https://wa.me/233545792397?text=Hi%2C+I+want+to+apply+to+Codetrain" className="btn-green" target="_blank">💬 WhatsApp Us</Link>
            <Link href="tel:+233545792397" className="btn-outline">📞 +233 545 792 397</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Codetrain Africa &nbsp;·&nbsp; East Legon, 16a Parsnip Street, Accra &nbsp;·&nbsp; +233 545 792 397 &nbsp;·&nbsp; admissions@codetrainafrica.com &nbsp;·&nbsp; codetrainafrica.com</p>
      </footer>

      {/* STICKY BAR */}
      <div className="sticky">
        <Link href="https://codetrainafrica.heiapply.com/application" className="s-apply" target="_blank">🎓 Apply Now</Link>
        <Link href="https://wa.me/233545792397?text=Hi%2C+I+m+interested+in+Codetrain" className="s-wa" target="_blank">💬 WhatsApp</Link>
        <Link href="tel:+233545792397" className="s-call">📞 +233 545 792 397</Link>
      </div>
    </div>
  );
}
