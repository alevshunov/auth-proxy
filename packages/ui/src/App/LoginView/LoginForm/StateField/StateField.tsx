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
import Context from "~/context";

import { fetchData } from "./StateField.helpers";
import styles from "./StateField.scss";

type HistoryFieldProps = {
    initialValues: FormikFields;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
    emptyValues: FormikFields;
};

const StateField: React.FC<HistoryFieldProps> = (props) => {
    const { initialValues, setInitialValues, emptyValues } = props;
    const [testusers, setTestusers] = useState<Array<FormikFields>>([]);
    const { environment } = useContext(Context);

    useEffect(() => {
        fetchData(setTestusers, emptyValues, environment.ls_scope).catch(
            console.error
        );
    }, []);

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
            {![...testusers, emptyValues]
                .map((state) => JSON.stringify(state))
                .includes(JSON.stringify(initialValues)) && (
                <MenuItem value={JSON.stringify(initialValues)}>
                    History value
                </MenuItem>
            )}
            <MenuItem value={JSON.stringify(emptyValues)}>
                Empty values
            </MenuItem>
            {testusers.map((state) => (
                <MenuItem
                    key={JSON.stringify(state)}
                    value={JSON.stringify(state)}
                >
                    {state["X-Shib-Profile-UserPrincipalName"]}&nbsp;
                    <div className={styles.helpText}>
                        {state["X-Shib-Authorization-Roles"]
                            .split(", ")
                            .filter((item) => item !== "Password1")
                            .join(", ")}
                    </div>
                </MenuItem>
            ))}
        </TextField>
    );
};

export default StateField;
