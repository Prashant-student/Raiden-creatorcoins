import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter, Row} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./Columns";

import "./Table.css";

const TopRanking = () => {
    //prevents from rendering the logic every after reload
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    // @ts-ignore
    const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow} =
        useTable(
            {
                // @ts-ignore
                columns,
                data,
            },
            useGlobalFilter,
            usePagination
        );

    return (
        <div style={{padding: "25px"}}>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row: Row<{ rank: number; coin: string; creator: string; supporters: number; totalCoins: number; price: number; }>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopRanking;
