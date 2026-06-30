import { cn } from "../../lib/utils";
import { primaryButton, secondaryButton } from "../../lib/styles";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

function Button({ children, variant = "primary", className }: ButtonProps) {
  return (
    <button
      className={cn(
        variant == "primary" ? primaryButton : secondaryButton,
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
