import React from 'react';
import { Experience } from '@/../../shared/types/experience';
import { Card } from '@/components/ui/Card';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="p-0 overflow-hidden">
      <img
        src={experience.imageUrl || '/images/placeholder.jpg'}
        alt={experience.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{experience.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{experience.location} · {experience.category}</p>
        <p className="text-sm text-gray-700 mb-2 line-clamp-2">{experience.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-semibold">{typeof experience.price === 'number' ? `${experience.price.toLocaleString()}원` : experience.price}</span>
          <span className="text-xs text-gray-400">{experience.date}</span>
        </div>
      </div>
    </Card>
  );
} 