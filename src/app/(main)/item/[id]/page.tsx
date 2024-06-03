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
<<<<<<< HEAD
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/toons/${id}}`,
  )
=======
  const toon = await fetch(`${process.env.BACKEND_URL}/toons/${id}`)
>>>>>>> cfa1220af09b8c4a64bea27f6db83241d2a63d27
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
