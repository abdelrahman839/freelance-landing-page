import Nav from "./components/Nav";
import { Hero, About, Products, Services, Footer, Quote } from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Products />
    </section>
    <section className="padding">
      <About />
    </section>
    <section className="padding">
      <Quote />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding bg-black padding-x padding-y pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
