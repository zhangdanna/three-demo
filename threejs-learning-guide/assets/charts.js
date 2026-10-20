(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Learning Timeline ---
  var chartTimeline = echarts.init(document.getElementById('chart-timeline'), null, { renderer: 'svg' });
  
  var stages = ['阶段一\n旋转立方体', '阶段二\n太阳系', '阶段三\n产品展示', '阶段四\n汽车展厅', '阶段五\n智慧城市'];
  var weeks = [1.5, 2.5, 2.5, 3.5, 4]; // 中位数周数
  var cumulativeWeeks = [];
  var sum = 0;
  for (var i = 0; i < weeks.length; i++) {
    sum += weeks[i];
    cumulativeWeeks.push(sum);
  }

  chartTimeline.setOption({
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      formatter: function(params) {
        var stage = params[0].name.replace('\n', ' ');
        var duration = weeks[params[0].dataIndex];
        var cumulative = cumulativeWeeks[params[0].dataIndex];
        return stage + '<br/>' +
               '本阶段：' + duration + ' 周<br/>' +
               '累计：' + cumulative + ' 周';
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: stages,
      axisLabel: {
        interval: 0,
        fontSize: 11,
        color: ink,
        lineHeight: 16
      },
      axisLine: {
        lineStyle: { color: rule }
      }
    },
    yAxis: {
      type: 'value',
      name: '累计周数',
      nameTextStyle: {
        color: muted,
        fontSize: 12
      },
      axisLabel: {
        color: muted,
        formatter: '{value} 周'
      },
      axisLine: {
        lineStyle: { color: rule }
      },
      splitLine: {
        lineStyle: { color: rule, type: 'dashed' }
      }
    },
    series: [
      {
        name: '累计时间',
        type: 'bar',
        data: cumulativeWeeks,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: accent },
            { offset: 1, color: accent + '66' }
          ]),
          borderRadius: [4, 4, 0, 0]
        },
        barWidth: '50%',
        label: {
          show: true,
          position: 'top',
          formatter: function(params) {
            return cumulativeWeeks[params.dataIndex] + ' 周';
          },
          color: ink,
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      {
        name: '本阶段时间',
        type: 'line',
        data: weeks,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          color: accent2,
          width: 2
        },
        itemStyle: {
          color: accent2,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'top',
          formatter: function(params) {
            return weeks[params.dataIndex] + ' 周';
          },
          color: accent2,
          fontSize: 11,
          fontWeight: 'bold'
        }
      }
    ],
    animation: false
  });

  window.addEventListener('resize', function() {
    chartTimeline.resize();
  });
})();
