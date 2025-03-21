import Image from 'next/image';
import { Star } from 'lucide-react';
import { formatDate } from '@/lib/formatDate';

interface SWUEatsCardProps {
  image: string;
  store: string;
  time: string;
  review: string;
  rating: number;
}

export function SWUEatsCard({ image, store, time, review, rating }: SWUEatsCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={store}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">{store}</h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-300">{formatDate(time)}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{review}</p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating
                ? 'fill-yellow-400 stroke-yellow-400'
                : 'stroke-zinc-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
