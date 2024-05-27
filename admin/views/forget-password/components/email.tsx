import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';

type FieldType = {
  email: string;
};

const Email = () => {
  return (
    <>
      <Form
        name='form_email_reset_password'
        layout='vertical'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        autoComplete='off'
        size='large'
        style={{ minWidth: '100%' }}
        requiredMark={false}
      >
        <Form.Item<FieldType>
          name='email'
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Hãy nhập email để lấy lại mật khẩu',
            },
          ]}
        >
          <Input placeholder='your_email@gmail.com' prefix={<MailOutlined className='pr-2' />} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' block={true} className='mt-2'>
            Gửi email
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Email;
