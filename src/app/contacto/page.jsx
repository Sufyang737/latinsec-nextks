import { FormContact } from '@/components/FormContact';
import { Reveal } from '@/components/animation/Reveal';

const page = () => {
  return (
    <section className="bg-[#0263A5] px-5">
      <div className="max-w-5xl mx-auto py-20">
        <Reveal hiddenValue={{ opacity: 0, x: 75 }}>
          <FormContact />
        </Reveal>
      </div>
    </section>
  );
};

export default page;
