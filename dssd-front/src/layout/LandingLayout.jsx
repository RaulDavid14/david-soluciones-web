import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingLayout({ children }) {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
