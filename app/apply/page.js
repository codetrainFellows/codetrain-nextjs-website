"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";
import { 
  ChatBubbleLeftRightIcon, 
  PhoneIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import { hireOurStudents } from "@/constants/constants";

// Reusing layout patterns from app/page.js
export default function ApplyPage() {
  return (
    <>
      {/* Hero Section - Matching homepage style */}
      <section className="bg-ash lg:bg-inherit relative px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-violet z-10 max-w-2xl">
            <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl leading-tight mb-6">
              Your tech career<br />
              <span className="font-light"> starts here.</span>
            </h1>
            <div className="text-textColor">
              <p className="text-lg md:text-xl font-medium mb-10 leading-relaxed opacity-80">
                Learn software engineering or product design from scratch. Get hired at top companies — in Ghana and around the world. No experience needed.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="https://codetrainafrica.heiapply.com/application" target="_blank">
                  <Button
                    className="bg-yellow text-violet shadow-none font-bold px-8 md:px-10 py-4 rounded-md hover:shadow-none transition-all"
                    variant="filled"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link href="https://wa.me/233545792397?text=Hi%2C+I+saw+your+ad+and+I%27m+interested+in+Codetrain" target="_blank">
                  <Button
                    className="bg-transparent border-violet text-violet shadow-none font-bold px-8 md:px-10 py-4 rounded-md flex items-center gap-2"
                    variant="outlined"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </Link>
              </div>
              <p className="text-xs font-extrabold md:text-base text-textColor uppercase tracking-widest opacity-60">
                * GHANA&apos;S LEADING AI & TECH TRAINING INSTITUTION
              </p>
            </div>
          </div>
          
          <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black">
            <iframe 
              src="https://www.youtube.com/embed/xr_pJlJi0JE?rel=0&modestbranding=1" 
              title="Codetrain Africa" 
              className="absolute inset-0 w-full h-full"
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </div>
        {/* Background logos for hero */}
        <BgLogoRight className="fill-[#8c87a1] opacity-[0.2] size-60 sm:size-80 lg:size-6/12 absolute left-0 -top-11 lg:left-2/4 lg:-top-1 lg:-z-10" />
        <BgLogoLeft className="fill-[#8c87a1] opacity-[0.2] size-40 sm:size-80 absolute left-0 top-36 sm:top-56 lg:top-1/2 lg:left-3/4 lg:-z-10" />
      </section>

      {/* Impact Stats Section - Matching homepage style */}
      <section className="px-4 py-16 sm:px-14 sm:py-24 text-center bg-white relative">
        <h1 className="font-bold text-violet text-xl sm:text-3xl lg:text-5xl mb-12">
          Our Impact
        </h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-16 lg:gap-32">
          {[
            { num: '700+', label: 'Developers trained', sub: 'Alumni and counting' },
            { num: '89%', label: 'Job Placement', sub: 'Secure jobs within 6-9 months' },
            { num: '91%', label: 'Life Quality', sub: 'Improved career and life quality' },
          ].map((stat, i) => (
            <div key={i} className="max-w-xs">
              <h4 className="text-lg md:text-xl text-violet font-extrabold mb-3">
                {stat.label}
              </h4>
              <h1 className="text-pink text-6xl md:text-8xl font-bold">{stat.num}</h1>
              <p className="text-textColor mt-6 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes Section */}
      <section className="bg-ash px-4 py-16 sm:px-14 sm:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          <h1 className="font-bold text-violet text-3xl lg:text-5xl mb-6">
            Two Programmes. <span className="font-light">One Goal.</span>
          </h1>
          <p className="text-textColor text-lg max-w-3xl mx-auto">
            Both are 18 months, open to complete beginners, and cost GHS 38,500. The difference is the career path they open for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          {[
            {
              title: "Software Engineer & AI",
              tag: "Full Stack AI Developer",
              desc: "Build and deploy real AI-powered software. The kind companies in Germany, Canada, and the US actively hire for.",
              roles: ['AI Engineer', 'Full Stack Developer', 'Product Engineer', 'Software Engineer', 'Frontend / Backend Developer', 'Tech Founder / CTO']
            },
            {
              title: "UI/UX Design & AI",
              tag: "Product Designer",
              desc: "Design digital products from research to a live, published application — assessed by real industry reviewers.",
              roles: ['Product Designer', 'UI/UX Designer', 'Product Designer (AI Tools)', 'UX Researcher', 'Digital Brand Designer', 'No-Code / Framer Developer']
            }
          ].map((prog, i) => (
            <div key={i} className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-black/5 flex flex-col">
              <span className="bg-yellow text-violet text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-6 inline-block w-fit">
                {prog.title}
              </span>
              <h3 className="text-violet font-bold text-2xl md:text-3xl mb-4">{prog.tag}</h3>
              <p className="text-textColor text-base mb-8 leading-relaxed">
                {prog.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {prog.roles.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-violet font-semibold border-b border-violet/5 pb-3 last:border-0">
                    <div className="w-1.5 h-1.5 bg-yellow rounded-full" />
                    {role}
                  </li>
                ))}
              </ul>
              <Link href="https://codetrainafrica.heiapply.com/application" target="_blank" className="mt-auto">
                <Button className="w-full bg-violet text-white font-bold py-4 rounded-md shadow-none hover:bg-violet/90 transition-all">
                  Enroll for {prog.title.split(' ')[0]}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bg icons for programmes */}
        <BgLogoLeft className="fill-yellow absolute -bottom-12 lg:bottom-0 -right-0 size-72 sm:size-96 md:size-2/4 opacity-40" />
        <BgLogoRight className="fill-yellow absolute -top-12 lg:top-0 left-0 size-72 sm:size-96 md:size-2/4 opacity-40" />
      </section>

      {/* Success Stories Strip */}
      <section className="px-4 py-20 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bold text-violet text-3xl lg:text-5xl mb-6">
              Real Outcomes
            </h1>
            <p className="text-textColor text-lg">People just like you. Already there.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Awal', meta: 'Zero coding experience', desc: 'Senior Developer at Big Viking Games, Canada. Works from Accra.' },
              { name: 'Oscarlyn', meta: 'Medical doctor — no tech background', desc: 'Best student of 2023. Hired on the spot at demo day.' },
              { name: 'Anthony', meta: 'Dropped out of university', desc: 'Now at Infinitas Media, Berlin. Working in Germany.' },
              { name: 'Catherine', meta: 'Finance executive for 4 years', desc: 'Career pivot. Now a frontend developer building an insurance app.' },
              { name: 'Gerard', meta: 'Attended a Codetrain demo day', desc: 'Hired on the spot by the CEO of Meqasa. Now at Hubtel.' },
              { name: 'Zak', meta: 'Computer Engineering student', desc: 'Now at a tech company in Berlin — before his university class graduated.' },
            ].map((story, i) => (
              <div key={i} className="p-6 border border-violet/10 rounded-xl hover:bg-ash/20 transition-colors">
                <div className="text-violet font-bold text-lg mb-1">{story.name}</div>
                <div className="text-pink text-xs font-bold uppercase mb-4 tracking-wider">{story.meta}</div>
                <p className="text-textColor text-sm font-medium leading-relaxed">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employers Section - Matching homepage style */}
      <section className="text-center py-12 px-10 shadow-md border-t border-t-black/5 bg-white relative overflow-hidden">
        <h1 className="text-xl md:text-2xl text-violet font-semibold mb-12 relative z-10">
          Our Graduates work at
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 relative z-10">
          {hireOurStudents.map((company, i) => (
            <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={company.src}
                alt={company.name}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <BgLogoRight className="fill-ash opacity-[0.2] absolute size-96 sm:size-[546px] -bottom-10 sm:-bottom-24 lg:-bottom-1/4 left-0" />
      </section>

      {/* Who Can Join Section */}
      <section className="bg-ash px-4 py-16 sm:px-14 sm:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          <h1 className="font-bold text-violet text-3xl lg:text-5xl mb-6">
            This was built <span className="font-light">for you.</span>
          </h1>
          <p className="text-textColor text-lg max-w-3xl mx-auto">
            No entry test. No prior experience. No degree required. Just commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            { title: 'SHS graduate deciding what\'s next', body: 'You could be employed in 18 months — while classmates on a 4-year degree are still waiting.' },
            { title: 'University student', body: 'Join on weekends. Graduate from Codetrain before your university class — already employed.' },
            { title: 'Working and want to switch careers', body: 'Train on weekends. Keep your job Monday to Friday. Quit when you are ready.' },
            { title: 'Graduate who can\'t find meaningful work', body: '89% of Codetrain graduates are employed after the programme. That number speaks for itself.' },
            { title: 'Based outside Accra', body: 'Fully online. Same live classes, same instructors, same certification — from anywhere in Ghana.' },
            { title: 'Aspiring entrepreneur', body: 'You have the idea. Codetrain gives you the ability to build it. "I have an idea" becomes "I shipped a product."' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-violet/10 shadow-sm">
              <h4 className="text-violet font-bold text-lg mb-3 leading-tight">{item.title}</h4>
              <p className="text-textColor text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <BgLogoLeft className="fill-pink opacity-[0.2] absolute size-96 sm:size-[546px] -bottom-10 sm:-bottom-24 lg:bottom-1/3 right-0 sm:inline" />
      </section>

      {/* Fees Section */}
      <section className="bg-ash px-4 py-20 text-center border-t border-violet/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-bold text-violet text-3xl lg:text-5xl mb-6">
            Transparent. Flexible.
          </h1>
          <p className="text-textColor text-lg mb-12 max-w-2xl mx-auto">
            Investing in your future is an important decision. We offer flexible payment plans to make your learning journey as smooth as possible.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-yellow py-6 px-8 text-violet font-bold text-xl md:text-2xl">
              Programme Fees
            </div>
            <div className="p-8 md:p-12 space-y-8">
              {[
                { label: 'Full programme fee', val: 'GHS 38,500' },
                { label: 'Scholarship (Women, Disability, Low-income)', val: 'Up to 40% off', highlight: true },
                { label: 'Minimum fee with scholarship', val: 'GHS 23,100', highlight: true },
                { label: 'Deposit to secure place', val: 'GHS 10,000' },
              ].map((row, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-8 border-b border-violet/5 pb-6 last:border-0">
                  <div className="text-violet font-semibold text-lg">{row.label}</div>
                  <div className={`text-2xl font-bold ${row.highlight ? 'text-pink' : 'text-violet'}`}>{row.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BgLogoLeft className="absolute fill-yellow opacity-[0.2] size-96 sm:size-[540px] md:size-[669px] -top-16 md:-top-10 p-0 right-0" />
        <BgLogoRight className="absolute fill-yellow size-96 sm:size-[540px] md:size-[669px] -bottom-16 md:-bottom-32 p-0 left-0" />
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-24 text-center bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-bold text-violet text-4xl md:text-6xl mb-8 leading-tight">
            Ready to switch to <br />
            <span className="text-pink italic">the winning side?</span>
          </h1>
          <p className="text-textColor text-lg md:text-xl mb-12 max-w-xl mx-auto">
            The July 2026 cohort is filling now. Spots are limited and scholarships are still available.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://codetrainafrica.heiapply.com/application" target="_blank">
              <Button className="bg-yellow text-violet shadow-none font-bold px-10 py-4 rounded-md hover:scale-105 transition-all">
                Apply Now
              </Button>
            </Link>
            <Link href="tel:+233545792397">
              <Button className="bg-violet text-white shadow-none font-bold px-10 py-4 rounded-md hover:scale-105 transition-all">
                Call Admissions
              </Button>
            </Link>
          </div>
        </div>
        <CTLogo
          className="absolute size-[1080px] md:size-[800px] -left-3 md:left-20 lg:left-1/4 object-cover text-[#e0e0e0] opacity-30"
          color="#c2c0c0"
        />
      </section>

      {/* Sticky Quick Links */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Link href="https://wa.me/233545792397?text=Hi%2C+I%27m+interested+in+Codetrain" target="_blank">
          <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all cursor-pointer">
            <ChatBubbleLeftRightIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="tel:+233545792397">
          <div className="bg-violet text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all cursor-pointer">
            <PhoneIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </>
  );
}
