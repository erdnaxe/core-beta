import{m as a,C as t}from"./index.697f72c1.js";import{g as o,e as i}from"./index.64dccda5.js";import"./echarts.128204f2.js";window.Alpine=a;window.CTFd=t;a.data("ScoreboardDetail",()=>({data:{},show:!0,async init(){this.data=await t.pages.scoreboard.getScoreboardDetail(10);let e=o(t.config.userMode,this.data);i(this.$refs.scoregraph,e),this.show=Object.keys(this.data).length>0}}));a.data("ScoreboardList",()=>({standings:[],brackets:[],activeBracket:null,async init(){const s=await(await t.fetch(`/api/v1/brackets?type=${t.config.userMode}`,{method:"GET"})).json();this.brackets=s.data,this.standings=await t.pages.scoreboard.getScoreboard()}}));a.start();
