import * as d3 from 'd3';

window.addEventListener('load', () => {
    init();
}, false);

const width: number = 600;
const height: number = 400;
const margin = {
    top : 50, right: 50, bottom: 100, left: 50
};

function init(): void {
    // データの読み込み
    d3.csv('data.csv')
        .then((data) => {
            draw(data);
        })
        .catch((error) => {
            console.log(error)
        });
}


function draw(data: d3.DSVRowArray): void {

    let chartWidth: number = width - margin.left - margin.right;
    let chartHeight: number = height - margin.top - margin.bottom;

    // SVGの設定
    const svg: any = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    console.log(svg);

    // x axis
    let xScale: any = d3.scaleTime()
        .domain(<Date[]>d3.extent(data, (d: d3.DSVRowString) => new Date(String(d.Date)) ))
        .range([0, chartWidth]);
    svg.append('g')
        .attr('transform', `translate(${margin.left}, ${Number(margin.top + chartHeight)})`)
        .call(d3.axisBottom(xScale).tickFormat(<any>d3.timeFormat('%Y/%m/%d')) )
        .selectAll('text')
        .attr('transform', 'translate(25, 35)rotate(60)');


    // y axis
    let yScale: any = d3.scaleLinear()
        .domain([ 0, Number(d3.max(data, (d: d3.DSVRowString) => +Number(d.ALL) )) ])
        .range([chartHeight, 0]);
    svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .call(d3.axisLeft(yScale));


    // 折線
    const line: any = d3.line()
        .x((d: any) => xScale(new Date(String(d.Date))))
        .y((d: any) => yScale(Number(d.ALL)));

    // 描画
    svg.append('path')
        .datum(data)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);
}