import TableModel from '../../../models/table/TableModel'

const userTableConfig = {
  pagination: { pageSize: 20, pageNumber: 1 },

  filters: [
    {
      name: 'type',
      value: ''
    }
  ],

  sort: {
    name: 'id'
  },

  cols: [
    {
      title: 'Id',
      name: 'id',
      actions: {
        head: {
          sort: {
            name: 'id'
          }
        }
      }
    },
    {
      title: 'Name',
      name: 'name',
      actions: {
        head: {
          sort: {
            name: 'name'
          }
        }
      }
    },
    {
      title: 'Email',
      name: 'email',
      actions: {
        head: {
          sort: {
            name: 'email'
          }
        }
        // body: {
        //   custom: {
        //     Component: ({ data, param }) => (
        //       <div className="table-row-column">
        //         <div className={`status-label status-${param}`}>
        //           <span>{data}</span>
        //         </div>
        //       </div>
        //     ),
        //   },
        // },
      }
    },
    {
      title: 'Type',
      name: 'type',
      actions: {}
    }
  ]
}

export default TableModel.create(userTableConfig)