import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps {
  children: string | JSX.Element | JSX.Element[];
}

export function Checkbox({ children }: CheckboxProps) {
  return (
    <CheckBox.Root className='flex items-center gap-3 group'>
      <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-500'>
        <CheckBox.Indicator>
          <Check size={20} className='text-white' />
        </CheckBox.Indicator>
      </div>

      {children}
    </CheckBox.Root>
  );
}
