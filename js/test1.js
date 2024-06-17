import axios from 'axios';

// 取得資料
axios.get('./json/sales_data.json')
    .then(function (res) {
        let data = res.data.sales;
        showCahrt1Data(data);
        showCahrt2Data(data);
        showCahr31Data(data)
        d3.selectAll(".c3-axis-y-label").attr("transform", "translate(20,100)")
    })
    .catch(function (error) {
        console.log(error);
    })

// 印出圖表 - 折線圖
function renderSplineChart(chartId, chartData, yName) {
    let chart = c3.generate({
        bindto: chartId, // HTML 元素綁定
        size: {
            height: 300,
            width: 800
        },
        data: {
            x: 'x',
            columns: chartData,
        },
        axis: {
            x: {
                type: 'category',
                label: {
                    text: '日期',
                    position: 'outer-right'
                }
            }, y: {
                label: {
                    text: yName,
                    position: 'inner-top'
                }
            }
        }
    });
}

// 印出圖表 - 直方圖
function renderBarChart(chartId, chartData) {
    let chart = c3.generate({
        bindto: chartId, // HTML 元素綁定
        size: {
            height: 300,
            width: 800
        },
        data: {
            x: 'x',
            columns: chartData,
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.25 // this makes bar width 50% of length between ticks
            }
            // or //width: 100 // this makes bar width 100px
        },
        axis: {
            x: {
                type: 'category',
                label: {
                    text: '產品類別',
                    position: 'innter-top'
                }
            }, y: {
                label: {
                    text: '數量',
                    position: 'inner-top'
                }
            }
        }

    });

}

// 取得第一張表的資料
function showCahrt1Data(data) {
    //取不重複的資料日期並排序
    const dateObj = {};
    data.forEach(i => {
        dateObj[i.date] = true;
    });
    const date = Object.keys(dateObj).sort();
    //取不重複的商品類別
    const categoryObj = {};
    data.forEach(e => {
        if (!categoryObj[e.category]) {
            categoryObj[e.category] = date.reduce((acc, date) => {
                acc[date] = 0;
                return acc;
            }, {});
        }
        categoryObj[e.category][e.date] += e.sales_amount; // 同日期中如有不同銷售量值要取總和
    });
    const result = {};
    Object.keys(categoryObj).forEach(i => {
        result[i] = date.map(date => categoryObj[i][date]);
    });
    // 轉為 chart 格式
    const formattedData = Object.entries(result).map(([key, values]) => [key, ...values]);
    formattedData.unshift(["x", ...date]) // 加上日期格式
    renderSplineChart(
        '#test1chart1',
        formattedData,
        '銷貨數量'
    )
}

// 取得第二張表的資料
function showCahrt2Data(data) {
    //取不重複的資料日期並排序
    const dateObj = {};
    data.forEach(i => {
        dateObj[i.date] = true;
    });
    const date = Object.keys(dateObj).sort();
    //取不重複的商品類別
    const categoryObj = {};
    data.forEach(e => {
        if (!categoryObj[e.category]) {
            categoryObj[e.category] = date.reduce((acc, date) => {
                acc[date] = 0;
                return acc;
            }, {});
        }
        categoryObj[e.category][e.date] = e.sales_amount * e.units_sold; // 同日期中如有不同銷售量值要取總和
    });
    const result = {};
    Object.keys(categoryObj).forEach(i => {
        result[i] = date.map(date => categoryObj[i][date]);
    });
    // 轉為 chart 格式
    const formattedData = Object.entries(result).map(([key, values]) => [key, ...values]);
    formattedData.unshift(["x", ...date]) // 加上日期格式
    renderSplineChart(
        '#test1chart2',
        formattedData,
        '單價×銷貨數量'
    )
}

// 取得第三張表的資料
function showCahr31Data(data) {
    //取不重複的資料類別
    const categoryObj = {};
    data.forEach(i => {
        categoryObj[i.category] = true;
        // 以日期為記錄基準，累計日期內的消或
    });
    const category = Object.keys(categoryObj);
    const dateObj = {};
    data.forEach(e => {
        if (!dateObj[e.date]) {
            dateObj[e.date] = category.reduce((acc, category) => {
                acc[category] = 0;
                return acc;
            }, {});
        }
        dateObj[e.date][e.category] += e.sales_amount;
    });
    const result = {};
    Object.keys(dateObj).forEach(i => {
        result[i] = category.map(category => dateObj[i][category]);
    });
    // 轉為 chart 格式
    const formattedData = Object.entries(result).map(([key, values]) => [key, ...values]);
    formattedData.unshift(["x", ...category]) // 加上x軸格式
    renderBarChart(
        '#test1chart3',
        formattedData
    )
}


