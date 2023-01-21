import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps extends CheckBox.CheckboxProps {
  children: string | JSX.Element | JSX.Element[];
}

export function Checkbox({ children, ...rest }: CheckboxProps) {
  return (
    <CheckBox.Root
      className='flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed'
      {...rest}
    >
      <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-50 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background'>
        <CheckBox.Indicator>
          <Check size={20} className='text-white' />
        </CheckBox.Indicator>
      </div>

      {children}
    </CheckBox.Root>
  );
}
