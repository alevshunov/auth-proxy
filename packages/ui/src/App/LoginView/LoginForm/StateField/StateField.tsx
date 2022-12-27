import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";

import { fetchData, parseTestusers } from "./StateField.helpers";
import Context from "~/context";

type HistoryFieldProps = {
    history: Array<FormikFields>;
    initialValues: FormikFields;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
    emptyValues: FormikFields;
};

const StateField: React.FC<HistoryFieldProps> = (props) => {
    const { history, initialValues, setInitialValues, emptyValues } = props;
    const [testusers, setTestusers] = useState<Array<FormikFields>>([]);
    const [rawTestusers, setRawTestusers] = useState<TestusersFields | null>(
        null
    );
    const { environment } = useContext(Context);

    useEffect(() => {
        fetchData(setRawTestusers, initialValues, environment.ls_scope).catch(
            console.error
        );
    }, []);

    useEffect(() => {
        if (rawTestusers) {
            setTestusers(
                parseTestusers(
                    rawTestusers,
                    initialValues,
                    environment.ls_scope
                )
            );
        }
    }, [initialValues, rawTestusers]);

    return (
        <TextField
            fullWidth
            select
            label="State"
            value={JSON.stringify(initialValues)}
            onChange={(event) => {
                const state = JSON.parse(event.target.value) as FormikFields;
                setInitialValues(state);
            }}
        >
            <MenuItem
                key={JSON.stringify(emptyValues)}
                value={JSON.stringify(emptyValues)}
            >
                Empty values
            </MenuItem>
            {testusers.map((state) => (
                <MenuItem
                    key={JSON.stringify(state)}
                    value={JSON.stringify(state)}
                >
                    {`(ini) Name: ${state["X-Shib-Profile-UserPrincipalName"]}; Roles: ${state["X-Shib-Authorization-Roles"]}`}
                </MenuItem>
            ))}
            {history.map((state) => (
                <MenuItem
                    key={JSON.stringify(state)}
                    value={JSON.stringify(state)}
                >
                    {`Name: ${state["X-Shib-Profile-UserPrincipalName"]}; Roles: ${state["X-Shib-Authorization-Roles"]}`}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default StateField;