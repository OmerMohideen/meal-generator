import './globals.css'

export const metadata = {
  title: 'Meal Generator',
  description: 'Generates a random meal with its recipe' 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
