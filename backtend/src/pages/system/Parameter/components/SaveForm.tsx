
import React, { useEffect, useRef } from 'react';
import { useIntl } from '@umijs/max';
import { message } from 'antd';
import { ModalForm, ProFormText, ProFormTextArea, ProFormSwitch } from '@ant-design/pro-components';
import type { ProFormInstance } from '@ant-design/pro-components';
import { addParameter, getParameter, updateParameter } from '@/services/system/parameter';

type ParameterModalProps = {
  onSuccess: () => void;
  onCancel: () => void;
  visible: boolean;
  title: string;
  id?: string;
};

const ParameterModal: React.FC<ParameterModalProps> = (props: ParameterModalProps) => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance<API.Parameter>>();

  useEffect(() => {
    if (!props.visible) {
      return;
    }

    formRef.current?.resetFields();
    if (props.id) {
      getParameter(props.id).then(async (res) => {
        if (res.data) {
          const data = res.data;
          data.statusChecked = data.status === 'enabled';
          formRef.current?.setFieldsValue(data);
        }
      });
    }
  }, [props]);

  return (
    <ModalForm<API.Parameter>
      open={props.visible}
      title={props.title}
      width={800}
      formRef={formRef}
      layout="horizontal"
      grid={true}
      rowProps={{ gutter: 20 }}
      submitTimeout={3000}
      submitter={{
        searchConfig: {
          submitText: intl.formatMessage({ id: 'button.confirm' }),
          resetText: intl.formatMessage({ id: 'button.cancel' }),
        },
      }}
      modalProps={{
        destroyOnClose: true,
        maskClosable: false,
        onCancel: () => {
          props.onCancel();
        },
      }}
      onFinish={async (values: API.Parameter) => {
        values.status = values.statusChecked ? 'enabled' : 'disabled';
        if (props.id) {
          await updateParameter(props.id, values);
        } else {
          await addParameter(values);
        }

        message.success(intl.formatMessage({ id: 'component.message.success.save' }));
        props.onSuccess();
        return true;
      }}
      initialValues={{ statusChecked: true }}
    >
      <ProFormText
 name="name"
 label={intl.formatMessage({ id: 'pages.system.parameter.form.name' })}
 placeholder={intl.formatMessage({ id: 'pages.system.parameter.form.name.placeholder' })}
 rules={[
   {
     required: true,
     message: intl.formatMessage({ id: 'pages.system.parameter.form.name.required' }),
   },
 ]}
 colProps={{ span: 24 }}
 labelCol={{ span: 2 }}
/>

      <ProFormTextArea
  name="value"
  label={intl.formatMessage({ id: 'pages.system.parameter.form.value' })}
  fieldProps={{ rows: 3 }}
  colProps={{ span: 24 }}
  labelCol={{ span: 2 }}
/>

      <ProFormText
  name="remark"
  label={intl.formatMessage({ id: 'pages.system.parameter.form.remark' })}
  colProps={{ span: 24 }}
  labelCol={{ span: 2 }}
/>

      <ProFormSwitch
  name="statusChecked"
  label={intl.formatMessage({ id: 'pages.system.parameter.form.status' })}
  fieldProps={{
    checkedChildren: intl.formatMessage({ id: 'pages.system.parameter.form.status.enabled', defaultMessage: 'Enabled' }),
    unCheckedChildren: intl.formatMessage({ id: 'pages.system.parameter.form.status.disabled', defaultMessage: 'Disabled' }),
  }}
  colProps={{ span: 24 }}
  labelCol={{ span: 2 }}
/>
    </ModalForm>
  );
};

export default ParameterModal;
