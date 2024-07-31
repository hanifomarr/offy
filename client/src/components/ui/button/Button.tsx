import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "success" | "danger";
  size: "small" | "medium" | "large";
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${
        loading ? "btn-loading" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
