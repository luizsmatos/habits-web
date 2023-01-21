import { Check } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { api } from '../lib/axios';
import { Checkbox } from './Checkbox';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function NewHabitForm() {
  const [title, setTitle] = useState<string>('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post('/habits', {
      title,
      weekDays,
    });

    setTitle('');
    setWeekDays([]);
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);

      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className='w-full flex flex-col mt-6'>
      <label htmlFor='title' className='font-semibold leading-tight'>
        Qual seu comprometimento?
      </label>

      <input
        type='text'
        id='title'
        placeholder='ex.: Exercícios, dormir bem, etc...'
        className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900'
        autoFocus
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor='' className='font-semibold leading-tight mt-4'>
        Qual a recorrência?
      </label>

      <div className='flex flex-col gap-2 mt-3'>
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={weekDay}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <span className='text-white leading-tight'>{weekDay}</span>
          </Checkbox>
        ))}
      </div>

      <button
        type='submit'
        className='mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900'
      >
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  );
}
