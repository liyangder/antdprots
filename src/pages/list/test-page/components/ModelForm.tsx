import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface Props {
  name: string;
  age: number;
  call;
}

export const ModelForm: React.FC<Props> = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);

    console.log(2222, props);

    props.call('var2');
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          名字是: {props.name}, 年龄是: {props.age}
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModelForm;
