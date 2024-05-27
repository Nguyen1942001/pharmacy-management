import { Button, Form, Input } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { regex_phone_number } from '@/admin/utils/regex';
import InputOTP from '@/admin/components/input_otp';

type FieldType = {
  phone_number: string;
};

const PhoneNumber = () => {
  return (
    <>
      <Form
        name='form_phone_number_reset_password'
        layout='vertical'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        autoComplete='off'
        style={{ minWidth: '100%' }}
        size='large'
        requiredMark={false}
      >
        <Form.Item<FieldType>
          name='phone_number'
          rules={[
            {
              required: true,
              pattern: new RegExp(regex_phone_number),
              type: 'string',
              min: 10,
              max: 10,
              message: 'Hãy nhập số điện thoại để lấy lại mật khẩu',
            },
          ]}
        >
          <Input placeholder='0123456789' prefix={<PhoneOutlined className='pr-2' />} />
        </Form.Item>

        <InputOTP />

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' block={true} className='mt-2'>
            Gửi mã OTP
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PhoneNumber;
