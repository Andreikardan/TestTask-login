type Props = {
  text?: string;
  color: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ text, color, disabled, onClick, type = 'button' }: Props): JSX.Element {
  return (
    <button type={type} onClick={onClick} style={{ background: `${color}` }} disabled={disabled}>
      {text}
    </button>
  );
}
