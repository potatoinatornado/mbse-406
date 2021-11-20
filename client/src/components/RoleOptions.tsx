import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Role } from "../pages/Home";

const ROLES: Role[] = [
    "", "transportation", "pilot", "mechanic", "warehouse", "aerospace"
];

function RoleOptions(props: any) {
    const [open, setOpen] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState<Role>("pilot");

    const handleChange = (event: any) => {
        setSelectedMenu(event.target.value);
        props.setRole(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <FormControl style={{ minWidth: 120 }}>
            <InputLabel>Current Role</InputLabel>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={selectedMenu}
                onChange={handleChange}
            >
                {ROLES.map((e, i) => (
                    // Use index for value instead of tnoodleName so each value is unique as 3x3x3 and 3x3x3 OH has the same
                    // value.
                    <MenuItem value={e} key={i}>
                        {e}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default RoleOptions
