export interface CardProps {
  padding?: string;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** Lifts on hover when the whole card is clickable. */
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
