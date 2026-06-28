import { cn } from "../../lib/utils";
import { primaryButton, secondaryButton } from "../../lib/styles";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={cn(variant == "primary" ? primaryButton : secondaryButton)}
    >
      {children}
    </button>
  );
}

export default Button;
