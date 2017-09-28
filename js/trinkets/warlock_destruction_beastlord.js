Highcharts.chart('warlock_destruction_beastlord', 
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
                235479,
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
                20610,
                4981,
                4905,
                8988,
                10837,
                13890,
                6829,
                12620,
                12032,
                9693,
                8029,
                7586,
                11293,
                11759,
                8030,
                4348,
                8953,
                8504,
                10808,
                11561,
                2685,
                9390,
                6967,
                13756,
                12408,
                9946,
                0,
                9213,
                6136,
                4539,
                0,
                8867,
                7241,
                6018,
                6000,
                8785,
                3659,
                7420,
                1750,
                4221,
                7663,
                0,
                9180,
                5659,
                7738,
                4578,
                1860,
                0,
                436
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                15678,
                6697,
                16768,
                13962,
                15900,
                14829,
                13844,
                13477,
                8598,
                11939,
                9081,
                6474,
                5480,
                12802,
                7439,
                12943,
                7652,
                6549,
                9056,
                15915,
                16386,
                4947,
                9780,
                6522,
                2974,
                9653,
                0,
                4554,
                6114,
                9895,
                12972,
                9829,
                9642,
                5050,
                5917,
                0,
                10321,
                7349,
                2734,
                7751,
                5058,
                0,
                4382,
                438,
                863,
                3426,
                3583,
                2774,
                3196
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                13731,
                8698,
                3527,
                10797,
                4299,
                7920,
                6123,
                6496,
                12321,
                6696,
                6476,
                11026,
                8151,
                4795,
                12365,
                4489,
                15334,
                7588,
                8215,
                5224,
                6494,
                8459,
                6321,
                3373,
                4969,
                7805,
                0,
                6227,
                15256,
                3019,
                1767,
                5851,
                5257,
                5869,
                7062,
                5094,
                3683,
                1889,
                7076,
                3678,
                3231,
                0,
                4862,
                5430,
                5730,
                1079,
                1290,
                3946,
                3248
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                12011,
                3848,
                9683,
                9601,
                8580,
                14920,
                8207,
                9943,
                8452,
                7656,
                11972,
                6365,
                3900,
                6551,
                1013,
                10983,
                5927,
                4689,
                5993,
                10095,
                5007,
                9245,
                3372,
                4857,
                10652,
                10643,
                0,
                6893,
                4466,
                3497,
                3539,
                8982,
                8736,
                4135,
                1729,
                5470,
                6969,
                6598,
                6924,
                1728,
                2441,
                0,
                10342,
                3892,
                6256,
                3543,
                3761,
                4,
                880
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                15025,
                6658,
                8402,
                9068,
                11775,
                6784,
                11865,
                14023,
                3190,
                6496,
                3669,
                3627,
                9408,
                6467,
                8199,
                3700,
                94968,
                8611,
                4828,
                7799,
                9592,
                6380,
                7934,
                5966,
                1470,
                5269,
                13422,
                3351,
                0,
                11489,
                7803,
                377,
                7792,
                5998,
                1974,
                1388,
                2907,
                1263,
                853,
                5753,
                4184,
                7537,
                1077,
                3287,
                4589,
                5050,
                2076,
                211,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                145730,
                6062,
                3048,
                7813,
                8357,
                9889,
                5764,
                8242,
                5873,
                7944,
                103288,
                11157,
                10073,
                6589,
                5569,
                9165,
                0,
                4265,
                91574,
                9358,
                2488,
                3600,
                5128,
                6346,
                82455,
                1626,
                4094,
                2519,
                8091,
                4673,
                82113,
                5593,
                7556,
                4792,
                4983,
                3412,
                4017,
                3556,
                5260,
                4360,
                2756,
                3961,
                2784,
                3424,
                0,
                1899,
                1439,
                4449,
                6462
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                144685,
                119599,
                105568,
                105098,
                90065,
                105584,
                81098,
                93504,
                92280,
                0,
                95318,
                90600,
                89371,
                95361,
                88694,
                0,
                92523,
                0,
                67430,
                83908,
                84117,
                85378,
                76275,
                0,
                66238,
                92873,
                76782,
                69985,
                71323,
                0,
                68543,
                60760,
                71242,
                71925,
                76510,
                64850,
                63586,
                67058,
                62284,
                63048,
                76400,
                54264,
                56843,
                55080,
                56644,
                49966,
                46774,
                38608
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-21 05:24 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/6313e19f3daad8377a54964b436c91279f13398c\" target=\"blank\">6313e19</a>"
    },
    title: {
        text: "Warlock - Destruction - Beastlord"
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
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Whispers in the Dark",
            "Aran's Relaxing Ruby",
            "Fury of the Burning Sky",
            "Star Gate",
            "Icon of Rot",
            "Deteriorated Construct Core",
            "Eyasu's Mulligan",
            "Erratic Metronome",
            "Charm of the Rising Tide",
            "Padawsen's Unlucky Charm",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Crit)",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Tome of Unraveling Sanity",
            "Chrono Shard",
            "Tarnished Sentinel Medallion",
            "Reality Breacher",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Versatility)",
            "Infernal Writ",
            "Moonlit Prism",
            "Terror From Below",
            "Twisting Wind",
            "Darkmoon Deck: Hellfire",
            "Eye of Skovald",
            "PVP Badge of Dominance",
            "Horn of Valor",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Bough of Corruption",
            "Caged Horror",
            "Corrupted Starlight",
            "Unstable Horrorslime",
            "Obelisk of the Void",
            "Elementium Bomb Squirrel Generator",
            "Toe Knee's Promise",
            "Devilsaur Shock-Baton",
            "Swarming Plaguehive",
            "Infernal Alchemist Stone",
            "Portable Manacracker",
            "Mrrgria's Favor",
            "Oakheart's Gnarled Root",
            "Wriggling Sinew",
            "Naraxas' Spiked Tongue",
            "Pharameres Forbidden Grimoire",
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
                    text: "mean at 121277",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 121277.92,
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