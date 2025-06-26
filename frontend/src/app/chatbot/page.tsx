import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

// Mock 메시지 데이터
const mockMessages = [
  {
    id: 1,
    type: 'bot' as const,
    content: '안녕하세요! 👋 도시밖 지방 체험 추천 AI입니다. 어떤 체험을 찾고 계신가요?',
    timestamp: '2025-01-27 19:00',
    isTyping: false
  },
  {
    id: 2,
    type: 'user' as const,
    content: '혼자서 할 수 있는 힐링 체험을 추천해주세요',
    timestamp: '2025-01-27 19:01',
    isTyping: false
  },
  {
    id: 3,
    type: 'bot' as const,
    content: '혼자서 즐길 수 있는 힐링 체험을 추천해드릴게요! 🧘‍♀️',
    timestamp: '2025-01-27 19:01',
    isTyping: false
  },
  {
    id: 4,
    type: 'bot' as const,
    content: '',
    timestamp: '2025-01-27 19:02',
    isTyping: false,
    experienceCard: {
      id: 'exp001',
      title: '도자기 만들기 클래스',
      location: '경기도 여주',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: 50000,
      rating: 4.8,
      category: '🎨 공방',
      description: '흙을 만지며 마음을 정리하는 체험입니다.'
    }
  },
  {
    id: 5,
    type: 'bot' as const,
    content: '이런 체험은 어떠신가요? 조용한 공방에서 혼자만의 시간을 가지며 마음을 정리할 수 있어요. 더 자세한 정보를 원하시거나 다른 조건이 있으시면 알려주세요! 😊',
    timestamp: '2025-01-27 19:02',
    isTyping: false
  }
];

// 빠른 질문 예시
const quickQuestions = [
  { icon: '🧘‍♀️', text: '힐링 체험 추천해주세요', category: 'healing' },
  { icon: '👥', text: '친구들과 함께 할 수 있는 체험', category: 'group' },
  { icon: '🌾', text: '농촌 체험이 궁금해요', category: 'farm' },
  { icon: '🎨', text: '공예 체험 찾고 있어요', category: 'craft' },
  { icon: '🏔️', text: '자연 속에서 하는 체험', category: 'nature' },
  { icon: '💰', text: '예산 5만원 이하 체험', category: 'budget' }
];

// AI 어시스턴트 정보
const aiAssistant = {
  name: '도시밖 AI',
  avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  status: 'online',
  description: '지방 체험 전문 AI 추천 어시스턴트'
};

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <Section className="py-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={aiAssistant.avatar}
                    alt={aiAssistant.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{aiAssistant.name}</h1>
                  <p className="text-sm text-gray-600">{aiAssistant.description}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                💾 대화 저장
              </Button>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* 메인 채팅 컨테이너 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            {/* 메시지 영역 */}
            <div className="h-[500px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50/50 to-white">
              <div className="space-y-6">
                {mockMessages.map((message) => (
                  <div key={message.id}>
                    {/* 일반 메시지 */}
                    {message.content && (
                      <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-start gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                          {message.type === 'bot' && (
                            <img
                              src={aiAssistant.avatar}
                              alt="AI 챗봇"
                              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                            />
                          )}
                          <div
                            className={`px-4 py-3 rounded-2xl max-w-md ${
                              message.type === 'user'
                                ? 'bg-gradient-to-r from-primary to-blue-600 text-white'
                                : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <p className={`text-xs mt-2 ${
                              message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 체험 카드 메시지 */}
                    {message.experienceCard && (
                      <div className="flex justify-start">
                        <div className="flex items-start gap-3 max-w-[80%]">
                          <img
                            src={aiAssistant.avatar}
                            alt="AI 챗봇"
                            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                          />
                          <Card className="p-4 max-w-sm border-0 shadow-md hover:shadow-lg transition-shadow">
                            <img
                              src={message.experienceCard.image}
                              alt={message.experienceCard.title}
                              className="w-full h-32 object-cover rounded-xl mb-3"
                            />
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                                  {message.experienceCard.category}
                                </span>
                                <div className="flex items-center gap-1">
                                  <span className="text-yellow-500 text-sm">⭐</span>
                                  <span className="text-sm font-semibold">{message.experienceCard.rating}</span>
                                </div>
                              </div>
                              <h4 className="font-bold text-gray-900">{message.experienceCard.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">📍 {message.experienceCard.location}</p>
                              <p className="text-sm text-gray-700 mb-3">{message.experienceCard.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">
                                  {message.experienceCard.price.toLocaleString()}원
                                </span>
                                <Button size="sm">자세히 보기</Button>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* 타이핑 인디케이터 */}
                <div className="flex justify-start">
                  <div className="flex items-start gap-3">
                    <img
                      src={aiAssistant.avatar}
                      alt="AI 챗봇"
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 입력 영역 */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-3">
                <Input
                  placeholder="궁금한 체험에 대해 물어보세요..."
                  className="flex-1 border-gray-300 rounded-xl focus:border-primary focus:ring-primary/20"
                />
                <Button className="px-6 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary">
                  <span className="mr-2">✈️</span>
                  전송
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                AI가 당신에게 맞는 완벽한 지방 체험을 추천해드립니다
              </p>
            </div>
          </div>

          {/* 빠른 질문 섹션 */}
          <Card className="p-6 border-0 shadow-md mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              💡 이런 질문은 어떠세요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-primary/5 rounded-xl cursor-pointer transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{question.icon}</span>
                  <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    {question.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* AI 도움말 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI 소개 */}
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                🤖 AI 어시스턴트 소개
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>• <strong>개인 맞춤형 추천:</strong> 당신의 선호도와 상황을 분석하여 최적의 체험을 찾아드려요</p>
                <p>• <strong>실시간 정보 제공:</strong> 최신 체험 정보와 리뷰를 바탕으로 정확한 정보를 제공해요</p>
                <p>• <strong>24시간 상담:</strong> 언제든지 궁금한 것을 물어보세요</p>
                <p>• <strong>예약 도움:</strong> 체험 예약부터 준비물까지 모든 것을 도와드려요</p>
              </div>
            </Card>

            {/* 인기 체험 키워드 */}
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                🔥 인기 체험 키워드
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  '혼자', '힐링', '커플', '친구', '가족',
                  '도자기', '목공', '농장', '요리', '한지',
                  '주말', '당일', '1박2일', '예산5만원',
                  '서울근교', '경기도', '강원도', '전라도'
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-100 text-primary border border-primary/20 rounded-full text-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* 대화 기록 관리 */}
          <Card className="p-6 border-0 shadow-md mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              📋 대화 관리
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                🗑️ 대화 내역 삭제
              </Button>
              <Button variant="outline" size="sm">
                📤 대화 공유하기
              </Button>
              <Button variant="outline" size="sm">
                🔄 새로운 대화 시작
              </Button>
              <Button variant="outline" size="sm">
                ⚙️ AI 설정
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
} 