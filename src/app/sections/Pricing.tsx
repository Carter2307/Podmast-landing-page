import { PRICES, type PricePlan } from '../../data/data';

const data = PRICES;

const Pricing = () => {
  const { plan, title, description } = data;

  return (
    <section className="pricing">
      <div className="pricing__wrapper">
        <div className="">
          <h3 className="title-2">{title}</h3>
          <p className="text-body">{description}</p>
        </div>

        <div className="pricing__wrapper">
          <div className="pricing__list">
            {plan &&
              plan.map((item) => {
                return <PricingCard data={item} key={item.label} />;
              })}
          </div>

          <div className="pricing__cta"></div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = (props: PricePlan) => {
  return <div className="pricing__card">
    
  </div>;
};

export { Pricing };
