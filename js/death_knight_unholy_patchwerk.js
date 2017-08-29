Highcharts.chart('death_knight_unholy_patchwerk', 
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
                171382,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                11785,
                11424,
                10467,
                8689,
                7206,
                8281,
                9329,
                6833,
                8888,
                9782,
                8248,
                9507,
                8804,
                9416,
                8737,
                7308,
                9620,
                7957,
                7846,
                10921,
                8884,
                7138,
                8664,
                9609,
                8321,
                6874,
                6675,
                8274,
                0,
                4365,
                6346,
                0,
                1743,
                3581,
                5620,
                3976,
                4096,
                4255,
                4375,
                2817,
                4349,
                1830,
                3891,
                711,
                3171
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                12680,
                8573,
                8653,
                10011,
                4368,
                10439,
                9381,
                2684,
                7626,
                7885,
                12722,
                8502,
                8270,
                9255,
                6950,
                9334,
                7245,
                6893,
                6906,
                7978,
                6498,
                7284,
                6269,
                7656,
                8537,
                8147,
                5059,
                6638,
                0,
                5112,
                6718,
                0,
                6999,
                5813,
                2327,
                3196,
                3690,
                4394,
                3024,
                4567,
                2606,
                2150,
                1219,
                2390,
                549
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                9296,
                8227,
                9381,
                8397,
                7923,
                7679,
                6964,
                4481,
                7824,
                7051,
                7192,
                7357,
                7219,
                10549,
                6508,
                6169,
                7160,
                6497,
                7349,
                8461,
                7699,
                8121,
                7444,
                5811,
                7179,
                7474,
                6810,
                6942,
                0,
                4334,
                7251,
                0,
                1075,
                3010,
                3862,
                4642,
                3456,
                2150,
                2949,
                2293,
                3844,
                1235,
                3925,
                2195,
                2959
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                10042,
                5792,
                7055,
                6195,
                5360,
                6154,
                6565,
                4244,
                8469,
                6444,
                6593,
                5508,
                6149,
                7390,
                8009,
                7628,
                5221,
                7016,
                6745,
                8703,
                4445,
                5250,
                5055,
                6172,
                4394,
                6133,
                4984,
                6444,
                0,
                5745,
                3384,
                0,
                3585,
                4118,
                4477,
                2579,
                3133,
                4174,
                2635,
                3541,
                1458,
                2327,
                1365,
                1164,
                821
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                95245,
                5948,
                6559,
                7303,
                5577,
                7390,
                6819,
                4641,
                6818,
                7679,
                6885,
                7154,
                5255,
                7672,
                6316,
                5823,
                6316,
                6352,
                5529,
                6529,
                7152,
                5671,
                6450,
                6331,
                6922,
                6517,
                3596,
                5117,
                6014,
                2183,
                5939,
                7285,
                2978,
                3679,
                2356,
                4229,
                2890,
                3007,
                2294,
                2135,
                3781,
                2214,
                1084,
                2582,
                1438
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                7528,
                91011,
                6475,
                4954,
                5733,
                85370,
                1423,
                4968,
                4975,
                4336,
                6152,
                7371,
                75333,
                6671,
                5757,
                6610,
                5275,
                5471,
                6322,
                5210,
                5652,
                70441,
                5793,
                4881,
                3821,
                6300,
                6697,
                5544,
                57300,
                3229,
                4172,
                2381,
                51229,
                3281,
                1921,
                1986,
                2889,
                1537,
                2617,
                1938,
                2132,
                2181,
                2381,
                1658
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                91086,
                0,
                82837,
                94079,
                82136,
                0,
                100093,
                78728,
                78658,
                75820,
                77361,
                77295,
                0,
                75953,
                74246,
                70123,
                71962,
                69993,
                59269,
                67292,
                67842,
                0,
                53702,
                52764,
                53931,
                59458,
                52620,
                74134,
                0,
                45208,
                65454,
                55670,
                0,
                47465,
                47176,
                48196,
                45418,
                45546,
                41899,
                40557,
                38755,
                34089,
                36098,
                30094
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-28 14:15:43"
    },
    title: {
        text: "Death_Knight - Unholy - Patchwerk"
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
            "Fel-Oiled Infernal Machine",
            "Cradle of Anguish",
            "Chaos Talisman",
            "Convergence of Fates",
            "Eye of Command",
            "Engine of Eradication",
            "Unstable Arcanocrystal",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Ettin Fingernail",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Mastery)",
            "Nightmare Egg Shell",
            "Horn of Valor",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Draught of Souls",
            "PVP Badge of Victory",
            "Gift of Radiance",
            "Astral Alchemist Stone",
            "Claw of the Crystalline Scorpid",
            "Ursoc's Rending Paw",
            "Might of Krosus",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "Darkmoon Deck: Dominion",
            "Infernal Cinders",
            "Void Stalker's Contract",
            "Infernal Alchemist Stone",
            "Nature's Call",
            "Umbral Moonglaives",
            "The Devilsaur's Bite",
            "Terrorbound Nexus",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Spontaneous Appendages",
            "Toe Knee's Promise",
            "Faulty Countermeasure",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Windscar Whetstone",
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
                    text: "mean at 98125",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 98125.39130434782,
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