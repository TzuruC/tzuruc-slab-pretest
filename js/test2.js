import axios, { isCancel, AxiosError } from 'axios';

// 取得資料
axios.get('./json/ShipManagement.json')
    .then(function (res) {
        let data = res.data.shipOperations;
        showChartBoatFuelEff(data);
        chartCargoTsportEff(data);
        chartCompAnalys(data);
        d3.selectAll(".c3-axis-y-label").attr("transform", "translate(20,100)")
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });

// 印出圖表 - 曲線圖
function renderSplineChart(chartId, chartData, yMax, yMin) {
    let chart = c3.generate({
        bindto: chartId, // HTML 元素綁定
        size: {
            height: 300,
            width: 800
        },
        data: {
            x: 'x',
            columns: chartData,
            type: 'spline'
        },
        axis: {
            x: {
                type: 'category',
                label: {
                    text: '日期(月)',
                    position: 'outer-right'
                }
            }, y: {
                max: yMax,
                min: yMin,
                label: {
                    text: '燃油消耗率',
                    position: 'inner-top'
                }
            }
        }
    });
}

// 印出圖表 - 長條圖
function renderBarChart(chartId, chartData, yName) {
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
                    text: '日期(月)',
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

// 取得第一張表的資料
function showChartBoatFuelEff(data) {
    let month = [];
    let ratio = []; // 航行英哩/燃油消耗
    data.forEach(e => {
        month.push(e.month);
        ratio.push(
            Math.floor((e.distanceTravelled / e.fuelConsumption) * 100) / 100
        );
    });
    renderSplineChart(
        '#chartBoatFuelEff',
        [["x", ...month],
        ['船隻燃油效率變化', ...ratio]],
        Math.floor(ratio.sort().pop()) + 1,
        Math.floor(ratio.sort().shift())
    )
}

// 取得第二張表的資料
function chartCargoTsportEff(data) {
    let month = [];
    let ratio = []; // 航行英里數/貨物噸位
    data.forEach(e => {
        month.push(e.month);
        ratio.push(
            Math.floor((e.distanceTravelled / e.cargoWeight) * 100) / 100
        );
    });
    renderBarChart(
        '#chartCargoTsportEff',
        [["x", ...month],
        ['單位重量貨物的航程距離', ...ratio]],
        '貨物運輸效率'
    )
}

// 取得第三張表的資料
function chartCompAnalys(data) {
    // 比較燃油消耗、航行英里數和貨物噸位
    let month = [];
    let ratio = [];
    let fuelConsumption = [];
    let fuelConsumptionSum = 0;
    let distanceTravelledSum = 0;
    let cargoWeightSum = 0;
    data.forEach(e => {
        month.push(e.month);
        fuelConsumption.push(e.fuelConsumption);
        ratio.push(
            Math.floor((e.distanceTravelled / e.cargoWeight) * 100) / 100
        );
        fuelConsumptionSum += e.fuelConsumption;
        distanceTravelledSum += e.distanceTravelled;
        cargoWeightSum += e.cargoWeight;
    });
    // 取得標準值
    // 1.計算平均值
    function calcAverage(data, key) {
        // 使用 reduce 遍歷數組，累加所有 key 對應的值
        const sum = data.reduce((acc, item) => acc + item[key], 0);
        // 返回 sum 除以數組長度得到的平均值
        return sum / data.length;
    }

    const standardValues = {
        averageFuelConsumption: calcAverage(data, 'fuelConsumption'),
        averagedistanceTravelled: calcAverage(data, 'distanceTravelled'),
        averagecargoWeight: calcAverage(data, 'cargoWeight')
    };
    // 2.計算最大值和最小值（用於標準化）
    function calcMaxMin(data, key) {
        const values = data.map(item => item[key]);
        return {
            max: Math.max(...values),
            min: Math.min(...values)
        };
    }
    const fuelConsumptionMaxMin = calcMaxMin(data, 'fuelConsumption');
    const distanceTravelledMaxMin = calcMaxMin(data, 'distanceTravelled');
    const cargoWeightMaxMin = calcMaxMin(data, 'cargoWeight');
    // 3.取得標準化數據
    function normalize(value, min, max) {
        return (value - min) / (max - min);
    }
    const normalizedData = data.map(e => ([
        normalize(e.fuelConsumption, fuelConsumptionMaxMin.min, fuelConsumptionMaxMin.max),
        normalize(e.distanceTravelled, distanceTravelledMaxMin.min, distanceTravelledMaxMin.max),
        normalize(e.cargoWeight, cargoWeightMaxMin.min, cargoWeightMaxMin.max)
    ]));

    // 4.轉為圖表格式
    const analysFuelConsumption = data.map(e => ([
        normalize(e.fuelConsumption, fuelConsumptionMaxMin.min, fuelConsumptionMaxMin.max)
    ]));
    const analysDistanceTravelledn = data.map(e => ([
        normalize(e.distanceTravelled, distanceTravelledMaxMin.min, distanceTravelledMaxMin.max)
    ]));
    const analysCargoWeight = data.map(e => ([
        normalize(e.cargoWeight, cargoWeightMaxMin.min, cargoWeightMaxMin.max)
    ]));

    renderBarChart(
        '#chartCompAnalys',
        [["x", ...month],
        ['燃油消耗', ...analysFuelConsumption],
        ['航行英里數', ...analysDistanceTravelledn],
        ['貨物噸位', ...analysCargoWeight]],
        '判定指標'
    )
}

