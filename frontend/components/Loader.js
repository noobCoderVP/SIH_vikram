import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
    return (
        <div
            className="bg-white fixed flex justify-center items-center"
            style={{ width: "100vw", height: "100vh" }}>
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        </div>
    );
}
