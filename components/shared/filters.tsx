'use client';

import { useState, type FC, type ReactElement, useEffect } from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '.';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface IFiltersProps {
  className?: string;
}

interface IPriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: FC<IFiltersProps> = ({ className }): ReactElement => {
  const [prices, setPrice] = useState<IPriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>());
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>());

  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();

  const items = ingredients.map(({ id, name }) => ({
    value: String(id),
    text: name,
  }));

  const updatePrice = (name: keyof IPriceProps, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log({ prices, pizzaTypes, selectedIngredients, sizes });
  }, [prices, pizzaTypes, sizes, selectedIngredients]);

  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        title='Тип теста'
        name='pizzaTypes'
        className='mb-5'
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        defaultItems={[
          { text: 'Традиционное', value: '20' },
          { text: 'Нетрадиционное', value: '30' },
        ]}
        items={[
          { text: 'Традиционное', value: '20' },
          { text: 'Нетрадиционное', value: '30' },
        ]}
      />

      <CheckboxFiltersGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        onClickCheckbox={toggleSizes}
        selected={sizes}
        defaultItems={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='1000'
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title='Ингридиенты'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        searchInputPlaceholder='Найти ингридиент'
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
