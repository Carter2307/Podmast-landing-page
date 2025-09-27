import { CTA } from '../../data/data.ts';

const Cta = () => {
  const data = CTA;

  return (
    <section className={'cta'}>
      <h2 className={'title-2'}>{data.title}</h2>
      <p>{data.description}</p>
      <a className={'btn btn-tertiary'} href={data.cta.link}>
        {data.cta.label}
      </a>
    </section>
  );
};

export { Cta };
