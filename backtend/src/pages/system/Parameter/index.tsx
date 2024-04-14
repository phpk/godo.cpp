
import { PageContainer } from '@ant-design/pro-components';
import React, { useRef, useReducer } from 'react';
import { useIntl } from '@umijs/max';
import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Space, message, Tag } from 'antd';
import { fetchParameter, delParameter } from '@/services/system/parameter';
import ParameterModal from './components/SaveForm';
import { AddButton, EditIconButton, DelIconButton } from '@/components/Button';

enum ActionTypeEnum {
  ADD,
  EDIT,
  CANCEL,
}

interface Action {
  type: ActionTypeEnum;
  payload?: API.Parameter;
}

interface State {
  visible: boolean;
  title: string;
  id?: string;
}

const Parameter: React.FC = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const addTitle = intl.formatMessage({ id: 'pages.system.parameter.add', defaultMessage: 'Add Parameter' });
  const editTitle = intl.formatMessage({ id: 'pages.system.parameter.edit', defaultMessage: 'Edit Parameter' });
  const delTip = intl.formatMessage({ id: 'pages.system.parameter.delTip', defaultMessage: 'Are you sure you want to delete this record?' });

  const [state, dispatch] = useReducer(
    (pre: State, action: Action) => {
      switch (action.type) {
        case ActionTypeEnum.ADD:
          return {
            visible: true,
            title: addTitle,
          };
        case ActionTypeEnum.EDIT:
          return {
            visible: true,
            title: editTitle,
            id: action.payload?.id,
          };
        case ActionTypeEnum.CANCEL:
          return {
            visible: false,
            title: '',
            id: undefined,
          };
        default:
          return pre;
      }
    },
    { visible: false, title: '' },
  );

  const columns: ProColumns<API.Parameter>[] = [
    {
  title: intl.formatMessage({ id: 'pages.system.parameter.form.name' }),
  dataIndex: 'name',
  width: 160,
  key: 'name', // Query field name
}
,
    {
  title: intl.formatMessage({ id: 'pages.system.parameter.form.value' }),
  dataIndex: 'value',
  width: 200,
}
,
    {
  title: intl.formatMessage({ id: 'pages.system.parameter.form.remark' }),
  dataIndex: 'remark',
  width: 180,
}
,
    {
  title: intl.formatMessage({ id: 'pages.system.parameter.form.status' }),
  dataIndex: 'status',
  width: 130,
  search: false,
  render: (status) => {
    return (
      <Tag color={status === 'enabled' ? 'success' : 'error'}>
        {status === 'enabled'
          ? intl.formatMessage({ id: 'pages.system.parameter.form.status.enabled', defaultMessage: 'Enabled' })
          : intl.formatMessage({ id: 'pages.system.parameter.form.status.disabled', defaultMessage: 'Disabled' })}
      </Tag>
    );
  },
}
,
    {
      title: intl.formatMessage({ id: 'pages.table.column.created_at' }),
      dataIndex: 'created_at',
      valueType: 'dateTime',
      search: false,
      width: 160,
    },
    {
      title: intl.formatMessage({ id: 'pages.table.column.updated_at' }),
      dataIndex: 'updated_at',
      valueType: 'dateTime',
      search: false,
      width: 160,
    },
    {
      title: intl.formatMessage({ id: 'pages.table.column.operation' }),
      valueType: 'option',
      key: 'option',
      width: 130,
      render: (_, record) => (
        <Space size={2}>
          <EditIconButton
            key="edit"
            code="edit"
            onClick={() => {
              dispatch({ type: ActionTypeEnum.EDIT, payload: record });
            }}
          />
          <DelIconButton
            key="delete"
            code="delete"
            title={delTip}
            onConfirm={async () => {
              const res = await delParameter(record.id!);
              if (res.success) {
                message.success(intl.formatMessage({ id: 'component.message.success.delete' }));
                actionRef.current?.reload();
              }
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Parameter, API.PaginationParam>
        columns={columns}
        actionRef={actionRef}
        request={fetchParameter}
        rowKey="id"
        cardBordered
        search={{
          labelWidth: 'auto',
        }}
        pagination={{ defaultPageSize: 10, showSizeChanger: true }}
        options={{
          density: true,
          fullScreen: true,
          reload: true,
        }}
        dateFormatter="string"
        toolBarRender={() => [
          <AddButton
            key="add"
            code="add"
            onClick={() => {
              dispatch({ type: ActionTypeEnum.ADD });
            }}
          />,
        ]}
      />

      <ParameterModal
        visible={state.visible}
        title={state.title}
        id={state.id}
        onCancel={() => {
          dispatch({ type: ActionTypeEnum.CANCEL });
        }}
        onSuccess={() => {
          dispatch({ type: ActionTypeEnum.CANCEL });
          actionRef.current?.reload();
        }}
      />
    </PageContainer>
  );
};

export default Parameter;
