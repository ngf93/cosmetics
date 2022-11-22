import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'

createTheme(
    'solarized',
    {
        text: {
            primary: '#000',
        },
        background: {
            default: '#fff',
        },
        divider: {
            default: '#eee',
        },
    },
    'dark'
)

const CustomDataTable = ({columns, data, pagination, handlePerRowsChange, handlePageChange, ...allProps}) => {
    return (
        <div className="table-responsive custom-table">
            <DataTable
                noHeader
                columns={columns}
                data={data}
                theme="solarized"
                pagination
                paginationServer
                paginationTotalRows={pagination?.allCount}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                paginationRowsPerPageOptions={[10, 25, 50]}
                selectableRowsHighlight
                noDataComponent="Нет адресов"
                paginationComponentOptions={{rowsPerPageText: 'Показать на странице:'}}
                {...allProps}
            />
        </div>
    )
}
export default CustomDataTable
