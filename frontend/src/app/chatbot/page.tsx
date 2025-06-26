import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Avatar } from '@/components/ui/Avatar';

// Mock 메시지 데이터
const mockMessages = [
  {
    id: 1,
    type: 'bot',
    content: '안녕하세요! 도시밖 지방 체험 추천 챗봇입니다. 어떤 체험을 찾고 계신가요?',
    timestamp: '2025-01-27 19:00'
  },
  {
    id: 2,
    type: 'user',
    content: '혼자서 할 수 있는 힐링 체험을 추천해주세요',
    timestamp: '2025-01-27 19:01'
  },
  {
    id: 3,
    type: 'bot',
    content: '혼자서 즐길 수 있는 힐링 체험을 추천해드릴게요!',
    timestamp: '2025-01-27 19:01'
  },
  {
    id: 4,
    type: 'bot',
    content: '추천 체험: 도자기 만들기 클래스 (경기도 여주) - 흙을 만지며 마음을 정리하는 체험입니다.',
    timestamp: '2025-01-27 19:01'
  }
];

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 체험 추천 챗봇</h1>
            <p className="text-gray-600">당신에게 맞는 지방 체험을 추천해드립니다</p>
          </div>

          {/* 챗봇 인터페이스 */}
          <Card className="h-[600px] flex flex-col">
            {/* 메시지 영역 */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                      <Avatar
                        src={message.type === 'bot' ? '/images/bot-avatar.jpg' : '/images/user-avatar.jpg'}
                        alt={message.type === 'bot' ? 'AI 챗봇' : '사용자'}
                        className="w-8 h-8"
                      />
                      <div
                        className={`p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 입력 영역 */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="메시지를 입력하세요..."
                  className="flex-1"
                />
                <Button>전송</Button>
              </div>
            </div>
          </Card>

          {/* 추천 체험 카드 */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">추천 체험</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <img
                  src="/images/pottery.jpg"
                  alt="도자기 만들기"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold mb-1">도자기 만들기 클래스</h3>
                <p className="text-sm text-gray-600 mb-2">경기도 여주</p>
                <p className="text-sm text-gray-700 mb-3">흙을 만지며 마음을 정리하는 체험</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-600">50,000원</span>
                  <Button size="sm">자세히 보기</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 