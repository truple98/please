'use client';

import React, { useState, useMemo } from 'react';
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
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "공방",
    price: 50000,
    date: "2025-02-15",
    host: "여주도자기공방",
    rating: 4.8,
    reviewCount: 127,
    tags: ["힐링", "혼자", "도자기", "공예"]
  },
  {
    id: "exp002",
    title: "조용한 시골 공방의 목공 체험",
    description: "직접 손으로 무언가를 만드는 경험",
    location: "강원도 평창",
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "공방",
    price: 80000,
    date: "2025-02-20",
    host: "평창목공소",
    rating: 4.9,
    reviewCount: 89,
    tags: ["목공", "창작", "혼자", "집중"]
  },
  {
    id: "exp003",
    title: "친환경 농장 체험",
    description: "자연과 함께하는 농작물 수확 체험",
    location: "충청남도 논산",
    imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "농장",
    price: 30000,
    date: "2025-02-25",
    host: "논산친환경농장",
    rating: 4.7,
    reviewCount: 156,
    tags: ["자연", "농장", "가족", "교육"]
  },
  {
    id: "exp004",
    title: "전통 한지 공예 체험",
    description: "한국의 전통 한지로 만드는 아름다운 작품",
    location: "전라북도 전주",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "공방",
    price: 45000,
    date: "2025-03-01",
    host: "전주한지공방",
    rating: 4.6,
    reviewCount: 203,
    tags: ["전통", "한지", "문화", "공예"]
  },
  {
    id: "exp005",
    title: "산촌 마을 체험",
    description: "시골 마을에서 즐기는 전통 문화 체험",
    location: "경상북도 안동",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "문화",
    price: 35000,
    date: "2025-03-05",
    host: "안동산촌마을",
    rating: 4.8,
    reviewCount: 178,
    tags: ["전통", "문화", "마을", "역사"]
  },
  {
    id: "exp006",
    title: "천연 염색 체험",
    description: "자연의 색으로 물들이는 아름다운 시간",
    location: "충청북도 청주",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "공방",
    price: 60000,
    date: "2025-03-10",
    host: "청주천연염색소",
    rating: 4.9,
    reviewCount: 94,
    tags: ["염색", "자연", "색상", "예술"]
  }
];

// 정렬 옵션
const sortOptions = [
  { value: 'recommended', label: '추천순' },
  { value: 'latest', label: '최신순' },
  { value: 'price_asc', label: '가격 낮은순' },
  { value: 'price_desc', label: '가격 높은순' },
  { value: 'rating', label: '평점순' }
];

export default function ExperiencePage() {
  // 상태 관리
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // 필터링 및 정렬된 체험 목록
  const filteredAndSortedExperiences = useMemo(() => {
    let filtered = mockExperiences.filter((experience) => {
      // 검색어 필터
      const matchesSearch = searchTerm === '' || 
        experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        experience.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        experience.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        experience.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
        experience.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // 카테고리 필터
      const matchesCategory = selectedCategory === '' || experience.category === selectedCategory;

      // 지역 필터
      const matchesLocation = selectedLocation === '' || experience.location.includes(selectedLocation);

      // 가격 범위 필터
      const matchesPriceMin = priceRange.min === '' || experience.price >= parseInt(priceRange.min);
      const matchesPriceMax = priceRange.max === '' || experience.price <= parseInt(priceRange.max);

      return matchesSearch && matchesCategory && matchesLocation && matchesPriceMin && matchesPriceMax;
    });

    // 정렬
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'recommended':
        default:
          return b.rating * b.reviewCount - a.rating * a.reviewCount; // 평점 × 리뷰수
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedLocation, sortBy, priceRange]);

  // 필터 초기화
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
    setSortBy('recommended');
    setPriceRange({ min: '', max: '' });
  };

  // 활성화된 필터 개수
  const activeFiltersCount = [searchTerm, selectedCategory, selectedLocation, priceRange.min, priceRange.max]
    .filter(filter => filter !== '').length;

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              지방 체험 탐색
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              도시를 벗어나 지방의 특별한 체험을 발견해보세요
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <span>🔥</span>
              <span>현재 {mockExperiences.length}개의 체험이 등록되어 있습니다</span>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* 검색 및 필터 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <Label htmlFor="search" className="text-gray-700 font-semibold mb-2 block">
                  🔍 검색
                </Label>
                <Input
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="체험명, 지역, 키워드 검색"
                  className="border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-gray-700 font-semibold mb-2 block">
                  📂 카테고리
                </Label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-11 px-4 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option value="">전체</option>
                  <option value="공방">🎨 공방</option>
                  <option value="농장">🌾 농장</option>
                  <option value="문화">🏛️ 문화</option>
                </select>
              </div>
              <div>
                <Label htmlFor="location" className="text-gray-700 font-semibold mb-2 block">
                  📍 지역
                </Label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full h-11 px-4 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
              <div>
                <Label className="text-gray-700 font-semibold mb-2 block">
                  💰 가격 범위
                </Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    placeholder="최소"
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-xl text-xs"
                  />
                  <Input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    placeholder="최대"
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-xl text-xs"
                  />
                </div>
              </div>
            </div>

            {/* 필터 상태 및 초기화 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {activeFiltersCount > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {activeFiltersCount}개 필터 적용됨
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetFilters}
                      className="text-xs px-3 py-1 h-7"
                    >
                      🔄 초기화
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 정렬 및 결과 수 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="text-gray-600">
              총 <span className="font-bold text-gray-900">{filteredAndSortedExperiences.length}개</span>의 체험
              {filteredAndSortedExperiences.length !== mockExperiences.length && (
                <span className="text-blue-600 ml-2">
                  (전체 {mockExperiences.length}개 중)
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="sort" className="text-sm text-gray-600 whitespace-nowrap">
                정렬:
              </Label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 체험 목록 그리드 */}
          {filteredAndSortedExperiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-600 mb-6">다른 검색어나 필터를 시도해보세요</p>
              <Button 
                onClick={resetFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              >
                모든 필터 초기화
              </Button>
            </div>
          )}

          {/* 더보기 버튼 (결과가 있을 때만) */}
          {filteredAndSortedExperiences.length > 0 && (
            <div className="text-center mt-16">
              <Button variant="outline" size="lg" className="px-12 py-4 text-blue-600 border-2 border-blue-600 hover:bg-blue-50">
                더 많은 체험 보기
              </Button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
} 