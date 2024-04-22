import { Helmet } from 'react-helmet-async';

const Meta = ({ title, desc, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
    title: 'RYAN-ONLINESHOPPING',
    desc: 'Cheap Goods with high quality',
    keywords: 'electronics, buy electronics, cheap, high quality    '
}

export default Meta;
