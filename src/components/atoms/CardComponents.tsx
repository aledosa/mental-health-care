import React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={`rounded-md border bg-card text-card-foreground shadow-sm ${className}`} ref={ref} {...props}>
      {children}
    </div>
  ),
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} ref={ref} {...props}>
      {children}
    </div>
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} ref={ref} {...props}>
      {children}
    </h3>
  ),
)
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={`p-6 pt-0 ${className}`} ref={ref} {...props}>
      {children}
    </div>
  ),
)
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }

