import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import ModelForm from '@/pages/list/test-page/components/ModelForm';

const handleForm = () => {
  console.log(123122);
};

export const Index: React.FC = () => {
  const [var1, setvar1] = useState<string>('变量1');

  const handleFunc = (...param) => {
    setvar1(param[0]);
  };

  return (
    <PageContainer>
      <div>{var1}</div>
      <Button onClick={handleForm}>aaa</Button>

      <ModelForm name={'asdfa'} age={12} call={handleFunc} />
    </PageContainer>
  );
};

export default Index;
