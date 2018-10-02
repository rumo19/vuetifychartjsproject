<template>

<v-container fluid grid-list-lg class="mx-0 pa-0">
    
    <v-layout class="pt-1 px-1" row wrap>
      <v-flex md4 sm12 xs12>
        <v-card light>
          <canvas id="planet-pie"></canvas>
        </v-card>
      </v-flex>
      <v-flex md4 sm12 xs12>
        <v-card light>
          <canvas id="planet-bar"></canvas>
        </v-card>
      </v-flex>
      <v-flex md4 sm12 xs12>
        <v-card light class="Chart">
          <canvas id="planet-chart"></canvas>
        </v-card>
      </v-flex>

    </v-layout>


    <v-layout class="pt-1 px-1" row wrap>
      <v-flex md6 sm12 xs12>
        <v-card light>
        There will be some description
        </v-card>
      </v-flex>
      <v-flex md6 sm12 xs12>
        <v-card light>
         There will display the information
        </v-card>
      </v-flex>
      

    </v-layout>
  </v-container>
</template>
<script>
import Chart from 'chart.js';
  //import Bar from "../components/chart/Bar";
  //import Doughnut from "../components/chart/Doughnut";
  import planetChartData from './chart-data.js';
  import planetBarData from './bar-data.js';
  import planetPieData from './pie-data.js';
  export default {


      data() {
  return {
    planetChartData: planetChartData,
    planetBarData: planetBarData,
    planetPieData: planetPieData,
    
  }
},
methods: {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  },

   
},
mounted() {
  this.createChart('planet-chart', this.planetChartData);
   this.createChart('planet-bar', this.planetBarData);
    this.createChart('planet-pie', this.planetPieData);
}
    
  }

  </script>
