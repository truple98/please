import React from 'react';
import { ExperienceCard } from '@/components/features/ExperienceCard';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

// Mock 데이터 (실제로는 API에서 가져올 예정)
const mockExperiences = [
  {
    id: "exp001",
    title: "도자기 만들기 클래스",
    description: "흙을 만지며 마음을 정리하는 체험",
    location: "경기도 여주",
    imageUrl: "/images/pottery.jpg",
    category: "공방",
    price: 50000,
    date: "2025-02-15",
    host: "여주도자기공방",
    rating: 4.8,
    reviewCount: 127
  },
  {
    id: "exp002",
    title: "조용한 시골 공방의 목공 체험",
    description: "직접 손으로 무언가를 만드는 경험",
    location: "강원도 평창",
    imageUrl: "/images/woodworking.jpg",
    category: "공방",
    price: 80000,
    date: "2025-02-20",
    host: "평창목공소",
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: "exp003",
    title: "친환경 농장 체험",
    description: "자연과 함께하는 농작물 수확 체험",
    location: "충청남도 논산",
    imageUrl: "/images/farm.jpg",
    category: "농장",
    price: 30000,
    date: "2025-02-25",
    host: "논산친환경농장",
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: "exp004",
    title: "전통 한지 공예 체험",
    description: "한국의 전통 한지로 만드는 아름다운 작품",
    location: "전라북도 전주",
    imageUrl: "/images/papercraft.jpg",
    category: "공방",
    price: 45000,
    date: "2025-03-01",
    host: "전주한지공방",
    rating: 4.6,
    reviewCount: 203
  },
  {
    id: "exp005",
    title: "산촌 마을 체험",
    description: "시골 마을에서 즐기는 전통 문화 체험",
    location: "경상북도 안동",
    imageUrl: "/images/village.jpg",
    category: "문화",
    price: 35000,
    date: "2025-03-05",
    host: "안동산촌마을",
    rating: 4.8,
    reviewCount: 178
  },
  {
    id: "exp006",
    title: "천연 염색 체험",
    description: "자연의 색으로 물들이는 아름다운 시간",
    location: "충청북도 청주",
    imageUrl: "/images/dyeing.jpg",
    category: "공방",
    price: 60000,
    date: "2025-03-10",
    host: "청주천연염색소",
    rating: 4.9,
    reviewCount: 94
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">지방 체험 탐색</h1>
            <p className="text-gray-600">도시를 벗어나 지방의 특별한 체험을 발견해보세요</p>
          </div>

          {/* 검색 및 필터 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="search">검색</Label>
                <Input
                  id="search"
                  placeholder="체험명, 지역, 키워드 검색"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="category">카테고리</Label>
                <select
                  id="category"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">전체</option>
                  <option value="공방">공방</option>
                  <option value="농장">농장</option>
                  <option value="문화">문화</option>
                </select>
              </div>
              <div>
                <Label htmlFor="location">지역</Label>
                <select
                  id="location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">전체</option>
                  <option value="경기도">경기도</option>
                  <option value="강원도">강원도</option>
                  <option value="충청남도">충청남도</option>
                  <option value="전라북도">전라북도</option>
                  <option value="경상북도">경상북도</option>
                  <option value="충청북도">충청북도</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">검색</Button>
              </div>
            </div>
          </div>

          {/* 체험 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              더 많은 체험 보기
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 