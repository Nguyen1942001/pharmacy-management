import { Input } from 'antd';

const InputOTP = () => {
  return <Input.OTP size='large' formatter={(str) => str.toUpperCase()} />;
};

export default InputOTP;
