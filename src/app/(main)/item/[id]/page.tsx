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
  let response;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/toons/${id}`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    response = await res.json();
  } catch (err) {
    console.error('error', err);
    response = {
      title: '알 수 없는 제목',
    };
  }

  console.log(response);

  return {
    title: `${response.title}/relaytoon`,
    description: response.title,
  };
}

export default function ItemPage({ params }: MyItemPageProps) {
  return <Item id={params.id} />;
}
