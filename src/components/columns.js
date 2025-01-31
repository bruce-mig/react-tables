import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
   {
      Header: 'Id',
      accessor: 'id',
      disableFilters: true
   },
   {
      Header: 'First Name',
      accessor: 'first_name',
      disableFilters: true
   },
   {
      Header: 'Last Name',
      accessor: 'last_name',
      disableFilters: true
   },
   {
      Header: 'Date of Birth',
      accessor: 'date_of_birth',
      disableFilters: true
   },
   {
      Header: 'Country',
      accessor: 'country',
      disableFilters: true
   },
   {
      Header: 'Phone',
      accessor: 'phone',
      disableFilters: true
   }
]

export const GROUPED_COLUMNS = [
   {
      Header: 'Id',
      accessor: 'id'
   },
   {
      Header: 'Name',
      columns: [
         {
            Header: 'First Name',
            accessor: 'first_name'
         },
         {
            Header: 'Last Name',
            accessor: 'last_name'
         }
      ]
   },
   {
      Header: 'Info',
      columns: [
         {
            Header: 'Date of Birth',
            accessor: 'date_of_birth'
         },
         {
            Header: 'Country',
            accessor: 'country'
         },
         {
            Header: 'Phone',
            accessor: 'phone'
         }
      ]
   }
]