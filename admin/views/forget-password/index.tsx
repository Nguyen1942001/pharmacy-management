'use client';

// import next
import Image from 'next/image';
import Link from 'next/link';

// import antd
import { Col, Row, Tabs, TabsProps } from 'antd';
import Email from './components/email';
import PhoneNumber from './components/phone_number';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Email',
    children: <Email />,
  },
  {
    key: '2',
    label: 'Số điện thoại',
    children: <PhoneNumber />,
  },
];

const ForgetPasswordPage = () => {
  const onChange = (key: string) => {
    console.log(key);
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

            <h1 className='mb-2 text-center text-xl font-bold'>Quên mật khẩu</h1>

            <div className='w-full'>
              <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
            </div>

            <div className='text-right'>
              <Link href='/admin/login'>Quay lại đăng nhập</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPasswordPage;
