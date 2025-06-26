'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

// 메시지 타입 정의
interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
  isTyping?: boolean;
  experienceCard?: {
    id: string;
    title: string;
    location: string;
    image: string;
    price: number;
    rating: number;
    category: string;
    description: string;
  };
}

// 체험 데이터
const experienceDatabase = [
  {
    id: 'exp001',
    title: '도자기 만들기 클래스',
    location: '경기도 여주',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    price: 50000,
    rating: 4.8,
    category: '🎨 공방',
    description: '흙을 만지며 마음을 정리하는 체험입니다.',
    tags: ['혼자', '힐링', '공예', '조용함']
  },
  {
    id: 'exp002',
    title: '조용한 시골 공방의 목공 체험',
    location: '강원도 평창',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    price: 80000,
    rating: 4.9,
    category: '🎨 공방',
    description: '직접 손으로 무언가를 만드는 경험입니다.',
    tags: ['혼자', '목공', '창작', '집중']
  },
  {
    id: 'exp003',
    title: '친환경 농장 체험',
    location: '충청남도 논산',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    price: 30000,
    rating: 4.7,
    category: '🌾 농장',
    description: '자연과 함께하는 농작물 수확 체험입니다.',
    tags: ['농장', '가족', '자연', '교육', '그룹']
  },
  {
    id: 'exp004',
    title: '전통 한지 공예 체험',
    location: '전라북도 전주',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    price: 45000,
    rating: 4.6,
    category: '🎨 공방',
    description: '한국의 전통 한지로 만드는 아름다운 작품입니다.',
    tags: ['전통', '한지', '문화', '공예']
  },
  {
    id: 'exp005',
    title: '산촌 마을 체험',
    location: '경상북도 안동',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    price: 35000,
    rating: 4.8,
    category: '🏛️ 문화',
    description: '시골 마을에서 즐기는 전통 문화 체험입니다.',
    tags: ['전통', '문화', '마을', '역사', '자연']
  },
  {
    id: 'exp006',
    title: '천연 염색 체험',
    location: '충청북도 청주',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    price: 60000,
    rating: 4.9,
    category: '🎨 공방',
    description: '자연의 색으로 물들이는 아름다운 시간입니다.',
    tags: ['염색', '자연', '색상', '예술']
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

// AI 응답 생성 함수
const generateAIResponse = (userMessage: string): { content: string; experiences?: any[] } => {
  const message = userMessage.toLowerCase();
  
  // 키워드 기반 응답 생성
  if (message.includes('힐링') || message.includes('혼자') || message.includes('조용')) {
    const experiences = experienceDatabase.filter(exp => 
      exp.tags.some(tag => ['혼자', '힐링', '조용함'].includes(tag))
    );
    return {
      content: '혼자서 즐길 수 있는 힐링 체험을 추천해드릴게요! 🧘‍♀️ 마음의 평안을 찾을 수 있는 체험들이에요.',
      experiences: experiences.slice(0, 2)
    };
  }
  
  if (message.includes('그룹') || message.includes('친구') || message.includes('함께')) {
    const experiences = experienceDatabase.filter(exp => 
      exp.tags.some(tag => ['그룹', '가족'].includes(tag))
    );
    return {
      content: '친구들과 함께 즐길 수 있는 체험을 추천해드릴게요! 👥 좋은 추억을 만들어보세요.',
      experiences: experiences.slice(0, 2)
    };
  }
  
  if (message.includes('농장') || message.includes('농촌') || message.includes('자연')) {
    const experiences = experienceDatabase.filter(exp => 
      exp.tags.some(tag => ['농장', '자연'].includes(tag))
    );
    return {
      content: '자연과 함께하는 농촌 체험을 추천해드릴게요! 🌾 도시를 벗어나 새로운 경험을 해보세요.',
      experiences: experiences.slice(0, 2)
    };
  }
  
  if (message.includes('공예') || message.includes('만들기') || message.includes('공방')) {
    const experiences = experienceDatabase.filter(exp => 
      exp.tags.some(tag => ['공예', '창작'].includes(tag))
    );
    return {
      content: '손으로 직접 만드는 공예 체험을 추천해드릴게요! 🎨 창작의 즐거움을 느껴보세요.',
      experiences: experiences.slice(0, 2)
    };
  }
  
  if (message.includes('예산') || message.includes('5만원') || message.includes('저렴')) {
    const experiences = experienceDatabase.filter(exp => exp.price <= 50000);
    return {
      content: '5만원 이하의 합리적인 가격의 체험을 추천해드릴게요! 💰 가성비 좋은 체험들이에요.',
      experiences: experiences.slice(0, 2)
    };
  }
  
  if (message.includes('전통') || message.includes('문화') || message.includes('역사')) {
    const experiences = experienceDatabase.filter(exp => 
      exp.tags.some(tag => ['전통', '문화', '역사'].includes(tag))
    );
    return {
      content: '우리나라의 아름다운 전통문화를 체험할 수 있는 프로그램을 추천해드릴게요! 🏛️',
      experiences: experiences.slice(0, 2)
    };
  }
  
  // 기본 응답
  const randomExperiences = experienceDatabase.sort(() => 0.5 - Math.random()).slice(0, 2);
  return {
    content: '다양한 지방 체험을 준비했어요! 어떤 체험이 마음에 드시나요? 😊',
    experiences: randomExperiences
  };
};

export default function ChatbotPage() {
  // 상태 관리
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: '안녕하세요! 👋 도시밖 지방 체험 추천 AI입니다. 어떤 체험을 찾고 계신가요?',
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [savedConversations, setSavedConversations] = useState<any[]>([]);
  const [showConversations, setShowConversations] = useState(false);

  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(2);
  const recognitionRef = useRef<any>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 컴포넌트 마운트 시 저장된 대화 목록 로드
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('chatbot-conversations') || '[]');
    setSavedConversations(saved);

    // Web Speech API 초기화
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'ko-KR';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);



  // 메시지 스크롤 - 채팅 컨테이너 내에서만
  const scrollToBottom = () => {
    if (messagesEndRef.current && chatContainerRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showConversations) {
        const target = event.target as Element;
        if (!target.closest('.conversation-dropdown')) {
          setShowConversations(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showConversations]);

  // 음성 인식 시작/중지
  const toggleVoiceRecognition = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        alert('음성 인식을 지원하지 않는 브라우저입니다.');
      }
    }
  };

  // 대화 불러오기
  const loadConversation = (conversation: any) => {
    setMessages(conversation.messages);
    messageIdRef.current = Math.max(...conversation.messages.map((m: any) => m.id)) + 1;
    setShowConversations(false);
  };

  // 대화 삭제
  const deleteConversation = (conversationId: number) => {
    const updated = savedConversations.filter(conv => conv.id !== conversationId);
    setSavedConversations(updated);
    localStorage.setItem('chatbot-conversations', JSON.stringify(updated));
  };

  // 메시지 전송
  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: messageIdRef.current++,
      type: 'user',
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    // AI 응답 생성 (2초 딜레이로 실제 AI처럼 보이게)
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      
      // 텍스트 응답을 타이핑 효과로 표시
      const botMessageId = messageIdRef.current++;
      const botMessage: Message = {
        id: botMessageId,
        type: 'bot',
        content: '',
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // 스트리밍 타이핑 효과
      const fullText = aiResponse.content;
      let currentText = '';
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          currentText += fullText[charIndex];
          setMessages(prev => 
            prev.map(msg => 
              msg.id === botMessageId 
                ? { ...msg, content: currentText }
                : msg
            )
          );
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          // 체험 카드 추가 (타이핑 완료 후 0.5초 후)
          if (aiResponse.experiences && aiResponse.experiences.length > 0) {
            setTimeout(() => {
              const experienceMessages = aiResponse.experiences!.map(exp => ({
                id: messageIdRef.current++,
                type: 'bot' as const,
                content: '',
                timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
                experienceCard: exp
              }));

              setMessages(prev => [...prev, ...experienceMessages]);
              
              // 추가 안내 메시지 (타이핑 효과 적용)
              setTimeout(() => {
                const followUpMessageId = messageIdRef.current++;
                const followUpMessage: Message = {
                  id: followUpMessageId,
                  type: 'bot',
                  content: '',
                  timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
                };
                
                setMessages(prev => [...prev, followUpMessage]);
                
                // 추가 메시지 타이핑 효과
                const followUpText = '이런 체험들은 어떠신가요? 더 자세한 정보를 원하시거나 다른 조건이 있으시면 언제든 말씀해주세요! 😊';
                let followUpCurrentText = '';
                let followUpCharIndex = 0;

                const followUpTypeInterval = setInterval(() => {
                  if (followUpCharIndex < followUpText.length) {
                    followUpCurrentText += followUpText[followUpCharIndex];
                    setMessages(prev => 
                      prev.map(msg => 
                        msg.id === followUpMessageId 
                          ? { ...msg, content: followUpCurrentText }
                          : msg
                      )
                    );
                    followUpCharIndex++;
                  } else {
                    clearInterval(followUpTypeInterval);
                  }
                }, 30);
              }, 1000);
            }, 500);
          }
        }
      }, 30); // 30ms마다 한 글자씩

      setIsLoading(false);
    }, 2000);
  };

  // 빠른 질문 클릭
  const handleQuickQuestion = (questionText: string) => {
    sendMessage(questionText);
  };

  // 엔터키 처리
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputMessage);
    }
  };

  // 대화 저장
  const saveConversation = () => {
    const conversation = {
      id: Date.now(),
      title: `대화 ${new Date().toLocaleDateString('ko-KR')} ${new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}`,
      messages,
      savedAt: new Date().toISOString()
    };
    
    const updated = [...savedConversations, conversation];
    setSavedConversations(updated);
    localStorage.setItem('chatbot-conversations', JSON.stringify(updated));
    
    alert('대화가 저장되었습니다! 📝');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-30">
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
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{aiAssistant.name}</h1>
                  <p className="text-sm text-gray-600">
                    {isLoading ? '답변을 생각하고 있어요...' : aiAssistant.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={saveConversation}>
                  💾 대화 저장
                </Button>
                
                {/* 대화 불러오기 드롭다운 */}
                <div className="relative conversation-dropdown">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowConversations(!showConversations)}
                    disabled={savedConversations.length === 0}
                  >
                    📂 대화 기록 ({savedConversations.length})
                  </Button>
                  
                  {showConversations && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                      <div className="p-3 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">저장된 대화</h3>
                      </div>
                      {savedConversations.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">
                          저장된 대화가 없습니다
                        </div>
                      ) : (
                        savedConversations.map((conv) => (
                          <div key={conv.id} className="border-b border-gray-50 last:border-b-0">
                            <div className="p-3 hover:bg-gray-50 flex items-center justify-between">
                              <div 
                                className="flex-1 cursor-pointer"
                                onClick={() => loadConversation(conv)}
                              >
                                <div className="font-medium text-sm text-gray-900">
                                  {conv.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {conv.messages.length}개 메시지 • {new Date(conv.savedAt).toLocaleDateString('ko-KR')}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteConversation(conv.id);
                                }}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                🗑️
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setMessages([{
                      id: 1,
                      type: 'bot',
                      content: '안녕하세요! 👋 도시밖 지방 체험 추천 AI입니다. 어떤 체험을 찾고 계신가요?',
                      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
                    }]);
                    messageIdRef.current = 2;
                  }}
                >
                  🔄 새 대화
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* 메인 컨테이너 */}
      <Section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* 메인 채팅 컨테이너 - 고정 높이로 독립 스크롤 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6" style={{ height: '600px' }}>
            <div className="h-full flex flex-col">
              {/* 메시지 영역 - 독립 스크롤 */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50/50 to-white"
              >
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div key={message.id}>
                      {/* 일반 메시지 */}
                      {message.content && (
                        <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-start gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                            {message.type === 'bot' && (
                              <img
                                src={aiAssistant.avatar}
                                alt="AI 챗봇"
                                className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
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
                              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                            />
                            <Card className="p-4 max-w-sm border-0 shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105">
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
                                  <Button 
                                    size="sm"
                                    onClick={() => window.open(`/experience/${message.experienceCard!.id}`, '_blank')}
                                  >
                                    자세히 보기
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* 타이핑 인디케이터 */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-3">
                        <img
                          src={aiAssistant.avatar}
                          alt="AI 챗봇"
                          className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
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
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* 입력 영역 - 하단 고정 */}
              <div className="border-t border-gray-100 p-6 bg-white flex-shrink-0">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={
                        isListening 
                          ? "🎤 음성을 인식하고 있습니다..." 
                          : isLoading 
                            ? "AI가 답변 중입니다..." 
                            : "메시지를 입력하세요..."
                      }
                      className={`w-full border-2 border-gray-200 focus:border-primary rounded-xl px-4 py-3 pr-12 ${
                        isListening ? 'border-red-300 bg-red-50' : ''
                      }`}
                      disabled={isLoading}
                    />
                    {/* 음성 인식 버튼 */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleVoiceRecognition}
                      disabled={isLoading}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 h-8 w-8 ${
                        isListening 
                          ? 'text-red-500 bg-red-100 hover:bg-red-200 animate-pulse' 
                          : 'text-gray-400 hover:text-primary hover:bg-primary/10'
                      }`}
                      title={isListening ? '음성 인식 중지' : '음성 인식 시작'}
                    >
                      🎤
                    </Button>
                  </div>
                  
                  <Button 
                    onClick={() => sendMessage(inputMessage)}
                    disabled={!inputMessage.trim() || isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white rounded-xl font-semibold disabled:opacity-50"
                  >
                    {isLoading ? '...' : '전송'}
                  </Button>
                </div>
                
                {/* 음성 인식 상태 표시 */}
                {isListening && (
                  <div className="mt-3 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      음성을 말씀해주세요
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 빠른 질문 - 컴팩트 버전 */}
          <Card className="p-3 mb-3 flex-shrink-0 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
              ⚡ 빠른 질문
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="justify-start text-left h-auto p-2 text-xs hover:bg-white hover:border-primary/30 transition-all disabled:opacity-50"
                  onClick={() => handleQuickQuestion(question.text)}
                  disabled={isLoading}
                >
                  <span className="mr-1">{question.icon}</span>
                  <span>{question.text}</span>
                </Button>
              ))}
            </div>
          </Card>

          {/* 인기 키워드 클라우드 */}
          <Card className="p-4 bg-gradient-to-r from-primary/5 to-blue-50 border-primary/20">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              🔥 인기 키워드로 빠른 검색
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                '혼자 여행', '힐링', '커플 데이트', '친구들과', '가족 나들이',
                '도자기', '목공', '농장 체험', '전통 요리', '한지 공예',
                '주말 당일', '1박2일', '예산 5만원', '서울 근교', '강원도',
                '경기도', '전라도', '제주도'
              ].map((keyword) => (
                <button
                  key={keyword}
                  className="px-3 py-1.5 bg-white/70 hover:bg-primary/10 hover:border-primary/30 text-gray-700 hover:text-primary rounded-full text-xs border border-primary/20 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
                  onClick={() => sendMessage(keyword + ' 체험 추천해주세요')}
                  disabled={isLoading}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
} 