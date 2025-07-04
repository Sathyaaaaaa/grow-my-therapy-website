export default function Home() {
  return (
    <>
      <main
        id="hero"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/wave.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 text-white text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-relaxed">
              Psychological Care for<br />Change, Insight, and Well-Being
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 leading-relaxed font-serif">
              Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
            </h2>
            <a
  href="https://forms.gle/W8VaqxsmKeUiHdWQ8"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#ADD8E6] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#9ccfe3] transition duration-300"
>
  SHEDULE A CONSULTATOIN
</a>

          </div>
        </div>
      </main>

      <section id="about" className="bg-white text-gray-800 py-20 px-6 md:px-20 leading-relaxed font-light">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-start md:items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src="https://headshots-inc.com/wp-content/uploads/2021/04/therapist-Headshots-2.png"
              alt="Dr. Serena Blake"
              className="w-80 h-100 md:w-[350px] md:h-[460px] object-cover shadow-xl"
            />
          </div>
          <div className="flex-1 text-base text-gray-700 leading-relaxed font-serif text-xl text-balance">
           <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left font-light font-serif text-[#333333]">
              About Dr. Jennifer Hahm
            </h2>
            <p className="mb-4">
              Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
            </p>
            <p className="mb-4">
              I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018).
            </p>
            <p>
              My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F1] py-20 px-6 md:px-16 text-gray-800">
        <h2 className="text-3xl md:text-4xl text-center mb-6 font-serif leading-relaxed text-gray600 ">
          Therapy can be a space where you invest in yourself<br/>—one of the highest forms of self-care.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-500 text-center max-w-4xl mx-auto">
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
        </p>
      </section>

      <section className="bg-[#FAF7F1] py-20 px-6 md:px-16 text-gray-800">
        <hr className="border border-gray-400 mx-auto mb-10 w-[90%]" />
        <h2 className="text-2xl md:text-4xl font-medium text-center mb-26 mt-30 text-gray-800 font-serif">Areas of Focus</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/25a4d543-1f55-46b7-ba06-c571a0c2b806/pexels-tima-miroshnichenko-6011667.jpg?format=1000w"
              alt="Therapy for Healthcare Providers"
              className="w-90 h-90 mx-auto object-cover rounded-full shadow-lg"
            />
            <h3 className="font-medium mt-6 mb-3 text-gray-500 font-serif text-xl">Therapy for Healthcare Providers and Students</h3>
            <p className="text-md leading-relaxed text-gray-400 font-serif text-balance">
              he care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.
            </p>
          </div>

          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/11e69e15-d9e7-4182-aeb0-aacd9fc81e02/pexels-raphael-brasileiro-1687007.jpg?format=750w"
              alt="Therapy for Trauma and Grief"
              className="w-90 h-90 mx-auto object-cover rounded-full shadow-lg"
            />
            <h3 className="text-xl font-serif font-medium mt-6 mb-3 text-gray-500">Therapy for Trauma and Grief</h3>
            <p className="text-md leading-relaxed text-gray-400 font-serif text-balance">
              Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.
            </p>
          </div>

          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/eeca6997-7fd7-4376-b0a4-df60a0f368e5/pexels-polina-tankilevitch-8202906.jpg?format=1000w"
              alt="Therapy for Second Generation"
              className="w-90 h-90 mx-auto object-cover rounded-full shadow-lg"
            />
            <h3 className="text-lg font-medium mt-6 mb-3 text-gray-500 font-serif ">
              Therapy for Second Generation Individuals In Immigrant Families
            </h3>
            <p className="text-md leading-relaxed text-gray-400 font-serif text-balance">
              Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#698C8E] text-black py-20 px-6 md:px-16 font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-sans mb-8 font-serif">Rates and Insurance</h2>
          <div className="text-base leading-relaxed space-y-4 text-gray-900 text-md">
            <p>Session Fee - $200</p>
            <p>Psychodiagnostic Evaluation - $225</p>
            <p>I accept both private pay and insurance. I am in-network with BCBS and Aetna.</p>
            <p>
              For out-of-network plans, I’ve partnered with Mentaya using this tool to help you check your eligibility for reimbursement for my services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F1] py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-gray-700 font-serif font-bold">Unable to accept new clients at this time.</p>
        </div>
      </section>

      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/beach.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-black text-2xl md:text-4xl font-medium mb-4 font-serif leading-relaxed text-gray-800 font-sans" >
            “I have come to believe that caring for myself is not self-indulgent.
            Caring for myself is an act of survival.”
          </h2>
          <p className="text-black text-base md:text-lg font-light text-gray-800 ">— Audre Lorde</p>
        </div>
      </section>

      <footer className="bg-white text-gray-800 text-center py-12 px-4">
        <div className="space-y-4">
          <p className="text-3xl font-sans font-serif text-gray-500">Jennifer Hahm, Ph.D., Licensed Psychologist</p>
          <p>
            <a href="mailto:jennifer@drjenniferhahm.com" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">
              jennifer@drjenniferhahm.com
            </a>
            <br />
            <a href="tel:+12489398150" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Phone: (248) 939-8150</a> |{" "}
            <a href="tel:+12489398190" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Fax: (248) 939-8190</a>
          </p>
          <p className="text-gray-500">28175 Haggerty Rd, Novi, MI 48377</p>
          <div className="space-x-4">
            <a href="#hero" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Home</a>
            <a href="/privacy-policy" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Privacy Policy</a>
            <a href="/good-faith-estimate" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Good Faith Estimate</a>
            <a href="/client-portal" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Client Portal</a>
          </div>
          <p className="text-md mt-4 text-gray-500">© 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
