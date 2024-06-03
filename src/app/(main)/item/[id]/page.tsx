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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/toons/${id}}`,
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    title: `${response.title}/relaytoon`,
    description: response.title,
  };
}

export default function ItemPage({ params }: MyItemPageProps) {
  return <Item id={params.id} />;
}
