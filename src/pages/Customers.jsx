import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';

import { Header } from '../components';

const Customers = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
    <Header title="Customers" category="Page" />
    <GridComponent id="gridcomp"
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    editSettings={{allowDeleting: true, allowEditing: true}}
    width="auto">
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[ Page, Toolbar, Selection, Sort, Edit, Filter]} />
    </GridComponent>
  </div>
  )
}

export default Customers