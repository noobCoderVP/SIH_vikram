import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

function cases() {
    const [type, setType] = useState("");
    const [ongoingData, setOngoingData] = useState([]);
    const [pastData, setPastData] = useState([]);
    useEffect(() => {
        setType(localStorage.getItem("type"));
    }, []);
    let columns = [
        {
            field: "caseId",
            headerName: "Case Link",
            renderCell: params => {
                return (
                    <Link
                        className="text-white bg-blue-500 p-1"
                        href={`/case/${params.caseId}`}>
                        {params.value}
                    </Link>
                );
            },
            width: 120,
        },
        { field: "client", headerName: "Client Name", width: 130 },
        { field: "lawyer", headerName: "Lawyer Name", width: 130 },
        { field: "title", headerName: "Case title", width: 200 },
    ];

    let rows = [
        {
            id: 10000,
            caseId: 10000,
            client: "vaibhav",
            lawyer: "toshan",
            title: "divorce with wife",
            stage: 2,
            payment: 20000,
            chat: "CHAT",
        },
        {
            id: 10008,
            caseId: 10008,
            client: "vaibhav",
            lawyer: "toshan",
            title: "purjery case on wife",
            stage: 1,
            payment: 30000,
            chat: "CHAT",
        },
        {
            id: 10200,
            caseId: 10200,
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
                        rowSelection={false}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
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
                    />
                </div>
            </div>
        </>
    );
}

export default cases;
