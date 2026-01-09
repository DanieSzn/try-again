export function Card({ children, className }) {
  return <div className={`bg-white border rounded ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function Button({ children, className, ...props }) {
  return <button className={`bg-blue-600 text-white py-2 px-4 rounded ${className}`} {...props}>{children}</button>;
}
