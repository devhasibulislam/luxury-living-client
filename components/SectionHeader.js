const SectionHeader = ({ name, title }) => {
  return (
    <section className="text-center">
      <h6 className="font-bold">{name}</h6>
      <h2 className="text-3xl font-bold w-1/3 mx-auto">{title}</h2>
    </section>
  );
};
export default SectionHeader;
