"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  certifications: string[];
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  phone: string;
  email: string;
  education: string;
  workExperience: string[];
  skills: { name: string; percentage: number }[];
  detailedCertifications: {
    number: string;
    title: string;
    description: string;
  }[];
}

export default function TrainerProfilePage() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    if (id) {
      fetch(`/api/trainers/${id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Trainer not found');
          }
          return res.json();
        })
        .then(data => {
          setTrainer(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to fetch trainer:', err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p>Loading trainer profile...</p>
        </div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Trainer Not Found</h1>
          <p className="text-gray-400">The trainer you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const socialLinks = [
    { icon: 'facebook', url: trainer.social.facebook },
    { icon: 'twitter', url: trainer.social.twitter },
    { icon: 'instagram', url: trainer.social.instagram }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Profile */}
          <div>
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full max-w-md"
              />
            </div>

            {/* Name & Title */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">
                {trainer.name.toUpperCase()}
              </h1>
              <p className="text-orange-600 text-xl font-bold tracking-wide">
                {trainer.specialty.toUpperCase()}
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-400 leading-relaxed mb-8">
              {trainer.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-orange-600 p-3 transition-colors duration-300"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.icon}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`tel:${trainer.phone}`}
                className="block text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                {trainer.phone}
              </a>
              <a 
                href={`mailto:${trainer.email}`}
                className="block text-lg text-gray-400 hover:text-white transition-colors"
              >
                {trainer.email}
              </a>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-12">
            {/* Educational Qualification */}
            <div>
              <h2 className="text-2xl font-bold tracking-wider mb-4">
                EDUCATIONAL QUALIFICATION
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {trainer.education}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-2xl font-bold tracking-wider mb-6">
                WORK EXPERIENCE
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                With {trainer.experience} of professional experience, {trainer.name} has worked with various prestigious fitness centers and helped countless clients achieve their fitness goals.
              </p>
              <div className="space-y-3">
                {trainer.workExperience.map((job, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span className="text-white font-medium">{job}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Expertise */}
            <div>
              <h2 className="text-2xl font-bold tracking-wider mb-6">
                SKILLS & EXPERTISE
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {trainer.name} specializes in {trainer.specialty.toLowerCase()} with expertise in various training methodologies and techniques.
              </p>
              <div className="space-y-6">
                {trainer.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold">{skill.percentage}%</span>
                      <span className="text-gray-400">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2">
                      <div 
                        className="bg-orange-600 h-2 transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div>
              <h2 className="text-2xl font-bold tracking-wider mb-6">
                CERTIFICATION
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {trainer.name} holds multiple professional certifications that validate their expertise and commitment to excellence in fitness training.
              </p>
              <div className="space-y-6">
                {trainer.detailedCertifications.map((cert) => (
                  <div key={cert.number} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gray-900 w-12 h-12 flex items-center justify-center">
                        <span className="text-2xl font-bold text-orange-600">{cert.number}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 tracking-wider transition-all duration-300 transform hover:scale-105">
            BOOK A SESSION
          </button>
        </div>
      </div>
    </div>
  );
}