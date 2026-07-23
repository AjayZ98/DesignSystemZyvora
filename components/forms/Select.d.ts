export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: { value: string; label: string }[];
  disabled?: boolean;
}
