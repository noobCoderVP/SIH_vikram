import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


function CaseTable() {
    let columns = [];
    columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "client", headerName: "Client name", width: 130 },
        { field: "lawyer", headerName: "Lawyer name", width: 130 },
        { field: "title", headerName: "Case title", width: 200 },
        { field: "stage", headerName: "Current stage", width: 100 },
        { field: "payment", headerName: "Payment in INR", width: 130 },
        {
            field: "chat",
            headerName: "Chat Link",
            type: "string",
            width: 120,
        },
    ];

    let rows = [
        {
            id: 10000,
            client: "vaibhav",
            lawyer: "toshan",
            title: "divorce with wife",
            stage: 2,
            payment: 20000,
            chat: "CHAT",
        },
        {
            id: 10008,
            client: "vaibhav",
            lawyer: "toshan",
            title: "purjery case on wife",
            stage: 1,
            payment: 30000,
            chat: "CHAT",
        },
        {
            id: 10200,
            client: "vaibhav",
            lawyer: "toshan",
            title: "Theft case",
            stage: 1,
            payment: 10000,
            chat: "CHAT",
        },
    ];

    const pastColumns = [
        {
            id: 9996,
            client: "vaibhav",
            lawyer: "toshan",
            title: "Extra marrital affair",
            stage: 2,
            payment: 20000,
            chat: "CHAT",
        },
    ];
    return (
        <>
            <section className="text-black p-4 ">
                <h1 className="text-xl font-semibold text-center">Ongoing cases</h1>
            </section>
            <div className="bg-white p-4">
                <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    );
}

export default CaseTable;
