Highcharts.chart('priest_shadow_patchwerk', 
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
                148987,
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
                9650,
                7254,
                11218,
                11452,
                7990,
                5923,
                6941,
                6810,
                8455,
                5377,
                7484,
                7021,
                9484,
                5789,
                7120,
                6879,
                6030,
                7183,
                8290,
                5755,
                6159,
                5429,
                5493,
                7433,
                7679,
                4040,
                0,
                8071,
                7878,
                8519,
                0,
                6774,
                5457,
                6369,
                4610,
                7378,
                5484,
                3659,
                4449,
                5193,
                0,
                5447,
                3464,
                5259,
                3692,
                1185,
                5887,
                2724,
                670
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                8343,
                4449,
                6621,
                7051,
                8424,
                8110,
                9595,
                7962,
                4652,
                8283,
                8565,
                7073,
                4605,
                6812,
                5023,
                6731,
                6277,
                9458,
                5462,
                5128,
                7916,
                6614,
                7164,
                5470,
                5483,
                8075,
                6110,
                7851,
                7897,
                6527,
                0,
                7038,
                5126,
                3355,
                4257,
                3668,
                7903,
                5237,
                4161,
                5062,
                0,
                3900,
                3171,
                3267,
                3626,
                4953,
                3003,
                3085,
                2366
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                8915,
                3315,
                8592,
                9345,
                6101,
                8183,
                4120,
                5627,
                5859,
                6944,
                2748,
                5963,
                6901,
                5948,
                6675,
                5919,
                6753,
                6342,
                5922,
                5757,
                6441,
                6046,
                5090,
                7977,
                4501,
                3980,
                6502,
                6723,
                6943,
                5584,
                0,
                8034,
                5086,
                4162,
                3647,
                4647,
                4773,
                5570,
                4136,
                2925,
                0,
                3579,
                3637,
                5364,
                979,
                1941,
                3055,
                1367,
                1508
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                6708,
                5987,
                8697,
                6635,
                6798,
                4996,
                6838,
                6308,
                5506,
                5945,
                7647,
                4794,
                5594,
                4554,
                3939,
                5985,
                5359,
                6393,
                5417,
                4496,
                4825,
                5782,
                5461,
                4600,
                4896,
                4260,
                3904,
                5761,
                5559,
                7816,
                0,
                4508,
                4719,
                3776,
                5338,
                5789,
                3807,
                4040,
                3522,
                5635,
                0,
                3317,
                4304,
                3543,
                4601,
                3320,
                3596,
                1584,
                3239
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                8487,
                6724,
                6719,
                88629,
                7159,
                4455,
                4657,
                4233,
                5373,
                4028,
                4641,
                6537,
                4496,
                5501,
                6781,
                3331,
                5249,
                6629,
                6539,
                5008,
                3300,
                3296,
                3371,
                6079,
                4758,
                4731,
                4243,
                5145,
                5197,
                5055,
                7251,
                4152,
                2602,
                5046,
                2973,
                1564,
                6185,
                1871,
                2588,
                1231,
                5533,
                1015,
                2714,
                1426,
                1431,
                1898,
                2433,
                2237,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                99870,
                1526,
                93004,
                0,
                83494,
                5709,
                7054,
                7141,
                5517,
                5663,
                4799,
                3342,
                4388,
                3719,
                4376,
                6409,
                5496,
                6716,
                4915,
                3791,
                6786,
                5215,
                67901,
                4795,
                3568,
                4034,
                72105,
                5409,
                4826,
                6107,
                5728,
                6493,
                1715,
                2417,
                3476,
                4623,
                2884,
                5425,
                3162,
                4332,
                3862,
                3829,
                2110,
                4818,
                4000,
                4471,
                3285,
                2206,
                2299
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                112583,
                0,
                0,
                0,
                73257,
                70462,
                69944,
                71701,
                70293,
                70342,
                71249,
                69643,
                71318,
                67364,
                65843,
                65711,
                57132,
                63134,
                67511,
                60143,
                62436,
                0,
                57760,
                63147,
                64302,
                0,
                52037,
                52676,
                51329,
                75332,
                49868,
                58031,
                56363,
                55552,
                52007,
                47996,
                52473,
                56236,
                53328,
                66436,
                52022,
                52936,
                46495,
                49463,
                48922,
                43981,
                47221,
                35672
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Priest - Shadow - Patchwerk"
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
            "Tarnished Sentinel Medallion",
            "Unstable Arcanocrystal",
            "Terror From Below",
            "Tome of Unraveling Sanity",
            "Spectral Thurible",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Oakheart's Gnarled Root",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Versatility)",
            "Infernal Writ",
            "Icon of Rot",
            "Stormsinger Fulmination Charge",
            "Padawsen's Unlucky Charm",
            "Naraxas' Spiked Tongue",
            "Stat Stick (Haste)",
            "Erratic Metronome",
            "Reality Breacher",
            "PVP Badge of Dominance",
            "Devilsaur Shock-Baton",
            "Eyasu's Mulligan",
            "Chrono Shard",
            "Charm of the Rising Tide",
            "Whispers in the Dark",
            "PVP Insignia of Dominance",
            "Fury of the Burning Sky",
            "Astral Alchemist Stone",
            "Bough of Corruption",
            "Twisting Wind",
            "Star Gate",
            "Darkmoon Deck: Hellfire",
            "Deteriorated Construct Core",
            "Horn of Valor",
            "Aran's Relaxing Ruby",
            "Caged Horror",
            "Obelisk of the Void",
            "Portable Manacracker",
            "Swarming Plaguehive",
            "Corrupted Starlight",
            "Moonlit Prism",
            "Infernal Alchemist Stone",
            "Eye of Skovald",
            "Wriggling Sinew",
            "Pharameres Forbidden Grimoire",
            "Elementium Bomb Squirrel Generator",
            "Mrrgria's Favor",
            "Toe Knee's Promise",
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
                    text: "mean at 94298",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 94298.58,
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