export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body style={{ margin: 0, scrollBehavior: 'smooth' }}>{children}</body>
    </html>
  )
}
