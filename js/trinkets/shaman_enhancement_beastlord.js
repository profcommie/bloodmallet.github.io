Highcharts.chart('shaman_enhancement_beastlord', 
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
                336439,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                5422,
                15393,
                22898,
                17008,
                27008,
                14996,
                19488,
                8632,
                15333,
                14974,
                12525,
                6427,
                22349,
                9931,
                7582,
                11889,
                13928,
                9325,
                10662,
                6970,
                21988,
                7752,
                15773,
                14582,
                14453,
                0,
                5040,
                8553,
                16136,
                0,
                16814,
                16810,
                14509,
                4585,
                5032,
                8608,
                0,
                10824,
                9773,
                3943,
                674,
                0,
                4942,
                6870,
                11363,
                7010,
                0,
                13590,
                12306
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                10836,
                15141,
                14044,
                3529,
                11038,
                18012,
                13626,
                21003,
                12145,
                13831,
                23699,
                17107,
                8533,
                11061,
                13898,
                12996,
                15368,
                19647,
                10517,
                17523,
                13483,
                11016,
                15123,
                13138,
                13353,
                4822,
                3812,
                11594,
                5563,
                0,
                8016,
                11959,
                8586,
                9290,
                13120,
                7690,
                0,
                8536,
                5594,
                11325,
                12163,
                14103,
                6000,
                6050,
                0,
                0,
                5410,
                0,
                9106
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                6090,
                5172,
                3510,
                19536,
                12125,
                26030,
                7543,
                9273,
                13718,
                6830,
                10195,
                7029,
                22706,
                8873,
                12169,
                8578,
                402,
                3631,
                11872,
                3675,
                14834,
                13585,
                1010,
                13295,
                6194,
                16777,
                26101,
                9769,
                7977,
                0,
                8467,
                10969,
                13669,
                14985,
                4463,
                15246,
                0,
                5973,
                99,
                3361,
                1605,
                8793,
                5466,
                2049,
                4794,
                1061,
                6489,
                1044,
                11740
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                1198,
                19933,
                16430,
                11441,
                8707,
                10830,
                15233,
                11323,
                7834,
                8329,
                9575,
                9693,
                8544,
                11784,
                14325,
                17011,
                17421,
                14871,
                10125,
                10291,
                2697,
                12676,
                14534,
                11112,
                9712,
                8023,
                0,
                3795,
                19851,
                0,
                17639,
                4081,
                11716,
                16718,
                8224,
                8527,
                0,
                4379,
                12963,
                5774,
                8282,
                6526,
                5812,
                7052,
                11124,
                1011,
                416,
                13755,
                1165
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                1368,
                3867,
                14177,
                9690,
                12050,
                6524,
                8997,
                12827,
                13211,
                15241,
                8193,
                7740,
                10477,
                6698,
                0,
                9819,
                2845,
                7834,
                10616,
                13288,
                17969,
                8089,
                16563,
                117695,
                12814,
                7634,
                9278,
                9231,
                3364,
                13839,
                5478,
                13885,
                6514,
                7715,
                10232,
                5425,
                10629,
                5907,
                141,
                3017,
                0,
                3088,
                9121,
                2745,
                421,
                1573,
                5785,
                1610,
                2417
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                8403,
                19276,
                151606,
                16373,
                11576,
                5050,
                12816,
                144098,
                4907,
                5662,
                8313,
                11678,
                14008,
                11614,
                16586,
                7913,
                14134,
                5927,
                12565,
                8484,
                7196,
                3508,
                8586,
                0,
                5148,
                125744,
                4793,
                10113,
                12317,
                7878,
                5561,
                93737,
                8766,
                5436,
                1199,
                5517,
                9662,
                8647,
                95931,
                12273,
                13548,
                86147,
                0,
                2844,
                5373,
                10211,
                6504,
                5230,
                17044
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                199243,
                143995,
                0,
                143491,
                135599,
                131629,
                129630,
                0,
                137536,
                137962,
                129253,
                139460,
                109943,
                136440,
                131598,
                127015,
                126286,
                128924,
                121474,
                126922,
                104190,
                121376,
                99821,
                0,
                106168,
                0,
                113100,
                103815,
                88567,
                131718,
                89556,
                0,
                85055,
                89245,
                105232,
                93627,
                115603,
                90755,
                0,
                81647,
                80840,
                0,
                80847,
                81111,
                69864,
                76496,
                70150,
                62352,
                16893
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Shaman - Enhancement - Beastlord"
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
            "Bloodthirsty Instinct",
            "Cradle of Anguish",
            "Eye of Command",
            "Chaos Talisman",
            "Thrice-Accursed Compass",
            "Stat Stick (Haste)",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Horn of Valor",
            "Spontaneous Appendages",
            "Arcanogolem Digit",
            "Convergence of Fates",
            "Memento of Angerboda",
            "Stat Stick (Crit)",
            "PVP Badge of Conquest",
            "Stat Stick (Versatility)",
            "Nightmare Egg Shell",
            "Chrono Shard",
            "Six-Feather Fan",
            "Gift of Radiance",
            "Nightblooming Frond",
            "Specter of Betrayal",
            "PVP Insignia of Conquest",
            "Astral Alchemist Stone",
            "Nature's Call",
            "Terrorbound Nexus",
            "Tempered Egg of Serpentrix",
            "Darkmoon Deck: Dominion",
            "Bloodstained Handkerchief",
            "Vial of Ceaseless Toxins",
            "Tirathon's Betrayal",
            "Void Stalker's Contract",
            "Tiny Oozeling in a Jar",
            "Splinters of Agronax",
            "Infernal Alchemist Stone",
            "Toe Knee's Promise",
            "Infernal Cinders",
            "Mark of Dargrul",
            "The Devilsaur's Bite",
            "Umbral Moonglaives",
            "Giant Ornamental Pearl",
            "Faulty Countermeasure",
            "Spiked Counterweight",
            "Ley Spark",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
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
                    text: "mean at 167905",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 167905.7,
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