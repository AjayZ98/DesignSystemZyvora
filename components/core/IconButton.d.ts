export interface IconButtonProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'filled';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label': string;
}
