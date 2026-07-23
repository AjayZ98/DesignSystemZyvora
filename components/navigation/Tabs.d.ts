export interface TabsProps {
  tabs: { value: string; label: string }[];
  active: string;
  onChange?: (value: string) => void;
}
