import PureChart from 'react-native-pure-chart';
import React,  { Component } from 'react';
import { View, ScrollView } from 'react-native';

export default class PureCharts extends Component{
 render(){
    let sampleData = [30, 200, 170, 250, 10, 5, 150, 19];

    let sampleData2 = [
      {x: '2018-01-01', y: 30},
      {x: '2018-01-02', y: 200},
      {x: '2018-01-03', y: 170},
      {x: '2018-01-04', y: 250},
      {x: '2018-01-05', y: 10}
  ];
let sampleData4 = [
   {
     seriesName: 'series1',
     data: [
       {x: '2018-02-01', y: 80},
       {x: '2018-02-02', y: 200},
       {x: '2018-02-03', y: 170},
       {x: '2018-02-04', y: 250},
       {x: '2018-02-05', y: 10}
     ],
     color: '#297AB1'
   },
   {
     seriesName: 'series2',
     data: [
       {x: '2018-02-01', y: 20},
       {x: '2018-02-02', y: 100},
       {x: '2018-02-03', y: 140},
       {x: '2018-02-04', y: 550},
       {x: '2018-02-05', y: 40}
     ],
     color: 'yellow'
   }
 ];
 let sampleData5 = [
   {
     value: 50,
     label: 'Marketing',
     color: 'red',
   }, {
     value: 40,
     label: 'Sales',
     color: 'blue'
   }, {
     value: 25,
     label: 'Support',
     color: 'green'
   }
 ];
 let sampleData3 = [
   {
     seriesName: 'series1',
     data: [
       {x: '2018-02-01', y: 80},
       {x: '2018-02-02', y: 200},
       {x: '2018-02-03', y: 170},
       {x: '2018-02-04', y: 250},
       {x: '2018-02-05', y: 10}
     ],
     color: '#297AB1'
   }
 ];

     return(
        <View style={{ marginTop: 100 }}>
         <ScrollView>
               <PureChart data={sampleData} type='line' />
               <PureChart data={sampleData2} type='line' />
               <PureChart data={sampleData4} type='line' />
               <PureChart data={sampleData5} type='pie' />
               <PureChart data={sampleData3} type='bar' />
            </ScrollView>
        </View>
    );
 }
}