import React, { useState } from 'react';
import DoughnutChart from '../components/DoughnutChart';
import styles from '../styles/dashboard.module.css';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineTableChart } from "react-icons/md";
import { LuCircleDashed } from "react-icons/lu";
import DataTable from '../components/DataTable';

const viewData = [
    {
        id: 1,
        campaign: "Cosmetics",
        click: 712,
        cost: 4272,
        conversion: "8",
        revenue: 16568,
        male: 40,
        female: 35,
        unknown: 25,
    },
    {
        id: 2,
        campaign: "Serum",
        click: 3961,
        cost: 27331,
        conversion: 115,
        revenue: 362526,
        male: 38,
        female: 51,
        unknown: 11,
    },
    {
        id: 3,
        campaign: "Facewash",
        click: 9462,
        cost: 76831,
        conversion: 123,
        revenue: 266800,
        male: 15,
        female: 35,
        unknown: 50,
    },
    {
        id: 4,
        campaign: "Shampoo",
        click: 439,
        cost: 2151,
        conversion: 5,
        revenue: 175245,
        male: 55,
        female: 40,
        unknown: 5,
    },
    {
        id: 5,
        campaign: "Conditioners",
        click: 1680,
        cost: 3864,
        conversion: 49,
        revenue: 175245,
        male: 10,
        female: 70,
        unknown: 20,
    },
    {
        id: 6,
        campaign: "Facewash 2",
        click: 4978,
        cost: 29370,
        conversion: 189,
        revenue: 623106,
        male: 65,
        female: 15,
        unknown: 20,
    },
    {
        id: 7,
        campaign: "Cosmetics 2",
        click: 235,
        cost: 3272,
        conversion: 12,
        revenue: 325445,
        male: 70,
        female: 15,
        unknown: 15,
    }
]

const Dashboard = () => {
    const [sortedData, setSortedData] = useState(viewData);
    const firstChartValue = ['male', 'female', 'unknown'].map(item => viewData[0][item])
    const [chartData, setChartData] = useState(firstChartValue)
    const [selected, setSelected] = useState(0);
    const [showChart, setShowChart] = useState(true);
    const [chartTableData, setChartTableData] = useState();

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
        const sortedDataCopy = [...viewData];
        if (field === "campaign") {
            if (order === "asc") {
                const filterData = sortedDataCopy.sort((a, b) => {
                    const campaignA = a.campaign.toUpperCase(); // ignore upper and lowercase
                    const campaignB = b.campaign.toUpperCase(); // ignore upper and lowercase
                    if (campaignA < campaignB) {
                        return -1;
                    }
                    if (campaignA > campaignB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                setSortedData(filterData);
            }
            else {
                const filterData = sortedDataCopy.sort((a, b) => {
                    const campaignA = a.campaign.toUpperCase(); // ignore upper and lowercase
                    const campaignB = b.campaign.toUpperCase(); // ignore upper and lowercase
                    if (campaignA > campaignB) {
                        return -1;
                    }
                    if (campaignA < campaignB) {
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

    const handleChartData = (data, index) => {
        setSelected(index)
        const newChartDataArray = ['male', 'female', 'unknown'].map(item => data[item]);
        setChartData(newChartDataArray)
    }

    const totals = calculateTotals();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.dataContainer}>
                    <div className={styles.boxHeadings}>
                        <h3>Add Insights</h3>
                    </div>
                    <table className={styles.customTable}>
                        <thead>
                            <tr>
                                <th>
                                    <div className={styles.headings}>
                                        Campaigns
                                        <div className={styles.sortingIcons}>
                                            <MdOutlineKeyboardArrowUp onClick={() => handleSorting("campaign", "asc")} />
                                            <MdOutlineKeyboardArrowDown onClick={() => handleSorting("campaign", "desc")} />
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
                                    <tr key={item.id}
                                        onClick={(e) => handleChartData(item, i)}
                                        style={{ backgroundColor: selected === i ? "rgb(226, 226, 226)" : "" }}
                                    >
                                        <td>{item.campaign} </td>
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
                <div className={styles.chartContainer} >
                    <div className={styles.boxHeadings}>
                        <h3>Add Insights</h3>
                    </div>
                    {showChart ? <div className={styles.chart} > <DoughnutChart data={chartData} /></div> :
                        <div className={styles.dataTable} > <DataTable />
                        </div>
                    }
                    <div className={styles.toggleContainer}>
                        <div className={styles.toggle} onClick={() => setShowChart(prev => !prev)}>
                            <div className={styles.icon}><LuCircleDashed /></div>
                            <div className={styles.icon}><MdOutlineTableChart /></div>
                            <div className={styles.circle} style={showChart ? { left: "2px" } : { right: "2px" }}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;