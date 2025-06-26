import React from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Divider } from '@/components/ui/Divider';

// Mock 데이터 (실제로는 API에서 가져올 예정)
const mockExperience = {
  id: "exp001",
  title: "도자기 만들기 클래스",
  description: "흙을 만지며 마음을 정리하는 체험입니다. 전문 도예가의 지도 아래 직접 흙을 빚어 아름다운 도자기를 만들어보세요. 도자기 제작의 모든 과정을 체험할 수 있으며, 완성된 작품은 약 2주 후 택배로 받으실 수 있습니다.",
  location: "경기도 여주",
  imageUrl: "/images/pottery.jpg",
  category: "공방",
  price: 50000,
  date: "2025-02-15",
  host: "여주도자기공방",
  rating: 4.8,
  reviewCount: 127,
  duration: "3시간",
  maxParticipants: 8,
  difficulty: "초급",
  tags: ["혼자", "힐링", "자연", "조용함"],
  longDescription: `
    도자기 만들기는 단순한 공예가 아닌, 마음을 정리하는 힐링의 시간입니다.
    
    이 체험에서는:
    • 전문 도예가의 1:1 지도
    • 고급 점토와 도구 제공
    • 도자기 제작의 모든 과정 체험
    • 완성된 작품 택배 서비스
    
    체험 장소는 여주의 아름다운 자연 속에 위치한 전통 도자기 공방입니다.
    조용하고 평화로운 분위기에서 도자기 만들기에 집중할 수 있습니다.
  `,
  reviews: [
    {
      id: 1,
      user: "김**",
      rating: 5,
      comment: "정말 힐링되는 시간이었어요. 도예가 선생님이 친절하게 가르쳐주셔서 처음이지만 잘 만들 수 있었습니다.",
      date: "2025-01-20"
    },
    {
      id: 2,
      user: "이**",
      rating: 4,
      comment: "도자기 만드는 과정이 생각보다 재미있었어요. 완성된 작품을 기다리는 중입니다!",
      date: "2025-01-18"
    }
  ]
};

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* 뒤로가기 버튼 */}
          <Button variant="ghost" className="mb-6">
            ← 체험 목록으로
          </Button>

          {/* 메인 정보 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <img
              src={mockExperience.imageUrl}
              alt={mockExperience.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockExperience.title}</h1>
                  <p className="text-gray-600 mb-2">{mockExperience.location} · {mockExperience.category}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{mockExperience.rating}</span>
                    <span className="text-gray-500">({mockExperience.reviewCount}개의 후기)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {mockExperience.price.toLocaleString()}원
                  </div>
                  <Button size="lg" className="w-full">
                    예약하기
                  </Button>
                </div>
              </div>

              {/* 체험 정보 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">소요시간</div>
                  <div className="font-semibold">{mockExperience.duration}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">최대 인원</div>
                  <div className="font-semibold">{mockExperience.maxParticipants}명</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">난이도</div>
                  <div className="font-semibold">{mockExperience.difficulty}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">예약일</div>
                  <div className="font-semibold">{mockExperience.date}</div>
                </div>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-2 mb-6">
                {mockExperience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">체험 소개</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line text-gray-700">{mockExperience.longDescription}</p>
            </div>
          </Card>

          {/* 후기 */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">후기 ({mockExperience.reviewCount})</h2>
            {mockExperience.reviews.map((review) => (
              <div key={review.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{review.user}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </Card>
        </div>
      </Section>
    </div>
  );
} 