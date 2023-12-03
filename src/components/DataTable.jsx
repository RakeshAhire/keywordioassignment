import React, { useState } from 'react';
import styles from '../styles/datatable.module.css';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const viewData = [
    {
        id: 1,
        group: "Male",
        click: 712,
        cost: 4272,
        conversion: "8",
        revenue: 16568,
    },
    {
        id: 2,
        group: "Female",
        click: 503,
        cost: 3524,
        conversion: "4",
        revenue: 12390,
    },
    {
        id: 3,
        group: "Unknown",
        click: 650,
        cost: 2850,
        conversion: "6",
        revenue: 9203,
    },
]
const DataTable = () => {
    const [sortedData, setSortedData] = useState(viewData);

    const calculateTotals = () => {
        const totals = {
            group: 'Total',
            click: 0,
            cost: 0,
            conversion: 0,
            revenue: 0,
        };

        sortedData.map(item => {
            totals.click += item.click;
            totals.cost += item.cost;
            totals.conversion += parseInt(item.conversion, 10);
            totals.revenue += item.revenue;
        });

        return totals;
    };

    const handleSorting = (field, order) => {
        const sortedDataCopy = [...sortedData];
        if (field === "group") {
            if (order === "asc") {
                const filterData = sortedDataCopy.sort((a, b) => {
                    const groupA = a.group.toUpperCase(); // ignore upper and lowercase
                    const groupB = b.group.toUpperCase(); // ignore upper and lowercase
                    if (groupA < groupB) {
                        return -1;
                    }
                    if (groupA > groupB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                setSortedData(filterData);
            }
            else {
                const filterData = sortedDataCopy.sort((a, b) => {
                    const groupA = a.group.toUpperCase(); // ignore upper and lowercase
                    const groupB = b.group.toUpperCase(); // ignore upper and lowercase
                    if (groupA > groupB) {
                        return -1;
                    }
                    if (groupA < groupB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                setSortedData(filterData);
            }
            return;
        }
        else {
            const filterData = sortedDataCopy.sort((a, b) => {
                if (order === 'asc') {
                    return a[field] - b[field];
                } else {
                    return b[field] - a[field];
                }
            });
            setSortedData(filterData);
        }
    }

    const totals = calculateTotals();

    return (
        <div>
            <table className={styles.customTable}>
                <thead>
                    <tr>
                        <th>
                            <div className={styles.headings}>
                                Campaigns
                                <div className={styles.sortingIcons}>
                                    <MdOutlineKeyboardArrowUp onClick={() => handleSorting("group", "asc")} />
                                    <MdOutlineKeyboardArrowDown onClick={() => handleSorting("group", "desc")} />
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.headings}>
                                Clicks
                                <div className={styles.sortingIcons}>
                                    <MdOutlineKeyboardArrowUp onClick={() => handleSorting("click", "asc")} />
                                    <MdOutlineKeyboardArrowDown onClick={() => handleSorting("click", "desc")} />
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.headings}>
                                Cost
                                <div className={styles.sortingIcons}>
                                    <MdOutlineKeyboardArrowUp onClick={() => handleSorting("cost", "asc")} />
                                    <MdOutlineKeyboardArrowDown onClick={() => handleSorting("cost", "desc")} />
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.headings}>
                                Conversion
                                <div className={styles.sortingIcons}>
                                    <MdOutlineKeyboardArrowUp onClick={() => handleSorting("conversion", "asc")} />
                                    <MdOutlineKeyboardArrowDown onClick={() => handleSorting("conversion", "desc")} />
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.headings}>
                                Revenue
                                <div className={styles.sortingIcons}>
                                    <MdOutlineKeyboardArrowUp onClick={() => handleSorting("revenue", "asc")} />
                                    <MdOutlineKeyboardArrowDown onClick={() => handleSorting("revenue", "desc")} />
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedData?.map((item, i) => (
                            <tr key={item.id}>
                                <td>{item.group} </td>
                                <td>{item.click} </td>
                                <td>USD {item.cost} </td>
                                <td>{item.conversion} </td>
                                <td>USD {item.revenue} </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td>{totals.group}</td>
                        <td>{totals.click}</td>
                        <td>USD {totals.cost}</td>
                        <td>{totals.conversion}</td>
                        <td>USD {totals.revenue}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable