Highcharts.chart('shaman_enhancement_patchwerk', 
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
                182103,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                6752,
                10319,
                7435,
                10062,
                9148,
                11501,
                8685,
                8815,
                8632,
                9871,
                8433,
                10876,
                8014,
                10847,
                7884,
                7187,
                9322,
                12118,
                7475,
                8913,
                10169,
                11571,
                9975,
                7863,
                0,
                7070,
                10095,
                8833,
                9630,
                6484,
                8442,
                8055,
                0,
                3769,
                1744,
                0,
                4519,
                6054,
                6309,
                6373,
                3760,
                2644,
                527,
                2648,
                5953,
                2425,
                2813,
                2318,
                3193
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                3331,
                9978,
                9914,
                9816,
                9285,
                13192,
                7200,
                8117,
                7913,
                8069,
                7150,
                7990,
                8014,
                10998,
                9849,
                7411,
                8211,
                9570,
                10540,
                8145,
                6793,
                7996,
                9517,
                8162,
                7786,
                7774,
                7466,
                8105,
                6616,
                6358,
                6610,
                7824,
                0,
                4437,
                3921,
                0,
                4635,
                1436,
                3737,
                2324,
                3246,
                3866,
                2008,
                2573,
                7477,
                4364,
                2647,
                2406,
                2821
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                3932,
                7954,
                8005,
                6610,
                8162,
                7690,
                9164,
                16266,
                7718,
                8128,
                6491,
                8395,
                8602,
                9284,
                6761,
                9547,
                5376,
                8107,
                6885,
                5383,
                7318,
                8668,
                8583,
                5811,
                6834,
                4591,
                7724,
                7783,
                5841,
                6615,
                6154,
                6464,
                0,
                3526,
                8073,
                0,
                6194,
                3982,
                3588,
                5608,
                3256,
                4691,
                1510,
                1315,
                3877,
                2984,
                1831,
                2107,
                708
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                5686,
                8856,
                8250,
                7123,
                8439,
                10183,
                7470,
                5284,
                8656,
                5763,
                7035,
                6640,
                6271,
                7864,
                8315,
                5582,
                10015,
                9690,
                5815,
                8782,
                6473,
                6672,
                7048,
                6520,
                3273,
                7784,
                6048,
                7357,
                7934,
                3975,
                6566,
                8282,
                0,
                3627,
                4735,
                0,
                2815,
                2539,
                4964,
                5253,
                2989,
                2155,
                1175,
                3032,
                6415,
                2594,
                3441,
                3439,
                2825
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                4628,
                7122,
                6237,
                5766,
                6456,
                8878,
                5310,
                7752,
                3916,
                7420,
                4237,
                8255,
                6059,
                8363,
                5176,
                7324,
                4327,
                82673,
                6032,
                6430,
                7106,
                7220,
                7976,
                5485,
                6517,
                2227,
                7264,
                6107,
                8102,
                4881,
                4918,
                5472,
                6574,
                3120,
                2060,
                6796,
                5553,
                3547,
                4429,
                980,
                2585,
                1837,
                408,
                1181,
                3682,
                2139,
                2593,
                3139,
                7
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                4545,
                7551,
                101490,
                7659,
                7867,
                6508,
                4088,
                4548,
                7043,
                4206,
                3839,
                2934,
                86798,
                7163,
                6212,
                5693,
                6465,
                0,
                5919,
                4151,
                3585,
                71010,
                5430,
                4982,
                79810,
                5122,
                4671,
                4556,
                4770,
                70488,
                5412,
                5223,
                7691,
                1961,
                2136,
                3583,
                2291,
                4463,
                2124,
                57315,
                1667,
                2902,
                2558,
                1915,
                3641,
                1359,
                1686,
                0,
                4120
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                119129,
                95378,
                0,
                93855,
                90999,
                75910,
                90496,
                80879,
                81945,
                82340,
                88408,
                79444,
                0,
                69220,
                79061,
                79985,
                78920,
                0,
                78495,
                79159,
                76206,
                0,
                63738,
                70130,
                0,
                68667,
                57030,
                57260,
                56842,
                0,
                60370,
                54168,
                79565,
                71940,
                64295,
                74224,
                57440,
                59280,
                54719,
                0,
                57287,
                44556,
                53902,
                48663,
                28799,
                43852,
                42333,
                40009,
                36614
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
    },
    title: {
        text: "Shaman - Enhancement - Patchwerk"
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
            "Chaos Talisman",
            "Eye of Command",
            "Six-Feather Fan",
            "Stat Stick (Haste)",
            "Thrice-Accursed Compass",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Convergence of Fates",
            "Stat Stick (Mastery)",
            "Engine of Eradication",
            "Nightblooming Frond",
            "PVP Badge of Conquest",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "Specter of Betrayal",
            "Stat Stick (Crit)",
            "Nightmare Egg Shell",
            "Horn of Valor",
            "Vial of Ceaseless Toxins",
            "Tempered Egg of Serpentrix",
            "Gift of Radiance",
            "Astral Alchemist Stone",
            "PVP Insignia of Conquest",
            "Tirathon's Betrayal",
            "Arcanogolem Digit",
            "Bloodstained Handkerchief",
            "Infernal Cinders",
            "Splinters of Agronax",
            "Void Stalker's Contract",
            "Darkmoon Deck: Dominion",
            "Spontaneous Appendages",
            "Nature's Call",
            "Infernal Alchemist Stone",
            "Faulty Countermeasure",
            "Toe Knee's Promise",
            "The Devilsaur's Bite",
            "Umbral Moonglaives",
            "Spiked Counterweight",
            "Terrorbound Nexus",
            "Ley Spark",
            "Ravaged Seed Pod",
            "Draught of Souls",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Windscar Whetstone"
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
                    text: "mean at 105066",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 105066.0,
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