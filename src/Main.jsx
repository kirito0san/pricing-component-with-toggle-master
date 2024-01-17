/* eslint-disable jsx-a11y/anchor-is-valid */
const Main = ({ Monthly }) => {
  return (
    <article className=" my-10 gap-5 flex flex-wrap justify-center items-center">
      <section>
        <span>Basic</span>
        <h1>
          <span>$</span>
          {Monthly ? "19.99" : "199.99"}
        </h1>
        <div>
          <p>500 GB Storage</p>
          <p>2 Users Allowed</p>
          <p>Send up to 3 GB</p>
        </div>
        <a className="hover:bg-white hover:bg-none hover:text-[#696fdd] bg-primary">
          Learn More
        </a>
      </section>
      <section className=" scale-110 bg-primary">
        <span className="text-white">Professional</span>
        <h1 className="text-white">
          <span>$</span>
          {Monthly ? "24.99" : "249.99"}
        </h1>
        <div>
          <p className="text-white border-[#a3a8f0] border-t">1 TB Storage</p>
          <p className="text-white border-[#a3a8f0] border-t">5 Users Allowed</p>
          <p className="text-white border-[#a3a8f0] border-t border-b">
            Send up to 10 GB
          </p>
        </div>
        <a className="hover:bg-primary hover:text-white bg-white text-[#696fdd]">
          Learn More
        </a>
      </section>
      <section>
        <span>Master</span>
        <h1>
          <span>$</span>
          {Monthly ? "39.99" : "399.99"}
        </h1>
        <div>
          <p>2 TB Storage</p>
          <p>10 Users Allowed</p>
          <p>Send up to 20 GB</p>
        </div>
        <a className="hover:bg-white hover:bg-none hover:text-[#696fdd] bg-primary">
          Learn More
        </a>
      </section>
    </article>
  );
};

export default Main;
