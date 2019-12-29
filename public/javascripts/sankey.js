(function () {

    var data = {
        nodes: [{
                node: 0,
                name: "Authorization",
                DeductibeAmount: "$125,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 1,
                name: "Pre Service",
                DeductibeAmount: "$32000",
                CoInsuranceAmount: "$2500",
                CopayAmount: "$2000"
            },
            {
                node: 2,
                name: "Post Service",
                DeductibeAmount: "$25000",
                CoInsuranceAmount: "$3000",
                CopayAmount: "$750"
            },
            {
                node: 3,
                name: "MA Pre Service",
                DeductibeAmount: "$18000",
                CoInsuranceAmount: "$1800",
                CopayAmount: "$1200"
            },
            {
                node: 4,
                name: "FEP Post Service",
                DeductibeAmount: "$8000",
                CoInsuranceAmount: "$1400",
                CopayAmount: "$600"
            },
            {
                node: 5,
                name: "Concurrent",
                DeductibeAmount: "$35000",
                CoInsuranceAmount: "$8000",
                CopayAmount: "$11000"
            },
            {
                node: 6,
                name: "VPCR",
                DeductibeAmount: "$7500",
                CoInsuranceAmount: "$1300",
                CopayAmount: "$950"
            },
            {
                node: 7,
                name: "Inaptient",
                DeductibeAmount: "$40000",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 8,
                name: "Outpatient",
                DeductibeAmount: "$43000",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 9,
                name: "RX Claim",
                DeductibeAmount: "$23,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 10,
                name: "Professional Claims",
                DeductibeAmount: "$125,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 11,
                name: "ER Visit",
                DeductibeAmount: "$125,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 12,
                name: "Institutional",
                DeductibeAmount: "$125,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 13,
                name: "Prescription",
                DeductibeAmount: "$125,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },
            {
                node: 14,
                name: "Professional",
                DeductibeAmount: "$125,500",
                CoInsuranceAmount: "$18000",
                CopayAmount: "$16500"
            },

        ],
        links: [{
                source: 0,
                target: 1,
                value: 15,
                DeductibeAmount: 2500
            },
            {
                source: 0,
                target: 2,
                value: 28
            },
            {
                source: 0,
                target: 3,
                value: 4
            },
            {
                source: 0,
                target: 4,
                value: 3
            },
            {
                source: 0,
                target: 5,
                value: 42
            },
            {
                source: 0,
                target: 6,
                value: 2
            },
            {
                source: 1,
                target: 7,
                value: 4
            },
            {
                source: 2,
                target: 7,
                value: 5
            },
            {
                source: 3,
                target: 7,
                value: 1
            },
            {
                source: 4,
                target: 7,
                value: 1
            },
            {
                source: 5,
                target: 7,
                value: 25
            },
            {
                source: 1,
                target: 8,
                value: 3
            },
            {
                source: 2,
                target: 8,
                value: 7
            },
            {
                source: 5,
                target: 8,
                value: 10
            },
            {
                source: 6,
                target: 8,
                value: 1
            },
            {
                source: 5,
                target: 11,
                value: 3
            },
            {
                source: 1,
                target: 9,
                value: 4
            },
            {
                source: 2,
                target: 9,
                value: 8
            },
            {
                source: 6,
                target: 9,
                value: 1
            },
            {
                source: 1,
                target: 10,
                value: 2
            },
            {
                source: 2,
                target: 10,
                value: 4
            },
            {
                source: 3,
                target: 10,
                value: 3
            },
            {
                source: 4,
                target: 10,
                value: 2
            },
            {
                source: 5,
                target: 10,
                value: 2
            },
            {
                source: 1,
                target: 11,
                value: 2
            },
            {
                source: 2,
                target: 11,
                value: 4
            },
            {
                source: 5,
                target: 11,
                value: 2
            },
            {
                source: 7,
                target: 12,
                value: 32
            },
            {
                source: 9,
                target: 13,
                value: 13
            },
            {
                source: 8,
                target: 12,
                value: 21
            },
            {
                source: 10,
                target: 14,
                value: 13
            },
            {
                source: 11,
                target: 13,
                value: 4
            }
        ]
    };

    var margin = {
            top: 10,
            right: 20,
            bottom: 20,
            left: 40
        },
        width = 1100 - margin.left - margin.right,
        height = 650 - margin.top - margin.bottom;

    var svg = d3
        .select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var sankey = d3
        .sankey()
        .nodeWidth(1)
        .nodePadding(100)
        .size([width, height]);

    sankey
        .nodes(data.nodes)
        .links(data.links)
        .layout(6);

    // add in the links
    var link = svg
        .append("g")
        .selectAll(".link")
        .data(data.links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", sankey.link())
        .style("stroke-width", function (d) {
            return Math.max(1, d.dy);
        })
        .sort(function (a, b) {
            return b.dy - a.dy;
        });

    // add in the nodes
    var node = svg
        .append("g")
        .selectAll(".node")
        .data(data.nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
        .call(
            d3.drag()
            .subject(function (d) {
                return d;
            })
            .on("start", function () {
                this.parentNode.appendChild(this);
            })
            .on("drag", dragmove)
        );

    // add the circles for the nodes
    node
        .append("circle")
        .attr("r", sankey.nodeWidth()*20)
        .attr("cy", function (d) {
            return d.dy / 2;
        })
        .attr("cx", function (d) {
            return (d.name == "Authorization" ? d.dx : 1);
        })
        .style("fill", function (d) {
            return (d.color = color(d.name.replace(/ .*/, "")));
        })
        .style("stroke", function (d) {
            return d3.rgb(d.color).darker(2);
        })
        // Add hover text
        .append("title")
        .text(function (d) {
            return d.name + "\n" + "No.of Authorizations:  " + d.value + "\n" + "Decuctibe Amount:  " + d.DeductibeAmount + "\n" + "CoInsuranceAmount:  " + d.CoInsuranceAmount + "\n" + "CopayAmount: " + d.CopayAmount;
        });


    // add in the title for the nodes
    node
        .append("text")
        .attr("x", 0)
        .attr("y", function (d) {
            return d.dy / 2;
        })
        .attr("dy", "-1.5em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .text(function (d) {
            return d.name;
        })
        .filter(function (d) {
            return d.x < width / 2;
        })
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start");

    // the function for moving the nodes
    function dragmove(d) {
        d3.select(this).attr(
            "transform",
            "translate(" +
            d.x +
            "," +
            (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) +
            ")");

        sankey.relayout();
        link.attr("d", sankey.link());
    }
})();