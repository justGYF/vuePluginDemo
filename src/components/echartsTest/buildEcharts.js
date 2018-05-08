export const buildEcharts = (data) => {
    let datas = [];
    if (data) {
        data.forEach((item) => {
            datas.push({
                name: item.name,
                value: item.value
            })
        })
    }
    let seriesObj = {
        type: 'treemap',
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: 'white' // color of value
                },
                textAlign: 'center',
                formatter: '{b} {c}%'
            }
        },
        left: 'left',
        width: '100%',
        height: '100%',
        roam: false,
        nodeClick: false,
        breadcrumb: {
            show: false
        }
    }
    seriesObj.data = datas;
    let option = {
        series: [seriesObj],
        tooltip: {
            show: false
        }
    }
    option.textStyle = {
        fontFamily: 'Microsoft YaHei',
        fontSize: '12px'
    }

    return option;
}