import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth',
        Filter: ColumnFilter
    },
    {
        Header: 'Country',
        accessor: 'country',
        Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        Filter: ColumnFilter
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