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
                136959,
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
                10728,
                0,
                3137,
                7530,
                6923,
                7538,
                8604,
                7815,
                6518,
                6588,
                5180,
                5955,
                6202,
                5736,
                8078,
                6773,
                6952,
                7006,
                7424,
                6863,
                6305,
                5666,
                6930,
                7435,
                6200,
                0,
                7027,
                4520,
                5339,
                6458,
                4693,
                6761,
                5547,
                5984,
                6763,
                0,
                5040,
                7040,
                3646,
                0,
                6548,
                4462,
                2614,
                2899,
                3176,
                3003,
                3928,
                4846,
                3836,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                10815,
                0,
                5630,
                7296,
                7543,
                5579,
                4767,
                5679,
                6775,
                6033,
                8658,
                6784,
                6180,
                6827,
                5234,
                5781,
                5177,
                6410,
                7583,
                6714,
                5643,
                5176,
                4218,
                6503,
                6002,
                5723,
                6759,
                5740,
                4290,
                7008,
                3905,
                6687,
                5447,
                3423,
                3914,
                0,
                3397,
                3477,
                5367,
                0,
                1599,
                3297,
                3363,
                4603,
                3314,
                2857,
                3074,
                2163,
                533,
                2262
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                8621,
                0,
                3602,
                6126,
                5701,
                5644,
                6572,
                5949,
                5126,
                6323,
                4398,
                6555,
                5827,
                4687,
                4288,
                5574,
                5250,
                5560,
                4876,
                4774,
                5312,
                5682,
                4977,
                6594,
                6440,
                5172,
                5533,
                4107,
                5680,
                6074,
                5292,
                6798,
                6681,
                5611,
                3990,
                0,
                4731,
                2854,
                4021,
                0,
                4682,
                2890,
                2867,
                1583,
                3626,
                3249,
                1521,
                1834,
                1436,
                175
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                9981,
                0,
                4738,
                5843,
                4951,
                6524,
                4769,
                5452,
                5277,
                3534,
                4459,
                5305,
                4543,
                4658,
                6979,
                6972,
                6932,
                5285,
                6063,
                4935,
                5341,
                4505,
                5471,
                5631,
                5864,
                4866,
                5628,
                3298,
                5416,
                5080,
                6123,
                4251,
                5585,
                1722,
                3304,
                0,
                3016,
                6596,
                2958,
                0,
                2145,
                2314,
                3900,
                1990,
                2148,
                5038,
                3368,
                2879,
                126,
                716
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                7625,
                0,
                1310,
                5810,
                5109,
                2937,
                5245,
                4764,
                6029,
                5132,
                5762,
                3801,
                5053,
                4635,
                4828,
                2907,
                3160,
                4902,
                63669,
                5297,
                5242,
                3696,
                4084,
                4598,
                5924,
                4983,
                6143,
                5059,
                2100,
                3930,
                3090,
                5139,
                4052,
                6097,
                3970,
                6358,
                2855,
                2062,
                3931,
                4809,
                4576,
                3237,
                980,
                3092,
                3349,
                1124,
                2122,
                518,
                3817,
                1482
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                104828,
                0,
                6013,
                70855,
                4210,
                5838,
                4302,
                3549,
                5512,
                3940,
                5087,
                3569,
                4347,
                4302,
                62193,
                5278,
                4470,
                3184,
                0,
                3788,
                5093,
                3876,
                3127,
                6285,
                3679,
                60619,
                4979,
                57133,
                4328,
                5827,
                1925,
                2641,
                4679,
                2515,
                4136,
                3659,
                2942,
                3472,
                878,
                3773,
                2425,
                2417,
                3044,
                1558,
                3737,
                3154,
                2788,
                4026,
                0,
                1853
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                86807,
                0,
                65874,
                66081,
                63580,
                62196,
                59854,
                63056,
                60596,
                60758,
                60526,
                60876,
                0,
                57986,
                58913,
                58053,
                0,
                56300,
                55365,
                56688,
                56451,
                47085,
                47314,
                0,
                44379,
                0,
                52163,
                43962,
                52256,
                44348,
                43290,
                49748,
                48729,
                62430,
                49012,
                45116,
                47567,
                56918,
                41471,
                41015,
                42255,
                43243,
                39010,
                37668,
                38400,
                33581,
                34702,
                24442
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
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
            "Unstable Arcanocrystal",
            "Terror From Below",
            "Stat Stick (Mastery)",
            "Whispers in the Dark",
            "Dreadstone of Endless Shadows",
            "Horn of Valor",
            "Erratic Metronome",
            "Padawsen's Unlucky Charm",
            "Stormsinger Fulmination Charge",
            "Eyasu's Mulligan",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Charm of the Rising Tide",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Infernal Writ",
            "Tome of Unraveling Sanity",
            "PVP Badge of Dominance",
            "Obelisk of the Void",
            "Naraxas' Spiked Tongue",
            "Fury of the Burning Sky",
            "Star Gate",
            "Reality Breacher",
            "Astral Alchemist Stone",
            "Portable Manacracker",
            "Spectral Thurible",
            "PVP Insignia of Dominance",
            "Deteriorated Construct Core",
            "Moonlit Prism",
            "Twisting Wind",
            "Bough of Corruption",
            "Oakheart's Gnarled Root",
            "Devilsaur Shock-Baton",
            "Darkmoon Deck: Hellfire",
            "Aran's Relaxing Ruby",
            "Swarming Plaguehive",
            "Icon of Rot",
            "Infernal Alchemist Stone",
            "Wriggling Sinew",
            "Mrrgria's Favor",
            "Caged Horror",
            "Corrupted Starlight",
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
                    text: "mean at 81747",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 81747.94,
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