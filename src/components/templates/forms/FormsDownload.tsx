import React from 'react';
import Container from '../../Container';
import Image from 'next/image';
import Link from 'next/link';

const mainForms = [
  '會員入會申請表格',
  '會員资料更新表格',
  '青年团入會申请表格',
  '妇女组入會申请表格',
  '年度会员子女中小学奖励金申请表格',
  '年度会员子女中小学奖励金申请细则',
  '年度会员及子女大学奖励金',
];

const branchForms = [
  '彭亨入會表格',
  '柔佛入會表格',
  '砂拉越入會表格',
  '納閩入會表格',
  '雪隆入會表格',
  '馬六甲入會表格',
];

function FormsDownload() {
  return (
    <Container className="p-4 mt-8">
      <Image src="/img/forms/t5.png" alt="表格下载区" width={456} height={86} />
      <h1 className="text-center mt-4">总会表格</h1>
      {mainForms.map(form => (
        <div
          key={form}
          className="flex px-4 justify-between items-center hover:bg-gray-200 mt-1 py-1"
        >
          <p>{form}</p>
          <Link
            href={`/file/forms/${form}.pdf`}
            target="_blank"
            className="text-blue-500"
            download
          >
            下载
          </Link>
        </div>
      ))}
      <h1 className="text-center mt-8">属会表格</h1>
      {branchForms.map(form => (
        <div
          key={form}
          className="flex px-4 justify-between items-center hover:bg-gray-200 mt-1 py-1"
        >
          <p>{form}</p>
          <Link
            href={`/file/forms/${form}.pdf`}
            target="_blank"
            className="text-blue-500"
            download
          >
            下载
          </Link>
        </div>
      ))}
    </Container>
  );
}

export default FormsDownload;
