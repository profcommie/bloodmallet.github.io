Highcharts.chart('hunter_survival_beastlord', 
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
                251239,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                10564,
                10648,
                5788,
                17536,
                11363,
                7114,
                10114,
                20687,
                15632,
                9368,
                9078,
                13149,
                4245,
                13436,
                8645,
                17773,
                10154,
                14321,
                10784,
                0,
                10934,
                10532,
                15155,
                11745,
                16808,
                6859,
                9768,
                11673,
                14856,
                8184,
                11560,
                0,
                0,
                12514,
                10161,
                3340,
                5270,
                0,
                4952,
                0,
                5710,
                10503,
                6915,
                2666,
                0,
                10880,
                12162,
                6091,
                7524
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                13025,
                13569,
                7670,
                17644,
                16481,
                15129,
                14749,
                9110,
                8306,
                18608,
                12925,
                11035,
                13718,
                7062,
                6086,
                13612,
                3862,
                13007,
                11635,
                12163,
                9609,
                6996,
                8826,
                5763,
                12892,
                8930,
                11036,
                7735,
                4250,
                6582,
                6714,
                0,
                0,
                8707,
                3995,
                7240,
                7726,
                6546,
                5147,
                11733,
                5948,
                3001,
                0,
                0,
                6102,
                2521,
                5671,
                0,
                3715
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                9512,
                6234,
                854,
                13687,
                2879,
                8290,
                4556,
                6873,
                7477,
                2859,
                7389,
                523,
                9052,
                8016,
                13803,
                6193,
                11689,
                7874,
                12956,
                11165,
                11979,
                12774,
                15245,
                17998,
                7957,
                11430,
                8742,
                7749,
                3823,
                13275,
                9686,
                0,
                0,
                6744,
                2023,
                9166,
                8035,
                109,
                0,
                5844,
                4073,
                267,
                3833,
                1922,
                7505,
                1829,
                5408,
                3879,
                1206
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7843,
                15163,
                5136,
                13203,
                10957,
                9440,
                9559,
                10646,
                13917,
                14152,
                10581,
                5000,
                4248,
                10553,
                11057,
                10174,
                10218,
                10632,
                2870,
                4396,
                3679,
                4815,
                10096,
                4682,
                3577,
                8506,
                11459,
                14664,
                10867,
                13116,
                11865,
                0,
                0,
                5498,
                11674,
                1794,
                3972,
                6604,
                8525,
                5523,
                3400,
                5897,
                0,
                1218,
                1285,
                3024,
                11222,
                4797,
                2931
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                5582,
                5200,
                11540,
                9576,
                8427,
                7010,
                10074,
                10417,
                4287,
                6000,
                1752,
                15145,
                9909,
                4522,
                8916,
                9884,
                7644,
                106828,
                10929,
                11966,
                13857,
                4228,
                3337,
                7884,
                14412,
                6430,
                5350,
                5048,
                9297,
                5478,
                5855,
                8661,
                12385,
                13528,
                3730,
                8802,
                3167,
                8783,
                4518,
                3365,
                4956,
                0,
                8074,
                0,
                4367,
                11624,
                96,
                2744,
                3666
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                16376,
                137474,
                5253,
                2035,
                13510,
                11510,
                6160,
                6122,
                4286,
                6797,
                10267,
                12876,
                4934,
                9259,
                4105,
                1829,
                12440,
                0,
                102423,
                105591,
                2968,
                8044,
                8240,
                8804,
                5723,
                7639,
                82671,
                6677,
                892,
                9455,
                9941,
                1480,
                9554,
                2752,
                6409,
                83462,
                82082,
                3265,
                0,
                3341,
                2230,
                1634,
                1102,
                8496,
                3492,
                0,
                3187,
                3352,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                128182,
                0,
                147749,
                106614,
                116217,
                120401,
                120725,
                102475,
                111012,
                104489,
                106052,
                100184,
                110984,
                103695,
                103102,
                94558,
                96844,
                0,
                0,
                0,
                92199,
                94610,
                77587,
                76968,
                70380,
                80190,
                0,
                74310,
                83511,
                70861,
                69386,
                110796,
                98872,
                68423,
                79287,
                0,
                0,
                78837,
                83293,
                69244,
                70889,
                69409,
                72031,
                73634,
                59170,
                53114,
                34962,
                47098,
                44072
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Hunter - Survival - Beastlord"
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
            "Bloodthirsty Instinct",
            "Cradle of Anguish",
            "Unstable Arcanocrystal",
            "Arcanogolem Digit",
            "Eye of Command",
            "Chaos Talisman",
            "Stat Stick (Haste)",
            "Nightmare Egg Shell",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Chrono Shard",
            "PVP Badge of Conquest",
            "Convergence of Fates",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Horn of Valor",
            "Thrice-Accursed Compass",
            "Specter of Betrayal",
            "Engine of Eradication",
            "Astral Alchemist Stone",
            "Stat Stick (Mastery)",
            "PVP Insignia of Conquest",
            "Six-Feather Fan",
            "Void Stalker's Contract",
            "Tirathon's Betrayal",
            "Gift of Radiance",
            "Vial of Ceaseless Toxins",
            "Tempered Egg of Serpentrix",
            "Terrorbound Nexus",
            "Nightblooming Frond",
            "Bloodstained Handkerchief",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "Splinters of Agronax",
            "Mark of Dargrul",
            "Umbral Moonglaives",
            "Infernal Cinders",
            "Nature's Call",
            "Toe Knee's Promise",
            "Tiny Oozeling in a Jar",
            "Giant Ornamental Pearl",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Ley Spark",
            "Faulty Countermeasure",
            "The Devilsaur's Bite",
            "Draught of Souls",
            "Spontaneous Appendages",
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
                    text: "mean at 135009",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 135009.8,
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