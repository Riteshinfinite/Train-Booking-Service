import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-journer-details',
  templateUrl: './journer-details.component.html',
  styleUrls: ['./journer-details.component.css']
})
export class JournerDetailsComponent implements OnInit {
  ticketDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the query parameters and parse the ticket details
    this.route.queryParams.subscribe((params) => {
      const ticketDetailsString = params['ticketDetails'];
      this.ticketDetails = JSON.parse(ticketDetailsString);
    });
  }

  //ticket pdf making and printing.

  @ViewChild('ticketContainer', { static: false }) ticketContainer!: ElementRef<any>;

  // ...

  printTicket(): void {
    window.print();
  }

  downloadTicket(): void {
    const ticketContainer = this.ticketContainer.nativeElement;

    html2canvas(ticketContainer).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Set page size to A4
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 190; // Adjust the width as needed (in mm)
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let increasedPdfHeight = 300;
      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, 190); // Set margins (10mm) and position
      pdf.save('ticket_details.pdf');
    });
    
  }

}
