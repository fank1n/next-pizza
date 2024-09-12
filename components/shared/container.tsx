import { type PropsWithChildren, type FC, type ReactElement } from 'react';
import { cn } from '@/shared/lib/utils';

interface IContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container: FC<IContainerProps> = ({
  className,
  children,
}): ReactElement => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
  );
};
