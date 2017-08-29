Highcharts.chart('mage_fire_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                126435,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                9068,
                0,
                7306,
                2992,
                6924,
                7409,
                6133,
                5909,
                7209,
                6522,
                6541,
                6180,
                7267,
                5448,
                5816,
                6670,
                5843,
                5125,
                5826,
                6646,
                6367,
                6029,
                4782,
                4542,
                6173,
                6006,
                7025,
                0,
                5229,
                6954,
                6123,
                5894,
                5657,
                3648,
                0,
                5038,
                2930,
                3443,
                0,
                5973,
                3836,
                4538,
                2314,
                2720,
                3195,
                2994,
                2910,
                2912,
                2492,
                629
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                10948,
                0,
                6199,
                3119,
                4936,
                5656,
                5536,
                5850,
                5659,
                4662,
                7565,
                5707,
                4977,
                5395,
                6109,
                4707,
                5534,
                7402,
                5166,
                4590,
                5691,
                6692,
                4039,
                4892,
                6119,
                5505,
                6214,
                5225,
                5369,
                5737,
                6378,
                3780,
                4252,
                5257,
                0,
                3240,
                3894,
                3841,
                0,
                4041,
                4190,
                2036,
                4154,
                3532,
                3260,
                2897,
                2177,
                2904,
                1938,
                1131
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                8186,
                0,
                6223,
                4351,
                6221,
                3855,
                5774,
                4700,
                5814,
                5707,
                6014,
                4423,
                4332,
                5371,
                5596,
                5832,
                5452,
                4926,
                5098,
                6069,
                4337,
                5509,
                5693,
                4169,
                4065,
                4260,
                5705,
                5933,
                3560,
                5606,
                4932,
                4766,
                4186,
                3730,
                0,
                5040,
                3413,
                2999,
                0,
                4896,
                2053,
                2511,
                2119,
                1416,
                2755,
                3305,
                3133,
                1810,
                96,
                1480
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                8664,
                0,
                4615,
                2222,
                5287,
                5126,
                5224,
                5621,
                5376,
                4083,
                5084,
                5315,
                5420,
                5043,
                4746,
                6244,
                5039,
                4149,
                6205,
                6502,
                4415,
                5353,
                3114,
                3503,
                7507,
                2888,
                5242,
                1488,
                3503,
                4874,
                5403,
                4198,
                3221,
                5507,
                0,
                4599,
                3319,
                5018,
                0,
                3146,
                3793,
                2435,
                3111,
                3784,
                4511,
                3951,
                1833,
                2074,
                1310,
                704
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                7868,
                0,
                6081,
                4035,
                4725,
                4437,
                4344,
                3575,
                3967,
                5833,
                59777,
                4276,
                4417,
                4789,
                3499,
                3751,
                4891,
                3791,
                3824,
                3351,
                4256,
                6188,
                4509,
                4433,
                4318,
                4150,
                3744,
                5516,
                4838,
                3803,
                3522,
                3640,
                3595,
                3393,
                5214,
                3710,
                1800,
                1657,
                2976,
                3980,
                3186,
                3384,
                2199,
                1835,
                1721,
                2684,
                2320,
                1302,
                137,
                1731
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                96067,
                0,
                65363,
                4017,
                4412,
                3652,
                4028,
                4344,
                3514,
                3876,
                0,
                5059,
                5035,
                4381,
                5193,
                4974,
                3680,
                56715,
                3783,
                4920,
                4679,
                2958,
                1992,
                4075,
                5044,
                52160,
                4984,
                55796,
                2322,
                5261,
                3665,
                2414,
                3519,
                3594,
                3289,
                2535,
                3719,
                3722,
                3666,
                3064,
                585,
                2069,
                1669,
                1754,
                3795,
                2159,
                4332,
                3102,
                2179,
                174
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                72804,
                59330,
                60910,
                56310,
                57272,
                55577,
                55028,
                0,
                53936,
                53082,
                53861,
                52926,
                50894,
                52396,
                0,
                52018,
                49826,
                51380,
                46587,
                53345,
                50662,
                42714,
                0,
                41902,
                0,
                48216,
                40762,
                42476,
                44901,
                44889,
                43461,
                56804,
                38650,
                43679,
                41204,
                52368,
                32567,
                37936,
                36755,
                37583,
                37943,
                33621,
                33485,
                32895,
                29952,
                30389,
                21080
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-28 15:42:11"
    },
    title: {
        text: "Mage - Fire - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Tarnished Sentinel Medallion",
            "Kil'jaeden's Burning Wish",
            "Terror From Below",
            "Unstable Arcanocrystal",
            "Stat Stick (Mastery)",
            "Whispers in the Dark",
            "Horn of Valor",
            "Dreadstone of Endless Shadows",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Versatility)",
            "Tome of Unraveling Sanity",
            "Stat Stick (Crit)",
            "Erratic Metronome",
            "Padawsen's Unlucky Charm",
            "Eyasu's Mulligan",
            "Stat Stick (Haste)",
            "Infernal Writ",
            "Charm of the Rising Tide",
            "Chrono Shard",
            "Obelisk of the Void",
            "PVP Badge of Dominance",
            "Star Gate",
            "Naraxas' Spiked Tongue",
            "Fury of the Burning Sky",
            "Portable Manacracker",
            "Spectral Thurible",
            "Deteriorated Construct Core",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Bough of Corruption",
            "Twisting Wind",
            "Oakheart's Gnarled Root",
            "Devilsaur Shock-Baton",
            "Moonlit Prism",
            "Darkmoon Deck: Hellfire",
            "Swarming Plaguehive",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Infernal Alchemist Stone",
            "Reality Breacher",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Corrupted Starlight",
            "Caged Horror",
            "Toe Knee's Promise",
            "Pharameres Forbidden Grimoire",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 74191",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 74191.02,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});