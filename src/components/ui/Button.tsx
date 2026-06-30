import { cn } from "../../lib/utils";
import { primaryButton, secondaryButton } from "../../lib/styles";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: string;
};

function Button({
  children,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={cn(
        variant == "primary" ? primaryButton : secondaryButton,
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
