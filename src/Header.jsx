const Header = ({ setMonthly, Monthly }) => {
  const handleChange = () => {
    setMonthly(!Monthly);
  };
  return (
    <div className="w-[90%] pt-[50px] md:pt-[150px] text-[#6d708d] gap-9 mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold "> Our Pricing</h1>
      <div className="flex font-semibold text-[#b3b5c6] gap-5">
        <p>Annually</p>
        <label className="flex justify-end" forhtml="toggle">
          <input onChange={handleChange} id="toggle" type="checkbox" hidden />
          <span></span>
        </label>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default Header;
