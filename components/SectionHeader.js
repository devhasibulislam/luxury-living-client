const SectionHeader = ({ name, title }) => {
  return (
    <section className="text-center my-8">
      <h6 className="font-bold">{name}</h6>
      <h2 className="text-3xl font-bold lg:w-1/3 md:w-1/2 mx-auto">{title}</h2>
    </section>
  );
};
export default SectionHeader;
