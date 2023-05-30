import { Component, Input } from '@angular/core';


import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-studynotes02',
  templateUrl: './studynotes02.component.html',
  styleUrls: ['./studynotes02.component.css']
})

export class Studynotes02Component {
  public openPDF(): void {
   /* let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('bulletin_de_notes.pdf');
    });*/
  }
  public open(): void {
    /*let DATA: any = document.getElementById('sequence');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('bulletin_sequentiel.pdf');
    });*/
  } 
}
