'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryState } from '@/store/category';
import { type FC, type ReactElement } from 'react';

interface ICategoriesProps {
  className?: string;
}

const memes = [
  { id: 1, name: 'Пицца' },
  { id: 2, name: 'Пиво' },
];

export const Categories: FC<ICategoriesProps> = ({
  className,
}): ReactElement => {
  const categoryActiveId = useCategoryState((state) => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 rounded-2xl p-1', className)}
    >
      {memes.map(({ name, id }, index) => (
        <a
          href={`/#${name}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
