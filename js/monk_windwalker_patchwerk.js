Highcharts.chart('monk_windwalker_patchwerk', 
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
                157355,
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
                11117,
                8571,
                8391,
                10592,
                9165,
                9167,
                7861,
                7881,
                8476,
                8381,
                8723,
                8871,
                8020,
                7881,
                8659,
                7275,
                9322,
                7314,
                3707,
                8430,
                6454,
                7886,
                0,
                7676,
                7905,
                7599,
                8855,
                6957,
                8243,
                8095,
                7491,
                0,
                6534,
                5451,
                0,
                3882,
                4088,
                4553,
                4067,
                2141,
                2363,
                2828,
                1832,
                2282,
                937,
                699,
                2601,
                1097,
                7428
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                11668,
                7857,
                7616,
                10042,
                6954,
                7510,
                7772,
                7770,
                6680,
                6644,
                8622,
                7539,
                7849,
                7528,
                7852,
                6777,
                8518,
                6351,
                2945,
                7547,
                7056,
                6144,
                7299,
                8584,
                8372,
                6895,
                6543,
                7497,
                6989,
                6366,
                5305,
                0,
                7042,
                4870,
                0,
                3822,
                3143,
                3552,
                2329,
                2849,
                2615,
                1574,
                2523,
                2630,
                2894,
                3451,
                1243,
                0,
                6289
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                9394,
                8713,
                8136,
                7343,
                8423,
                6395,
                7886,
                8328,
                5950,
                7797,
                9160,
                6663,
                6439,
                6183,
                7254,
                8304,
                7305,
                6213,
                3601,
                7315,
                6239,
                6576,
                6111,
                5551,
                7158,
                5568,
                7283,
                3659,
                7319,
                5926,
                5971,
                0,
                6134,
                4131,
                0,
                3166,
                3083,
                2585,
                2260,
                484,
                1945,
                3012,
                2525,
                2518,
                1193,
                937,
                1672,
                1386,
                5802
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7703,
                6054,
                7159,
                9040,
                8170,
                8068,
                6340,
                5363,
                6521,
                5144,
                5725,
                5726,
                6190,
                5417,
                5402,
                4340,
                7891,
                7441,
                3019,
                7276,
                5540,
                4236,
                6750,
                5164,
                5769,
                5219,
                6062,
                6604,
                5342,
                5037,
                4066,
                0,
                4844,
                4776,
                0,
                2807,
                3524,
                2924,
                3702,
                3053,
                2786,
                2144,
                2103,
                1786,
                2579,
                1465,
                928,
                393,
                5602
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                92063,
                6245,
                6020,
                7086,
                4819,
                4928,
                5977,
                7912,
                6559,
                5927,
                7143,
                7039,
                5466,
                6356,
                4666,
                6060,
                4284,
                4547,
                2875,
                4938,
                4182,
                5618,
                4873,
                6507,
                5771,
                7267,
                6120,
                5332,
                7226,
                5979,
                4393,
                6745,
                4151,
                3564,
                6000,
                3577,
                1546,
                3302,
                1930,
                1589,
                1270,
                1888,
                1975,
                1965,
                1216,
                3069,
                1953,
                0,
                5052
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                6426,
                78461,
                71558,
                75823,
                6376,
                5185,
                2985,
                5629,
                5441,
                6132,
                4360,
                4966,
                5184,
                6184,
                5781,
                7022,
                6410,
                1627,
                6158,
                6109,
                5394,
                71129,
                4263,
                5367,
                3053,
                5212,
                3929,
                3502,
                3710,
                58517,
                5036,
                4868,
                55090,
                4472,
                3135,
                2741,
                1738,
                2141,
                597,
                3258,
                1760,
                979,
                1036,
                1903,
                1491,
                2026,
                1766,
                4859
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                79108,
                0,
                0,
                0,
                70134,
                70283,
                70184,
                69530,
                69312,
                61880,
                66771,
                67924,
                68223,
                66620,
                64208,
                56984,
                62625,
                79857,
                55803,
                61140,
                60534,
                0,
                58080,
                54835,
                59494,
                53780,
                59517,
                53354,
                55567,
                0,
                72117,
                44828,
                0,
                65624,
                44991,
                41723,
                39959,
                38574,
                42797,
                32315,
                32936,
                33421,
                30873,
                31048,
                30604,
                27027,
                33026,
                -527
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-28 15:58:28"
    },
    title: {
        text: "Monk - Windwalker - Patchwerk"
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
            "Specter of Betrayal",
            "Eye of Command",
            "Engine of Eradication",
            "Vial of Ceaseless Toxins",
            "Cradle of Anguish",
            "Stat Stick (Mastery)",
            "Chaos Talisman",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Thrice-Accursed Compass",
            "Six-Feather Fan",
            "Memento of Angerboda",
            "PVP Badge of Conquest",
            "Bloodthirsty Instinct",
            "Entwined Elemental Foci",
            "Stat Stick (Haste)",
            "Tirathon's Betrayal",
            "Gift of Radiance",
            "Unstable Arcanocrystal",
            "Arcanogolem Digit",
            "Horn of Valor",
            "Convergence of Fates",
            "Astral Alchemist Stone",
            "Nightmare Egg Shell",
            "Bloodstained Handkerchief",
            "Chrono Shard",
            "Nightblooming Frond",
            "PVP Insignia of Conquest",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Infernal Cinders",
            "Darkmoon Deck: Dominion",
            "Void Stalker's Contract",
            "Umbral Moonglaives",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "Terrorbound Nexus",
            "Nature's Call",
            "Spiked Counterweight",
            "Mark of Dargrul",
            "Tiny Oozeling in a Jar",
            "Toe Knee's Promise",
            "Giant Ornamental Pearl",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
            "Ley Spark",
            "Draught of Souls"
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
                    text: "mean at 87156",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 87156.16,
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