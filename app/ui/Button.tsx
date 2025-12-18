interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-6 py-3 font-bold rounded-xl transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "gradient-primary text-white hover:opacity-90",
    secondary: "gradient-secondary text-white hover:opacity-90", 
    danger: "gradient-danger text-white hover:opacity-90",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={{
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}