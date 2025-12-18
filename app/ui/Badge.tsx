interface BadgeProps {
  children: React.ReactNode;
  type: 'respiratorio' | 'circulatorio' | 'integracion';
  className?: string;
}

export default function Badge({ children, type, className = '' }: BadgeProps) {
  const getStyles = () => {
    switch (type) {
      case 'respiratorio':
        return {
          background: 'var(--color-green-100)',
          color: 'var(--color-green-800)',
          borderColor: 'var(--color-green-300)'
        };
      case 'circulatorio':
        return {
          background: 'var(--color-red-100)',
          color: 'var(--color-red-800)',
          borderColor: 'var(--color-red-300)'
        };
      default:
        return {
          background: 'var(--color-gray-100)',
          color: 'var(--color-gray-800)',
          borderColor: 'var(--color-gray-300)'
        };
    }
  };

  const styles = getStyles();

  return (
    <span 
      className={`inline-block px-4 py-1 rounded-full border ${className}`}
      style={{
        background: styles.background,
        color: styles.color,
        borderColor: styles.borderColor,
        borderWidth: '1px',
        fontWeight: '600',
        fontSize: '0.875rem'
      }}
    >
      {children}
    </span>
  );
}