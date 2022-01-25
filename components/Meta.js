import Head from 'next/head';
import React from 'react';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
