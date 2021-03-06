Highcharts.chart('paladin_retribution_patchwerk', 
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
                141863,
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
                4555,
                8110,
                11308,
                11085,
                7536,
                7816,
                3484,
                8766,
                7058,
                7247,
                7024,
                9195,
                6572,
                8480,
                7002,
                8947,
                4170,
                8743,
                6889,
                4271,
                7791,
                6298,
                0,
                5685,
                5409,
                6075,
                6743,
                5349,
                7806,
                8297,
                0,
                8183,
                6814,
                6584,
                0,
                1887,
                6186,
                4077,
                9000,
                2880,
                3449,
                4280,
                1163,
                3234,
                1812
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                3794,
                6432,
                8499,
                7875,
                6285,
                5768,
                7695,
                7302,
                6947,
                5397,
                7027,
                3306,
                8260,
                5729,
                6583,
                6726,
                7681,
                6424,
                5566,
                6783,
                4301,
                7082,
                6382,
                6040,
                6525,
                3905,
                6348,
                4098,
                6583,
                6107,
                0,
                6509,
                4095,
                2675,
                0,
                3566,
                1675,
                2845,
                8564,
                3257,
                4160,
                4896,
                3461,
                2018,
                1119
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                7504,
                6477,
                9684,
                7959,
                5882,
                6614,
                5257,
                4791,
                4235,
                7467,
                6352,
                5353,
                4536,
                4388,
                4903,
                5731,
                6204,
                5197,
                6629,
                5833,
                5145,
                4857,
                5802,
                4225,
                4310,
                5902,
                7560,
                5210,
                4782,
                4549,
                0,
                4065,
                8159,
                3559,
                0,
                1266,
                4308,
                4404,
                5050,
                2037,
                1758,
                0,
                913,
                802,
                1596
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                2393,
                6169,
                6938,
                8308,
                8466,
                6731,
                5106,
                5683,
                6166,
                5529,
                8284,
                8026,
                5979,
                5522,
                6422,
                4441,
                5266,
                4137,
                4069,
                7551,
                5337,
                6182,
                5323,
                4904,
                4419,
                5194,
                4441,
                5024,
                7064,
                6680,
                0,
                5393,
                4010,
                3824,
                0,
                2408,
                3152,
                1352,
                6226,
                3427,
                732,
                4346,
                3569,
                1356,
                2460
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                4602,
                6351,
                79411,
                6752,
                5529,
                3348,
                3850,
                5629,
                7069,
                4832,
                2436,
                3845,
                5176,
                4454,
                4800,
                4833,
                4968,
                4944,
                3754,
                3325,
                4065,
                3537,
                3196,
                4242,
                5499,
                2386,
                5340,
                4098,
                3898,
                4472,
                5263,
                4522,
                3715,
                3963,
                4602,
                2855,
                3135,
                1609,
                5810,
                2770,
                3422,
                1591,
                1581,
                1349,
                1152
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                3381,
                5846,
                0,
                69882,
                76937,
                75693,
                2892,
                6084,
                3531,
                4633,
                69744,
                5864,
                4931,
                5397,
                4435,
                3468,
                5225,
                3962,
                7166,
                4281,
                3691,
                4764,
                67017,
                62420,
                1629,
                6122,
                5113,
                3341,
                4365,
                4406,
                2939,
                5248,
                5455,
                1851,
                6040,
                4006,
                2825,
                3437,
                5741,
                2309,
                652,
                2751,
                1727,
                1917,
                2031
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                97997,
                77347,
                0,
                0,
                0,
                0,
                77419,
                66142,
                68143,
                67083,
                0,
                65133,
                64996,
                66200,
                65465,
                65061,
                65317,
                63642,
                62270,
                61013,
                62717,
                57028,
                0,
                0,
                58482,
                56579,
                49732,
                54598,
                46110,
                45237,
                71118,
                44039,
                45650,
                49697,
                60246,
                53356,
                45173,
                42708,
                19256,
                42246,
                40395,
                37403,
                35882,
                34218,
                34600
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Paladin - Retribution - Patchwerk"
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
            "Eye of Command",
            "Specter of Betrayal",
            "Vial of Ceaseless Toxins",
            "Infernal Cinders",
            "Cradle of Anguish",
            "Convergence of Fates",
            "Chaos Talisman",
            "Horn of Valor",
            "Stat Stick (Crit)",
            "Engine of Eradication",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Stat Stick (Versatility)",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Ettin Fingernail",
            "Chrono Shard",
            "Fel-Oiled Infernal Machine",
            "Nightmare Egg Shell",
            "Faulty Countermeasure",
            "PVP Badge of Victory",
            "Astral Alchemist Stone",
            "Umbral Moonglaives",
            "Gift of Radiance",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "The Devilsaur's Bite",
            "Might of Krosus",
            "Claw of the Crystalline Scorpid",
            "Darkmoon Deck: Dominion",
            "Void Stalker's Contract",
            "Ursoc's Rending Paw",
            "Spontaneous Appendages",
            "Infernal Alchemist Stone",
            "Nature's Call",
            "Terrorbound Nexus",
            "Mark of Dargrul",
            "Draught of Souls",
            "Spiked Counterweight",
            "Toe Knee's Promise",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
            "Giant Ornamental Pearl"
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
                    text: "mean at 87529",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 87529.89130434782,
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