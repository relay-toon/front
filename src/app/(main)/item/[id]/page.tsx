import { Metadata } from 'next';
import Item from '../_component/Item';
interface MyItemPageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({
  params,
}: MyItemPageProps): Promise<Metadata> {
  const { id } = params;
  const toon = await fetch(`${process.env.BACKEND_URL}/toons/${id}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return {
        title: '릴레이툰',
        description:
          '릴레이툰에서 다양한 사용자와 함께 그림을 이어 그려보세요. 창의력을 발휘하고 재미있는 스토리를 완성하세요!',
      };
    });
  return {
    title: `${toon.title} / 릴레이툰`,
    description: `${toon.title} 그림입니다.`,
  };
}
export default function ItemPage({ params }: MyItemPageProps) {
  return <Item id={params.id} />;
}
