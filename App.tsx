import React, { useState } from 'react';
import { 
  Menu, X, TrendingUp, ShieldCheck, 
  PieChart, BrainCircuit, Landmark, 
  ChevronRight, ArrowRight, PlayCircle, Users
} from 'lucide-react';

import { Course } from './types';
import { Button } from './components/Button';
import { CourseCard } from './components/CourseCard';
import { CurriculumGenerator } from './components/CurriculumGenerator';
import { ChatBot } from './components/ChatBot';

// -- Mock Data --
const SAMPLE_COURSES: Course[] = [
  {
    id: '1',
    title: 'AI for Leadership & RBI Compliance',
    description: 'Strategic frameworks for implementing AI in Indian banks. Covers RBI guidelines, DPDP Act 2023, and digital transformation ROI.',
    level: 'Advanced',
    duration: '6 Weeks',
    price: 85000,
    tags: ['Strategy', 'RBI Norms', 'Digital India'],
    thumbnail: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'ML for UPI & Payment Fraud Detection',
    description: 'Build real-time anomaly detection systems for UPI and card transactions. Focus on Aadhaar-enabled Payment Systems (AePS) security.',
    level: 'Intermediate',
    duration: '8 Weeks',
    price: 65000,
    tags: ['Security', 'UPI', 'Cybersecurity'],
    thumbnail: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Algorithmic Trading on NSE/BSE',
    description: 'Design and backtest quantitative strategies for Indian markets. Use deep learning to analyze NIFTY/SENSEX trends and volatility.',
    level: 'Advanced',
    duration: '10 Weeks',
    price: 95000,
    tags: ['Trading', 'Quant', 'NSE/BSE'],
    thumbnail: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'Multilingual NLP for Customer Service',
    description: 'Create AI chatbots supporting Hindi, Tamil, Telugu and 10+ Indian languages using Indic LLMs for superior rural banking engagement.',
    level: 'Beginner',
    duration: '5 Weeks',
    price: 45000,
    tags: ['CX', 'Bhashini', 'Automation'],
    thumbnail: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: '5',
    title: 'Credit Risk Modeling & CIBIL Analytics',
    description: 'Modernize credit scoring with explainable AI (XGBoost/SHAP) tailored for Indian credit bureau data (CIBIL/Experian).',
    level: 'Intermediate',
    duration: '7 Weeks',
    price: 70000,
    tags: ['Risk', 'Credit', 'Data Science'],
    thumbnail: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: '6',
    title: 'Blockchain & Digital Rupee (e₹)',
    description: 'Explore the intersection of CBDC (Central Bank Digital Currency) and AI for smart contract auditing in the Indian ecosystem.',
    level: 'Intermediate',
    duration: '6 Weeks',
    price: 75000,
    tags: ['CBDC', 'DeFi', 'RBI'],
    thumbnail: 'https://picsum.photos/800/600?random=6'
  }
];

const LOGOS = [
  'HDFC Bank', 'ICICI Bank', 'SBI Life', 'Bajaj Finserv', 'Zerodha', 'Axis Bank'
];

// -- Layout Components --

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-corporate-900 rounded-lg flex items-center justify-center text-white">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">FinAI <span className="text-corporate-600">Academy</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-slate-600 hover:text-corporate-600 font-medium transition-colors">Courses</a>
            <a href="#ai-planner" className="text-slate-600 hover:text-corporate-600 font-medium transition-colors">AI Planner</a>
            <a href="#testimonials" className="text-slate-600 hover:text-corporate-600 font-medium transition-colors">Success Stories</a>
            <Button variant="primary" className="py-2 px-5 text-sm">Corporate Access</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#catalog" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Courses</a>
            <a href="#ai-planner" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">AI Planner</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Success Stories</a>
            <div className="pt-4">
              <Button variant="primary" className="w-full justify-center">Corporate Access</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-corporate-950 text-slate-400 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-8 h-8 bg-corporate-800 rounded flex items-center justify-center text-white">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-white">FinAI Academy</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering India's financial sector with cutting-edge artificial intelligence education. Secure, scalable, and compliant with RBI & SEBI norms.
          </p>
          <div className="flex space-x-4">
            {/* Social icons placeholders */}
            <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition cursor-pointer"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition cursor-pointer"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition cursor-pointer"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Programs</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Data Science for Finance</a></li>
            <li><a href="#" className="hover:text-white transition">Executive Leadership</a></li>
            <li><a href="#" className="hover:text-white transition">Risk & Compliance</a></li>
            <li><a href="#" className="hover:text-white transition">Algo Trading</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Enterprise Solutions</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Latest AI trends in Indian Fintech delivered weekly.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="work@email.com" className="bg-white/5 border border-white/10 rounded px-3 py-2 w-full text-sm focus:outline-none focus:border-corporate-500 text-white" />
            <button className="bg-corporate-600 hover:bg-corporate-500 text-white px-3 py-2 rounded transition">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-16 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 FinAI Academy. All rights reserved. Mumbai, India.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// -- Main App Component --

export default function App() {
  const [enrolledCourse, setEnrolledCourse] = useState<string | null>(null);

  const handleEnroll = (id: string) => {
    // In a real app, this would redirect to checkout
    alert(`Initiating enrollment for course ID: ${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pt-20">
        
        {/* Hero Section */}
        <section className="relative bg-corporate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-950 via-corporate-900/90 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
                New: DPDP Act 2023 & AI Compliance Module
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Master the Future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Indian Financial Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                The premier AI training platform tailored for India's banking, insurance, and fintech professionals. Upskill your team with strategies compliant with RBI and SEBI norms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" className="text-lg px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})}>
                  Explore Courses
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 text-white/80">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm">Corporate Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">15k+</div>
                  <div className="text-sm">Certified Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                  <div className="text-sm">Student Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="bg-white py-10 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {LOGOS.map((logo, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-800">
                   <Landmark className="w-6 h-6 text-corporate-600" />
                   {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why BFSI Leaders Choose Us</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">We don't just teach code. We teach how to apply AI to solve complex financial challenges in the Indian market while maintaining compliance.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Learn how to deploy AI models that meet strict Indian standards (DPDP Act, RBI Guidelines, SEBI Norms)." },
                { icon: TrendingUp, title: "Real-World ROI Focus", desc: "Case studies on reducing operational costs in branches, improving UPI fraud detection, and automating KYC." },
                { icon: Users, title: "Executive to Analyst Paths", desc: "Tailored tracks for C-suite strategic planning and technical implementation for data scientists." }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-corporate-100 rounded-xl flex items-center justify-center text-corporate-600 mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Catalog */}
        <section id="catalog" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized Curriculum</h2>
                <p className="text-lg text-slate-600 max-w-xl">Explore courses designed by industry veterans from top Indian financial institutions and AI research labs.</p>
              </div>
              
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-corporate-500 hover:text-corporate-600 transition">All</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-corporate-500 hover:text-corporate-600 transition">Technical</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-corporate-500 hover:text-corporate-600 transition">Strategic</button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SAMPLE_COURSES.map(course => (
                <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="outline" className="px-8">View Full Catalog</Button>
            </div>
          </div>
        </section>

        {/* AI Generator Section */}
        <CurriculumGenerator />

        {/* CTA Section */}
        <section className="py-24 bg-corporate-900 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-corporate-800 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-gold-600 rounded-full opacity-10 blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to future-proof your institution?</h2>
            <p className="text-xl text-corporate-100 mb-10 max-w-2xl mx-auto">
              Join thousands of Indian finance professionals leveraging AI to outperform the market. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="px-8 py-4 text-lg font-bold">
                Get Started Now
              </Button>
              <Button className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-corporate-400">No credit card required for demo access.</p>
          </div>
        </section>

      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}