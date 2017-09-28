Highcharts.chart('warrior_fury_beastlord', 
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
                0,
                0,
                204061,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                17488,
                22550,
                19897,
                0,
                23788,
                12428,
                3820,
                17866,
                7276,
                14981,
                12365,
                7649,
                8470,
                10334,
                12560,
                7538,
                7853,
                6889,
                8014,
                7504,
                8488,
                15291,
                10656,
                5680,
                6318,
                6749,
                6776,
                5205,
                2052,
                6545,
                0,
                6288,
                8257,
                0,
                9713,
                7380,
                7696,
                4669,
                9085,
                5698,
                10002,
                0,
                7955,
                0,
                15110,
                6365
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                17189,
                11691,
                7392,
                0,
                10011,
                18864,
                6651,
                11571,
                4714,
                10883,
                10179,
                12349,
                5945,
                6471,
                4636,
                9899,
                10011,
                7359,
                7258,
                6554,
                13405,
                7405,
                3871,
                7319,
                6527,
                9204,
                7180,
                10444,
                9528,
                9085,
                8696,
                6883,
                4133,
                11427,
                4772,
                6693,
                7176,
                6977,
                4125,
                7251,
                4700,
                0,
                5861,
                0,
                10186,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                17680,
                18127,
                19794,
                0,
                15726,
                9622,
                7564,
                15230,
                7556,
                6244,
                13694,
                10118,
                11744,
                7696,
                6409,
                3957,
                7690,
                4720,
                4522,
                6420,
                3205,
                2118,
                12015,
                8525,
                6144,
                3324,
                6397,
                10469,
                1684,
                4861,
                5620,
                5799,
                8520,
                3243,
                6480,
                5496,
                8196,
                9333,
                6264,
                5195,
                9307,
                0,
                4784,
                0,
                4904,
                4458
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                11607,
                9570,
                11445,
                0,
                11217,
                10550,
                1271,
                16522,
                8449,
                6606,
                5182,
                3854,
                0,
                6368,
                10284,
                8246,
                9417,
                10596,
                10925,
                7776,
                7217,
                5415,
                2670,
                3867,
                7196,
                5457,
                7040,
                5306,
                1277,
                2840,
                8157,
                5860,
                3392,
                6425,
                10358,
                0,
                1757,
                558,
                1799,
                8926,
                3718,
                0,
                4120,
                0,
                13178,
                6706
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                11860,
                13785,
                8886,
                0,
                11424,
                9783,
                5939,
                7222,
                2620,
                10238,
                94753,
                8381,
                12329,
                7310,
                5032,
                6887,
                0,
                1880,
                0,
                5678,
                8195,
                4028,
                7955,
                6267,
                5799,
                7793,
                2592,
                5901,
                4559,
                8283,
                6000,
                5153,
                5689,
                4175,
                5941,
                8636,
                10360,
                4374,
                6993,
                0,
                3133,
                4858,
                4489,
                7633,
                10016,
                4683
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                10663,
                139975,
                11537,
                0,
                11627,
                11038,
                4031,
                9559,
                4559,
                9067,
                0,
                0,
                7040,
                8351,
                87886,
                10048,
                13025,
                4221,
                8923,
                5977,
                74246,
                8902,
                5742,
                8334,
                4138,
                4067,
                8759,
                4468,
                6911,
                3805,
                6237,
                3278,
                69913,
                72596,
                4269,
                6179,
                60070,
                4467,
                2333,
                7699,
                5481,
                4893,
                1982,
                1637,
                8227,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                145130,
                0,
                128910,
                0,
                109820,
                113272,
                155149,
                98374,
                112457,
                86183,
                0,
                86552,
                84808,
                80635,
                0,
                77274,
                77302,
                80586,
                77263,
                74881,
                0,
                70324,
                69858,
                72071,
                75687,
                74792,
                69593,
                64790,
                79310,
                69121,
                68702,
                68578,
                0,
                0,
                56054,
                61759,
                0,
                63781,
                62903,
                62624,
                54905,
                74732,
                50513,
                68636,
                16217,
                60019
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-21 05:24 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/6313e19f3daad8377a54964b436c91279f13398c\" target=\"blank\">6313e19</a>"
    },
    title: {
        text: "Warrior - Fury - Beastlord"
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
            "Tiny Oozeling in a Jar",
            "Umbral Moonglaives",
            "Toe Knee's Promise",
            "Kil'jaeden's Burning Wish",
            "Void Stalker's Contract",
            "Terrorbound Nexus",
            "Convergence of Fates",
            "Claw of the Crystalline Scorpid",
            "Unstable Arcanocrystal",
            "Mark of Dargrul",
            "Specter of Betrayal",
            "Chaos Talisman",
            "Eye of Command",
            "Ravaged Seed Pod",
            "Cradle of Anguish",
            "Fel-Oiled Infernal Machine",
            "Windscar Whetstone",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Entwined Elemental Foci",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Stat Stick (Crit)",
            "Nightmare Egg Shell",
            "Memento of Angerboda",
            "Ettin Fingernail",
            "Stat Stick (Versatility)",
            "Ursoc's Rending Paw",
            "Nature's Call",
            "The Devilsaur's Bite",
            "Gift of Radiance",
            "PVP Badge of Victory",
            "Infernal Cinders",
            "Astral Alchemist Stone",
            "Bloodstained Handkerchief",
            "PVP Insignia of Victory",
            "Vial of Ceaseless Toxins",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Horn of Valor",
            "Might of Krosus",
            "Darkmoon Deck: Dominion",
            "Giant Ornamental Pearl",
            "Infernal Alchemist Stone",
            "Draught of Souls",
            "Spiked Counterweight"
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
                    text: "mean at 123730",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 123730.56521739131,
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