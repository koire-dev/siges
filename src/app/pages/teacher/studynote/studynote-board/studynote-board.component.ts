import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
interface Country {
  name: string;

  matricule: number;
  classe: string;
}

@Component({
  selector: 'app-studynote-board',
  templateUrl: './studynote-board.component.html',
  styleUrls: ['./studynote-board.component.css']
})
export class StudynoteBoardComponent implements OnInit {
  searchTerm = '';
  countries: Country[] = [];
  term = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/countries.json')
      .subscribe((data: Country[]) => {
        this.countries = data;
      });
  }
  public openPDF(): void {
    /*let DATA: any = document.getElementById('htmlData');
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
}

