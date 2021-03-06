Highcharts.chart('rogue_subtlety_beastlord',
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
                269395,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                23899,
                23474,
                18630,
                18603,
                21363,
                10603,
                14632,
                16152,
                13222,
                12301,
                17950,
                12408,
                18549,
                15316,
                5474,
                18627,
                14822,
                18703,
                19578,
                12989,
                20113,
                17451,
                13443,
                13212,
                0,
                10026,
                11335,
                15862,
                6982,
                13892,
                16767,
                10815,
                0,
                5696,
                0,
                7471,
                8303,
                2343,
                1357,
                10512,
                6290,
                0,
                3854,
                817,
                363,
                0,
                2860,
                709,
                7081
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                15566,
                16277,
                11922,
                12360,
                16837,
                17218,
                10149,
                6920,
                12706,
                16402,
                12078,
                15392,
                15975,
                14200,
                15801,
                11093,
                10347,
                14828,
                9620,
                2145,
                9883,
                15623,
                13891,
                9211,
                7165,
                13874,
                4964,
                7557,
                19183,
                14115,
                10780,
                11088,
                0,
                11967,
                0,
                11992,
                7718,
                9297,
                3539,
                0,
                4991,
                2976,
                2061,
                2263,
                0,
                6383,
                3625,
                2918,
                7058
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                14470,
                15655,
                11837,
                13236,
                15762,
                10556,
                6879,
                15644,
                20936,
                12133,
                9156,
                15085,
                10665,
                14419,
                17563,
                6703,
                6336,
                15378,
                11367,
                5991,
                14427,
                10694,
                16169,
                13522,
                11725,
                12384,
                10602,
                10995,
                14563,
                8529,
                6303,
                13100,
                0,
                9245,
                0,
                7095,
                3432,
                2995,
                7727,
                5459,
                7423,
                12440,
                4006,
                5293,
                4118,
                0,
                0,
                2464,
                10367
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                15167,
                15733,
                8203,
                10561,
                10569,
                14372,
                21578,
                11341,
                7107,
                10189,
                12787,
                3775,
                18830,
                8910,
                12378,
                14295,
                16504,
                2056,
                7159,
                13207,
                11258,
                9093,
                12818,
                9637,
                13435,
                12565,
                17808,
                10111,
                2392,
                9573,
                7984,
                7510,
                0,
                8293,
                0,
                0,
                6323,
                12083,
                9688,
                5494,
                0,
                376,
                5226,
                1910,
                163,
                5873,
                1532,
                0,
                527
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                22957,
                151027,
                17843,
                13636,
                8379,
                13674,
                11237,
                11903,
                4004,
                10233,
                13052,
                10908,
                595,
                14532,
                6010,
                11717,
                9411,
                13381,
                11872,
                0,
                14670,
                4834,
                0,
                13031,
                17535,
                4338,
                12554,
                249,
                18714,
                14757,
                11337,
                11477,
                14176,
                5221,
                8914,
                12328,
                5701,
                0,
                0,
                7251,
                0,
                1651,
                2067,
                7781,
                0,
                0,
                5651,
                0,
                6835
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                168587,
                0,
                146313,
                10128,
                16217,
                4843,
                4870,
                12743,
                8281,
                130742,
                5786,
                12969,
                14883,
                13016,
                6339,
                4389,
                6042,
                10917,
                14043,
                1307,
                0,
                12929,
                11684,
                109960,
                117657,
                9240,
                1403,
                10009,
                3605,
                7850,
                2580,
                10528,
                11831,
                2308,
                1985,
                4790,
                77200,
                0,
                631,
                0,
                2240,
                2726,
                4340,
                0,
                1236,
                3670,
                0,
                6702,
                8479
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                0,
                135116,
                119638,
                135993,
                125547,
                118660,
                126912,
                0,
                119687,
                118569,
                107924,
                106917,
                122384,
                117316,
                119319,
                107382,
                108674,
                147116,
                105380,
                101366,
                101887,
                0,
                0,
                101875,
                103091,
                104214,
                91132,
                87252,
                94437,
                84566,
                122265,
                93474,
                121227,
                74919,
                0,
                83864,
                81828,
                71051,
                67356,
                69804,
                53512,
                57391,
                56137,
                46458,
                46190,
                43435,
                7770
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA - Beastlord"
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
            "Umbral Moonglaives",
            "Specter of Betrayal",
            "Engine of Eradication",
            "Eye of Command",
            "Arcanogolem Digit",
            "Stat Stick (Mastery)",
            "Stat Stick (Versatility)",
            "Chaos Talisman",
            "Stat Stick (Crit)",
            "Cradle of Anguish",
            "Thrice-Accursed Compass",
            "Entwined Elemental Foci",
            "Void Stalker's Contract",
            "Nightblooming Frond",
            "Memento of Angerboda",
            "Convergence of Fates",
            "Gift of Radiance",
            "Stat Stick (Haste)",
            "Bloodthirsty Instinct",
            "Unstable Arcanocrystal",
            "Six-Feather Fan",
            "PVP Insignia of Conquest",
            "PVP Badge of Conquest",
            "Vial of Ceaseless Toxins",
            "Astral Alchemist Stone",
            "Nightmare Egg Shell",
            "Chrono Shard",
            "Terrorbound Nexus",
            "Bloodstained Handkerchief",
            "Tirathon's Betrayal",
            "Splinters of Agronax",
            "Tempered Egg of Serpentrix",
            "Darkmoon Deck: Dominion",
            "Horn of Valor",
            "Infernal Alchemist Stone",
            "Mark of Dargrul",
            "Infernal Cinders",
            "Nature's Call",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Windscar Whetstone",
            "Tiny Oozeling in a Jar",
            "Faulty Countermeasure",
            "Giant Ornamental Pearl",
            "Ley Spark",
            "Toe Knee's Promise",
            "Spiked Counterweight",
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
                    text: "mean at 154405",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 154405.42,
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
