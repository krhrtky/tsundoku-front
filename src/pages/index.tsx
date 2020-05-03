import React, { ComponentType } from 'react';
import { Summary } from '@/components/templates/Summary';
import { SummaryImpl as Usecase } from '@/usecase/book/Summary';

const Home: ComponentType = () => {
  const useCase = new Usecase();
  const props = useCase.execute();
  return <Summary {...props} />;
};

export default Home;
