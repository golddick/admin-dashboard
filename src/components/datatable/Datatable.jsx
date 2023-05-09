import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";






function Datatable() {
    const actionColumn = [
        {
            field:'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return(
                    <div className="callAction">
                        <div className="viewButton" >View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable' style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pagination={true}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25]}
        // rowsPerPageOptions={[10]}
        // paginationModel={{ page: 1, pageSize: 10}}
        checkboxSelection
    />
        </div>
  )
}

export default Datatable

// import "./datatable.scss";


// const Datatable = () => {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New User
//         <Link to="/users/new" className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={userRows}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Datatable;