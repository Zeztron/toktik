import { NextPage } from 'next';
import React from 'react';

interface NoResultsProps {
  text: string;
}

const NoResults: NextPage<NoResultsProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default NoResults;
