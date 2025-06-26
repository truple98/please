import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Divider } from '@/components/ui/Divider';
import { Avatar } from '@/components/ui/Avatar';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Spinner } from '@/components/ui/Spinner';

export default function Home() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">도시밖 지방 체험</h1>
        <p className="text-lg text-gray-600 mb-6">도시 청년들을 위한 지방 체험 큐레이션 플랫폼</p>
        <Button size="lg">체험 둘러보기</Button>
      </Section>
      <Divider />
      <Section>
        <h2 className="text-2xl font-semibold mb-4">기본 UI 컴포넌트 예시</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-bold mb-2">Button</h3>
            <Button>기본 버튼</Button>
            <Button variant="secondary" className="ml-2">Secondary</Button>
            <Button variant="outline" className="ml-2">Outline</Button>
          </Card>
          <Card>
            <h3 className="font-bold mb-2">Input & Label</h3>
            <Label htmlFor="test-input">이름</Label>
            <Input id="test-input" placeholder="이름을 입력하세요" className="mt-1" />
          </Card>
          <Card>
            <h3 className="font-bold mb-2">Avatar</h3>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="프로필" />
          </Card>
          <Card>
            <h3 className="font-bold mb-2">Spinner</h3>
            <Spinner />
          </Card>
        </div>
      </Section>
    </>
  );
}
