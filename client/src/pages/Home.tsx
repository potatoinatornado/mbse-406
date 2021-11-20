import React, { useEffect, useState } from "react";
import PilotDashboard from "../components/dashboards/PilotDashboard";
import AeroSpace from "../components/dashboards/AerospaceEngineer/AeroSpace"
import RoleOptions from "../components/RoleOptions";
import { Paper } from "@material-ui/core";

export type Role = "" | "transportation" | "pilot" | "mechanic" | "warehouse" | "aerospace"


const Home = () => {
    const [role, setRole] = useState<Role>("")

    useEffect(() => {
        setRole("pilot") // Placeholder. Should retrieve the role based on some provider
    }, [])

    const Dashboard = () => {
        switch (role) {
            case "":
                return <>Please log in to get assigned to your role! </>
            case "pilot":
                return <PilotDashboard />
            case "aerospace":
                return <AeroSpace />
        }
        return <>Welcome to the <strong>{role}</strong> role dashboard!</>
    }

    return (
        <>
            <Paper style={{
                textAlign: "center",
                height: 100,
                width: 199,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <RoleOptions setRole={setRole} />
            </Paper>
            <Dashboard />
        </>
    )
}

export default Home;