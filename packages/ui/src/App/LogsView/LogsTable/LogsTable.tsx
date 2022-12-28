import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Logs from "~/types/Logs";
import { theme } from "~/theme";

import { fetchData } from "./LogsTable.helpers";
import styles from "./LogsTable.scss";

type LogsTableProps = Record<string, never>;

const LogsTable: React.FC<LogsTableProps> = () => {
    const [logs, setLogs] = useState<Logs>([]);

    useEffect(() => {
        fetchData(setLogs).catch(console.error);
    }, []);

    return (
        <TableContainer
            component={Paper}
            className={styles.tableContainer}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell
                            style={{
                                backgroundColor: theme.palette.common.white
                            }}
                        >
                            URL
                        </TableCell>
                        <TableCell
                            align="right"
                            style={{
                                backgroundColor: theme.palette.common.white
                            }}
                        >
                            Time (ms)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log) => (
                        <TableRow key={log.at}>
                            <TableCell className={styles.urlColumn}>
                                {log.url}
                            </TableCell>
                            <TableCell align="right">{log.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LogsTable;
