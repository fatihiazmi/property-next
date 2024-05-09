import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property Next| Perfect Rental in Malaysia',
    description: 'Find your rental in Malaysia now!',
    keywords: 'rentals, rumah sewa, bilik sewa, find rentals, find properties in Malaysia, Malaysia',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
