export interface TagProps {
  children?: React.ReactNode;
  /** Shows a remove (×) button when provided. */
  onRemove?: () => void;
  /** Dot color, any CSS color token. */
  color?: string;
}
