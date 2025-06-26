import React from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

// Mock 데이터 (실제로는 API에서 가져올 예정)
const mockExperience = {
  id: "exp001",
  title: "도자기 만들기 클래스",
  description: "흙을 만지며 마음을 정리하는 체험입니다. 전문 도예가의 지도 아래 직접 흙을 빚어 아름다운 도자기를 만들어보세요. 도자기 제작의 모든 과정을 체험할 수 있으며, 완성된 작품은 약 2주 후 택배로 받으실 수 있습니다.",
  location: "경기도 여주",
  imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  category: "🎨 공방",
  price: 50000,
  originalPrice: 65000,
  date: "2025-02-15",
  host: {
    name: "여주도자기공방",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    experience: "15년"
  },
  rating: 4.8,
  reviewCount: 127,
  duration: "3시간",
  maxParticipants: 8,
  difficulty: "초급",
  tags: ["혼자", "힐링", "자연", "조용함"],
  longDescription: `도자기 만들기는 단순한 공예가 아닌, 마음을 정리하는 힐링의 시간입니다.

🎯 **체험 하이라이트**
• 전문 도예가의 1:1 맞춤 지도
• 고급 점토와 전문 도구 무료 제공  
• 도자기 제작의 모든 과정 체험
• 완성된 작품 2주 후 무료 택배 발송

🏞️ **체험 장소**
여주의 아름다운 자연 속에 위치한 전통 도자기 공방에서 진행됩니다. 조용하고 평화로운 분위기에서 오롯이 도자기 만들기에 집중할 수 있는 힐링 공간입니다.

⏰ **체험 일정**
• 10:00-11:00 도자기 역사 및 기법 소개
• 11:00-12:30 실습 (물레 체험 및 성형)
• 12:30-13:00 마무리 및 건조 과정 설명`,
  reviews: [
    {
      id: 1,
      user: "김우주",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b999?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment: "정말 힐링되는 시간이었어요! 도예가 선생님이 너무 친절하게 가르쳐주셔서 처음이지만 예쁜 작품을 만들 수 있었습니다. 완성된 도자기가 택배로 도착했을 때 감동이었어요 ✨",
      date: "2025-01-20",
      images: ["https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"]
    },
    {
      id: 2,
      user: "박서준", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4,
      comment: "도자기 만드는 과정이 생각보다 재미있었어요. 물레 돌리는 게 어려웠지만 그래서 더 보람찼습니다. 공방 분위기도 정말 좋고 추천해요!",
      date: "2025-01-18"
    },
    {
      id: 3,
      user: "이소영",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80", 
      rating: 5,
      comment: "혼자 참여했는데 전혀 어색하지 않았어요. 오히려 혼자만의 시간을 가질 수 있어서 더 좋았습니다. 마음이 정말 편안해졌어요 🧘‍♀️",
      date: "2025-01-15"
    }
  ],
  facilities: [
    { icon: "🅿️", name: "무료 주차" },
    { icon: "🚻", name: "화장실" },
    { icon: "☕", name: "카페테리아" },
    { icon: "📸", name: "포토존" }
  ],
  includes: [
    "전문 도구 대여",
    "고급 점토 제공", 
    "완성품 포장",
    "무료 택배 발송",
    "차 또는 커피 1잔"
  ]
};

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 뒤로가기 버튼 */}
      <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" className="hover:bg-blue-50">
            ← 체험 목록으로
          </Button>
        </div>
      </div>

      <Section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* 메인 이미지 및 정보 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* 이미지 섹션 */}
              <div className="relative">
                <img
                  src={mockExperience.imageUrl}
                  alt={mockExperience.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {mockExperience.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  📸 1/5
                </div>
              </div>

              {/* 정보 섹션 */}
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{mockExperience.title}</h1>
                  <p className="text-gray-600 mb-3 flex items-center gap-2">
                    📍 {mockExperience.location}
                  </p>
                  
                  {/* 평점 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-lg">⭐</span>
                      <span className="font-bold text-lg">{mockExperience.rating}</span>
                    </div>
                    <span className="text-gray-500">({mockExperience.reviewCount}개의 후기)</span>
                  </div>

                  {/* 호스트 정보 */}
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-6">
                    <img
                      src={mockExperience.host.avatar}
                      alt={mockExperience.host.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{mockExperience.host.name}</div>
                      <div className="text-sm text-gray-600">경력 {mockExperience.host.experience}</div>
                    </div>
                  </div>
                </div>

                {/* 가격 및 예약 */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{mockExperience.price.toLocaleString()}원</span>
                    <span className="text-lg text-gray-400 line-through">{mockExperience.originalPrice.toLocaleString()}원</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-sm font-bold">
                      23% 할인
                    </span>
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transform hover:scale-[1.02] transition-all duration-200">
                    💳 지금 예약하기
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-2">즉시 확정 • 무료 취소 가능</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 왼쪽: 상세 정보 */}
            <div className="lg:col-span-2 space-y-8">
              {/* 체험 정보 카드 */}
              <Card className="p-6 border-0 shadow-md">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  📋 체험 정보
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-2">⏰</div>
                    <div className="text-sm text-gray-600">소요시간</div>
                    <div className="font-bold">{mockExperience.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-sm text-gray-600">최대 인원</div>
                    <div className="font-bold">{mockExperience.maxParticipants}명</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm text-gray-600">난이도</div>
                    <div className="font-bold">{mockExperience.difficulty}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl mb-2">📅</div>
                    <div className="text-sm text-gray-600">예약일</div>
                    <div className="font-bold">{mockExperience.date}</div>
                  </div>
                </div>
              </Card>

              {/* 태그 */}
              <Card className="p-6 border-0 shadow-md">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🏷️ 체험 태그
                </h2>
                <div className="flex flex-wrap gap-3">
                  {mockExperience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-100 text-primary border border-primary/20 rounded-full text-sm font-medium hover:shadow-md transition-shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              {/* 상세 설명 */}
              <Card className="p-6 border-0 shadow-md">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  📖 체험 소개
                </h2>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed">{mockExperience.longDescription}</p>
                </div>
              </Card>

              {/* 포함 사항 */}
              <Card className="p-6 border-0 shadow-md">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  ✅ 포함 사항
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mockExperience.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 후기 */}
              <Card className="p-6 border-0 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    💬 후기 ({mockExperience.reviewCount})
                  </h2>
                  <Button variant="outline" size="sm">전체 보기</Button>
                </div>
                
                <div className="space-y-6">
                  {mockExperience.reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold">{review.user}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                  >
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                          {review.images && (
                            <div className="flex gap-2">
                              {review.images.map((img, index) => (
                                <img
                                  key={index}
                                  src={img}
                                  alt="후기 사진"
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* 오른쪽: 사이드바 */}
            <div className="space-y-6">
              {/* 예약 요약 */}
              <Card className="p-6 border-0 shadow-md sticky top-24">
                <h3 className="text-lg font-bold mb-4">예약 요약</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>체험비</span>
                    <span>{mockExperience.price.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>할인 금액</span>
                    <span>-{(mockExperience.originalPrice - mockExperience.price).toLocaleString()}원</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>총 결제 금액</span>
                    <span className="text-primary">{mockExperience.price.toLocaleString()}원</span>
                  </div>
                </div>
                <Button className="w-full mb-3">예약하기</Button>
                <Button variant="outline" className="w-full">
                  💝 선물하기
                </Button>
              </Card>

              {/* 시설 정보 */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-bold mb-4">편의시설</h3>
                <div className="space-y-3">
                  {mockExperience.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-xl">{facility.icon}</span>
                      <span className="text-gray-700">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 문의하기 */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-bold mb-4">문의하기</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    💬 호스트에게 문의
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📞 전화 문의
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🚨 신고하기
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 