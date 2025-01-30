import React from 'react';

export default function ServiceDetailsPage({ params }) {
  const ServiceId = params?.id;
  const fakeData = [
    {
      _id: '65a1b2c3d4e5f67890123456',
      name: 'John Doe',
      details: 'A software engineer from New York specializing in AI.',
    },
    {
      _id: '65b2c3d4e5f6789012345678',
      name: 'Jane Smith',
      details: 'A digital artist and graphic designer from London.',
    },
    {
      _id: '65c3d4e5f67890123456789a',
      name: 'Alice Johnson',
      details: 'A content writer and blogger with a passion for storytelling.',
    },
    {
      _id: '65d4e5f67890123456789abc',
      name: 'Bob Williams',
      details: 'A data scientist working in the field of machine learning.',
    },
    {
      _id: '65e5f67890123456789abcd1',
      name: 'Charlie Brown',
      details: 'An entrepreneur running a successful e-commerce startup.',
    },
  ];
  const oneData = fakeData.filter((data) => data?._id === ServiceId);

  return (
    <div>
      <h1 className="font-semibold text-3xl my-2">DetailsPage</h1>
      <p>Service id {ServiceId}</p>
      <div className="border rounded-lg my-3 p-5">
        {oneData.map((dat) => (
          <div key={dat?._id}>
            <p>Name:{dat?.name}</p>
            <p>Details:{dat?.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
