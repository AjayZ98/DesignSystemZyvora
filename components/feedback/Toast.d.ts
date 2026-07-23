export interface ToastProps {
  tone?: 'success' | 'danger' | 'info' | 'neutral';
  title?: string;
  message: string;
  onDismiss?: () => void;
}
