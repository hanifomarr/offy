interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size = "medium",
  onClick,
  disabled,
  loading,
  type = "button",
}) => {
  return (
    <button
      type={type}
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
