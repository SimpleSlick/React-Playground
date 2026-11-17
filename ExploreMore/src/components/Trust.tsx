import {company_logos} from '../assets/assets';

const Trust = () => {
  const companyLogos = Object.values(company_logos).filter(
    (logo): logo is string => typeof logo === 'string'
  );

  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo} alt="" className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' />
        ))}
      </div>
    </div>
  );
};

export default Trust