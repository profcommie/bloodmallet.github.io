Highcharts.chart('mage_frost_patchwerk', 
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
                157175,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                5155,
                7577,
                8836,
                9351,
                4566,
                7798,
                8983,
                9056,
                11087,
                8877,
                6152,
                9768,
                7212,
                7333,
                0,
                4945,
                8147,
                0,
                6216,
                7277,
                4145,
                8450,
                11497,
                8354,
                3761,
                5214,
                8087,
                5947,
                3837,
                6917,
                5682,
                7860,
                5728,
                7224,
                0,
                6502,
                4052,
                3267,
                2419,
                3605,
                3488,
                4444,
                3109,
                3144,
                1481,
                3022,
                1516,
                2598,
                2460
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                4070,
                8923,
                7059,
                7606,
                4935,
                8374,
                7135,
                7319,
                4581,
                7035,
                7927,
                7400,
                7649,
                6485,
                7859,
                7171,
                6474,
                0,
                4286,
                5654,
                7193,
                5863,
                4901,
                8193,
                5386,
                8465,
                7673,
                5264,
                4619,
                7458,
                5705,
                5631,
                6074,
                4924,
                0,
                5526,
                3262,
                3882,
                4498,
                4884,
                5019,
                4712,
                1535,
                5117,
                3251,
                2084,
                2491,
                3678,
                2413
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                3366,
                8409,
                9121,
                8387,
                5392,
                6795,
                6104,
                6194,
                5623,
                4693,
                6418,
                6102,
                5751,
                6676,
                6900,
                5891,
                5908,
                0,
                5969,
                4916,
                4379,
                5961,
                7352,
                4294,
                5993,
                6541,
                7190,
                6585,
                6287,
                7916,
                4651,
                5895,
                3473,
                9140,
                0,
                4950,
                4222,
                4272,
                3877,
                4446,
                3214,
                3356,
                4122,
                1621,
                2154,
                3376,
                129,
                543,
                2346
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                5167,
                6468,
                6483,
                7239,
                5421,
                8738,
                6583,
                8853,
                6993,
                5924,
                6978,
                4797,
                6692,
                9231,
                7246,
                7332,
                4363,
                0,
                5646,
                4976,
                5698,
                5866,
                6266,
                5179,
                3518,
                5601,
                5587,
                3353,
                4177,
                5986,
                4081,
                6406,
                4865,
                4407,
                0,
                2330,
                1758,
                2157,
                2709,
                2394,
                5048,
                5512,
                0,
                4192,
                3550,
                4641,
                3322,
                4698,
                1096
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                5010,
                5300,
                7178,
                7452,
                7067,
                3383,
                6487,
                81584,
                5040,
                7827,
                5293,
                6763,
                6170,
                1992,
                3806,
                4304,
                4591,
                5006,
                4199,
                4544,
                6708,
                5167,
                6195,
                6007,
                3870,
                7910,
                6526,
                5483,
                3177,
                5648,
                5755,
                5455,
                3688,
                5016,
                5898,
                5012,
                4784,
                4052,
                3487,
                1875,
                4171,
                2511,
                3810,
                2488,
                2412,
                3386,
                1524,
                1865,
                2840
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                4943,
                93597,
                4006,
                75558,
                5897,
                5438,
                4296,
                0,
                4580,
                5226,
                5100,
                73961,
                4914,
                6256,
                75631,
                5536,
                6128,
                5600,
                4829,
                5365,
                3559,
                3981,
                5742,
                3787,
                4134,
                4156,
                5811,
                3555,
                66505,
                3746,
                3709,
                5816,
                3694,
                5373,
                3927,
                4042,
                3217,
                1087,
                2779,
                1196,
                3731,
                3059,
                1643,
                3020,
                2405,
                1718,
                2545,
                2415,
                1486
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                105333,
                0,
                84260,
                0,
                81425,
                73796,
                74000,
                0,
                72762,
                69954,
                71390,
                0,
                70054,
                69240,
                0,
                64939,
                64044,
                88658,
                67550,
                64206,
                64364,
                60356,
                52971,
                58080,
                66359,
                54596,
                50628,
                58431,
                0,
                50463,
                58364,
                50437,
                57502,
                48754,
                70613,
                51039,
                55927,
                58120,
                55917,
                53901,
                47134,
                44191,
                52491,
                44634,
                43134,
                36185,
                41416,
                30575,
                31914
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Mage - Frost - Patchwerk"
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
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Terror From Below",
            "Stat Stick (Crit)",
            "Tarnished Sentinel Medallion",
            "Whispers in the Dark",
            "Stat Stick (Versatility)",
            "Erratic Metronome",
            "Tome of Unraveling Sanity",
            "Padawsen's Unlucky Charm",
            "Chrono Shard",
            "Stat Stick (Haste)",
            "Charm of the Rising Tide",
            "PVP Badge of Dominance",
            "Dreadstone of Endless Shadows",
            "Astral Alchemist Stone",
            "Eyasu's Mulligan",
            "PVP Insignia of Dominance",
            "Darkmoon Deck: Hellfire",
            "Devilsaur Shock-Baton",
            "Infernal Writ",
            "Horn of Valor",
            "Stat Stick (Mastery)",
            "Star Gate",
            "Stormsinger Fulmination Charge",
            "Icon of Rot",
            "Reality Breacher",
            "Deteriorated Construct Core",
            "Obelisk of the Void",
            "Spectral Thurible",
            "Bough of Corruption",
            "Moonlit Prism",
            "Twisting Wind",
            "Oakheart's Gnarled Root",
            "Portable Manacracker",
            "Infernal Alchemist Stone",
            "Swarming Plaguehive",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Naraxas' Spiked Tongue",
            "Fury of the Burning Sky",
            "Unstable Horrorslime",
            "Pharameres Forbidden Grimoire",
            "Toe Knee's Promise",
            "Aran's Relaxing Ruby",
            "Figurehead of the Naglfar",
            "Caged Horror",
            "Corrupted Starlight"
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
                    text: "mean at 92502",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 92502.5,
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