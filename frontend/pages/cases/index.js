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
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 90,
        },
        {
            field: "fullName",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: params =>
                `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
    ];

    const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
                        <Link href="/cases/register">
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

export default cases;
