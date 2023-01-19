"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(require("d3"));
window.addEventListener('load', () => {
    init();
}, false);
const width = 600;
const height = 400;
const margin = {
    top: 50, right: 50, bottom: 100, left: 50
};
function init() {
    // データの読み込み
    d3.csv('data.csv')
        .then((data) => {
        draw(data);
    })
        .catch((error) => {
        console.log(error);
    });
}
function draw(data) {
    let chartWidth = width - margin.left - margin.right;
    let chartHeight = height - margin.top - margin.bottom;
    // SVGの設定
    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    console.log(svg);
    // x axis
    let xScale = d3.scaleTime()
        .domain(d3.extent(data, (d) => new Date(String(d.Date))))
        .range([0, chartWidth]);
    svg.append('g')
        .attr('transform', `translate(${margin.left}, ${Number(margin.top + chartHeight)})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat('%Y/%m/%d')))
        .selectAll('text')
        .attr('transform', 'translate(25, 35)rotate(60)');
    // y axis
    let yScale = d3.scaleLinear()
        .domain([0, Number(d3.max(data, (d) => +Number(d.ALL)))])
        .range([chartHeight, 0]);
    svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .call(d3.axisLeft(yScale));
    // 折線
    const line = d3.line()
        .x((d) => xScale(new Date(String(d.Date))))
        .y((d) => yScale(Number(d.ALL)));
    // 描画
    svg.append('path')
        .datum(data)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);
}
