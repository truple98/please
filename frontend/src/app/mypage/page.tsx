import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

// Mock 사용자 데이터
const mockUser = {
  name: "김도시",
  email: "kim@example.com",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b999?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  joinDate: "2024-01-15",
  totalExperiences: 3,
  totalReviews: 2,
  totalSpent: 180000,
  favoriteCategory: "🎨 공방",
  level: "실버",
  points: 1250,
  nextLevelPoints: 2000,
  bio: "자연 속에서 힐링할 수 있는 체험을 좋아해요 🌿",
  interests: ["도자기", "목공", "농장체험", "힐링"],
  location: "서울시 강남구"
};

// Mock 예약 데이터
const mockReservations = [
  {
    id: 1,
    experienceTitle: "도자기 만들기 클래스",
    date: "2025-02-15",
    time: "14:00-17:00",
    status: "confirmed",
    price: 50000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    location: "경기도 여주",
    category: "🎨 공방",
    hostName: "여주도자기공방"
  },
  {
    id: 2,
    experienceTitle: "목공 체험",
    date: "2025-02-20",
    time: "10:00-14:00",
    status: "pending",
    price: 80000,
    image: "https://images.unsplash.com/photo-1551036183-7e65b201c9b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    location: "강원도 평창",
    category: "🔨 목공",
    hostName: "평창목공방"
  },
  {
    id: 3,
    experienceTitle: "친환경 농장 체험",
    date: "2025-01-20",
    time: "09:00-12:00",
    status: "completed",
    price: 30000,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    location: "충청남도 논산",
    category: "🌾 농장",
    hostName: "논산친환경농장",
    reviewSubmitted: true,
    rating: 5
  }
];

// Mock 즐겨찾기 데이터
const mockFavorites = [
  {
    id: 1,
    title: "전통 한지 공예 체험",
    location: "전라북도 전주",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    price: 45000,
    rating: 4.9,
    category: "📜 공예",
    isAvailable: true
  },
  {
    id: 2,
    title: "산촌 힐링 체험",
    location: "경상북도 안동",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    price: 65000,
    rating: 4.7,
    category: "🏔️ 산촌",
    isAvailable: false
  },
  {
    id: 3,
    title: "천연 염색 체험",
    location: "제주도 서귀포",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    price: 55000,
    rating: 4.8,
    category: "🎨 염색",
    isAvailable: true
  }
];

// Mock 활동 내역
const mockActivities = [
  {
    id: 1,
    type: "review",
    title: "친환경 농장 체험 후기를 작성했습니다",
    date: "2025-01-22",
    icon: "✍️"
  },
  {
    id: 2,
    type: "favorite",
    title: "전통 한지 공예 체험을 즐겨찾기에 추가했습니다",
    date: "2025-01-20",
    icon: "❤️"
  },
  {
    id: 3,
    type: "booking",
    title: "목공 체험을 예약했습니다",
    date: "2025-01-18",
    icon: "📅"
  },
  {
    id: 4,
    type: "level",
    title: "실버 레벨로 승급했습니다!",
    date: "2025-01-15",
    icon: "🏆"
  }
];

export default function MyPage() {
  const progressPercentage = (mockUser.points / mockUser.nextLevelPoints) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <Section className="py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">마이페이지</h1>
              <Button variant="outline" size="sm">
                ⚙️ 설정
              </Button>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* 프로필 헤더 */}
          <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-r from-primary/5 to-blue-50">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* 프로필 정보 */}
              <div className="flex items-center gap-6 flex-1">
                <div className="relative">
                  <img
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {mockUser.level}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{mockUser.name}</h2>
                  <p className="text-gray-600 mb-2">{mockUser.email}</p>
                  <p className="text-gray-700 mb-3">{mockUser.bio}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>📍 {mockUser.location}</span>
                    <span>📅 {mockUser.joinDate} 가입</span>
                  </div>
                </div>
              </div>

              {/* 레벨 진행도 */}
              <div className="w-full lg:w-80">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">포인트 진행도</span>
                    <span className="text-sm font-bold text-primary">{mockUser.points} / {mockUser.nextLevelPoints}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">골드 레벨까지 {mockUser.nextLevelPoints - mockUser.points}P 남음</p>
                </div>
              </div>

              {/* 프로필 수정 버튼 */}
              <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary">
                ✏️ 프로필 수정
              </Button>
            </div>
          </Card>

          {/* 통계 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-primary mb-1">{mockUser.totalExperiences}</div>
              <div className="text-sm text-gray-600">참여한 체험</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">✍️</div>
              <div className="text-2xl font-bold text-green-600 mb-1">{mockUser.totalReviews}</div>
              <div className="text-sm text-gray-600">작성한 후기</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">❤️</div>
              <div className="text-2xl font-bold text-red-500 mb-1">{mockFavorites.length}</div>
              <div className="text-sm text-gray-600">즐겨찾기</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl font-bold text-orange-600 mb-1">{(mockUser.totalSpent / 10000).toFixed(0)}만원</div>
              <div className="text-sm text-gray-600">총 결제금액</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 왼쪽: 예약 내역 & 즐겨찾기 */}
            <div className="lg:col-span-2 space-y-8">
              {/* 예약 내역 */}
              <Card className="p-6 border-0 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    📅 예약 내역
                  </h2>
                  <Button variant="outline" size="sm">전체 보기</Button>
                </div>
                
                <div className="space-y-4">
                  {mockReservations.map((reservation) => (
                    <div key={reservation.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <img
                        src={reservation.image}
                        alt={reservation.experienceTitle}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                            {reservation.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            reservation.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : reservation.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {reservation.status === 'confirmed' ? '예약확정' : 
                             reservation.status === 'pending' ? '예약대기' : '완료'}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">{reservation.experienceTitle}</h3>
                        <p className="text-sm text-gray-600 mb-1">📍 {reservation.location}</p>
                        <p className="text-sm text-gray-600">🕐 {reservation.date} {reservation.time}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary mb-2">
                          {reservation.price.toLocaleString()}원
                        </div>
                        {reservation.status === 'completed' && !reservation.reviewSubmitted && (
                          <Button size="sm" variant="outline">후기 작성</Button>
                        )}
                        {reservation.status === 'completed' && reservation.reviewSubmitted && (
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <span>⭐</span>
                            <span>{reservation.rating}</span>
                          </div>
                        )}
                        {reservation.status === 'confirmed' && (
                          <Button size="sm">예약 상세</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 즐겨찾기 */}
              <Card className="p-6 border-0 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    ❤️ 즐겨찾기
                  </h2>
                  <Button variant="outline" size="sm">전체 보기</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockFavorites.map((favorite) => (
                    <div key={favorite.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="relative mb-3">
                        <img
                          src={favorite.image}
                          alt={favorite.title}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        {!favorite.isAvailable && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-medium">예약 마감</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                            {favorite.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500 text-sm">⭐</span>
                            <span className="text-sm font-semibold">{favorite.rating}</span>
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900">{favorite.title}</h4>
                        <p className="text-sm text-gray-600">📍 {favorite.location}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">{favorite.price.toLocaleString()}원</span>
                          <Button size="sm" disabled={!favorite.isAvailable}>
                            {favorite.isAvailable ? '예약하기' : '마감'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* 오른쪽: 사이드바 */}
            <div className="space-y-6">
              {/* 관심사 */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🎯 관심사
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">❤️</span>
                    <span className="text-gray-700">선호 카테고리: <strong>{mockUser.favoriteCategory}</strong></span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-100 text-primary border border-primary/20 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* 최근 활동 */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📋 최근 활동
                </h3>
                <div className="space-y-4">
                  {mockActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <span className="text-lg mt-1">{activity.icon}</span>
                      <div>
                        <p className="text-sm text-gray-700 leading-relaxed">{activity.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  전체 활동 보기
                </Button>
              </Card>

              {/* 빠른 액션 */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  ⚡ 빠른 액션
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    🔍 새로운 체험 찾기
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    💬 AI 추천 받기
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🎁 친구에게 체험 선물하기
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📞 고객센터 문의
                  </Button>
                </div>
              </Card>

              {/* 설정 메뉴 */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  ⚙️ 계정 설정
                </h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary">
                    🔔 알림 설정
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary">
                    🔒 개인정보 수정
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary">
                    🔑 비밀번호 변경
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary">
                    💳 결제 수단 관리
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700">
                    🚪 회원탈퇴
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