import { cn } from '@/shared/lib/utils';
import { type FC, type ReactElement } from 'react';
import { Categories, SortPopup, Container } from '.';

interface ITopBarProps {
  className?: string;
}

export const TopBar: FC<ITopBarProps> = ({ className }): ReactElement => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
