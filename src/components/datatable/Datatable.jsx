

import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

function Datatable() {
    const location = useLocation();
    const { pathname } = location;

    const actionColumn = [
        {
            field:'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                const viewUrl = `${pathname}/view`;

                return(
                    <div className="callAction">
                        <Link to={viewUrl} style={{textDecoration: 'none'}}>
                            <div className="viewButton" >View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]

    const addNewUrl = `${pathname.includes('/users') ? '/users/new' : '/products/new' }`;

    return (
        <div  style={{ height: '100%', width: '100%' }}>
            <div className="datatableTitle">
                Add New user
                <Link to={addNewUrl} style={{textDecoration: 'none'}} className='Link'>
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pagination={true}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 25]}
                checkboxSelection
                className='datatable'
            />
        </div>
    )
}

export default Datatable

