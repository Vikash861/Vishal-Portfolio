import './globals.css'

export const metadata = {
  title: 'MIS Professional Portfolio',
  description: 'MIS Professional with 2 years of experience in data analysis and system optimization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}