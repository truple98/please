import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Avatar } from '@/components/ui/Avatar';
import { Divider } from '@/components/ui/Divider';

// Mock 사용자 데이터
const mockUser = {
  name: "김도시",
  email: "kim@example.com",
  avatar: "/images/user-avatar.jpg",
  joinDate: "2024-01-15",
  totalExperiences: 3,
  totalReviews: 2
};

// Mock 예약 데이터
const mockReservations = [
  {
    id: 1,
    experienceTitle: "도자기 만들기 클래스",
    date: "2025-02-15",
    status: "confirmed",
    price: 50000
  },
  {
    id: 2,
    experienceTitle: "목공 체험",
    date: "2025-02-20",
    status: "pending",
    price: 80000
  }
];

// Mock 즐겨찾기 데이터
const mockFavorites = [
  {
    id: 1,
    title: "친환경 농장 체험",
    location: "충청남도 논산",
    imageUrl: "/images/farm.jpg",
    price: 30000
  },
  {
    id: 2,
    title: "전통 한지 공예 체험",
    location: "전라북도 전주",
    imageUrl: "/images/papercraft.jpg",
    price: 45000
  }
];

export default function MyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* 프로필 섹션 */}
          <Card className="p-6 mb-8">
            <div className="flex items-center gap-6">
              <Avatar
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-20 h-20"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{mockUser.name}</h1>
                <p className="text-gray-600 mb-2">{mockUser.email}</p>
                <p className="text-sm text-gray-500">가입일: {mockUser.joinDate}</p>
              </div>
              <div className="text-right">
                <Button variant="outline">프로필 수정</Button>
              </div>
            </div>
            
            <Divider className="my-6" />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{mockUser.totalExperiences}</div>
                <div className="text-sm text-gray-600">참여한 체험</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{mockUser.totalReviews}</div>
                <div className="text-sm text-gray-600">작성한 후기</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mockFavorites.length}</div>
                <div className="text-sm text-gray-600">즐겨찾기</div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 예약 내역 */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">예약 내역</h2>
                <Button variant="ghost" size="sm">전체 보기</Button>
              </div>
              
              <div className="space-y-4">
                {mockReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{reservation.experienceTitle}</h3>
                      <p className="text-sm text-gray-600">{reservation.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{reservation.price.toLocaleString()}원</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        reservation.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {reservation.status === 'confirmed' ? '확정' : '대기중'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* 즐겨찾기 */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">즐겨찾기</h2>
                <Button variant="ghost" size="sm">전체 보기</Button>
              </div>
              
              <div className="space-y-4">
                {mockFavorites.map((favorite) => (
                  <div key={favorite.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={favorite.imageUrl}
                      alt={favorite.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{favorite.title}</h3>
                      <p className="text-sm text-gray-600">{favorite.location}</p>
                      <p className="text-sm font-semibold text-blue-600">{favorite.price.toLocaleString()}원</p>
                    </div>
                    <Button size="sm">자세히 보기</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* 설정 메뉴 */}
          <Card className="p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">설정</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                알림 설정
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                개인정보 수정
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                비밀번호 변경
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-600">
                회원탈퇴
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
} 