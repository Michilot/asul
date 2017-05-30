import { Component, OnInit, ElementRef } from '@angular/core';
import { SrvReportService } from './../../_services/index';
import { ChartTypes, AllOptions, AllData } from './../cmp-login/defs';
import { nvD3 } from 'ng2-nvd3';

declare var jQuery: any;
declare var $: any;
/*declare let d3, nv: any;*/

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [nvD3]
})
export class DashboardComponent implements OnInit {
  mGrafico1: Array<any>;
  options;
  data;

  lineChart1Data: Array<any>;
  lineChart1Labels: Array<any>;
  lineChart1Options: any;
  lineChart1Colours: Array<any>;

  brandPrimary: string;
  brandSuccess: string;
  brandInfo: string;
  brandWarning: string;
  brandDanger: string;

  lineChart1Legend: boolean;
  lineChart1Type: string;



  constructor(private _el: ElementRef, private srvreportservice: SrvReportService, ) { }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  f_CargarDataGrafico1() {

    this.lineChart1Legend = true;
    this.lineChart1Type = 'line';



    this.lineChart1Data = [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Series A'
      }
    ];

    this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    this.lineChart1Colours = [
      {
        backgroundColor: this.brandPrimary,
        borderColor: 'rgba(255,255,255,.55)'
      }
    ];

    this.lineChart1Options = {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          }

        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: 40 - 5,
            max: 84 + 5,
          }
        }],
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
      legend: {
        display: false
      },
      tooltip: {
        display: false
      }   
    };

  }

  f_CargarNuevoGrafico() {
    this.mGrafico1 = null;
    this.mGrafico1 = this.srvreportservice.obtenerEstructura(null);
    /* console.log(this.mGrafico1[0].dat);
     console.log(this.mGrafico1[0].opt);
     this.options = this.mGrafico1[0].dat;
     this.data = this.mGrafico1[0].dat;*/
    this.options = AllOptions['multiBarChart'];
    this.data = AllData['multiBarChart'];
    /* this.options = {
       chart: {
         type: 'discreteBarChart',
         height: 450,
         margin: {
           top: 20,
           right: 20,
           bottom: 50,
           left: 55
         },
         x: function (d) { return d.label; },
         y: function (d) { return d.value; },
         showValues: true,
         valueFormat: function (d) {
           return d3.format(',.4f')(d);
         },
         duration: 500,
         xAxis: {
           axisLabel: 'X Axis'
         },
         yAxis: {
           axisLabel: 'Y Axis',
           axisLabelDistance: -10
         }
       }
     }
     */




    /* this.srvreportservice.obtenerEstructura(null)
         .subscribe(
         data => {
           if (data.result === false) {
             this.blockUI.stop();
             this.sMensajeError = 'Por favor verifique su información de acceso.';
             this.bShowerror = !data.result;
           } else {
             // this.blockUI.stop();
             localStorage.setItem('id_token', data.id_token);
             this.router.navigate(['/maindashboard']);
           }
   
         },
         error => {
           console.log(error);
           this.blockUI.stop();
           this.sMensajeError = error;
           this.bShowerror = true;
         });*/
  }


  mProgressBar() {
    $(document).ready(function () {
      $.mpb('show', { value: [0, 50], speed: 5, position: 'bottom' });

      $.mpb('update', {
        value: 100, speed: 5, complete: function () {
          $('.mpb').fadeOut(200, function () {
            $(this).remove();
          });
        }
      });
    });
  }




  ngOnInit(): void {

    this.brandPrimary = '#20a8d8';
    this.brandSuccess = '#4dbd74';
    this.brandInfo = '#63c2de';
    this.brandWarning = '#f8cb00';
    this.brandDanger = '#f86c6b';


    this.mProgressBar();
    this.f_CargarDataGrafico1();
    this.f_CargarNuevoGrafico();

  }
}
