import React from 'react';
import Link from 'next/link';
import { Experience } from '@/../../shared/types/experience';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  // 기본 fallback 이미지 (안정적인 Unsplash 이미지)
  const fallbackImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  
  return (
    <Card className="p-0 overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* 이미지 섹션 */}
      <div className="relative overflow-hidden">
        <img
          src={experience.imageUrl || fallbackImage}
          alt={experience.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* 카테고리 배지 */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 backdrop-blur-sm">
            {experience.category === '공방' && '🎨'}
            {experience.category === '농장' && '🌾'}
            {experience.category === '문화' && '🏛️'}
            <span className="ml-1 text-gray-700">{experience.category}</span>
          </span>
        </div>
        {/* 하트 아이콘 (찜하기) */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all cursor-pointer">
          <span className="text-gray-600 hover:text-red-500 transition-colors">🤍</span>
        </div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="p-6">
        {/* 제목 및 위치 */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {experience.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="mr-1">📍</span>
            <span>{experience.location}</span>
          </div>
        </div>

        {/* 설명 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {experience.description}
        </p>

        {/* 평점 및 리뷰 */}
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-semibold text-gray-700">{experience.rating}</span>
            <span className="text-sm text-gray-500">({experience.reviewCount})</span>
          </div>
        </div>

        {/* 가격 및 날짜 */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-blue-600 font-bold text-lg">
            {typeof experience.price === 'number' ? `${experience.price.toLocaleString()}원` : experience.price}
          </div>
          <div className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
            {experience.date}
          </div>
        </div>

        {/* 호스트 정보 */}
        <div className="text-xs text-gray-500 mb-4 border-t pt-3">
          호스트: {experience.host}
        </div>

        {/* 액션 버튼 */}
        <Link href={`/experience/${experience.id}`}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            체험 상세보기
          </Button>
        </Link>
      </div>
    </Card>
  );
} 