import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";

function cases() {
    const [type, setType] = useState("");
    useEffect(() => {
        setType(localStorage.getItem("type"));
    }, []);
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
            <Header />
            <div className="bg-white p-4">
                {type == "lawyer" && (
                    <section className="bg-white text-black p-4 flex gap-10 border-2 border-black w-max">
                        <h1 className="text-2xl">
                            Register a new case with a client
                        </h1>
                        <Link href="/case/register">
                            <Button
                                variant="contained"
                                color="primary"
                                className="text-blue-700 hover:text-white">
                                New Case
                            </Button>
                        </Link>
                    </section>
                )}
                <section className="bg-white text-black p-4  w-max">
                    <h1 className="text-xl">Ongoing cases</h1>
                </section>
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
                <section className="bg-white text-black p-4  w-max">
                    <h1 className="text-xl">Past cases</h1>
                </section>
                <div style={{ height: 400, width: "100%", margin: "auto" }}>
                    <DataGrid
                        rows={pastColumns}
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

export default cases;
