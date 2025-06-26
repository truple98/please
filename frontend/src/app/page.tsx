import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Divider } from '@/components/ui/Divider';
import { Avatar } from '@/components/ui/Avatar';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Spinner } from '@/components/ui/Spinner';

// 추천 체험 미리보기 데이터
const featuredExperiences = [
  {
    id: 1,
    title: "강원도 홍천 도자기 공방 체험",
    location: "강원도 홍천",
    description: "흙을 만지며 마음을 정화하는 시간",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#힐링", "#수공예"]
  },
  {
    id: 2,
    title: "전남 담양 대나무 숲 산책",
    location: "전남 담양",
    description: "시원한 대나무 숲에서 찾는 여유",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#자연", "#산책"]
  },
  {
    id: 3,
    title: "경북 안동 전통 한지 만들기",
    location: "경북 안동",
    description: "천년의 전통을 손끝으로 느끼기",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#전통", "#문화"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 md:py-32 min-h-[80vh] flex items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              도시밖<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                지방 체험
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 text-balance">
              도시 청년들을 위한 AI 기반 지방 체험 큐레이션 플랫폼
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-balance">
              새로운 삶의 가능성을 발견하세요.<br />
              AI가 당신만을 위한 특별한 지방 체험을 추천해드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/chatbot">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  🤖 AI 추천 시작하기
                </Button>
              </Link>
              <Link href="/experience">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                  체험 둘러보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 배경 장식 요소 */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>
      </section>

      {/* 서비스 소개 섹션 */}
      <Section className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            어떤 경험을 찾고 계신가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            당신의 관심사와 기분에 맞춰 AI가 개인화된 지방 체험을 추천해드립니다.
            새로운 곳에서 새로운 나를 발견해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🗣️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">AI 맞춤 상담</h3>
            <p className="text-gray-600">
              챗봇과의 대화를 통해 당신만의 취향과 관심사를 파악합니다
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">개인화 추천</h3>
            <p className="text-gray-600">
              수백 개의 체험 중에서 당신에게 딱 맞는 체험만 골라드립니다
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">새로운 발견</h3>
            <p className="text-gray-600">
              평소 몰랐던 지역의 숨은 매력과 새로운 취미를 발견하세요
            </p>
          </div>
        </div>
      </Section>

      {/* 추천 체험 미리보기 섹션 */}
      <Section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            인기 체험 미리보기
          </h2>
          <p className="text-xl text-gray-600">
            다른 사람들이 즐겨 찾는 체험들을 먼저 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredExperiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{experience.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{experience.location}</p>
                <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                <Link href={`/experience/${experience.id}`}>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/experience">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              더 많은 체험 둘러보기
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA 섹션 - 색상 대비 개선 */}
      <Section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            지금 시작해보세요
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            AI와 함께 당신만의 특별한 지방 체험을 찾아보세요.<br />
            새로운 모험이 기다리고 있습니다.
          </p>
          <Link href="/chatbot">
            <button className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-xl bg-white text-black hover:bg-gray-100 border-2 border-white shadow-lg transition-all duration-200 transform active:scale-95">
              🚀 지금 체험 추천받기
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
