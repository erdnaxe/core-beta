import{m as t,C as a}from"./index.a228bf65.js";import{g as e,e as i}from"./index.eccc961d.js";import"./echarts.b27105f3.js";window.Alpine=t;window.CTFd=a;t.data("ScoreboardDetail",()=>({data:null,async init(){this.data=await a.pages.scoreboard.getScoreboardDetail(10);let o=e(a.config.userMode,this.data);i(this.$refs.scoregraph,o)}}));t.start();