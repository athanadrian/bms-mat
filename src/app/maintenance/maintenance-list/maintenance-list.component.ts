import { MaintenanceService } from './../maintenance.service';
import { Component, OnInit } from '@angular/core';

import { Maintenace } from './../maintenace.model';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenanceList: Maintenace[] = [];

  constructor(private maintenanceService: MaintenanceService) {
  }

  ngOnInit() {
    this.maintenanceList = this.maintenanceService.getMaintenanceList();
  }

}
