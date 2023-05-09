import { Metadata } from "next";

type Post = { 
    id: number
    title: string
    body: string
    userId: number
}

interface Props {
  params: {
    postId: string;
  };
  searchParams: {
    query: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json() as Post
    return {
        title: data.title
    }
}

export default function PostId({ params, searchParams }: Props) {
  return (
    <div>
      {params.postId}
      {searchParams.query}
    </div>
  );
}
