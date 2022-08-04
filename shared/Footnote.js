import Link from "next/link";

const Footnote = () => {
  return (
    <section className="">
      <div className="text-center">
        Copyright © {new Date().getFullYear()}, All right reserved by{" "}
        <Link href="https://hasibulislam999.vercel.app/">
          <span className="border-b-2">Hasibul Islam</span>
        </Link>{" "}
      </div>
    </section>
  );
};
export default Footnote;
