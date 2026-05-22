import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Stack } from '@/components/Stack';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-secondary">
      <Navbar />
      <Hero />
      <Impact />
      <Experience />
      <Education />
      <Stack />
      <Contact />
    </main>
  );
}
