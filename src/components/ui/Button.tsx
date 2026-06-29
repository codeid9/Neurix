import { cn } from "../../lib/utils";
import { primaryButton, secondaryButton } from "../../lib/styles";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  btnclasses?: "";
};

function Button({ children, variant = "primary", btnclasses }: ButtonProps) {
  return (
    <button
      className={cn(
        variant == "primary" ? primaryButton : secondaryButton,
        btnclasses,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
