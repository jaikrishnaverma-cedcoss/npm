import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

const AntTable = () => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(data => {
        data = data.map(x => {
          return { ...x, key: x.id }
        })
        setData(data)
      })
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'USER ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
    },

  ];
  const columnsTable1 = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];
  const dataTable2 = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
  console.log(data)

  return (
    <div className="full">
      <div className="w80">
        <h2>Task 1</h2>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.body}
              </p>
            ),
            rowExpandable: (record) => record.userId !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </div>
      <div className='w80'>
        <h2>Task 2</h2>
        <Table
          columns={columnsTable1}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{margin: 0}}>{record.description}</p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={dataTable2}
        />
      </div>
    </div>
  )
}

export default AntTable