'use client';

// import next
import Image from 'next/image';
import Link from 'next/link';

// import antd
import { Button, Checkbox, Col, ConfigProvider, Form, FormProps, Input, Row } from 'antd';
import { TinyColor } from '@ctrl/tinycolor';
import { Span } from 'next/dist/trace';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const colors1 = ['#6253E1', '#04BEFE'];
  const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(5).toString());

  const onFinish: FormProps<FieldType>['onFinish'] = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='min-h-screen w-screen overflow-hidden'>
      <Row className='min-h-screen'>
        <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 16 }}>
          <Image
            src='/images/banner_pharmacy_2.png'
            alt='Picture of the author'
            fill={true}
            sizes='100%'
            className='rounded-xl object-cover'
            priority={true}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <div className='flex h-full w-full flex-col items-center justify-center bg-pink-50/60 p-14'>
            <div className='mb-4 text-center'>
              <Image
                src='/images/logo_pharmacy.png'
                alt='Logo pharmacy'
                width={100}
                height={100}
                priority={true}
                className='object-cover'
              />
            </div>

            <h1 className='mb-2 text-center text-xl font-bold'>Đăng nhập</h1>

            <div className='mb-1 text-center'>Chào mừng bạn quay trở lại nhà thuốc</div>

            <Form
              name='form_login'
              layout='vertical'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ minWidth: '100%' }}
              initialValues={{ remember: true }}
              size='large'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
              requiredMark={false}
            >
              <Form.Item<FieldType>
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Hãy nhập email!' }]}
                style={{ marginBottom: 10 }}
              >
                <Input placeholder='abc@gmail.com' />
              </Form.Item>

              <Form.Item<FieldType>
                label='Mật khẩu'
                name='password'
                rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
                style={{ marginBottom: '10px' }}
              >
                <Input.Password placeholder='Mật khẩu' />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Row justify='space-between'>
                  <Col>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                      <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>
                  </Col>

                  <Col>
                    <Link href='/admin/forgot-password'>Quên mật khẩu</Link>
                  </Col>
                </Row>
              </Form.Item>

              {/* Button */}
              <Form.Item>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                        colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                        colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                        lineWidth: 0,
                      },
                    },
                  }}
                >
                  <Button type='primary' htmlType='submit' size='large' block={true}>
                    Đăng nhập
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
