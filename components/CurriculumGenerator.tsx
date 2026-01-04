import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, Target, CheckCircle2 } from 'lucide-react';
import { generateCurriculum } from '../services/geminiService';
import { GeneratedCurriculum } from '../types';
import { Button } from './Button';

export const CurriculumGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    role: '',
    experience: 'Intermediate',
    focus: ''
  });
  const [result, setResult] = useState<GeneratedCurriculum | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.role || !formData.focus) return;

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateCurriculum(formData.role, formData.experience, formData.focus);
      setResult(data);
    } catch (err) {
      setError("Failed to generate curriculum. Please check your inputs and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-20 bg-gradient-to-b from-corporate-50 to-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 transform translate-x-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold mb-4 border border-gold-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Career Planning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Not sure where to start? <br/>
            <span className="text-corporate-600">Let AI build your roadmap.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Input your role and career goals, and our Gemini-powered engine will design a personalized curriculum matrix tailored for financial professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2 text-corporate-500" />
              Define Your Profile
            </h3>
            <form onSubmit={handleGenerate} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Job Role</label>
                <input
                  type="text"
                  placeholder="e.g. Risk Analyst, Investment Banker"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-corporate-500 transition-colors"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Experience Level</label>
                <select
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-corporate-500 bg-white"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                >
                  <option value="Beginner">Entry Level (0-2 years)</option>
                  <option value="Intermediate">Mid-Senior (3-7 years)</option>
                  <option value="Expert">Executive (8+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Target Focus Area</label>
                <input
                  type="text"
                  placeholder="e.g. Fraud Detection, Automating Reporting"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-corporate-500 transition-colors"
                  value={formData.focus}
                  onChange={(e) => setFormData({...formData, focus: e.target.value})}
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full justify-center mt-2"
                isLoading={isLoading}
                icon={<Sparkles className="w-4 h-4" />}
              >
                Generate Custom Roadmap
              </Button>
            </form>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-7">
            {isLoading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                <div className="w-16 h-16 border-4 border-corporate-200 border-t-corporate-600 rounded-full animate-spin mb-4"></div>
                <h4 className="text-xl font-semibold text-slate-800">Analyzing Industry Trends...</h4>
                <p className="text-slate-500">Curating modules for {formData.role || 'finance professional'}...</p>
              </div>
            )}

            {!isLoading && !result && !error && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                <BookOpen className="w-16 h-16 text-slate-300 mb-4" />
                <h4 className="text-lg font-medium text-slate-400">Your personalized roadmap will appear here</h4>
              </div>
            )}
            
            {error && (
               <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-red-700">
                 {error}
               </div>
            )}

            {result && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="bg-corporate-900 p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-corporate-300 text-sm font-medium uppercase tracking-wider mb-1">Tailored for</p>
                      <h3 className="text-2xl font-bold">{result.role}</h3>
                    </div>
                    <div className="bg-white/10 p-2 rounded-lg backdrop-blur">
                      <Sparkles className="w-6 h-6 text-gold-400" />
                    </div>
                  </div>
                  <p className="mt-4 text-corporate-100 leading-relaxed text-sm border-t border-white/10 pt-4">
                    {result.summary}
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {result.modules.map((module, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-corporate-100 text-corporate-700 flex items-center justify-center font-bold text-sm border border-corporate-200">
                            {index + 1}
                          </div>
                          {index !== result.modules.length - 1 && (
                            <div className="w-0.5 h-full bg-slate-200 my-2"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-slate-900">{module.title}</h4>
                            <span className="flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.estimatedHours}h
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm mb-3">{module.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {module.keyTopics.map((topic, idx) => (
                              <span key={idx} className="flex items-center text-xs text-corporate-700 bg-corporate-50 px-2 py-1 rounded border border-corporate-100">
                                <CheckCircle2 className="w-3 h-3 mr-1 opacity-50" />
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
                    <Button variant="secondary" onClick={() => document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})}>
                      Browse Related Courses
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};