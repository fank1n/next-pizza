import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пицца'
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Вкусная пицца',
                    imageUrl: 'logo.png',
                    price: 599,
                    items: [{ price: 599 }],
                  },
                  {
                    id: 2,
                    name: 'Вкусная пицца',
                    imageUrl: 'logo.png',
                    price: 599,
                    items: [{ price: 599 }],
                  },
                  {
                    id: 3,
                    name: 'Вкусная пицца',
                    imageUrl: 'logo.png',
                    price: 599,
                    items: [{ price: 599 }],
                  },
                  {
                    id: 4,
                    name: 'Вкусная пицца',
                    imageUrl: 'logo.png',
                    price: 599,
                    items: [{ price: 599 }],
                  },
                ]}
              />

              <ProductsGroupList
                title='Пиво'
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Вкусное пивко',
                    imageUrl: 'logo.png',
                    price: 899,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: 'Вкусное пивко',
                    imageUrl: 'logo.png',
                    price: 899,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 3,
                    name: 'Вкусное пивко',
                    imageUrl: 'logo.png',
                    price: 899,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 4,
                    name: 'Вкусное пивко',
                    imageUrl: 'logo.png',
                    price: 899,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 5,
                    name: 'Вкусное пивко',
                    imageUrl: 'logo.png',
                    price: 899,
                    items: [{ price: 1000 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
