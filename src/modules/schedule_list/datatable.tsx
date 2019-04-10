const { MDBDataTable } = require('mdbreact');
import React from 'react';

const sampleData = {
  columns: [
    {
      label: 'Stage Name',
      field: 'name',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Capacity',
      field: 'capacity',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'Keyword Label',
      field: 'label',
      sort: 'asc',
      width: 100,
    },
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      capacity: 696969,
      label: 'Edinburgh',
    },
    {
      name: 'Garrett Winters',
      capacity: 696969,
      label: 'Tokyo',
    },
    {
      name: 'Ashton Cox',
      capacity: 696969,
      label: 'San Francisco',
    },
    {
      name: 'Cedric Kelly',
      capacity: 696969,
      label: 'Edinburgh',
    },
    {
      name: 'Airi Satou',
      capacity: 696969,
      label: 'Tokyo',
    },
    {
      name: 'Brielle Williamson',
      capacity: 696969,
      label: 'New York',
    },
    {
      name: 'Herrod Chandler',
      capacity: 696969,
      label: 'San Francisco',
    }
  ],
};

const DatatablePage = (data?: any) => {
  let data2 = Object.keys(data).length ? data : sampleData;
  return (
    <MDBDataTable
      striped
      bordered
      hover
      // data={data || sampleData}
      data={data2}
      searching={false}
      paging={false}
    />
  );
};

export default DatatablePage;
