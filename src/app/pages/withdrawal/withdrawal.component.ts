import { Component, OnInit } from "@angular/core";
import { ResponseMessage } from "src/app/models/responseMessage";
import { Withdrawal } from "src/app/models/withdrawal";
import { WithdrawalService } from "src/app/service/withdrawal.service";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { WithdrawalVM } from "src/app/models/withdrawalVM";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-withdrawal",
  templateUrl: "./withdrawal.component.html",
  styleUrls: ["./withdrawal.component.scss"],
})
export class WithdrawalComponent implements OnInit {
  constructor(private withdrawalService: WithdrawalService) {}
  withdrawals: Withdrawal[] = [];
  statusCode: number = 0;

  ngOnInit() {
    this.GetWithdrawal(0);
  }
  GetWithdrawal(statusCode: number) {
    this.statusCode = statusCode;

    this.withdrawalService
      .GetWithdrawals(statusCode)
      .subscribe((response: any) => {
        if (response.message == undefined) {
          this.withdrawals = response;
        } else {
          alert(response.message);
        }
      });
  }

  PayOut() {
    this.withdrawalService.PayOut().subscribe((response: ResponseMessage) => {
      if (response.data != null) {
        let res: WithdrawalVM = response.data;

        if (response.statusCode == 200) {
          if (res.payrolls.length > 0) {
            this.downloadExcelPDF(res.payrolls, "SPYDER PAYROLL "+res.date);
            alert("Payroll Printed");
          }else{
            alert(response.message);
          }
          this.withdrawals = res.withdrawals;
        } else {
          alert(response.message);
        }
      }else{alert(response.message);}

    });
  }
  PrintPayOutput() {
    this.withdrawalService.PrintPayOut(this.statusCode).subscribe((response: ResponseMessage) => {
      if (response.data != null) {
        let res: WithdrawalVM = response.data;

        if (response.statusCode == 200) {
          if (res.payrolls.length > 0) {
            this.downloadExcelPDF(res.payrolls, "Withdrawal _Code-"+this.statusCode+"_ "+res.date);
            alert("Payroll Printed");
          }else{
            alert(response.message);
          }

        } else {
          alert(response.message);
        }
      }else{alert(response.message);}

    });
  }

  // data = [
  //   { name: 'John', age: 30, email: 'john@example.com' },
  //   { name: 'Jane', age: 25, email: 'jane@example.com' },
  //   { name: 'Bob', age: 40, email: 'bob@example.com' },
  // ];

  downloadExcelPDF(data: any[], title) {
    // create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // convert workbook to buffer
    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // convert buffer to binary string
    const binaryString = String.fromCharCode.apply(null, buffer);

    const buff = new ArrayBuffer(4); // create an example buffer
    const uint8Array = new Uint8Array(buffer);
    // create PDF document
    //const doc = new jspdf.default();
    const doc = new jsPDF();
    // add table to PDF document
    const margin = { top: 30, right: 10, bottom: 10, left: 10 };
    const cellWidth = 30;
    const cellHeight = 8;
    const tableWidth = margin.left + margin.right + cellWidth * data.length;
    const tableHeight =
      margin.top + margin.bottom + cellHeight * (data.length + 1);
    autoTable(doc, {
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
      startY: margin.top,
      showHead: "everyPage",
      margin: margin,
      styles: {
        cellWidth: cellWidth,
        minCellHeight: cellHeight,
        fontSize: 10,
        halign: "center",
        valign: "middle",
      },
      headStyles: {
        fillColor: [52, 73, 94],
        textColor: 255,
        fontSize: 12,
      },
    });
    doc.text("SPYDER PAYROLL", 10, 22);

    // add PDF document to download link
    const pdfBuffer = doc.output("arraybuffer");
    const blob = new Blob([pdfBuffer], { type: "application/pdf" });
    // const fileName = "spyder payroll";
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.pdf`;

    link.click();
  }
}
