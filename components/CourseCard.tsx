import React from 'react';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onEnroll: (id: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-corporate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {course.level}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {course.tags.map(tag => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-corporate-600 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center font-semibold text-slate-900">
            {course.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
          </div>
        </div>
        
        <button 
          onClick={() => onEnroll(course.id)}
          className="mt-4 w-full py-2 flex items-center justify-center text-sm font-semibold text-corporate-600 hover:text-white border border-corporate-600 hover:bg-corporate-600 rounded-lg transition-all duration-200"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};